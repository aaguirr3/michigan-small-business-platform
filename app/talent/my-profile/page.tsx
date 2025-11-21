"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Header } from "@/components/header"
import { useAuth } from "@/contexts/auth-context"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface TalentProfile {
  id: string
  userEmail: string
  serviceType: string
  skills: string
  expertise: string
  isAvailable: boolean
  ratePerHour?: number
  isApproved: boolean
}

interface Course {
  id: string
  title: string
  description: string
  instructor: string
  instructorEmail: string
  duration: string
  price: string
  category: string
  level: string
  maxStudents: number
  enrolledStudents: string[]
  createdAt: string
}

export default function MyTalentProfile() {
  const router = useRouter()
  const { user, isAuthenticated } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState<TalentProfile>({
    id: "",
    userEmail: user?.email || "",
    serviceType: "",
    skills: "",
    expertise: "",
    isAvailable: true,
    ratePerHour: 0,
    isApproved: true,
  })
  const [myCourses, setMyCourses] = useState<Course[]>([])
  const [createCourseOpen, setCreateCourseOpen] = useState(false)
  const [courseFormData, setCourseFormData] = useState({
    title: "",
    description: "",
    duration: "",
    price: "",
    category: "",
    level: "Beginner",
    maxStudents: 20,
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentUser = localStorage.getItem("currentUser")
      if (!currentUser || !isAuthenticated) {
        router.push("/login")
        return
      }

      // Load talent profile
      const talentProfiles = JSON.parse(localStorage.getItem("talentProfiles") || "[]")
      const userProfile = talentProfiles.find((p: TalentProfile) => p.userEmail === user?.email)

      if (userProfile) {
        setFormData(userProfile)
      } else {
        // No profile found, redirect to create
        router.push("/talent/create-profile")
        return
      }

      // Load courses created by this user
      const allCourses = JSON.parse(localStorage.getItem("courses") || "[]")
      const userCourses = allCourses.filter((c: Course) => c.instructorEmail === user?.email)
      setMyCourses(userCourses)
    }
  }, [isAuthenticated, router, user])

  if (!isAuthenticated) {
    return null
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value ? parseFloat(value) : 0,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Save to localStorage
    const talentProfiles = JSON.parse(localStorage.getItem("talentProfiles") || "[]")
    const existingIndex = talentProfiles.findIndex((p: TalentProfile) => p.id === formData.id)

    if (existingIndex >= 0) {
      talentProfiles[existingIndex] = formData
    } else {
      talentProfiles.push(formData)
    }

    localStorage.setItem("talentProfiles", JSON.stringify(talentProfiles))
    setIsEditing(false)

    // Show success message (you could use a toast here)
    alert("Profile updated successfully!")
  }

  const handleCreateCourse = (e: React.FormEvent) => {
    e.preventDefault()

    if (!user?.email || !user?.name) return

    const newCourse: Course = {
      id: Date.now().toString(),
      title: courseFormData.title,
      description: courseFormData.description,
      instructor: user.name,
      instructorEmail: user.email,
      duration: courseFormData.duration,
      price: courseFormData.price,
      category: courseFormData.category,
      level: courseFormData.level,
      maxStudents: courseFormData.maxStudents,
      enrolledStudents: [],
      createdAt: new Date().toISOString(),
    }

    // Save to localStorage
    const allCourses = JSON.parse(localStorage.getItem("courses") || "[]")
    allCourses.push(newCourse)
    localStorage.setItem("courses", JSON.stringify(allCourses))

    // Update local state
    setMyCourses([...myCourses, newCourse])

    // Reset form and close dialog
    setCourseFormData({
      title: "",
      description: "",
      duration: "",
      price: "",
      category: "",
      level: "Beginner",
      maxStudents: 20,
    })
    setCreateCourseOpen(false)
    alert("Course created successfully!")
  }

  const handleDeleteCourse = (courseId: string) => {
    if (!confirm("Are you sure you want to delete this course?")) return

    // Remove from localStorage
    const allCourses = JSON.parse(localStorage.getItem("courses") || "[]")
    const updatedCourses = allCourses.filter((c: Course) => c.id !== courseId)
    localStorage.setItem("courses", JSON.stringify(updatedCourses))

    // Update local state
    setMyCourses(myCourses.filter((c) => c.id !== courseId))
    alert("Course deleted successfully!")
  }

  const serviceOptions = [
    "Accounting",
    "Legal Services",
    "Marketing",
    "Web Design",
    "Business Consulting",
    "Equipment Repair",
    "Financial Planning",
    "IT Services",
    "HR Services",
    "Construction",
    "Agricultural Services",
    "Other",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-3 tracking-tight">My Talent Profile</h1>
              <p className="text-xl text-foreground/60 max-w-2xl">
                Manage your professional profile and connect with Michigan business owners.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge 
                variant={formData.isApproved ? "default" : "secondary"}
                className={formData.isApproved ? "bg-green-500 hover:bg-green-600" : "bg-yellow-500 hover:bg-yellow-600"}
              >
                {formData.isApproved ? "✓ Approved" : "⏳ Pending Approval"}
              </Badge>
              {!isEditing && (
                <Button onClick={() => setIsEditing(true)} variant="outline">
                  Edit Profile
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-2xl">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Profile Information</CardTitle>
              <CardDescription>
                {isEditing 
                  ? "Update your profile information below" 
                  : "Your profile information as shown to potential clients"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Primary Service Type</label>
                    <Select 
                      value={formData.serviceType} 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, serviceType: value }))}
                    >
                      <SelectTrigger className="w-full bg-white border-border/50">
                        <SelectValue placeholder="Select a service type" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Skills</label>
                    <Input
                      type="text"
                      name="skills"
                      placeholder="e.g., Accounting, Tax Planning, Bookkeeping (comma separated)"
                      value={formData.skills}
                      onChange={handleChange}
                      required
                      className="bg-card border-border"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Professional Background & Expertise
                    </label>
                    <textarea
                      name="expertise"
                      placeholder="Tell potential clients about your experience, qualifications, and the value you provide"
                      value={formData.expertise}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Rate Per Hour (USD)
                    </label>
                    <Input
                      type="number"
                      name="ratePerHour"
                      placeholder="e.g., 75"
                      value={formData.ratePerHour || ""}
                      onChange={handleNumberChange}
                      min="0"
                      step="0.01"
                      className="bg-card border-border"
                    />
                    <p className="text-xs text-foreground/60 mt-1">
                      Your hourly rate will be visible to potential clients
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="isAvailable"
                      id="isAvailable"
                      checked={formData.isAvailable}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-border cursor-pointer"
                    />
                    <label htmlFor="isAvailable" className="text-sm font-medium text-foreground cursor-pointer">
                      I am currently available to take on new clients
                    </label>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                      Save Changes
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setIsEditing(false)}
                      className="bg-transparent"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-1">Service Type</label>
                    <p className="text-foreground">{formData.serviceType || "Not set"}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-1">Skills</label>
                    <p className="text-foreground">{formData.skills || "Not set"}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-1">Professional Background</label>
                    <p className="text-foreground leading-relaxed">{formData.expertise || "Not set"}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-1">Rate Per Hour</label>
                    <p className="text-foreground">
                      {formData.ratePerHour ? `$${formData.ratePerHour.toFixed(2)}/hour` : "Not set"}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-1">Availability</label>
                    <p className="text-foreground">
                      {formData.isAvailable ? "✓ Available for new clients" : "Not currently available"}
                    </p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-foreground/80">
                      <strong>Note:</strong> Your profile is {formData.isApproved ? "approved and visible" : "pending approval"} to other users. 
                      Once approved, your profile will appear in the talent directory.
                    </p>
                  </div>

                  <div className="pt-4">
                    <Link href="/talent">
                      <Button variant="outline" className="bg-transparent">
                        View Talent Directory
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* My Courses Section */}
          <Card className="border-border mt-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl text-foreground">My Courses</CardTitle>
                  <CardDescription>Courses you're offering to Michigan business owners</CardDescription>
                </div>
                <Button
                  onClick={() => setCreateCourseOpen(true)}
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  + Create Course
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {myCourses.length === 0 ? (
                <div className="text-center py-8 text-foreground/60">
                  <p className="mb-4">You haven't created any courses yet.</p>
                  <Button
                    onClick={() => setCreateCourseOpen(true)}
                    variant="outline"
                  >
                    Create Your First Course
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {myCourses.map((course) => (
                    <Card key={course.id} className="border-border/50">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-lg font-semibold text-foreground mb-1">
                              {course.title}
                            </CardTitle>
                            <CardDescription className="text-sm">
                              {course.description}
                            </CardDescription>
                          </div>
                          <Badge variant="outline" className="whitespace-nowrap">
                            {course.category}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-foreground/60 mb-1">Duration</p>
                            <p className="text-sm font-medium text-foreground">{course.duration}</p>
                          </div>
                          <div>
                            <p className="text-xs text-foreground/60 mb-1">Price</p>
                            <p className="text-sm font-medium text-foreground">{course.price}</p>
                          </div>
                          <div>
                            <p className="text-xs text-foreground/60 mb-1">Level</p>
                            <p className="text-sm font-medium text-foreground">{course.level}</p>
                          </div>
                          <div>
                            <p className="text-xs text-foreground/60 mb-1">Enrolled</p>
                            <p className="text-sm font-medium text-foreground">
                              {course.enrolledStudents.length} / {course.maxStudents}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteCourse(course.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            Delete Course
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Create Course Dialog */}
      <Dialog open={createCourseOpen} onOpenChange={setCreateCourseOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Create a New Course</DialogTitle>
            <DialogDescription>
              Share your expertise by creating a course for Michigan business owners
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleCreateCourse} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Course Title</label>
              <Input
                type="text"
                placeholder="e.g., Small Business Tax Planning 101"
                value={courseFormData.title}
                onChange={(e) => setCourseFormData({ ...courseFormData, title: e.target.value })}
                required
                className="bg-white border-border/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Description</label>
              <Textarea
                placeholder="Describe what students will learn in this course..."
                value={courseFormData.description}
                onChange={(e) => setCourseFormData({ ...courseFormData, description: e.target.value })}
                required
                rows={4}
                className="bg-white border-border/50"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Duration</label>
                <Input
                  type="text"
                  placeholder="e.g., 4 weeks, 6 hours"
                  value={courseFormData.duration}
                  onChange={(e) => setCourseFormData({ ...courseFormData, duration: e.target.value })}
                  required
                  className="bg-white border-border/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Price</label>
                <Input
                  type="text"
                  placeholder="e.g., $299, Free"
                  value={courseFormData.price}
                  onChange={(e) => setCourseFormData({ ...courseFormData, price: e.target.value })}
                  required
                  className="bg-white border-border/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                <Select
                  value={courseFormData.category}
                  onValueChange={(value) => setCourseFormData({ ...courseFormData, category: value })}
                >
                  <SelectTrigger className="w-full bg-white border-border/50">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Accounting">Accounting</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Legal">Legal</SelectItem>
                    <SelectItem value="Business Strategy">Business Strategy</SelectItem>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Operations">Operations</SelectItem>
                    <SelectItem value="Finance">Finance</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Level</label>
                <Select
                  value={courseFormData.level}
                  onValueChange={(value) => setCourseFormData({ ...courseFormData, level: value })}
                >
                  <SelectTrigger className="w-full bg-white border-border/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Maximum Students</label>
              <Input
                type="number"
                min="1"
                max="100"
                value={courseFormData.maxStudents}
                onChange={(e) => setCourseFormData({ ...courseFormData, maxStudents: parseInt(e.target.value) || 20 })}
                required
                className="bg-white border-border/50"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setCreateCourseOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-accent hover:bg-accent/90 text-white"
              >
                Create Course
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

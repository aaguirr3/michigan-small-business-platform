"use client"

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
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"
import { Header } from "@/components/header"
import { useAuth } from "@/contexts/auth-context"

interface TalentProfile {
  id: number
  name: string
  serviceType: string
  skills: string[]
  expertise: string
  location: string
  isAvailable: boolean
  isConnected?: boolean
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

interface Course {
  id: number
  title: string
  instructor: string
  instructorId: number
  description: string
  duration: string
  price: string
  category: string
  level: string
  enrolled: number
  maxStudents: number
  startDate: string
  location: string
  format: "Online" | "In-Person" | "Hybrid"
}

// Sample talent data - in production this would come from API
const talentData: TalentProfile[] = [
  {
    id: 1,
    name: "Sarah Chen",
    serviceType: "Accounting",
    skills: ["Tax Planning", "Bookkeeping", "Financial Analysis"],
    expertise: "CPA with 15 years experience in agricultural accounting and tax strategy for rural businesses",
    location: "Shiawassee County",
    isAvailable: true,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    serviceType: "Web Design",
    skills: ["Web Design", "Graphic Design", "Social Media"],
    expertise: "Freelance designer helping small businesses build online presence",
    location: "Gratiot County",
    isAvailable: true,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    serviceType: "Business Consulting",
    skills: ["Strategic Planning", "Workforce Development", "Operations"],
    expertise: "Former manufacturing manager now consulting for business growth and efficiency",
    location: "Montcalm County",
    isAvailable: true,
  },
  {
    id: 4,
    name: "Tom Peterson",
    serviceType: "Equipment Repair",
    skills: ["Farm Equipment", "Maintenance", "Troubleshooting"],
    expertise: "Licensed equipment technician serving rural area farms",
    location: "Ionia County",
    isAvailable: true,
  },
  {
    id: 5,
    name: "Jessica Williams",
    serviceType: "Marketing",
    skills: ["Digital Marketing", "Content Creation", "Brand Strategy"],
    expertise: "Marketing specialist focused on rural and agricultural businesses",
    location: "Clinton County",
    isAvailable: true,
  },
  {
    id: 6,
    name: "David Kumar",
    serviceType: "Legal Services",
    skills: ["Business Law", "Contracts", "Compliance"],
    expertise: "Attorney specializing in agricultural law and small business legal structures",
    location: "Eaton County",
    isAvailable: true,
  },
  {
    id: 7,
    name: "Patricia Brown",
    serviceType: "Financial Planning",
    skills: ["Financing", "Loan Structuring", "Financial Planning"],
    expertise: "Commercial loan officer with expertise in farm and rural business financing",
    location: "Barry County",
    isAvailable: true,
  },
  {
    id: 8,
    name: "Alex Thompson",
    serviceType: "IT Services",
    skills: ["Network Setup", "Cybersecurity", "IT Support"],
    expertise: "Technology consultant helping rural businesses upgrade infrastructure",
    location: "Calhoun County",
    isAvailable: true,
  },
]

export default function TalentPage() {
  const router = useRouter()
  const { user, isAuthenticated } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined)
  const [selectedCounty, setSelectedCounty] = useState<string | undefined>(undefined)
  const [connectedProfiles, setConnectedProfiles] = useState<number[]>([])
  const [hasTalentProfile, setHasTalentProfile] = useState(false)
  const [selectedTalent, setSelectedTalent] = useState<TalentProfile | null>(null)
  const [messageDialogOpen, setMessageDialogOpen] = useState(false)
  const [messageText, setMessageText] = useState("")
  const [messages, setMessages] = useState<Record<number, Array<{ from: string; text: string; timestamp: string }>>>({})
  const [courses, setCourses] = useState<Course[]>([])
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const [courseDialogOpen, setCourseDialogOpen] = useState(false)
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>([])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentUser = localStorage.getItem("currentUser")
      if (!currentUser || !isAuthenticated) {
        router.push("/login")
        return
      }

      // Check if user has a talent profile
      const talentProfiles = JSON.parse(localStorage.getItem("talentProfiles") || "[]")
      const userProfile = talentProfiles.find((p: any) => p.userEmail === user?.email)
      setHasTalentProfile(!!userProfile)

      // Load courses from localStorage
      const storedCourses = localStorage.getItem("courses")
      if (storedCourses) {
        setCourses(JSON.parse(storedCourses))
      }

      // Load user's enrolled courses
      const userData = JSON.parse(currentUser)
      const enrolledKey = `enrolledCourses_${userData.email}`
      const enrolled = localStorage.getItem(enrolledKey)
      if (enrolled) {
        setEnrolledCourses(JSON.parse(enrolled))
      }

      // Load existing connections
      const connectionsKey = `talentConnections_${userData.email}`
      const storedConnections = localStorage.getItem(connectionsKey)
      if (storedConnections) {
        setConnectedProfiles(JSON.parse(storedConnections))
      }

      // Load existing messages
      const storedMessages = localStorage.getItem("talentMessages")
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages))
      }
    }
  }, [isAuthenticated, router, user])

  if (!isAuthenticated) {
    return null
  }

  const filteredTalent = talentData.filter((talent) => {
    const matchesSearch =
      talent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talent.expertise.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talent.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesService = !selectedService || selectedService === "all" || talent.serviceType === selectedService
    const matchesCounty =
      !selectedCounty ||
      selectedCounty === "all" ||
      talent.location.toLowerCase().includes(selectedCounty.toLowerCase())

    return matchesSearch && matchesService && matchesCounty
  })

  const toggleConnection = (talentId: number) => {
    setConnectedProfiles((prev) => {
      const updated = prev.includes(talentId) ? prev.filter((id) => id !== talentId) : [...prev, talentId]

      // Save to localStorage
      if (user?.email) {
        const connectionsKey = `talentConnections_${user.email}`
        localStorage.setItem(connectionsKey, JSON.stringify(updated))
      }

      return updated
    })
  }

  const handleOpenMessage = (talent: TalentProfile) => {
    setSelectedTalent(talent)
    setMessageDialogOpen(true)
    setMessageText("")
  }

  const handleSendMessage = () => {
    if (!selectedTalent || !messageText.trim() || !user) return

    const newMessage = {
      from: user.name || user.email || "You",
      text: messageText.trim(),
      timestamp: new Date().toISOString(),
    }

    const updatedMessages = {
      ...messages,
      [selectedTalent.id]: [...(messages[selectedTalent.id] || []), newMessage],
    }

    setMessages(updatedMessages)
    localStorage.setItem("talentMessages", JSON.stringify(updatedMessages))

    // Auto-connect when sending a message
    if (!connectedProfiles.includes(selectedTalent.id)) {
      const updatedConnections = [...connectedProfiles, selectedTalent.id]
      setConnectedProfiles(updatedConnections)

      // Save to localStorage
      if (user?.email) {
        const connectionsKey = `talentConnections_${user.email}`
        localStorage.setItem(connectionsKey, JSON.stringify(updatedConnections))
      }
    }

    setMessageText("")
  }

  const handleEnrollCourse = (course: Course) => {
    if (!user?.email) return

    const enrolledKey = `enrolledCourses_${user.email}`
    const updatedEnrolled = [...enrolledCourses, course.id]
    setEnrolledCourses(updatedEnrolled)
    localStorage.setItem(enrolledKey, JSON.stringify(updatedEnrolled))

    // Update course enrolled students
    const updatedCourses = courses.map((c) => {
      if (c.id === course.id) {
        return {
          ...c,
          enrolledStudents: [...c.enrolledStudents, user.email],
        }
      }
      return c
    })
    setCourses(updatedCourses)
    localStorage.setItem("courses", JSON.stringify(updatedCourses))
    setCourseDialogOpen(false)
  }

  const serviceTypes = Array.from(new Set(talentData.map((t) => t.serviceType)))

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-foreground mb-3 tracking-tight">Find Local Experts</h1>
          <p className="text-xl text-foreground/60 max-w-2xl">
            Connect with accountants, designers, consultants, and service providers in your Michigan county.
          </p>
        </div>

        {/* Become a Provider Section - Full Width - Only show if user doesn't have a profile */}
        {!hasTalentProfile && (
          <Card className="mb-8 border-secondary/20 bg-secondary/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-foreground">Are You a Professional or Service Provider?</CardTitle>
              <CardDescription className="text-sm">
                Join our network and connect with rural Michigan business owners who need your skills
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/talent/create-profile">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Create a Talent Profile
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Search Talent</label>
            <Input
              type="text"
              placeholder="Search by name, skill, or expertise"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-card border-border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Service Type</label>
            <Select value={selectedService} onValueChange={(value) => setSelectedService(value === "all" ? undefined : value)}>
              <SelectTrigger className="w-full bg-white border-border/50">
                <SelectValue placeholder="All Services" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Services</SelectItem>
                {serviceTypes.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">County</label>
            <Select value={selectedCounty} onValueChange={(value) => setSelectedCounty(value === "all" ? undefined : value)}>
              <SelectTrigger className="w-full bg-white border-border/50">
                <SelectValue placeholder="All Counties" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Counties</SelectItem>
                <SelectItem value="Ionia">Ionia County</SelectItem>
                <SelectItem value="Gratiot">Gratiot County</SelectItem>
                <SelectItem value="Montcalm">Montcalm County</SelectItem>
                <SelectItem value="Shiawassee">Shiawassee County</SelectItem>
                <SelectItem value="Clinton">Clinton County</SelectItem>
                <SelectItem value="Eaton">Eaton County</SelectItem>
                <SelectItem value="Barry">Barry County</SelectItem>
                <SelectItem value="Calhoun">Calhoun County</SelectItem>
                <SelectItem value="Alpena">Alpena County</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Summary */}
        {filteredTalent.length > 0 && (
          <div className="mb-4 text-sm text-foreground/70">
            Found {filteredTalent.length} professional{filteredTalent.length !== 1 ? "s" : ""}
            {selectedCounty && selectedCounty !== "all" && ` in ${selectedCounty}`}
            {selectedService && selectedService !== "all" && ` offering ${selectedService}`}
          </div>
        )}

        {/* Talent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {filteredTalent.length === 0 ? (
            <Card className="border-border md:col-span-2">
              <CardContent className="py-12 text-center">
                <p className="text-foreground/70">
                  No professionals found matching your criteria. Try adjusting your filters.
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredTalent.map((talent) => (
              <Card key={talent.id} className="border-border hover:shadow-md transition-shadow flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-foreground text-xl">{talent.name}</CardTitle>
                      <CardDescription className="text-sm mt-1">{talent.serviceType}</CardDescription>
                    </div>
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-lg">👤</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-4 flex-1">
                    <p className="text-sm text-foreground leading-relaxed mb-4">{talent.expertise}</p>
                    <div className="mb-4">
                      <p className="text-xs font-medium text-foreground/60 mb-2">Skills</p>
                      <div className="flex flex-wrap gap-2">
                        {talent.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-primary/20 text-primary rounded text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="text-xs text-foreground/60 mb-3">📍 {talent.location}</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleConnection(talent.id)}
                        className={`flex-1 px-3 py-2 rounded-lg font-medium transition-colors text-sm ${
                          connectedProfiles.includes(talent.id)
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground hover:bg-muted/80"
                        }`}
                      >
                        {connectedProfiles.includes(talent.id) ? "✓ Connected" : "Connect"}
                      </button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 bg-transparent"
                        onClick={() => handleOpenMessage(talent)}
                      >
                        Message
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Courses Section */}
        {courses.length > 0 && (
          <div className="mt-12">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-foreground mb-2">Professional Courses</h2>
              <p className="text-lg text-foreground/60">
                Learn from local experts with courses designed for Michigan businesses
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => {
                const isEnrolled = enrolledCourses.includes(course.id)
                const isFull = course.enrolledStudents.length >= course.maxStudents

                return (
                  <Card key={course.id} className="border border-border/50 bg-white hover:border-accent/30 transition-all card-shadow hover:card-shadow-hover">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <CardTitle className="text-xl font-semibold text-foreground">{course.title}</CardTitle>
                        <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium whitespace-nowrap">
                          {course.category}
                        </span>
                      </div>
                      <CardDescription className="text-sm text-foreground/60 line-clamp-2">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-foreground/70">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span className="font-medium">{course.instructor}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-foreground/70">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-foreground/70">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                          <span>{course.enrolledStudents.length} / {course.maxStudents} enrolled</span>
                        </div>
                        <div className="pt-2 border-t border-border">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-2xl font-bold text-foreground">{course.price}</span>
                            <span className="px-2 py-1 bg-muted text-foreground/70 rounded text-xs font-medium">
                              {course.level}
                            </span>
                          </div>
                          {isEnrolled ? (
                            <Button className="w-full bg-green-600 hover:bg-green-700 text-white" disabled>
                              ✓ Enrolled
                            </Button>
                          ) : isFull ? (
                            <Button className="w-full" variant="outline" disabled>
                              Course Full
                            </Button>
                          ) : (
                            <Button
                              className="w-full bg-accent hover:bg-accent/90 text-white"
                              onClick={() => {
                                setSelectedCourse(course)
                                setCourseDialogOpen(true)
                              }}
                            >
                              Enroll Now
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        {/* Connections Summary */}
        {connectedProfiles.length > 0 && (
          <Card className="border-primary/20 bg-primary/5 mt-8">
            <CardHeader>
              <CardTitle className="text-foreground">
                {connectedProfiles.length} Professional{connectedProfiles.length !== 1 ? "s" : ""} Connected
              </CardTitle>
              <CardDescription>You can view and manage your connections in your dashboard</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">View My Connections</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Message Dialog */}
      <Dialog open={messageDialogOpen} onOpenChange={setMessageDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Message {selectedTalent?.name}</DialogTitle>
            <DialogDescription>
              Send a message to {selectedTalent?.name} about their {selectedTalent?.serviceType} services
            </DialogDescription>
          </DialogHeader>
          
          {/* Message History */}
          <div className="flex-1 overflow-y-auto border border-border rounded-lg p-4 mb-4 bg-muted/30 min-h-[200px] max-h-[300px]">
            {selectedTalent && messages[selectedTalent.id] && messages[selectedTalent.id].length > 0 ? (
              <div className="space-y-3">
                {messages[selectedTalent.id].map((msg, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-foreground/70">{msg.from}</span>
                      <span className="text-xs text-foreground/50">
                        {new Date(msg.timestamp).toLocaleString()}
                      </span>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-border">
                      <p className="text-sm text-foreground">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-foreground/50">
                <p className="text-sm">No messages yet. Start the conversation!</p>
              </div>
            )}
          </div>

          {/* Message Input */}
          <div className="space-y-2">
            <Textarea
              placeholder="Type your message here..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              rows={3}
              className="resize-none"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage()
                }
              }}
            />
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setMessageDialogOpen(false)
                  setMessageText("")
                }}
              >
                Close
              </Button>
              <Button
                onClick={handleSendMessage}
                disabled={!messageText.trim()}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Send Message
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Course Enrollment Dialog */}
      <Dialog open={courseDialogOpen} onOpenChange={setCourseDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Enroll in {selectedCourse?.title}</DialogTitle>
            <DialogDescription>
              Confirm your enrollment in this course
            </DialogDescription>
          </DialogHeader>

          {selectedCourse && (
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-4 bg-muted/30">
                <h3 className="font-semibold text-foreground mb-2">Course Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Instructor:</span>
                    <span className="font-medium text-foreground">{selectedCourse.instructor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Duration:</span>
                    <span className="font-medium text-foreground">{selectedCourse.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Level:</span>
                    <span className="font-medium text-foreground">{selectedCourse.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Category:</span>
                    <span className="font-medium text-foreground">{selectedCourse.category}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border">
                    <span className="text-foreground/70">Price:</span>
                    <span className="font-bold text-lg text-foreground">{selectedCourse.price}</span>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                <p className="text-sm text-foreground/80">
                  <strong>Note:</strong> After enrolling, you'll receive course access details via email.
                  The instructor will contact you with the course schedule and materials.
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setCourseDialogOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => handleEnrollCourse(selectedCourse)}
                  className="flex-1 bg-accent hover:bg-accent/90 text-white"
                >
                  Confirm Enrollment
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

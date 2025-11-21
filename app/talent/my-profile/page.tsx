"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
      }
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
        </div>
      </div>
    </div>
  )
}

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
import Link from "next/link"
import { Header } from "@/components/header"
import { useAuth } from "@/contexts/auth-context"

export default function CreateTalentProfile() {
  const router = useRouter()
  const { user, isAuthenticated } = useAuth()
  const [formData, setFormData] = useState({
    serviceType: "",
    skills: "",
    expertise: "",
    isAvailable: true,
    ratePerHour: "",
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentUser = localStorage.getItem("currentUser")
      if (!currentUser || !isAuthenticated) {
        router.push("/login")
      }
    }
  }, [isAuthenticated, router])

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
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Save to localStorage
    const talentProfiles = JSON.parse(localStorage.getItem("talentProfiles") || "[]")
    const newProfile = {
      id: Date.now().toString(),
      userEmail: user?.email || "",
      serviceType: formData.serviceType,
      skills: formData.skills,
      expertise: formData.expertise,
      isAvailable: formData.isAvailable,
      ratePerHour: formData.ratePerHour ? parseFloat(formData.ratePerHour) : undefined,
      isApproved: true, // Hardcoded to approved for now
    }
    
    talentProfiles.push(newProfile)
    localStorage.setItem("talentProfiles", JSON.stringify(talentProfiles))
    
    // Redirect to view profile
    router.push("/talent/my-profile")
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
          <h1 className="text-5xl font-bold text-foreground mb-3 tracking-tight">Create Your Talent Profile</h1>
          <p className="text-xl text-foreground/60 max-w-2xl">
            Share your skills and services with Michigan business owners. Connect with entrepreneurs who need your expertise.
          </p>
        </div>

        <div className="max-w-2xl">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Profile Information</CardTitle>
              <CardDescription>Tell us about your professional services and expertise</CardDescription>
            </CardHeader>
            <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Primary Service Type</label>
                <Select value={formData.serviceType} onValueChange={(value) => setFormData(prev => ({ ...prev, serviceType: value }))}>
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
                  value={formData.ratePerHour}
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

              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-foreground/80">
                  <strong>Note:</strong> Your full name and county location will be displayed on your profile. Contact
                  information will be shared only with professionals you choose to connect with.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Create Profile
                </Button>
                <Link href="/talent">
                  <Button variant="outline" className="bg-transparent">
                    Cancel
                  </Button>
                </Link>
              </div>
            </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

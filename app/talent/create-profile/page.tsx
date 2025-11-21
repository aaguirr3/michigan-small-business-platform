"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function CreateTalentProfile() {
  const [formData, setFormData] = useState({
    serviceType: "",
    skills: "",
    expertise: "",
    isAvailable: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Creating talent profile:", formData)
    // TODO: Submit to backend
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
      {/* Header */}
      <nav className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
              MI
            </div>
            <h1 className="text-lg font-bold text-foreground">Michigan Rural Network</h1>
          </Link>
          <div className="flex gap-4">
            <Link href="/talent">
              <Button variant="ghost">Back to Talent</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-3xl text-foreground">Create Your Talent Profile</CardTitle>
            <CardDescription>Share your skills and services with rural Michigan business owners</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Primary Service Type</label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Select a service type</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
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
                <Link href="/talent" className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent">
                    Cancel
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

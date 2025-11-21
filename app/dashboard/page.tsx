"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/contexts/auth-context"
import grantsData from "@/data/grants.json"

interface Grant {
  id: number
  title: string
  description: string
  fundingMin: number
  fundingMax: number
  deadline: string
  industries: string[]
  businessSize: string[]
  source: string
}

interface TalentProfile {
  id: number
  name: string
  serviceType: string
  skills: string[]
  expertise: string
  location: string
  isAvailable: boolean
}

// Sample talent data - should match the data from talent page
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
    skills: ["Digital Marketing", "Content Strategy", "SEO"],
    expertise: "Marketing specialist helping rural businesses reach online customers",
    location: "Clinton County",
    isAvailable: true,
  },
  {
    id: 6,
    name: "David Miller",
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

export default function Dashboard() {
  const router = useRouter()
  const { isAuthenticated, user } = useAuth()
  const [savedGrants, setSavedGrants] = useState<Grant[]>([])
  const [connectedTalent, setConnectedTalent] = useState<TalentProfile[]>([])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentUser = localStorage.getItem("currentUser")
      if (!currentUser || !isAuthenticated) {
        router.push("/login")
      } else {
        // Load saved grants for current user
        const userData = JSON.parse(currentUser)
        const savedGrantsKey = `savedGrants_${userData.email}`
        const saved = localStorage.getItem(savedGrantsKey)
        if (saved) {
          const savedGrantIds = JSON.parse(saved) as number[]
          const grants = grantsData as Grant[]
          const savedGrantsList = grants.filter((grant) => savedGrantIds.includes(grant.id))
          setSavedGrants(savedGrantsList)
        }

        // Load connected talent for current user
        const connectionsKey = `talentConnections_${userData.email}`
        const connections = localStorage.getItem(connectionsKey)
        if (connections) {
          const connectedIds = JSON.parse(connections) as number[]
          const connectedProfiles = talentData.filter((talent) => connectedIds.includes(talent.id))
          setConnectedTalent(connectedProfiles)
        }
      }
    }
  }, [isAuthenticated, router, user])

  const removeSavedGrant = (grantId: number) => {
    if (typeof window !== "undefined" && user) {
      const savedGrantsKey = `savedGrants_${user.email}`
      const saved = localStorage.getItem(savedGrantsKey)
      if (saved) {
        const savedGrantIds = JSON.parse(saved) as number[]
        const updated = savedGrantIds.filter((id) => id !== grantId)
        localStorage.setItem(savedGrantsKey, JSON.stringify(updated))
        setSavedGrants((prev) => prev.filter((grant) => grant.id !== grantId))
      }
    }
  }

  const removeConnection = (talentId: number) => {
    if (typeof window !== "undefined" && user) {
      const connectionsKey = `talentConnections_${user.email}`
      const connections = localStorage.getItem(connectionsKey)
      if (connections) {
        const connectedIds = JSON.parse(connections) as number[]
        const updated = connectedIds.filter((id) => id !== talentId)
        localStorage.setItem(connectionsKey, JSON.stringify(updated))
        setConnectedTalent((prev) => prev.filter((talent) => talent.id !== talentId))
      }
    }
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-3 tracking-tight">Your Dashboard</h1>
          <p className="text-xl text-foreground/60">
            Quick access to grants, permits, business formation, and local experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Grants Section */}
          <Card className="border border-border/50 bg-white hover:border-primary/30 transition-all card-shadow hover:card-shadow-hover flex flex-col">
            <CardHeader className="pb-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">Find Grants</CardTitle>
              <CardDescription className="text-base">Browse 15+ Michigan grants</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-sm text-foreground/60 mb-6 leading-relaxed flex-1">
                Search grants by industry, county, and demographics with AI summaries
              </p>
              <Link href="/grants">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium">Browse Grants</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Compliance Section */}
          <Card className="border border-border/50 bg-white hover:border-secondary/30 transition-all card-shadow hover:card-shadow-hover flex flex-col">
            <CardHeader className="pb-4">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">Check Permits</CardTitle>
              <CardDescription className="text-base">AI permit checker</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-sm text-foreground/60 mb-6 leading-relaxed flex-1">
                Find out what permits and licenses your business needs
              </p>
              <Link href="/compliance">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium">
                  Check Permits
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Business Formation */}
          <Card className="border border-border/50 bg-white hover:border-primary/30 transition-all card-shadow hover:card-shadow-hover flex flex-col">
            <CardHeader className="pb-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">Start Business</CardTitle>
              <CardDescription className="text-base">Formation guide</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-sm text-foreground/60 mb-6 leading-relaxed flex-1">
                Step-by-step guide with EIN help and checklist
              </p>
              <Link href="/business-formation">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium">Get Started</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Talent Section */}
          <Card className="border border-border/50 bg-white hover:border-secondary/30 transition-all card-shadow hover:card-shadow-hover flex flex-col">
            <CardHeader className="pb-4">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.856-1.488M15 10a3 3 0 11-6 0 3 3 0 016 0zM4 20h16a2 2 0 002-2v-2a3 3 0 00-5.856-1.488M9 10a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">Find Experts</CardTitle>
              <CardDescription className="text-base">Local talent network</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-sm text-foreground/60 mb-6 leading-relaxed flex-1">
                Connect with accountants, designers, and consultants in your county
              </p>
              <Link href="/talent">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium">Browse Talent</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Saved Grants Section */}
        {savedGrants.length > 0 && (
          <div className="mt-12">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-foreground mb-2">Your Saved Grants</h2>
              <p className="text-lg text-foreground/60">
                Grants you've saved for later review
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedGrants.map((grant) => {
                const daysUntilDeadline = Math.ceil(
                  (new Date(grant.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
                )
                return (
                  <Card key={grant.id} className="border border-border/50 bg-white hover:border-primary/30 transition-all card-shadow hover:card-shadow-hover">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-semibold text-foreground mb-2">{grant.title}</CardTitle>
                          <CardDescription className="text-base">{grant.description}</CardDescription>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeSavedGrant(grant.id)}
                          className="text-primary hover:text-primary/80"
                        >
                          Remove
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-foreground/60">Funding Range</span>
                          <span className="font-semibold text-foreground">
                            ${grant.fundingMin.toLocaleString()} - ${grant.fundingMax.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-foreground/60">Deadline</span>
                          <span className="font-semibold text-foreground">
                            {grant.deadline} ({daysUntilDeadline} days)
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-foreground/60">Source</span>
                          <span className="text-sm text-foreground">{grant.source}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {grant.businessSize.slice(0, 2).map((size) => (
                          <span key={size} className="px-2 py-1 bg-secondary/20 text-secondary rounded text-xs font-medium">
                            {size}
                          </span>
                        ))}
                      </div>
                      <Link href="/grants">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium">
                          View Details
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        {savedGrants.length === 0 && (
          <div className="mt-12">
            <Card className="border border-border/50 bg-white">
              <CardContent className="py-12 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No Saved Grants Yet</h3>
                <p className="text-foreground/60 mb-6">
                  Start browsing grants and save the ones that interest you for easy access later.
                </p>
                <Link href="/grants">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Browse Grants
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Connected Talent Section */}
        {connectedTalent.length > 0 && (
          <div className="mt-12">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-foreground mb-2">Your Connections</h2>
              <p className="text-lg text-foreground/60">
                Professionals you've connected with or messaged
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {connectedTalent.map((talent) => (
                <Card key={talent.id} className="border border-border/50 bg-white hover:border-secondary/30 transition-all card-shadow hover:card-shadow-hover">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-semibold text-foreground mb-1">{talent.name}</CardTitle>
                        <CardDescription className="text-base">{talent.serviceType}</CardDescription>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeConnection(talent.id)}
                        className="text-foreground/60 hover:text-red-600 hover:bg-red-50"
                      >
                        Remove
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/60 mb-4 leading-relaxed">
                      {talent.expertise}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {talent.skills.slice(0, 3).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{talent.location}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${talent.isAvailable ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}>
                        {talent.isAvailable ? "Available" : "Unavailable"}
                      </span>
                    </div>
                    <Link href="/talent">
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium">
                        View Profile
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

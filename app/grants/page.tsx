"use client"

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
  counties?: string[]
  demographics?: string[]
  eligibility?: string
  howToApply?: string
  whyRelevant?: string
}

export default function GrantsPage() {
  const router = useRouter()
  const { isAuthenticated, user } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState<string | undefined>(undefined)
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined)
  const [selectedCounty, setSelectedCounty] = useState<string | undefined>(undefined)
  const [selectedDemographic, setSelectedDemographic] = useState<string | undefined>(undefined)
  const [savedGrants, setSavedGrants] = useState<number[]>([])
  const [expandedGrant, setExpandedGrant] = useState<number | null>(null)
  const [aiSummary, setAiSummary] = useState<Record<number, string>>({})

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
          setSavedGrants(JSON.parse(saved))
        }
      }
    }
  }, [isAuthenticated, router, user])

  // Save to localStorage whenever savedGrants changes
  useEffect(() => {
    if (typeof window !== "undefined" && isAuthenticated && user) {
      const savedGrantsKey = `savedGrants_${user.email}`
      localStorage.setItem(savedGrantsKey, JSON.stringify(savedGrants))
    }
  }, [savedGrants, isAuthenticated, user])

  if (!isAuthenticated) {
    return null
  }

  const grants = grantsData as Grant[]

  const filteredGrants = grants.filter((grant) => {
    const matchesSearch =
      grant.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      grant.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      grant.source.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesIndustry =
      !selectedIndustry ||
      selectedIndustry === "all" ||
      grant.industries.includes("All Industries") ||
      grant.industries.some((ind) => ind.toLowerCase().includes(selectedIndustry.toLowerCase()))
    const matchesSize = !selectedSize || selectedSize === "all" || grant.businessSize.includes(selectedSize)
    const matchesCounty =
      !selectedCounty ||
      selectedCounty === "all" ||
      grant.counties?.includes("All Counties") ||
      grant.counties?.includes("All Rural Counties") ||
      grant.counties?.some((c) => c.toLowerCase().includes(selectedCounty.toLowerCase()))
    const matchesDemographic =
      !selectedDemographic ||
      selectedDemographic === "all" ||
      grant.demographics?.includes("All") ||
      grant.demographics?.includes(selectedDemographic)

    return matchesSearch && matchesIndustry && matchesSize && matchesCounty && matchesDemographic
  })

  const generateAISummary = (grant: Grant): string => {
    // AI-powered summary explaining relevance, eligibility, deadlines, and how to apply
    const daysUntilDeadline = Math.ceil(
      (new Date(grant.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
    )
    const urgency = daysUntilDeadline < 30 ? "⚠️ URGENT" : daysUntilDeadline < 60 ? "⏰ Soon" : "📅 Upcoming"

    return `**Why This Grant Matters:** ${grant.whyRelevant || grant.description}

**Eligibility Requirements:** ${grant.eligibility || "See grant details for specific eligibility requirements."}

**Application Deadline:** ${grant.deadline} (${daysUntilDeadline} days remaining) ${urgency}

**How to Apply:** ${grant.howToApply || "Contact the grant source directly for application instructions."}

**Funding Range:** $${grant.fundingMin.toLocaleString()} - $${grant.fundingMax.toLocaleString()}

**Best For:** ${grant.businessSize.join(", ")} businesses in ${grant.industries.join(", ")} industries.`
  }

  const toggleExpand = (grantId: number) => {
    if (expandedGrant === grantId) {
      setExpandedGrant(null)
    } else {
      setExpandedGrant(grantId)
      if (!aiSummary[grantId]) {
        const grant = grants.find((g) => g.id === grantId)
        if (grant) {
          setAiSummary({ ...aiSummary, [grantId]: generateAISummary(grant) })
        }
      }
    }
  }

  const toggleSaveGrant = (grantId: number) => {
    setSavedGrants((prev) => (prev.includes(grantId) ? prev.filter((id) => id !== grantId) : [...prev, grantId]))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-foreground mb-3 tracking-tight">Find Grants & Funding</h1>
          <p className="text-xl text-foreground/60 max-w-2xl">
            Browse 15+ Michigan grants with AI-powered summaries. Filter by industry, county, and demographics to find the perfect match.
          </p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Search</label>
            <Input
              type="text"
              placeholder="Search grants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-card border-border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Industry</label>
            <Select value={selectedIndustry} onValueChange={(value) => setSelectedIndustry(value === "all" ? undefined : value)}>
              <SelectTrigger className="w-full bg-white border-border/50">
                <SelectValue placeholder="All Industries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
                <SelectItem value="Agriculture">Agriculture</SelectItem>
                <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                <SelectItem value="Retail">Retail</SelectItem>
                <SelectItem value="Services">Services</SelectItem>
                <SelectItem value="Hospitality">Hospitality</SelectItem>
                <SelectItem value="Technology">Technology</SelectItem>
                <SelectItem value="Healthcare">Healthcare</SelectItem>
                <SelectItem value="Food Service">Food Service</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Business Size</label>
            <Select value={selectedSize} onValueChange={(value) => setSelectedSize(value === "all" ? undefined : value)}>
              <SelectTrigger className="w-full bg-white border-border/50">
                <SelectValue placeholder="All Sizes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sizes</SelectItem>
                <SelectItem value="Startup">Startup</SelectItem>
                <SelectItem value="Small">Small</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Large">Large</SelectItem>
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
                <SelectItem value="Rural">Rural Counties</SelectItem>
                <SelectItem value="Ionia">Ionia County</SelectItem>
                <SelectItem value="Gratiot">Gratiot County</SelectItem>
                <SelectItem value="Montcalm">Montcalm County</SelectItem>
                <SelectItem value="Shiawassee">Shiawassee County</SelectItem>
                <SelectItem value="Clinton">Clinton County</SelectItem>
                <SelectItem value="Eaton">Eaton County</SelectItem>
                <SelectItem value="Barry">Barry County</SelectItem>
                <SelectItem value="Calhoun">Calhoun County</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Demographic</label>
            <Select value={selectedDemographic} onValueChange={(value) => setSelectedDemographic(value === "all" ? undefined : value)}>
              <SelectTrigger className="w-full bg-white border-border/50">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="Women-Owned">Women-Owned</SelectItem>
                <SelectItem value="Veteran-Owned">Veteran-Owned</SelectItem>
                <SelectItem value="Minority-Owned">Minority-Owned</SelectItem>
                <SelectItem value="Youth (18-30)">Youth (18-30)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Grants List */}
        <div className="space-y-4">
          {filteredGrants.length === 0 ? (
            <Card className="border-border">
              <CardContent className="py-12 text-center">
                <p className="text-foreground/70">
                  No grants found matching your criteria. Try adjusting your filters.
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredGrants.map((grant) => (
              <Card key={grant.id} className="border-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-foreground text-xl">{grant.title}</CardTitle>
                      <CardDescription>{grant.description}</CardDescription>
                    </div>
                    <button
                      onClick={() => toggleSaveGrant(grant.id)}
                      className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                        savedGrants.includes(grant.id)
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground hover:bg-muted/80"
                      }`}
                    >
                      {savedGrants.includes(grant.id) ? "★ Saved" : "☆ Save"}
                    </button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs font-medium text-foreground/60 mb-1">Funding Range</p>
                      <p className="font-semibold text-foreground">
                        ${grant.fundingMin.toLocaleString()} - ${grant.fundingMax.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground/60 mb-1">Deadline</p>
                      <p className="font-semibold text-foreground">{grant.deadline}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground/60 mb-1">Industries</p>
                      <p className="text-sm text-foreground">{grant.industries.slice(0, 2).join(", ")}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground/60 mb-1">Source</p>
                      <p className="text-sm text-foreground">{grant.source}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {grant.businessSize.map((size) => (
                      <span key={size} className="px-2 py-1 bg-secondary/20 text-secondary rounded text-xs font-medium">
                        {size}
                      </span>
                    ))}
                    {grant.demographics && grant.demographics[0] !== "All" && (
                      <span className="px-2 py-1 bg-accent/20 text-accent rounded text-xs font-medium">
                        {grant.demographics[0]}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => toggleExpand(grant.id)}
                      variant={expandedGrant === grant.id ? "outline" : "default"}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      size="sm"
                    >
                      {expandedGrant === grant.id ? "Hide AI Summary" : "Get AI Summary"}
                    </Button>
                    <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground" size="sm">
                      View Details & Apply
                    </Button>
                  </div>
                  {expandedGrant === grant.id && aiSummary[grant.id] && (
                    <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span>🤖</span> AI-Powered Grant Summary
                      </h4>
                      <div className="space-y-3 text-sm text-foreground whitespace-pre-line">
                        {aiSummary[grant.id].split("\n").map((line, idx) => (
                          <p key={idx} className={line.startsWith("**") ? "font-semibold" : ""}>
                            {line.replace(/\*\*/g, "")}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Saved Grants Summary */}
        {savedGrants.length > 0 && (
          <Card className="mt-8 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-foreground">
                {savedGrants.length} Grant{savedGrants.length !== 1 ? "s" : ""} Saved
              </CardTitle>
              <CardDescription>You can view your saved grants in your dashboard</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">View Saved Grants</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

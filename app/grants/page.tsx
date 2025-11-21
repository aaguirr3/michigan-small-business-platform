"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Header } from "@/components/header"

// Sample grants data - in production this would come from API
const grantsData = [
  {
    id: 1,
    title: "Michigan Small Business Growth Fund",
    description: "Grants for small businesses expanding operations in rural Michigan",
    fundingMin: 5000,
    fundingMax: 50000,
    deadline: "2025-12-31",
    industries: ["Manufacturing", "Agriculture", "Retail", "Services"],
    businessSize: ["Small", "Medium"],
    source: "Michigan Economic Development Corporation",
  },
  {
    id: 2,
    title: "Rural Agricultural Development Grant",
    description: "Support for agricultural businesses and value-added operations",
    fundingMin: 10000,
    fundingMax: 75000,
    deadline: "2025-11-30",
    industries: ["Agriculture", "Food Production", "Agribusiness"],
    businessSize: ["Small", "Medium"],
    source: "USDA Rural Development",
  },
  {
    id: 3,
    title: "Women-Owned Business Support Program",
    description: "Grants for women entrepreneurs in rural Michigan",
    fundingMin: 5000,
    fundingMax: 40000,
    deadline: "2025-10-15",
    industries: ["All Industries"],
    businessSize: ["Startup", "Small", "Medium"],
    source: "Michigan Women Business Council",
  },
  {
    id: 4,
    title: "Manufacturing Excellence Initiative",
    description: "Grants for manufacturers implementing new technologies",
    fundingMin: 15000,
    fundingMax: 100000,
    deadline: "2025-11-15",
    industries: ["Manufacturing"],
    businessSize: ["Small", "Medium", "Large"],
    source: "Michigan Manufacturing Association",
  },
  {
    id: 5,
    title: "Tourism & Hospitality Development Grant",
    description: "Support for tourism and hospitality businesses in rural areas",
    fundingMin: 8000,
    fundingMax: 60000,
    deadline: "2025-10-31",
    industries: ["Hospitality", "Tourism", "Recreation"],
    businessSize: ["Small", "Medium"],
    source: "Michigan Tourism Bureau",
  },
  {
    id: 6,
    title: "Veteran-Owned Business Grant Program",
    description: "Grants specifically for veteran entrepreneurs",
    fundingMin: 5000,
    fundingMax: 45000,
    deadline: "2025-12-31",
    industries: ["All Industries"],
    businessSize: ["Startup", "Small", "Medium"],
    source: "Michigan Veterans Affairs",
  },
]

export default function GrantsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("")
  const [selectedSize, setSelectedSize] = useState("")
  const [savedGrants, setSavedGrants] = useState<number[]>([])

  const filteredGrants = grantsData.filter((grant) => {
    const matchesSearch =
      grant.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      grant.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesIndustry =
      !selectedIndustry || grant.industries.some((ind) => ind.toLowerCase().includes(selectedIndustry.toLowerCase()))
    const matchesSize = !selectedSize || grant.businessSize.includes(selectedSize)

    return matchesSearch && matchesIndustry && matchesSize
  })

  const toggleSaveGrant = (grantId: number) => {
    setSavedGrants((prev) => (prev.includes(grantId) ? prev.filter((id) => id !== grantId) : [...prev, grantId]))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Grants & Funding</h1>
          <p className="text-foreground/70">
            Discover Michigan grants designed for rural small businesses. Filter by industry and business size.
          </p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Search</label>
            <Input
              type="text"
              placeholder="Search grants by title or keyword"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-card border-border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Industry</label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Industries</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Retail">Retail</option>
              <option value="Services">Services</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Technology">Technology</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Business Size</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Sizes</option>
              <option value="Startup">Startup</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
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
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" size="sm">
                    View Details & Apply
                  </Button>
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

"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Header } from "@/components/header"
import { useAuth } from "@/contexts/auth-context"

interface ComplianceResponse {
  id: string
  question: string
  response: string
  category: string
  requiresLegalReview: boolean
  timestamp: string
}

interface PermitAnalysis {
  id: string
  businessIdea: string
  location: string
  requiredPermits: string[]
  countyConsiderations: string[]
  costs: { item: string; cost: string }[]
  steps: string[]
  missingDocuments: string[]
  timestamp: string
}

export default function CompliancePage() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const [activeTab, setActiveTab] = useState<"qa" | "permit">("qa")
  const [question, setQuestion] = useState("")
  const [category, setCategory] = useState("general")
  const [isLoading, setIsLoading] = useState(false)
  const [responses, setResponses] = useState<ComplianceResponse[]>([])
  const [showDocUpload, setShowDocUpload] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<string | null>(null)

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
  
  // Permit Checker State
  const [businessIdea, setBusinessIdea] = useState("")
  const [businessLocation, setBusinessLocation] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [permitAnalyses, setPermitAnalyses] = useState<PermitAnalysis[]>([])

  const handleAskQuestion = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return

    setIsLoading(true)

    try {
      // Call Watson AI API
      const response = await fetch('/api/compliance/qa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: question,
          category: category,
        }),
      })

      const data = await response.json()

      // Log the response for debugging
      console.log('Watson AI Response:', {
        ok: response.ok,
        status: response.status,
        fallback: data.fallback,
        hasError: !!data.error,
        error: data.error,
      })

      // If there's an error message, log it
      if (data.error) {
        console.error('Watson AI Error:', data.error)
        if (data.errorDetails) {
          console.error('Error Details:', data.errorDetails)
        }
        if (data.debug) {
          console.error('Debug Info:', data.debug)
        }
      }

      // Even if response is not ok, we might have a fallback response
      if (!response.ok && !data.response) {
        throw new Error(data.error || 'Failed to get AI response')
      }

      const aiResponse: ComplianceResponse = {
        id: Date.now().toString(),
        question: question,
        response: data.response || generateMockResponse(question, category),
        category: category,
        requiresLegalReview: data.requiresLegalReview || shouldFlagLegal(question),
        timestamp: new Date().toLocaleString(),
      }

      // Add a warning if using fallback
      if (data.fallback) {
        console.warn('⚠️ Using fallback response. Watson AI may not be configured correctly.')
      }

      setResponses((prev) => [aiResponse, ...prev])
      setQuestion("")
    } catch (error) {
      console.error('Error calling Watson AI:', error)
      // Fallback to mock response if API fails
      const fallbackResponse: ComplianceResponse = {
        id: Date.now().toString(),
        question: question,
        response: generateMockResponse(question, category),
        category: category,
        requiresLegalReview: shouldFlagLegal(question),
        timestamp: new Date().toLocaleString(),
      }
      setResponses((prev) => [fallbackResponse, ...prev])
    } finally {
      setIsLoading(false)
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setUploadedFile(e.target.files[0].name)
      // In production, would upload to server for AI analysis
    }
  }

  const handlePermitCheck = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!businessIdea.trim()) return

    setIsAnalyzing(true)

    try {
      // Call Watson AI API for permit analysis
      const response = await fetch('/api/compliance/permit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          businessIdea: businessIdea,
          businessLocation: businessLocation,
        }),
      })

      const data = await response.json()

      // Log the response for debugging
      console.log('Watson AI Permit Response:', {
        ok: response.ok,
        status: response.status,
        fallback: data.fallback,
        hasError: !!data.error,
        error: data.error,
      })

      if (!response.ok && !data.requiredPermits) {
        throw new Error(data.error || 'Failed to analyze permits')
      }

      const analysis: PermitAnalysis = {
        id: Date.now().toString(),
        businessIdea: businessIdea,
        location: businessLocation || 'Michigan',
        requiredPermits: data.requiredPermits || [],
        countyConsiderations: data.countyConsiderations || [],
        costs: data.costs || [],
        steps: data.steps || [],
        missingDocuments: data.missingDocuments || [],
        timestamp: new Date().toLocaleString(),
      }

      // Add a warning if using fallback
      if (data.fallback) {
        console.warn('⚠️ Using fallback permit analysis. Watson AI may not be configured correctly.')
      }

      setPermitAnalyses((prev) => [analysis, ...prev])
      setBusinessIdea("")
      setBusinessLocation("")
    } catch (error) {
      console.error('Error calling Watson AI:', error)
      // Fallback to mock analysis if API fails
      const fallbackAnalysis = generatePermitAnalysis(businessIdea, businessLocation)
      setPermitAnalyses((prev) => [fallbackAnalysis, ...prev])
    } finally {
      setIsAnalyzing(false)
    }
  }

  const generatePermitAnalysis = (idea: string, location: string): PermitAnalysis => {
    const ideaLower = idea.toLowerCase()
    const locationLower = location.toLowerCase()
    const isRural = locationLower.includes("rural") || !locationLower.includes("detroit") && !locationLower.includes("grand rapids")
    
    const permits: string[] = []
    const countyConsiderations: string[] = []
    const costs: { item: string; cost: string }[] = []
    const steps: string[] = []
    const missingDocs: string[] = []

    // Business License (always required)
    permits.push("Michigan Business License")
    costs.push({ item: "Business License", cost: "$50 - $200" })
    steps.push("Register your business name with the Michigan Department of Licensing and Regulatory Affairs (LARA)")
    missingDocs.push("Business name registration form")

    // Industry-specific permits
    if (ideaLower.includes("food") || ideaLower.includes("restaurant") || ideaLower.includes("food truck")) {
      permits.push("Food Service License")
      permits.push("Food Safety Certification")
      permits.push("Mobile Food Vendor Permit (if applicable)")
      costs.push({ item: "Food Service License", cost: "$200 - $500" })
      costs.push({ item: "Food Safety Certification", cost: "$100 - $300" })
      steps.push("Complete ServSafe or equivalent food safety training")
      steps.push("Pass health department inspection")
      missingDocs.push("Food safety certificate")
      missingDocs.push("Menu and food handling procedures")
    }

    if (ideaLower.includes("alcohol") || ideaLower.includes("bar") || ideaLower.includes("liquor")) {
      permits.push("Michigan Liquor License")
      costs.push({ item: "Liquor License", cost: "$600 - $5,000+" })
      steps.push("Apply through Michigan Liquor Control Commission")
      steps.push("Complete background check and fingerprinting")
      missingDocs.push("Liquor license application")
      missingDocs.push("Background check results")
    }

    if (ideaLower.includes("retail") || ideaLower.includes("store") || ideaLower.includes("shop")) {
      permits.push("Sales Tax License")
      costs.push({ item: "Sales Tax License", cost: "Free" })
      steps.push("Register for sales tax with Michigan Department of Treasury")
      missingDocs.push("Sales tax registration form")
    }

    if (ideaLower.includes("healthcare") || ideaLower.includes("medical") || ideaLower.includes("clinic")) {
      permits.push("Healthcare Facility License")
      permits.push("Professional Licensing (if applicable)")
      costs.push({ item: "Healthcare License", cost: "$500 - $2,000" })
      steps.push("Apply through Michigan Department of Health and Human Services")
      missingDocs.push("Professional licenses for staff")
      missingDocs.push("Facility inspection report")
    }

    if (ideaLower.includes("childcare") || ideaLower.includes("daycare")) {
      permits.push("Childcare License")
      permits.push("Background Checks (all staff)")
      costs.push({ item: "Childcare License", cost: "$200 - $500" })
      steps.push("Complete childcare licensing application")
      steps.push("Pass home/facility safety inspection")
      missingDocs.push("Background checks for all staff")
      missingDocs.push("Safety inspection report")
    }

    // Zoning and location
    if (ideaLower.includes("home") || ideaLower.includes("residential")) {
      permits.push("Home Occupation Permit")
      countyConsiderations.push("Check local zoning ordinances for home-based businesses")
      steps.push("Verify your property is zoned for business use")
      missingDocs.push("Property deed or lease agreement")
    }

    permits.push("Zoning Permit")
    costs.push({ item: "Zoning Permit", cost: "$50 - $300" })
    steps.push("Verify property zoning compliance with local planning department")
    missingDocs.push("Property address and zoning verification")

    // County-specific considerations
    if (isRural) {
      countyConsiderations.push("Rural counties may have simplified permit processes")
      countyConsiderations.push("Check with county clerk for local business registration requirements")
      countyConsiderations.push("Some rural areas offer reduced fees for new businesses")
    } else {
      countyConsiderations.push("Urban areas may require additional permits (signage, parking, etc.)")
      countyConsiderations.push("Check city-specific business requirements")
    }

    // EIN and tax
    permits.push("Federal EIN (Employer Identification Number)")
    costs.push({ item: "EIN Registration", cost: "Free" })
    steps.push("Apply for EIN through IRS (can be done online)")
    missingDocs.push("EIN application (SS-4 form)")

    // Employment considerations
    if (ideaLower.includes("employ") || ideaLower.includes("hire") || ideaLower.includes("staff")) {
      permits.push("Workers' Compensation Insurance")
      permits.push("Unemployment Insurance Registration")
      costs.push({ item: "Workers' Comp Insurance", cost: "$500 - $2,000/year" })
      steps.push("Register with Michigan Department of Labor and Economic Opportunity")
      missingDocs.push("Workers' compensation policy")
    }

    return {
      id: Date.now().toString(),
      businessIdea: idea,
      location: location || "Michigan",
      requiredPermits: permits,
      countyConsiderations: countyConsiderations,
      costs: costs,
      steps: steps,
      missingDocuments: missingDocs,
      timestamp: new Date().toLocaleString(),
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-foreground mb-3 tracking-tight">AI Compliance Assistant</h1>
          <p className="text-xl text-foreground/60 max-w-2xl mb-6">
            Business Licenses, Taxes, and Regulations. Get instant answers about permits, compliance, and Michigan business requirements.
          </p>
          
          {/* AI Disclaimer - Full Width */}
          <div className="w-full border border-accent/30 bg-accent/5 rounded-lg p-4">
            <p className="text-sm text-foreground/70 leading-relaxed">
              <span className="font-semibold text-foreground">AI Disclaimer:</span> This tool provides general information only and is not legal advice. Always consult with qualified professionals (attorneys, accountants, etc.) before making compliance decisions.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-6 border-b border-border">
          <button
            onClick={() => setActiveTab("qa")}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === "qa"
                ? "border-b-2 border-primary text-primary"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            Q&A Assistant
          </button>
          <button
            onClick={() => setActiveTab("permit")}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === "permit"
                ? "border-b-2 border-primary text-primary"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            Permit Checker
          </button>
        </div>

        {activeTab === "qa" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Q&A Section */}
          <div className="lg:col-span-2">
            <Card className="border-border mb-8">
              <CardHeader>
                <CardTitle className="text-foreground">Ask a Question</CardTitle>
                <CardDescription>
                  Ask about tax compliance, licensing, employment law, safety, or other business compliance topics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAskQuestion} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Compliance Category</label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger className="w-full bg-white border-border/50">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Business</SelectItem>
                        <SelectItem value="tax">Tax Compliance</SelectItem>
                        <SelectItem value="licensing">Licensing & Permits</SelectItem>
                        <SelectItem value="employment">Employment Law</SelectItem>
                        <SelectItem value="safety">Health & Safety</SelectItem>
                        <SelectItem value="labor">Labor Regulations</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Your Question</label>
                    <textarea
                      placeholder="e.g., What are the requirements for getting a business license in Michigan?"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isLoading || !question.trim()}
                  >
                    {isLoading ? "Getting Answer..." : "Get AI Answer"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Responses */}
            {responses.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Questions & Answers</h2>
                <div className="space-y-4">
                  {responses.map((response) => (
                    <Card key={response.id} className="border-border">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-lg text-foreground">{response.question}</CardTitle>
                            <CardDescription className="mt-2">
                              Category: {response.category.charAt(0).toUpperCase() + response.category.slice(1)}
                            </CardDescription>
                          </div>
                          {response.requiresLegalReview && (
                            <div className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold whitespace-nowrap">
                              ⚠️ Legal Review Recommended
                            </div>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-muted/50 p-4 rounded-lg mb-4">
                          <p className="text-foreground leading-relaxed">{response.response}</p>
                        </div>
                        {response.requiresLegalReview && (
                          <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg">
                            <p className="text-sm text-foreground font-medium mb-2">Important Notice</p>
                            <p className="text-sm text-foreground/80">
                              This topic involves legal considerations. We recommend consulting with a qualified
                              attorney in Michigan to ensure your business is fully compliant.
                            </p>
                          </div>
                        )}
                        <p className="text-xs text-foreground/50 mt-4">{response.timestamp}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Resources & Document Upload */}
          <div className="space-y-6">
            {/* Document Upload */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Document Review</CardTitle>
                <CardDescription>Upload business documents for AI analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                    accept=".pdf,.doc,.docx,.txt"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="text-2xl mb-2">📄</div>
                    <p className="text-sm font-medium text-foreground">
                      {uploadedFile ? uploadedFile : "Click to upload or drag and drop"}
                    </p>
                    <p className="text-xs text-foreground/50 mt-1">PDF, DOC, or TXT files</p>
                  </label>
                </div>
                {uploadedFile && (
                  <Button
                    className="w-full mt-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    size="sm"
                  >
                    Analyze Document
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Quick Resources */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Quick Resources</CardTitle>
                <CardDescription>Common compliance topics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <a 
                  href="https://www.michigan.gov/taxes/business-taxes/sales-use-tax/information/filing-deadlines" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                >
                  <p className="font-medium text-sm text-foreground">Tax Filing Deadlines</p>
                  <p className="text-xs text-foreground/60">Michigan business tax schedule</p>
                </a>
                <a 
                  href="https://www.michigan.gov/lara/learn-about/license-permits" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                >
                  <p className="font-medium text-sm text-foreground">Business License Requirements</p>
                  <p className="text-xs text-foreground/60">What you need to start legally</p>
                </a>
                <div className="p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                  <p className="font-medium text-sm text-foreground">Employment Law Basics</p>
                  <p className="text-xs text-foreground/60">Employee rights & responsibilities</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                  <p className="font-medium text-sm text-foreground">Workplace Safety Standards</p>
                  <p className="text-xs text-foreground/60">OSHA & Michigan requirements</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                  <p className="font-medium text-sm text-foreground">Environmental Compliance</p>
                  <p className="text-xs text-foreground/60">Regulations for your industry</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
        )}

        {activeTab === "permit" && (
          <div className="space-y-8">
            {/* Permit Checker Form */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">AI Permit Checker</CardTitle>
                <CardDescription>
                  Describe your business idea and location to get a comprehensive list of required Michigan permits, licenses, costs, and steps.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePermitCheck} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Describe Your Business Idea
                    </label>
                    <textarea
                      placeholder="e.g., I want to start a food truck in Alpena selling tacos and burritos"
                      value={businessIdea}
                      onChange={(e) => setBusinessIdea(e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Business Location (City/County)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Alpena, Alpena County or Rural Michigan"
                      value={businessLocation}
                      onChange={(e) => setBusinessLocation(e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isAnalyzing || !businessIdea.trim()}
                  >
                    {isAnalyzing ? "Analyzing Permits..." : "Check Required Permits"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Permit Analysis Results */}
            {permitAnalyses.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Permit Analysis</h2>
                <div className="space-y-6">
                  {permitAnalyses.map((analysis) => (
                    <Card key={analysis.id} className="border-border">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-foreground">{analysis.businessIdea}</CardTitle>
                            <CardDescription className="mt-1">📍 {analysis.location}</CardDescription>
                          </div>
                          <span className="text-xs text-foreground/50">{analysis.timestamp}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Required Permits */}
                        <div>
                          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <span>📋</span> Required Permits & Licenses ({analysis.requiredPermits.length})
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {analysis.requiredPermits.map((permit, idx) => (
                              <div key={idx} className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                                <p className="text-sm font-medium text-foreground">{permit}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* County Considerations */}
                        {analysis.countyConsiderations.length > 0 && (
                          <div>
                            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span>🏛️</span> County-Level Considerations
                            </h3>
                            <ul className="space-y-2">
                              {analysis.countyConsiderations.map((consideration, idx) => (
                                <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                                  <span>•</span>
                                  <span>{consideration}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Costs */}
                        <div>
                          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <span>💰</span> Estimated Costs
                          </h3>
                          <div className="space-y-2">
                            {analysis.costs.map((cost, idx) => (
                              <div key={idx} className="flex justify-between items-center p-2 bg-muted/50 rounded">
                                <span className="text-sm text-foreground">{cost.item}</span>
                                <span className="text-sm font-semibold text-foreground">{cost.cost}</span>
                              </div>
                            ))}
                            <div className="pt-2 border-t border-border">
                              <div className="flex justify-between items-center">
                                <span className="font-semibold text-foreground">Estimated Total</span>
                                <span className="font-bold text-primary">
                                  ${analysis.costs.reduce((sum, c) => {
                                    const num = parseInt(c.cost.replace(/[^0-9]/g, "")) || 0
                                    return sum + num
                                  }, 0).toLocaleString()}+
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Steps */}
                        <div>
                          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <span>✅</span> Steps to Get Started
                          </h3>
                          <ol className="space-y-2 list-decimal list-inside">
                            {analysis.steps.map((step, idx) => (
                              <li key={idx} className="text-sm text-foreground">{step}</li>
                            ))}
                          </ol>
                        </div>

                        {/* Missing Documents */}
                        <div>
                          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <span>📄</span> Documents You'll Need
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {analysis.missingDocuments.map((doc, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium"
                              >
                                {doc}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// Mock response generator - in production would use AI SDK
function generateMockResponse(question: string, category: string): string {
  const responses: Record<string, string> = {
    tax: `Michigan businesses must file annual business tax returns with the Michigan Department of Treasury. For LLCs and S-Corps, you'll need to file Form MI-1040 and pay the Michigan Business Tax. Sales tax is applicable on most goods and services. Quarterly estimated tax payments are required if you expect to owe more than $500 in taxes. Keep detailed records of all income and expenses for at least 7 years. Consider consulting a Michigan CPA for your specific situation.`,
    licensing: `Business licenses in Michigan vary by industry and location. You'll typically need: (1) A state business license, (2) Industry-specific permits, (3) County/local business licenses. The process usually takes 2-4 weeks. You can apply online through Michigan.gov or through your local county clerk. Document requirements vary - have your business plan, ownership information, and location details ready.`,
    employment: `When hiring employees in Michigan, you must: Obtain an EIN from the IRS, Register with the Michigan Department of Labor, Withhold payroll taxes, Provide workers' compensation insurance, Follow minimum wage laws ($10.33/hour as of 2024), Comply with break laws (meal periods required for shifts over 6 hours). Keep detailed payroll records for at least 3 years. Consult an employment attorney about your employee handbook and policies.`,
    safety: `Michigan follows OSHA standards for workplace safety. Requirements include: Maintaining a safe work environment, Having emergency procedures, Proper equipment training, Injury reporting within 24 hours, Maintaining safety records for 5+ years. Conduct regular safety audits and document everything. Industry-specific requirements may apply to your business.`,
    general: `All Michigan businesses must: Have a business structure (sole proprietorship, LLC, Corporation), Obtain an EIN from the IRS, Register with the state, Pay appropriate taxes, Maintain business records, Comply with employment laws if you have employees, Obtain necessary licenses and permits. Start by visiting Michigan.gov/business for official guidance.`,
  }

  return (
    responses[category] ||
    responses["general"] ||
    "We recommend consulting with a Michigan business attorney or accountant for detailed guidance on your specific situation."
  )
}

function shouldFlagLegal(question: string): boolean {
  const legalKeywords = [
    "contract",
    "lawsuit",
    "dispute",
    "liability",
    "attorney",
    "legal",
    "agreement",
    "employment contract",
    "intellectual property",
    "trademark",
    "patent",
    "copyright",
  ]

  return legalKeywords.some((keyword) => question.toLowerCase().includes(keyword))
}

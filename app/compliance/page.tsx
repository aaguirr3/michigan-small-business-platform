"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"

interface ComplianceResponse {
  id: string
  question: string
  response: string
  category: string
  requiresLegalReview: boolean
  timestamp: string
}

export default function CompliancePage() {
  const [question, setQuestion] = useState("")
  const [category, setCategory] = useState("general")
  const [isLoading, setIsLoading] = useState(false)
  const [responses, setResponses] = useState<ComplianceResponse[]>([])
  const [showDocUpload, setShowDocUpload] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<string | null>(null)

  const handleAskQuestion = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return

    setIsLoading(true)

    // Simulate AI response - in production this would call the AI SDK
    const mockResponse: ComplianceResponse = {
      id: Date.now().toString(),
      question: question,
      response: generateMockResponse(question, category),
      category: category,
      requiresLegalReview: shouldFlagLegal(question),
      timestamp: new Date().toLocaleString(),
    }

    setResponses((prev) => [mockResponse, ...prev])
    setQuestion("")
    setIsLoading(false)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setUploadedFile(e.target.files[0].name)
      // In production, would upload to server for AI analysis
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Compliance Helper</h1>
          <p className="text-foreground/70">
            Get AI-powered answers to your business compliance questions. Our helper covers tax, licensing, employment
            law, and safety regulations.
          </p>
        </div>

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
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="general">General Business</option>
                      <option value="tax">Tax Compliance</option>
                      <option value="licensing">Licensing & Permits</option>
                      <option value="employment">Employment Law</option>
                      <option value="safety">Health & Safety</option>
                      <option value="labor">Labor Regulations</option>
                    </select>
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
                <div className="p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                  <p className="font-medium text-sm text-foreground">Tax Filing Deadlines</p>
                  <p className="text-xs text-foreground/60">Michigan business tax schedule</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                  <p className="font-medium text-sm text-foreground">Business License Requirements</p>
                  <p className="text-xs text-foreground/60">What you need to start legally</p>
                </div>
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

            {/* Disclaimer */}
            <Card className="border-accent/30 bg-accent/5">
              <CardHeader>
                <CardTitle className="text-sm text-foreground">Disclaimer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  This tool provides general information only and is not legal advice. Always consult with qualified
                  professionals (attorneys, accountants, etc.) before making compliance decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
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

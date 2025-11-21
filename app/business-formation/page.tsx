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
import { Header } from "@/components/header"
import { useAuth } from "@/contexts/auth-context"
import { Checkbox } from "@/components/ui/checkbox"

interface BusinessFormationPlan {
  businessType: string
  businessName: string
  location: string
  steps: FormationStep[]
  einGuidance: string
  llcGuidance: string
  dbaGuidance: string
  costs: { item: string; cost: string; timeline: string }[]
  checklist: ChecklistItem[]
}

interface FormationStep {
  id: number
  title: string
  description: string
  completed: boolean
}

interface ChecklistItem {
  id: string
  task: string
  completed: boolean
  category: string
}

export default function BusinessFormationPage() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const [businessIdea, setBusinessIdea] = useState("")
  const [businessName, setBusinessName] = useState("")
  const [location, setLocation] = useState("")
  const [businessType, setBusinessType] = useState<string | undefined>(undefined)
  const [isGenerating, setIsGenerating] = useState(false)
  const [formationPlan, setFormationPlan] = useState<BusinessFormationPlan | null>(null)
  const [checklist, setChecklist] = useState<ChecklistItem[]>([])

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

  const handleGeneratePlan = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!businessIdea.trim() || !businessName.trim()) return

    setIsGenerating(true)

    // Generate AI-powered business formation plan
    const plan = generateFormationPlan(businessIdea, businessName, location, businessType)
    setFormationPlan(plan)
    setChecklist(plan.checklist)
    setIsGenerating(false)
  }

  const toggleChecklistItem = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    )
  }

  const generateFormationPlan = (
    idea: string,
    name: string,
    loc: string,
    type: string | undefined
  ): BusinessFormationPlan => {
    const ideaLower = idea.toLowerCase()
    const recommendedType = type || (ideaLower.includes("llc") ? "LLC" : ideaLower.includes("corp") ? "Corporation" : "LLC")

    const steps: FormationStep[] = [
      {
        id: 1,
        title: "Choose Your Business Structure",
        description: `Based on your business idea, we recommend forming a ${recommendedType}. This structure provides liability protection and tax benefits suitable for your business type.`,
        completed: false,
      },
      {
        id: 2,
        title: "Name Your Business",
        description: `Your chosen name "${name}" needs to be checked for availability. Search the Michigan LARA database to ensure it's not already taken.`,
        completed: false,
      },
      {
        id: 3,
        title: "Register with Michigan LARA",
        description: "File Articles of Organization (LLC) or Articles of Incorporation (Corporation) with the Michigan Department of Licensing and Regulatory Affairs.",
        completed: false,
      },
      {
        id: 4,
        title: "Obtain Federal EIN",
        description: "Apply for an Employer Identification Number (EIN) from the IRS. This is free and can be done online in minutes.",
        completed: false,
      },
      {
        id: 5,
        title: "Register for State Taxes",
        description: "Register with the Michigan Department of Treasury for sales tax, income tax, and other applicable taxes.",
        completed: false,
      },
      {
        id: 6,
        title: "Get Required Licenses & Permits",
        description: "Obtain industry-specific licenses and permits based on your business type and location.",
        completed: false,
      },
      {
        id: 7,
        title: "Set Up Business Banking",
        description: "Open a business bank account using your EIN and business registration documents.",
        completed: false,
      },
      {
        id: 8,
        title: "Create Operating Agreement/Bylaws",
        description: "Draft governing documents for your business structure (Operating Agreement for LLC, Bylaws for Corporation).",
        completed: false,
      },
    ]

    const einGuidance = `**How to Get Your EIN:**

1. **Online (Fastest)**: Visit IRS.gov and use the EIN Assistant. You'll receive your EIN immediately.
2. **By Fax**: Complete Form SS-4 and fax to (855) 641-6935. Receive EIN in 4 business days.
3. **By Mail**: Mail Form SS-4 to IRS. Takes 4-5 weeks.

**What You'll Need:**
- Your Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN)
- Business name and address
- Business structure type
- Reason for applying (starting new business)

**Cost**: FREE - No fee for EIN application

**Timeline**: Immediate (online) to 4-5 weeks (mail)`

    const llcGuidance = `**Forming an LLC in Michigan:**

**Step 1: Choose a Name**
- Must include "LLC," "L.L.C.," or "Limited Liability Company"
- Must be distinguishable from other Michigan businesses
- Check availability at Michigan LARA website

**Step 2: File Articles of Organization**
- File online at Michigan LARA or mail Form CSCL/CD-700
- Required information: business name, registered agent, purpose, duration
- Filing fee: $50

**Step 3: Appoint Registered Agent**
- Must have a registered agent with Michigan address
- Can be yourself, another person, or professional service
- Registered agent receives legal documents

**Step 4: Create Operating Agreement**
- Not required by law but highly recommended
- Defines ownership, management, and operating procedures
- Protects your limited liability status

**Step 5: Get EIN**
- Required if you have employees or multiple members
- Free from IRS

**Timeline**: 1-2 weeks for processing
**Total Cost**: $50 (filing fee) + optional registered agent service`

    const dbaGuidance = `**Doing Business As (DBA) in Michigan:**

**What is a DBA?**
A DBA (also called "Assumed Name") lets you operate under a name different from your legal business name.

**When You Need a DBA:**
- Sole proprietors operating under a name other than your own
- LLCs/Corporations operating under a different name
- Partnerships using a trade name

**How to File:**
1. **Check Name Availability**: Search Michigan LARA database
2. **File Assumed Name Certificate**: File with county clerk where business is located
3. **Publish Notice**: Some counties require publication in local newspaper
4. **Renew**: DBAs expire after 5 years in Michigan

**Cost**: $10-$25 (varies by county)
**Timeline**: 1-2 weeks
**Required**: File in each county where you do business`

    const costs = [
      { item: "LLC Articles of Organization", cost: "$50", timeline: "1-2 weeks" },
      { item: "EIN Application", cost: "FREE", timeline: "Immediate (online)" },
      { item: "Business License", cost: "$50-$200", timeline: "2-4 weeks" },
      { item: "DBA/Assumed Name (if needed)", cost: "$10-$25", timeline: "1-2 weeks" },
      { item: "Registered Agent Service (optional)", cost: "$50-$200/year", timeline: "Immediate" },
      { item: "Operating Agreement (DIY)", cost: "FREE", timeline: "1-2 days" },
      { item: "Operating Agreement (Attorney)", cost: "$300-$1,000", timeline: "1-2 weeks" },
    ]

    const checklist: ChecklistItem[] = [
      { id: "1", task: "Choose business structure (LLC, Corporation, etc.)", completed: false, category: "Planning" },
      { id: "2", task: "Check business name availability", completed: false, category: "Planning" },
      { id: "3", task: "File Articles of Organization/Incorporation with LARA", completed: false, category: "Registration" },
      { id: "4", task: "Obtain Federal EIN from IRS", completed: false, category: "Registration" },
      { id: "5", task: "Register for Michigan state taxes", completed: false, category: "Tax" },
      { id: "6", task: "Get required business licenses and permits", completed: false, category: "Licensing" },
      { id: "7", task: "Open business bank account", completed: false, category: "Finance" },
      { id: "8", task: "Create Operating Agreement or Bylaws", completed: false, category: "Legal" },
      { id: "9", task: "Set up business accounting system", completed: false, category: "Finance" },
      { id: "10", task: "Get business insurance", completed: false, category: "Insurance" },
      { id: "11", task: "Set up business website/online presence", completed: false, category: "Marketing" },
      { id: "12", task: "Register domain name (if applicable)", completed: false, category: "Marketing" },
    ]

    return {
      businessType: recommendedType,
      businessName: name,
      location: loc || "Michigan",
      steps,
      einGuidance,
      llcGuidance,
      dbaGuidance,
      costs,
      checklist,
    }
  }

  const downloadChecklist = () => {
    const completed = checklist.filter((item) => item.completed).length
    const total = checklist.length
    const content = `Michigan Business Formation Checklist\n${"=".repeat(50)}\n\nBusiness: ${formationPlan?.businessName}\nLocation: ${formationPlan?.location}\nBusiness Type: ${formationPlan?.businessType}\n\nProgress: ${completed}/${total} completed\n\n${"=".repeat(50)}\n\nCHECKLIST:\n\n${checklist
      .map((item) => `${item.completed ? "[✓]" : "[ ]"} ${item.task} (${item.category})`)
      .join("\n")}\n\n${"=".repeat(50)}\nGenerated by MittenLaunch\n${new Date().toLocaleDateString()}`

    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${formationPlan?.businessName.replace(/\s+/g, "-")}-checklist.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-foreground mb-3 tracking-tight">Start Your Michigan Business</h1>
          <p className="text-xl text-foreground/60 max-w-2xl">
            Get a personalized step-by-step guide with EIN help, LLC formation instructions, cost breakdowns, and a downloadable checklist.
          </p>
        </div>

        {!formationPlan ? (
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Tell Us About Your Business</CardTitle>
              <CardDescription>
                Describe your business idea and we'll create a personalized formation plan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleGeneratePlan} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Business Name
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g., Johnson Family Farm LLC"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="bg-card border-border"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Describe Your Business Idea
                  </label>
                  <textarea
                    placeholder="e.g., I want to start a small organic farm selling produce at local farmers markets"
                    value={businessIdea}
                    onChange={(e) => setBusinessIdea(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Location (City/County)
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g., Ionia County, Michigan"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="bg-card border-border"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Business Structure (Optional)
                    </label>
                    <Select value={businessType} onValueChange={(value) => setBusinessType(value === "recommendation" ? undefined : value)}>
                      <SelectTrigger className="w-full bg-white border-border/50">
                        <SelectValue placeholder="AI Recommendation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recommendation">AI Recommendation</SelectItem>
                        <SelectItem value="LLC">LLC</SelectItem>
                        <SelectItem value="Corporation">Corporation</SelectItem>
                        <SelectItem value="Sole Proprietorship">Sole Proprietorship</SelectItem>
                        <SelectItem value="Partnership">Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={isGenerating || !businessIdea.trim() || !businessName.trim()}
                >
                  {isGenerating ? "Generating Your Plan..." : "Generate Formation Plan"}
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Overview */}
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-foreground">Your Business Formation Plan</CardTitle>
                <CardDescription>
                  {formationPlan.businessName} • {formationPlan.businessType} • {formationPlan.location}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Steps */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Step-by-Step Guide</CardTitle>
                <CardDescription>Follow these steps to form your business in Michigan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {formationPlan.steps.map((step, idx) => (
                    <div key={step.id} className="flex gap-4 p-4 border border-border rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                        {step.id}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                        <p className="text-sm text-foreground/70">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* EIN Guidance */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">EIN (Employer Identification Number) Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none text-foreground whitespace-pre-line">
                  {formationPlan.einGuidance}
                </div>
              </CardContent>
            </Card>

            {/* LLC Guidance */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">LLC Formation Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none text-foreground whitespace-pre-line">
                  {formationPlan.llcGuidance}
                </div>
              </CardContent>
            </Card>

            {/* DBA Guidance */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">DBA (Doing Business As) Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none text-foreground whitespace-pre-line">
                  {formationPlan.dbaGuidance}
                </div>
              </CardContent>
            </Card>

            {/* Costs */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Estimated Costs & Timelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {formationPlan.costs.map((cost, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-muted/50 rounded">
                      <div>
                        <p className="text-sm font-medium text-foreground">{cost.item}</p>
                        <p className="text-xs text-foreground/60">Timeline: {cost.timeline}</p>
                      </div>
                      <span className="text-sm font-semibold text-primary">{cost.cost}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Checklist */}
            <Card className="border-border">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-foreground">Personalized Checklist</CardTitle>
                    <CardDescription>
                      {checklist.filter((item) => item.completed).length} of {checklist.length} completed
                    </CardDescription>
                  </div>
                  <Button onClick={downloadChecklist} variant="outline" size="sm">
                    Download Checklist
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {checklist.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-3 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <Checkbox
                        checked={item.completed}
                        onCheckedChange={() => toggleChecklistItem(item.id)}
                        className="mt-0.5"
                      />
                      <div className="flex-1">
                        <label
                          className={`text-sm cursor-pointer ${
                            item.completed ? "line-through text-foreground/50" : "text-foreground"
                          }`}
                        >
                          {item.task}
                        </label>
                        <span className="ml-2 text-xs text-foreground/50">({item.category})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button onClick={() => setFormationPlan(null)} variant="outline" className="flex-1">
                Create New Plan
              </Button>
              <Button onClick={downloadChecklist} className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                Download Full Checklist
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


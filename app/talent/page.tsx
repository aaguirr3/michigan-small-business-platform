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
    setConnectedProfiles((prev) =>
      prev.includes(talentId) ? prev.filter((id) => id !== talentId) : [...prev, talentId],
    )
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
    setMessageText("")
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

        {/* Connections Summary */}
        {connectedProfiles.length > 0 && (
          <Card className="border-primary/20 bg-primary/5">
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
    </div>
  )
}

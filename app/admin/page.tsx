"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

interface AdminUser {
  id: number
  email: string
  businessName: string
  county: string
  createdAt: string
  status: "active" | "inactive"
}

interface AdminStats {
  totalUsers: number
  activeGrants: number
  talentProfiles: number
  complianceQuestions: number
}

// Mock data
const adminStats: AdminStats = {
  totalUsers: 156,
  activeGrants: 10,
  talentProfiles: 42,
  complianceQuestions: 89,
}

const recentUsers: AdminUser[] = [
  {
    id: 1,
    email: "farmer@example.com",
    businessName: "Johnson Family Farm",
    county: "Ionia County",
    createdAt: "2025-01-15",
    status: "active",
  },
  {
    id: 2,
    email: "retail@example.com",
    businessName: "Main Street Market",
    county: "Gratiot County",
    createdAt: "2025-01-14",
    status: "active",
  },
  {
    id: 3,
    email: "manufacturing@example.com",
    businessName: "Rural Manufacturing Co",
    county: "Montcalm County",
    createdAt: "2025-01-13",
    status: "active",
  },
  {
    id: 4,
    email: "startup@example.com",
    businessName: "New Venture LLC",
    county: "Clinton County",
    createdAt: "2025-01-12",
    status: "inactive",
  },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [users, setUsers] = useState<AdminUser[]>(recentUsers)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredUsers = users.filter(
    (user) =>
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.county.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const toggleUserStatus = (userId: number) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, status: user.status === "active" ? "inactive" : "active" } : user,
      ),
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
              MI
            </div>
            <h1 className="text-lg font-bold text-foreground">Admin Dashboard</h1>
          </Link>
          <div className="flex gap-4 items-center">
            <span className="text-sm text-foreground/70">Administrator</span>
            <Button variant="ghost" size="sm">
              Logout
            </Button>
          </div>
        </div>
      </nav>

      {/* Sidebar Navigation */}
      <div className="flex">
        <aside className="w-64 border-r border-border bg-card/50 min-h-screen">
          <div className="p-6 space-y-2">
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                activeTab === "overview" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("users")}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                activeTab === "users" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
              }`}
            >
              Users
            </button>
            <button
              onClick={() => setActiveTab("grants")}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                activeTab === "grants" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
              }`}
            >
              Grants
            </button>
            <button
              onClick={() => setActiveTab("compliance")}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                activeTab === "compliance" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
              }`}
            >
              Compliance Resources
            </button>
            <button
              onClick={() => setActiveTab("talent")}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                activeTab === "talent" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
              }`}
            >
              Talent Profiles
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                activeTab === "settings" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
              }`}
            >
              Settings
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Platform Overview</h2>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <Card className="border-border">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-foreground text-sm font-medium">Total Users</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-primary">{adminStats.totalUsers}</p>
                      <p className="text-xs text-foreground/60 mt-2">Active business accounts</p>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-foreground text-sm font-medium">Active Grants</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-secondary">{adminStats.activeGrants}</p>
                      <p className="text-xs text-foreground/60 mt-2">Available opportunities</p>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-foreground text-sm font-medium">Talent Profiles</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-accent">{adminStats.talentProfiles}</p>
                      <p className="text-xs text-foreground/60 mt-2">Professional providers</p>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-foreground text-sm font-medium">Compliance Q&A</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-primary">{adminStats.complianceQuestions}</p>
                      <p className="text-xs text-foreground/60 mt-2">Questions answered</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Activity Summary */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-foreground">Recent Signups</CardTitle>
                      <CardDescription>New business owners this week</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentUsers.slice(0, 3).map((user) => (
                          <div
                            key={user.id}
                            className="flex justify-between items-center pb-3 border-b border-border last:border-0"
                          >
                            <div>
                              <p className="font-medium text-foreground text-sm">{user.businessName}</p>
                              <p className="text-xs text-foreground/60">{user.email}</p>
                            </div>
                            <span className="text-xs text-foreground/50">{user.createdAt}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-foreground">System Health</CardTitle>
                      <CardDescription>Platform status</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-foreground">Database Status</p>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-semibold">
                            Operational
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-foreground">API Status</p>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-semibold">
                            Operational
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-foreground">Storage Usage</p>
                          <span className="text-sm text-foreground/70">45% of 100GB</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Users Tab */}
            {activeTab === "users" && (
              <div>
                <div className="mb-6 flex justify-between items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">User Management</h2>
                    <p className="text-foreground/70 mt-1">Manage business owner accounts and access</p>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Add User</Button>
                </div>

                <Card className="border-border mb-6">
                  <CardHeader>
                    <CardTitle className="text-foreground">Search & Filter</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Input
                      type="text"
                      placeholder="Search by email, business name, or county"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-card border-border"
                    />
                  </CardContent>
                </Card>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-medium text-foreground">Business Name</th>
                        <th className="text-left py-3 px-4 font-medium text-foreground">Email</th>
                        <th className="text-left py-3 px-4 font-medium text-foreground">County</th>
                        <th className="text-left py-3 px-4 font-medium text-foreground">Joined</th>
                        <th className="text-left py-3 px-4 font-medium text-foreground">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers.map((user) => (
                        <tr key={user.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                          <td className="py-3 px-4 text-foreground">{user.businessName}</td>
                          <td className="py-3 px-4 text-foreground text-sm">{user.email}</td>
                          <td className="py-3 px-4 text-foreground text-sm">{user.county}</td>
                          <td className="py-3 px-4 text-foreground text-sm">{user.createdAt}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                user.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {user.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <button
                              onClick={() => toggleUserStatus(user.id)}
                              className="text-sm text-primary hover:underline"
                            >
                              {user.status === "active" ? "Deactivate" : "Activate"}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Grants Tab */}
            {activeTab === "grants" && (
              <div>
                <div className="mb-6 flex justify-between items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">Grant Management</h2>
                    <p className="text-foreground/70 mt-1">Add, edit, and manage funding opportunities</p>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Add New Grant</Button>
                </div>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Active Grants</CardTitle>
                    <CardDescription>{adminStats.activeGrants} grants currently listed</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { title: "Michigan Small Business Growth Fund", deadline: "2025-12-31" },
                        { title: "Rural Agricultural Development Grant", deadline: "2025-11-30" },
                        { title: "Women-Owned Business Support Program", deadline: "2025-10-15" },
                      ].map((grant) => (
                        <div
                          key={grant.title}
                          className="flex justify-between items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div>
                            <p className="font-medium text-foreground">{grant.title}</p>
                            <p className="text-sm text-foreground/60">Deadline: {grant.deadline}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="outline" size="sm" className="text-destructive bg-transparent">
                              Remove
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Compliance Tab */}
            {activeTab === "compliance" && (
              <div>
                <div className="mb-6 flex justify-between items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">Compliance Resources</h2>
                    <p className="text-foreground/70 mt-1">Manage guidance documents and AI resources</p>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Add Resource</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {["Tax Compliance", "Licensing & Permits", "Employment Law", "Health & Safety"].map((category) => (
                    <Card key={category} className="border-border">
                      <CardHeader>
                        <CardTitle className="text-foreground text-lg">{category}</CardTitle>
                        <CardDescription>Managing resources in this category</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="p-3 bg-muted/50 rounded">
                            <p className="text-sm font-medium text-foreground">Resource 1</p>
                            <p className="text-xs text-foreground/60 mt-1">Last updated: 2025-01-10</p>
                          </div>
                          <div className="p-3 bg-muted/50 rounded">
                            <p className="text-sm font-medium text-foreground">Resource 2</p>
                            <p className="text-xs text-foreground/60 mt-1">Last updated: 2025-01-08</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                          Manage Category
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Talent Tab */}
            {activeTab === "talent" && (
              <div>
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-foreground">Talent Profiles</h2>
                  <p className="text-foreground/70 mt-1">Review and manage professional service provider profiles</p>
                </div>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Active Profiles</CardTitle>
                    <CardDescription>{adminStats.talentProfiles} professionals in the network</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "Sarah Chen", type: "Accounting", county: "Shiawassee County" },
                        { name: "Marcus Johnson", type: "Web Design", county: "Gratiot County" },
                        { name: "Elena Rodriguez", type: "Business Consulting", county: "Montcalm County" },
                      ].map((talent) => (
                        <div
                          key={talent.name}
                          className="flex justify-between items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div>
                            <p className="font-medium text-foreground">{talent.name}</p>
                            <p className="text-sm text-foreground/60">
                              {talent.type} • {talent.county}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                            <Button variant="outline" size="sm" className="text-destructive bg-transparent">
                              Flag
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Admin Settings</h2>

                <div className="space-y-6">
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-foreground">Platform Configuration</CardTitle>
                      <CardDescription>Manage general platform settings</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Platform Name</label>
                        <Input type="text" defaultValue="Michigan Rural Network" className="bg-card border-border" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Support Email</label>
                        <Input
                          type="email"
                          defaultValue="support@michiganruralnetwork.com"
                          className="bg-card border-border"
                        />
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Save Settings</Button>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-foreground">Data & Backup</CardTitle>
                      <CardDescription>Manage platform data</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button variant="outline" className="w-full bg-transparent">
                        Export All Data
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        View Backup History
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

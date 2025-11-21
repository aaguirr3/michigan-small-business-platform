"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
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
          <Card className="border border-border/50 bg-white hover:border-primary/30 transition-all card-shadow hover:card-shadow-hover">
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
            <CardContent>
              <p className="text-sm text-foreground/60 mb-6 leading-relaxed">
                Search grants by industry, county, and demographics with AI summaries
              </p>
              <Link href="/grants">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium">Browse Grants</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Compliance Section */}
          <Card className="border border-border/50 bg-white hover:border-secondary/30 transition-all card-shadow hover:card-shadow-hover">
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
            <CardContent>
              <p className="text-sm text-foreground/60 mb-6 leading-relaxed">
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
          <Card className="border border-border/50 bg-white hover:border-primary/30 transition-all card-shadow hover:card-shadow-hover">
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
            <CardContent>
              <p className="text-sm text-foreground/60 mb-6 leading-relaxed">
                Step-by-step guide with EIN help and downloadable checklist
              </p>
              <Link href="/business-formation">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium">Get Started</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Talent Section */}
          <Card className="border border-border/50 bg-white hover:border-secondary/30 transition-all card-shadow hover:card-shadow-hover">
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
            <CardContent>
              <p className="text-sm text-foreground/60 mb-6 leading-relaxed">
                Connect with accountants, designers, and consultants in your county
              </p>
              <Link href="/talent">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium">Browse Talent</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

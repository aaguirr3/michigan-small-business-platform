"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content - Removed sidebar layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Welcome to Your Dashboard</h1>
          <p className="text-foreground/70">
            Access grants, compliance support, and talent connections all in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Grants Section */}
          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <CardTitle className="text-foreground">Grants & Funding</CardTitle>
              <CardDescription>Find Michigan grants for your business</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70 mb-4">
                Discover funding opportunities tailored for rural Michigan businesses
              </p>
              <Link href="/grants">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Browse Grants</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Compliance Section */}
          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <CardTitle className="text-foreground">Compliance Helper</CardTitle>
              <CardDescription>AI-powered compliance guidance</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70 mb-4">
                Get answers to tax, licensing, and employment compliance questions
              </p>
              <Link href="/compliance">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Ask Questions
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Talent Section */}
          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.856-1.488M15 10a3 3 0 11-6 0 3 3 0 016 0zM4 20h16a2 2 0 002-2v-2a3 3 0 00-5.856-1.488M9 10a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <CardTitle className="text-foreground">Local Talent Network</CardTitle>
              <CardDescription>Connect with rural professionals</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70 mb-4">
                Build relationships with skilled service providers in your community
              </p>
              <Link href="/talent">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Browse Talent</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

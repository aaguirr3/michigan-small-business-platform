"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { useAuth } from "@/contexts/auth-context"

export default function Home() {
  const { isAuthenticated } = useAuth()
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground tracking-tight">
                Start & Grow Your Michigan Business
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Everything you need to launch and scale your business in Michigan. Find funding, handle permits, and connect with local experts—all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                {isAuthenticated ? (
                  <>
                    <Link href="/dashboard">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-medium">
                        Go to Dashboard
                      </Button>
                    </Link>
                    <Link href="/grants">
                      <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-2">
                        Browse Grants
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/signup">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-medium">
                        Get Started Free
                      </Button>
                    </Link>
                    <Link href="/login">
                      <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-2">
                        Sign In
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Right image */}
            <div className="relative h-72 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden card-shadow">
              <Image
                src="/agri_image.jpeg"
                alt="Michigan agriculture landscape"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Only show when authenticated */}
      {isAuthenticated && (
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Everything You Need to Launch
              </h2>
              <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                Four powerful tools to help you start, fund, and grow your Michigan business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Grants Card */}
            <Card className="border border-border/50 bg-white hover:border-primary/30 transition-all card-shadow hover:card-shadow-hover">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground mb-2">Find Grants & Funding</CardTitle>
                <CardDescription className="text-base">
                  Search 15+ Michigan grants with AI-powered summaries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                  Filter by industry, county, and demographics. Get instant eligibility summaries and application deadlines.
                </p>
                <Link href="/grants">
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto font-medium">
                    Browse Grants →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Compliance Card */}
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
                <CardTitle className="text-xl font-semibold text-foreground mb-2">Check Permits & Compliance</CardTitle>
                <CardDescription className="text-base">
                  AI-powered permit checker and compliance assistant
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                  Describe your business idea and get a complete list of required permits, costs, and steps.
                </p>
                <Link href="/compliance">
                  <Button variant="ghost" className="text-secondary hover:text-secondary/80 p-0 h-auto font-medium">
                    Check Permits →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Talent Card */}
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
                <CardTitle className="text-xl font-semibold text-foreground mb-2">Connect with Local Experts</CardTitle>
                <CardDescription className="text-base">
                  Find professionals in your county
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                  Browse accountants, designers, consultants, and service providers by county and specialty.
                </p>
                <Link href="/talent">
                  <Button variant="ghost" className="text-secondary hover:text-secondary/80 p-0 h-auto font-medium">
                    Browse Talent →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Business Formation Card */}
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
                <CardTitle className="text-xl font-semibold text-foreground mb-2">Start Your Business</CardTitle>
                <CardDescription className="text-base">
                  Step-by-step formation guide with checklist
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                  Get personalized guidance for EIN, LLC formation, permits, and costs. Download your checklist.
                </p>
                <Link href="/business-formation">
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto font-medium">
                    Get Started →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Ready to Launch?</h2>
          <p className="text-xl text-foreground/60 mb-10 max-w-2xl mx-auto">
            Join Michigan entrepreneurs who are starting and growing their businesses with our free tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isAuthenticated ? (
              <>
                <Link href="/dashboard">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-medium">
                    Go to Dashboard
                  </Button>
                </Link>
                <Link href="/business-formation">
                  <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-2">
                    Start Formation Guide
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/signup">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-medium">
                    Get Started Free
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-2">
                    Sign In
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-foreground/50 mb-6">Supporting Michigan Business Growth • 2025</p>
            <div className="flex justify-center gap-8">
              <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                About
              </a>
              <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                Contact
              </a>
              <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

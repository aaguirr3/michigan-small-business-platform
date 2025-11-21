import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
                Support for Rural Michigan Small Businesses
              </h2>
              <p className="text-lg text-foreground/80 mb-8 text-pretty">
                Find grants, navigate compliance requirements, and connect with skilled professionals in your
                community—all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Get Started
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right image */}
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/michigan-agriculture-farming-field-green-landscape.jpg"
                alt="Michigan agriculture - sustainable farming practices and rural landscape"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlay for visual depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">What We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Grants Card */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-foreground">Grants & Funding</CardTitle>
                <CardDescription>
                  Discover Michigan grants and funding opportunities designed for rural businesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70">
                  Filter by industry, business stage, and funding amount. Get application tips and deadline alerts.
                </p>
              </CardContent>
            </Card>

            {/* Compliance Card */}
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
                <CardDescription>AI-powered assistance with tax, licensing, and employment compliance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70">
                  Get answers to compliance questions, upload documents for review, and know when to consult a lawyer.
                </p>
              </CardContent>
            </Card>

            {/* Talent Card */}
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
                <CardDescription>Connect with skilled professionals and build community partnerships</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70">
                  Find accountants, designers, consultants, and other professionals in your rural community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Ready to Grow Your Business?</h3>
          <p className="text-foreground/80 mb-8">
            Join hundreds of rural Michigan small business owners getting support and connecting with their community.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Access Your Tools
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-foreground/60">
            <p>Supporting Rural Michigan Business Growth • 2025</p>
            <div className="mt-4 flex justify-center gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                About
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

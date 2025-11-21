import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <nav className="border-b border-border/50 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              {/* Simple Michigan Mitten Logo */}
              <svg viewBox="0 0 40 40" className="w-7 h-7 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6C14 6 10 10 8 16L6 30C6 34 8 36 12 36H28C32 36 34 34 34 30L32 16C30 10 26 6 20 6Z" 
                      fill="currentColor" 
                      fillOpacity="0.1"/>
                <path d="M20 6C14 6 10 10 8 16L6 30C6 34 8 36 12 36H28C32 36 34 34 34 30L32 16C30 10 26 6 20 6Z" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"/>
                <path d="M8 16C8 13 10 11 13 11C16 11 18 13 18 16" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="hidden sm:inline">
              <h1 className="text-lg font-semibold text-foreground">MittenLaunch</h1>
              <p className="text-xs text-foreground/50">Michigan Business Platform</p>
            </div>
          </Link>

          <div className="flex items-center gap-1 sm:gap-1">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="text-foreground/70 hover:text-foreground hover:bg-muted/50 text-sm font-medium">
                Dashboard
              </Button>
            </Link>
            <Link href="/grants">
              <Button variant="ghost" size="sm" className="text-foreground/70 hover:text-foreground hover:bg-muted/50 text-sm font-medium">
                Find Grants
              </Button>
            </Link>
            <Link href="/compliance">
              <Button variant="ghost" size="sm" className="text-foreground/70 hover:text-foreground hover:bg-muted/50 text-sm font-medium">
                AI Compliance
              </Button>
            </Link>
            <Link href="/talent">
              <Button variant="ghost" size="sm" className="text-foreground/70 hover:text-foreground hover:bg-muted/50 text-sm font-medium">
                Talent Connect
              </Button>
            </Link>
            <Link href="/business-formation">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white text-sm font-medium">
                Start Your Business
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

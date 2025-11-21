import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <nav className="border-b border-border bg-card sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">
              ML
            </div>
            <div className="hidden sm:inline">
              <h1 className="text-lg font-bold text-foreground">MittenLaunch</h1>
              <p className="text-xs text-muted-foreground">Helping small businesses grow across the Mitten.</p>
            </div>
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="text-foreground hover:bg-muted">
                Dashboard
              </Button>
            </Link>
            <Link href="/grants">
              <Button variant="ghost" size="sm" className="text-foreground hover:bg-muted">
                Grants
              </Button>
            </Link>
            <Link href="/compliance">
              <Button variant="ghost" size="sm" className="text-foreground hover:bg-muted">
                Compliance
              </Button>
            </Link>
            <Link href="/talent">
              <Button variant="ghost" size="sm" className="text-foreground hover:bg-muted">
                Talent
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

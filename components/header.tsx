import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <nav className="border-b border-border bg-card sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 40 40" className="w-full h-full text-primary" fill="currentColor">
                <path d="M12 4c-2.2 0-4 1.8-4 4v14c0 3.3 2.7 6 6 6h2v-2h-2c-2.2 0-4-1.8-4-4V8c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v2h2V8c0-2.2-1.8-4-4-4H12zm14 6v10c0 1.1.9 2 2 2s2-.9 2-2v-10c0-1.1-.9-2-2-2s-2 .9-2 2zm6 0v10c0 1.1.9 2 2 2s2-.9 2-2v-10c0-1.1-.9-2-2-2s-2 .9-2 2zM8 22h2v10c0 1.1-.9 2-2 2s-2-.9-2-2v-10zm4 0h2v10c0 1.1-.9 2-2 2s-2-.9-2-2v-10z" />
              </svg>
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

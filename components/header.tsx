"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/contexts/auth-context"
import { useEffect, useState } from "react"

export function Header() {
  const router = useRouter()
  const { user, logout, isAuthenticated } = useAuth()
  const [hasTalentProfile, setHasTalentProfile] = useState(false)
  const [isApproved, setIsApproved] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && user) {
      const talentProfiles = JSON.parse(localStorage.getItem("talentProfiles") || "[]")
      const userProfile = talentProfiles.find((p: any) => p.userEmail === user.email)
      if (userProfile) {
        setHasTalentProfile(true)
        setIsApproved(userProfile.isApproved ?? true) // Hardcoded to approved for now
      }
    }
  }, [user])

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <nav className="border-b border-border/50 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
              <img
                src="/mitten-launch-logo.png"
                alt="MittenLaunch Platform"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:inline">
              <h1 className="text-lg font-semibold text-foreground">MittenLaunch</h1>
            </div>
          </Link>

          <div className="flex items-center gap-1 sm:gap-1">
            {isAuthenticated ? (
              <>
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
                <div className="flex flex-col items-end gap-0.5 ml-2 pl-2 border-l border-border/50">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <Avatar className="size-8 hidden sm:flex">
                          <AvatarImage 
                            src="/placeholder-user.jpg" 
                            alt={user?.name || user?.email || "User"} 
                          />
                          <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">
                            {user?.name 
                              ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
                              : user?.email?.[0].toUpperCase() || 'U'
                            }
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-foreground/70 font-medium hidden sm:inline">{user?.name || user?.email}</span>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuLabel>
                        <div className="flex flex-col">
                          <span>{user?.name || user?.email}</span>
                          {hasTalentProfile && (
                            <span className={`text-xs mt-1 ${isApproved ? 'text-green-600' : 'text-yellow-600'}`}>
                              {isApproved ? '✓ Approved' : '⏳ Pending Approval'}
                            </span>
                          )}
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {hasTalentProfile ? (
                        <DropdownMenuItem asChild>
                          <Link href="/talent/my-profile" className="cursor-pointer">
                            View My Talent Profile
                          </Link>
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem asChild>
                          <Link href="/talent/create-profile" className="cursor-pointer">
                            Create Talent Profile
                          </Link>
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive">
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleLogout}
                    className="text-foreground/70 hover:text-foreground hover:bg-muted/50 text-sm font-medium sm:hidden"
                  >
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm" className="text-foreground/70 hover:text-foreground hover:bg-muted/50 text-sm font-medium">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-white text-sm font-medium">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

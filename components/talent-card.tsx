"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface TalentCardProps {
  name: string
  serviceType: string
  skills: string[]
  expertise: string
  location: string
  isConnected?: boolean
  onConnect?: () => void
  onMessage?: () => void
}

export function TalentCard({
  name,
  serviceType,
  skills,
  expertise,
  location,
  isConnected = false,
  onConnect,
  onMessage,
}: TalentCardProps) {
  return (
    <Card className="border-border hover:shadow-md transition-shadow flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-foreground">{name}</CardTitle>
            <CardDescription>{serviceType}</CardDescription>
          </div>
          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
            <span className="text-lg">👤</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-sm text-foreground leading-relaxed mb-4 flex-1">{expertise}</p>
        <div className="mb-4">
          <p className="text-xs font-medium text-foreground/60 mb-2">Skills</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="px-2 py-1 bg-primary/20 text-primary rounded text-xs font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <p className="text-xs text-foreground/60 mb-3">📍 {location}</p>
          <div className="flex gap-2">
            {onConnect && (
              <button
                onClick={onConnect}
                className={`flex-1 px-3 py-2 rounded-lg font-medium transition-colors text-sm ${
                  isConnected ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {isConnected ? "✓ Connected" : "Connect"}
              </button>
            )}
            {onMessage && (
              <Button onClick={onMessage} variant="outline" size="sm" className="flex-1 bg-transparent">
                Message
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

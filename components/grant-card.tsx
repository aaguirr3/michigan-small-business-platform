"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface GrantCardProps {
  title: string
  description: string
  fundingMin: number
  fundingMax: number
  deadline: string
  industries: string[]
  businessSize: string[]
  source: string
  isSaved?: boolean
  onSave?: () => void
}

export function GrantCard({
  title,
  description,
  fundingMin,
  fundingMax,
  deadline,
  industries,
  businessSize,
  source,
  isSaved = false,
  onSave,
}: GrantCardProps) {
  return (
    <Card className="border-border hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <CardTitle className="text-foreground">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          {onSave && (
            <button
              onClick={onSave}
              className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                isSaved ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {isSaved ? "★ Saved" : "☆ Save"}
            </button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div>
            <p className="text-xs font-medium text-foreground/60 mb-1">Funding Range</p>
            <p className="font-semibold text-foreground">
              ${fundingMin.toLocaleString()} - ${fundingMax.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-foreground/60 mb-1">Deadline</p>
            <p className="font-semibold text-foreground">{deadline}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-foreground/60 mb-1">Industries</p>
            <p className="text-sm text-foreground">{industries.slice(0, 2).join(", ")}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-foreground/60 mb-1">Source</p>
            <p className="text-sm text-foreground">{source}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {businessSize.map((size) => (
            <span key={size} className="px-2 py-1 bg-secondary/20 text-secondary rounded text-xs font-medium">
              {size}
            </span>
          ))}
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" size="sm">
          View Details & Apply
        </Button>
      </CardContent>
    </Card>
  )
}

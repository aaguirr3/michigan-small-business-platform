"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ComplianceResourceCardProps {
  title: string
  description: string
  category: string
  requiresLegalReview?: boolean
  content?: string
  onSelect?: () => void
}

export function ComplianceResourceCard({
  title,
  description,
  category,
  requiresLegalReview = false,
  content,
  onSelect,
}: ComplianceResourceCardProps) {
  return (
    <Card className="border-border hover:shadow-md transition-shadow cursor-pointer" onClick={onSelect}>
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <div>
            <CardTitle className="text-foreground">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          {requiresLegalReview && (
            <div className="px-2 py-1 bg-accent/20 text-accent rounded text-xs font-semibold">⚠️ Legal</div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="inline-block px-2 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
        {content && <p className="text-sm text-foreground/70 line-clamp-3 mb-4">{content}</p>}
        {onSelect && (
          <Button size="sm" variant="outline" className="w-full bg-transparent">
            View Details
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

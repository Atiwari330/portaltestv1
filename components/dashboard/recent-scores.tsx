'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingDown, TrendingUp, Minus } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

export function RecentScores() {
  const scores = [
    {
      name: 'PHQ-9',
      label: 'Depression',
      current: 6,
      previous: 8,
      max: 27,
      severity: 'Mild',
      trend: 'down',
      description: 'Minimal symptoms',
    },
    {
      name: 'GAD-7',
      label: 'Anxiety',
      current: 5,
      previous: 7,
      max: 21,
      severity: 'Mild',
      trend: 'down',
      description: 'Mild anxiety',
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'minimal':
      case 'mild':
        return 'success'
      case 'moderate':
        return 'warning'
      case 'severe':
        return 'destructive'
      default:
        return 'secondary'
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-destructive" />
      case 'down':
        return <TrendingDown className="h-4 w-4 text-success" />
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Assessment Scores</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {scores.map((score) => (
          <div key={score.name} className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">{score.name}</h4>
                <p className="text-sm text-muted-foreground">{score.label}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-semibold">{score.current}</span>
                    <span className="text-sm text-muted-foreground">/ {score.max}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    {getTrendIcon(score.trend)}
                    <span className="text-muted-foreground">
                      from {score.previous}
                    </span>
                  </div>
                </div>
                <Badge variant={getSeverityColor(score.severity) as any}>
                  {score.severity}
                </Badge>
              </div>
            </div>
            <div className="space-y-1">
              <Progress value={(score.current / score.max) * 100} className="h-2" />
              <p className="text-xs text-muted-foreground">{score.description}</p>
            </div>
          </div>
        ))}
        <div className="pt-4 border-t">
          <p className="text-sm text-muted-foreground">
            Your scores are improving! You've shown a{' '}
            <span className="font-medium text-success">25% reduction</span> in
            symptoms over the past month.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
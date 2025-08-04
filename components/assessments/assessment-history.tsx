'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingDown, TrendingUp, Minus } from 'lucide-react'
import { motion } from 'framer-motion'

export function AssessmentHistory() {
  const history = [
    {
      id: 1,
      type: 'PHQ-9',
      score: 6,
      severity: 'Mild',
      date: '2024-12-01',
      change: -2,
    },
    {
      id: 2,
      type: 'GAD-7',
      score: 5,
      severity: 'Mild',
      date: '2024-11-28',
      change: -2,
    },
    {
      id: 3,
      type: 'PHQ-9',
      score: 8,
      severity: 'Mild',
      date: '2024-11-24',
      change: -4,
    },
    {
      id: 4,
      type: 'GAD-7',
      score: 7,
      severity: 'Mild',
      date: '2024-11-21',
      change: -3,
    },
    {
      id: 5,
      type: 'PHQ-9',
      score: 12,
      severity: 'Moderate',
      date: '2024-11-17',
      change: 0,
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

  const getChangeIcon = (change: number) => {
    if (change < 0) return <TrendingDown className="h-3 w-3 text-success" />
    if (change > 0) return <TrendingUp className="h-3 w-3 text-destructive" />
    return <Minus className="h-3 w-3 text-muted-foreground" />
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {history.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-between rounded-lg border p-3"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">{item.type}</span>
                  <Badge
                    variant={getSeverityColor(item.severity) as any}
                    className="text-xs"
                  >
                    {item.severity}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {new Date(item.date).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="font-semibold">{item.score}</p>
                  <div className="flex items-center gap-1">
                    {getChangeIcon(item.change)}
                    <span className="text-xs text-muted-foreground">
                      {item.change > 0 ? '+' : ''}{item.change}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-muted/50 p-3">
          <p className="text-sm text-muted-foreground">
            Your scores have improved by{' '}
            <span className="font-medium text-success">40%</span> over the
            past month. Keep up the great work!
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ClipboardList, Clock, AlertCircle } from 'lucide-react'
import { toast } from 'sonner'

export function AssessmentReminders() {
  const assessments = [
    {
      id: 1,
      name: 'PHQ-9',
      type: 'Depression',
      dueIn: '2 days',
      priority: 'medium',
    },
    {
      id: 2,
      name: 'GAD-7',
      type: 'Anxiety',
      dueIn: 'Today',
      priority: 'high',
    },
    {
      id: 3,
      name: 'Mood Check',
      type: 'Daily',
      dueIn: '5 hours',
      priority: 'low',
    },
  ]

  const handleStartAssessment = (name: string) => {
    toast.info(`Starting ${name} assessment...`)
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ClipboardList className="h-5 w-5" />
          Pending Assessments
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {assessments.map((assessment) => (
            <div
              key={assessment.id}
              className="flex items-center justify-between rounded-lg border p-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">{assessment.name}</span>
                  <Badge
                    variant={
                      assessment.priority === 'high'
                        ? 'destructive'
                        : assessment.priority === 'medium'
                        ? 'warning'
                        : 'secondary'
                    }
                    className="text-xs"
                  >
                    {assessment.dueIn}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {assessment.type} Assessment
                </p>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleStartAssessment(assessment.name)}
              >
                Start
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
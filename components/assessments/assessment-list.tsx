'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { ClipboardList, Clock, Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function AssessmentList() {
  const assessments = [
    {
      id: 'phq-9',
      name: 'PHQ-9',
      fullName: 'Patient Health Questionnaire',
      description: 'Measures depression severity',
      questions: 9,
      duration: '5-10 minutes',
      lastCompleted: '3 days ago',
      dueDate: 'Due in 4 days',
      status: 'available',
      progress: 0,
    },
    {
      id: 'gad-7',
      name: 'GAD-7',
      fullName: 'Generalized Anxiety Disorder Scale',
      description: 'Assesses anxiety symptoms',
      questions: 7,
      duration: '5 minutes',
      lastCompleted: '1 week ago',
      dueDate: 'Due today',
      status: 'due',
      progress: 0,
    },
    {
      id: 'mood',
      name: 'Daily Mood Check',
      fullName: 'Quick Mood Assessment',
      description: 'Track your daily mood and energy',
      questions: 5,
      duration: '2-3 minutes',
      lastCompleted: 'Yesterday',
      dueDate: 'Due daily',
      status: 'in-progress',
      progress: 60,
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'due':
        return <Badge variant="destructive">Due Now</Badge>
      case 'available':
        return <Badge variant="secondary">Available</Badge>
      case 'in-progress':
        return <Badge variant="warning">In Progress</Badge>
      default:
        return null
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Available Assessments</h2>
      {assessments.map((assessment) => (
        <Card key={assessment.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <ClipboardList className="h-5 w-5" />
                  {assessment.name}
                </CardTitle>
                <CardDescription>{assessment.fullName}</CardDescription>
              </div>
              {getStatusBadge(assessment.status)}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              {assessment.description}
            </p>
            
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <ClipboardList className="h-4 w-4 text-muted-foreground" />
                <span>{assessment.questions} questions</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{assessment.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>{assessment.lastCompleted}</span>
              </div>
            </div>

            {assessment.progress > 0 && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{assessment.progress}%</span>
                </div>
                <Progress value={assessment.progress} />
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              <span className="text-sm text-muted-foreground">
                {assessment.dueDate}
              </span>
              <Button asChild>
                <Link href={`/assessments/${assessment.id}`}>
                  {assessment.progress > 0 ? 'Continue' : 'Start'} Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Circle, Target } from 'lucide-react'
import { motion } from 'framer-motion'

export function TreatmentProgress() {
  const goals = [
    {
      id: 1,
      title: 'Improve sleep quality',
      progress: 75,
      status: 'in-progress',
      milestones: [
        { completed: true, text: 'Establish bedtime routine' },
        { completed: true, text: 'Reduce screen time before bed' },
        { completed: true, text: 'Practice sleep hygiene' },
        { completed: false, text: 'Achieve 7+ hours consistently' },
      ],
    },
    {
      id: 2,
      title: 'Manage anxiety symptoms',
      progress: 60,
      status: 'in-progress',
      milestones: [
        { completed: true, text: 'Learn breathing techniques' },
        { completed: true, text: 'Identify triggers' },
        { completed: false, text: 'Practice mindfulness daily' },
        { completed: false, text: 'Reduce panic episodes' },
      ],
    },
    {
      id: 3,
      title: 'Build social connections',
      progress: 40,
      status: 'in-progress',
      milestones: [
        { completed: true, text: 'Join support group' },
        { completed: true, text: 'Reach out to one friend weekly' },
        { completed: false, text: 'Attend social events' },
        { completed: false, text: 'Build new friendships' },
      ],
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5" />
          Treatment Goals
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {goals.map((goal, index) => (
          <motion.div
            key={goal.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-medium">{goal.title}</h4>
              <span className="text-sm font-medium">{goal.progress}%</span>
            </div>
            <Progress value={goal.progress} className="h-2" />
            <div className="space-y-2">
              {goal.milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-sm"
                >
                  {milestone.completed ? (
                    <CheckCircle2 className="h-4 w-4 text-success" />
                  ) : (
                    <Circle className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span
                    className={
                      milestone.completed
                        ? 'text-muted-foreground line-through'
                        : ''
                    }
                  >
                    {milestone.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
        <div className="pt-4 border-t">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Overall Progress</p>
            <Badge variant="success">3 of 5 goals on track</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
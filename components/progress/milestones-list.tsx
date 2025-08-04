'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy, Star, Target, TrendingUp, Calendar, Heart, Users, Book } from 'lucide-react'
import { motion } from 'framer-motion'

export function MilestonesList() {
  const milestones = [
    {
      id: 1,
      title: 'First Week Complete',
      description: 'Completed your first week of treatment',
      date: '2024-09-15',
      icon: Calendar,
      achieved: true,
      category: 'Journey',
    },
    {
      id: 2,
      title: 'Assessment Champion',
      description: 'Completed 10 assessments',
      date: '2024-10-01',
      icon: Target,
      achieved: true,
      category: 'Engagement',
    },
    {
      id: 3,
      title: 'Mood Improver',
      description: 'Achieved 25% reduction in PHQ-9 score',
      date: '2024-10-15',
      icon: TrendingUp,
      achieved: true,
      category: 'Progress',
    },
    {
      id: 4,
      title: 'Consistency Star',
      description: 'Attended 10 sessions without missing',
      date: '2024-11-01',
      icon: Star,
      achieved: true,
      category: 'Attendance',
    },
    {
      id: 5,
      title: 'Self-Care Advocate',
      description: 'Practiced self-care activities for 30 days',
      date: '2024-11-15',
      icon: Heart,
      achieved: true,
      category: 'Wellness',
    },
    {
      id: 6,
      title: 'Group Participant',
      description: 'Attended first group therapy session',
      date: '2024-11-20',
      icon: Users,
      achieved: true,
      category: 'Social',
    },
    {
      id: 7,
      title: 'Knowledge Seeker',
      description: 'Read 5 mental health resources',
      date: '2024-11-25',
      icon: Book,
      achieved: true,
      category: 'Education',
    },
    {
      id: 8,
      title: 'Recovery Warrior',
      description: 'Reached "Mild" severity on all assessments',
      date: '2024-12-01',
      icon: Trophy,
      achieved: true,
      category: 'Achievement',
    },
    {
      id: 9,
      title: 'Three Month Milestone',
      description: 'Complete 3 months of continuous treatment',
      date: '2024-12-15',
      icon: Calendar,
      achieved: false,
      category: 'Journey',
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Journey: 'bg-blue-500',
      Engagement: 'bg-green-500',
      Progress: 'bg-purple-500',
      Attendance: 'bg-yellow-500',
      Wellness: 'bg-pink-500',
      Social: 'bg-indigo-500',
      Education: 'bg-cyan-500',
      Achievement: 'bg-orange-500',
    }
    return colors[category] || 'bg-gray-500'
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Milestones & Achievements</CardTitle>
        <CardDescription>
          Celebrate your progress and achievements on your mental health journey
        </CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {milestones.map((milestone) => {
            const Icon = milestone.icon
            return (
              <motion.div
                key={milestone.id}
                variants={item}
                className={`relative ${!milestone.achieved ? 'opacity-50' : ''}`}
              >
                <Card className="h-full">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          milestone.achieved
                            ? getCategoryColor(milestone.category)
                            : 'bg-muted'
                        } text-white`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h4 className="font-medium text-sm">{milestone.title}</h4>
                        <p className="text-xs text-muted-foreground">
                          {milestone.description}
                        </p>
                        <div className="flex items-center justify-between pt-2">
                          <span className="text-xs text-muted-foreground">
                            {new Date(milestone.date).toLocaleDateString()}
                          </span>
                          <Badge
                            variant={milestone.achieved ? 'success' : 'secondary'}
                            className="text-xs"
                          >
                            {milestone.achieved ? 'Achieved' : 'Upcoming'}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="mt-6 rounded-lg bg-muted p-4">
          <div className="flex items-center gap-3">
            <Trophy className="h-8 w-8 text-primary" />
            <div>
              <p className="font-medium">Amazing Progress!</p>
              <p className="text-sm text-muted-foreground">
                You've achieved 8 out of 9 milestones. Keep up the great work!
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingDown, Calendar, Target, Award } from 'lucide-react'
import { motion } from 'framer-motion'

export function ProgressStats() {
  const stats = [
    {
      title: 'Symptom Reduction',
      value: '40%',
      change: '-40%',
      description: 'Since starting treatment',
      icon: TrendingDown,
      color: 'text-success',
    },
    {
      title: 'Days in Treatment',
      value: '84',
      change: '+14',
      description: 'Current streak: 14 days',
      icon: Calendar,
      color: 'text-primary',
    },
    {
      title: 'Goals Achieved',
      value: '12/20',
      change: '+3',
      description: 'This month',
      icon: Target,
      color: 'text-secondary',
    },
    {
      title: 'Milestones',
      value: '8',
      change: '+2',
      description: 'Total earned',
      icon: Award,
      color: 'text-accent',
    },
  ]

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
    >
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <motion.div key={stat.title} variants={item}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
                <div className="mt-2 text-xs">
                  <span className={stat.color}>{stat.change}</span>
                  <span className="text-muted-foreground"> from last month</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
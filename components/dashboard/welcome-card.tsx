'use client'

import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

export function WelcomeCard() {
  const currentHour = new Date().getHours()
  const greeting = 
    currentHour < 12 ? 'Good morning' : 
    currentHour < 18 ? 'Good afternoon' : 
    'Good evening'

  return (
    <Card className="border-primary/20 bg-gradient-to-r from-primary/10 to-secondary/10">
      <CardContent className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold">
            {greeting}, Sarah!
          </h2>
          <p className="mt-2 text-muted-foreground">
            You're making great progress on your mental health journey. 
            Keep up the excellent work!
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <div>
              <span className="font-medium">Current streak:</span>{' '}
              <span className="text-primary">14 days</span>
            </div>
            <div>
              <span className="font-medium">Assessments completed:</span>{' '}
              <span className="text-primary">28</span>
            </div>
            <div>
              <span className="font-medium">Next session:</span>{' '}
              <span className="text-primary">Tomorrow, 2:00 PM</span>
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  )
}
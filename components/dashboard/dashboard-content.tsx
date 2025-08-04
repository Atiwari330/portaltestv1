'use client'

import { motion } from 'framer-motion'
import { WelcomeCard } from './welcome-card'
import { AssessmentReminders } from './assessment-reminders'
import { RecentScores } from './recent-scores'
import { TreatmentProgress } from './treatment-progress'
import { QuickActions } from './quick-actions'
import { MedicationReminders } from './medication-reminders'
import { UpcomingSession } from './upcoming-session'

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

export function DashboardContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-6"
    >
      <motion.div variants={item}>
        <WelcomeCard />
      </motion.div>

      <motion.div
        variants={item}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <div className="md:col-span-1">
          <UpcomingSession />
        </div>
        <div className="md:col-span-1">
          <AssessmentReminders />
        </div>
        <div className="md:col-span-1">
          <MedicationReminders />
        </div>
      </motion.div>

      <motion.div
        variants={item}
        className="grid gap-6 md:grid-cols-2"
      >
        <RecentScores />
        <TreatmentProgress />
      </motion.div>

      <motion.div variants={item}>
        <QuickActions />
      </motion.div>
    </motion.div>
  )
}
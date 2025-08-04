import { Suspense } from 'react'
import { ProgressCharts } from '@/components/progress/progress-charts'
import { ProgressSkeleton } from '@/components/progress/progress-skeleton'
import { ProgressStats } from '@/components/progress/progress-stats'
import { MilestonesList } from '@/components/progress/milestones-list'

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Progress</h1>
        <p className="text-muted-foreground">
          Track your mental health journey and celebrate your achievements
        </p>
      </div>

      <Suspense fallback={<ProgressSkeleton />}>
        <ProgressStats />
        <ProgressCharts />
        <MilestonesList />
      </Suspense>
    </div>
  )
}
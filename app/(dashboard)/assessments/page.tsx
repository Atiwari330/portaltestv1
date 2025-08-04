import { Suspense } from 'react'
import { AssessmentList } from '@/components/assessments/assessment-list'
import { AssessmentHistory } from '@/components/assessments/assessment-history'
import { AssessmentSkeleton } from '@/components/assessments/assessment-skeleton'

export default function AssessmentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Assessments</h1>
        <p className="text-muted-foreground">
          Complete assessments to track your mental health progress
        </p>
      </div>

      <Suspense fallback={<AssessmentSkeleton />}>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <AssessmentList />
          </div>
          <div className="lg:col-span-1">
            <AssessmentHistory />
          </div>
        </div>
      </Suspense>
    </div>
  )
}
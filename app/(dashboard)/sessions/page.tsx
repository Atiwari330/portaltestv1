import { Suspense } from 'react'
import { SessionsList } from '@/components/sessions/sessions-list'
import { SessionsSkeleton } from '@/components/sessions/sessions-skeleton'
import { SessionCalendar } from '@/components/sessions/session-calendar'

export default function SessionsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Sessions</h1>
        <p className="text-muted-foreground">
          Manage your therapy sessions and appointments
        </p>
      </div>

      <Suspense fallback={<SessionsSkeleton />}>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SessionsList />
          </div>
          <div className="lg:col-span-1">
            <SessionCalendar />
          </div>
        </div>
      </Suspense>
    </div>
  )
}
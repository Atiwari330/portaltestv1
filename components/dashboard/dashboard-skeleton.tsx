export function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="h-32 animate-pulse rounded-lg bg-muted" />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="h-48 animate-pulse rounded-lg bg-muted" />
        <div className="h-48 animate-pulse rounded-lg bg-muted" />
        <div className="h-48 animate-pulse rounded-lg bg-muted" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="h-64 animate-pulse rounded-lg bg-muted" />
        <div className="h-64 animate-pulse rounded-lg bg-muted" />
      </div>

      <div className="h-24 animate-pulse rounded-lg bg-muted" />
    </div>
  )
}
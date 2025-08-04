export function ProgressSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-32 animate-pulse rounded-lg bg-muted" />
        ))}
      </div>
      
      <div className="h-96 animate-pulse rounded-lg bg-muted" />
      
      <div className="h-64 animate-pulse rounded-lg bg-muted" />
    </div>
  )
}
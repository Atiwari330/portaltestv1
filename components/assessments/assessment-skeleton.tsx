export function AssessmentSkeleton() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-48 animate-pulse rounded-lg bg-muted" />
        ))}
      </div>
      <div className="lg:col-span-1">
        <div className="h-96 animate-pulse rounded-lg bg-muted" />
      </div>
    </div>
  )
}
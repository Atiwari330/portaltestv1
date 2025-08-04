export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="animate-pulse space-y-4">
        <div className="h-12 w-12 rounded-full bg-primary/20" />
        <div className="h-4 w-24 rounded bg-muted" />
      </div>
    </div>
  )
}
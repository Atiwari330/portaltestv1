import { Suspense } from 'react'
import { MessagesList } from '@/components/messages/messages-list'
import { MessagesSkeleton } from '@/components/messages/messages-skeleton'
import { NewMessageButton } from '@/components/messages/new-message-button'

export default function MessagesPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
          <p className="text-muted-foreground">
            Secure communication with your care team
          </p>
        </div>
        <NewMessageButton />
      </div>

      <Suspense fallback={<MessagesSkeleton />}>
        <MessagesList />
      </Suspense>
    </div>
  )
}
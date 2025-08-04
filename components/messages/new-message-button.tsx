'use client'

import { Button } from '@/components/ui/button'
import { PenSquare } from 'lucide-react'
import { toast } from 'sonner'

export function NewMessageButton() {
  return (
    <Button onClick={() => toast.info('Opening message composer...')}>
      <PenSquare className="mr-2 h-4 w-4" />
      New Message
    </Button>
  )
}
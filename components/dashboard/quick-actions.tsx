'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Calendar,
  MessageSquare,
  FileText,
  Phone,
  Brain,
  HeartHandshake,
} from 'lucide-react'
import { toast } from 'sonner'

export function QuickActions() {
  const actions = [
    {
      icon: Calendar,
      label: 'Schedule Appointment',
      description: 'Book your next session',
      action: () => toast.info('Opening appointment scheduler...'),
    },
    {
      icon: MessageSquare,
      label: 'Message Provider',
      description: 'Send a secure message',
      action: () => toast.info('Opening messages...'),
    },
    {
      icon: FileText,
      label: 'View Session Notes',
      description: 'Last session summary',
      action: () => toast.info('Loading session notes...'),
    },
    {
      icon: Brain,
      label: 'Mindfulness Exercise',
      description: 'Quick 5-minute session',
      action: () => toast.success('Starting mindfulness exercise...'),
    },
    {
      icon: HeartHandshake,
      label: 'Support Resources',
      description: 'Crisis & help lines',
      action: () => toast.info('Opening support resources...'),
    },
    {
      icon: Phone,
      label: 'Emergency Contact',
      description: 'Get immediate help',
      action: () => toast.warning('Opening emergency contacts...'),
    },
  ]

  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {actions.map((action, index) => {
            const Icon = action.icon
            return (
              <Button
                key={index}
                variant="outline"
                className="h-auto flex-col gap-2 p-4"
                onClick={action.action}
              >
                <Icon className="h-6 w-6 text-primary" />
                <div className="space-y-1 text-center">
                  <p className="text-sm font-medium">{action.label}</p>
                  <p className="text-xs text-muted-foreground">
                    {action.description}
                  </p>
                </div>
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
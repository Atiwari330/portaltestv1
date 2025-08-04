'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { MessageSquare, Paperclip, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

export function MessagesList() {
  const conversations = [
    {
      id: 1,
      provider: 'Dr. Emily Smith',
      role: 'Psychiatrist',
      lastMessage: 'I've reviewed your recent assessment scores and I'm pleased to see the improvement...',
      timestamp: '2 hours ago',
      unread: true,
      hasAttachment: false,
    },
    {
      id: 2,
      provider: 'Sarah Johnson, LCSW',
      role: 'Therapist',
      lastMessage: 'Thank you for sharing that in our last session. Remember to practice the breathing exercises...',
      timestamp: 'Yesterday',
      unread: false,
      hasAttachment: true,
    },
    {
      id: 3,
      provider: 'Care Coordinator',
      role: 'Support Team',
      lastMessage: 'Your prescription refill is ready for pickup at the pharmacy.',
      timestamp: '3 days ago',
      unread: false,
      hasAttachment: false,
    },
    {
      id: 4,
      provider: 'Dr. Emily Smith',
      role: 'Psychiatrist',
      lastMessage: 'Please complete the PHQ-9 assessment before our next appointment.',
      timestamp: '1 week ago',
      unread: false,
      hasAttachment: false,
    },
  ]

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-4"
    >
      {conversations.map((conversation) => (
        <motion.div key={conversation.id} variants={item}>
          <Card className={conversation.unread ? 'border-primary/50' : ''}>
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10 bg-primary/10">
                  <div className="flex h-full w-full items-center justify-center text-sm font-medium">
                    {getInitials(conversation.provider)}
                  </div>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-base flex items-center gap-2">
                        {conversation.provider}
                        {conversation.unread && (
                          <Badge variant="destructive" className="text-xs">
                            New
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription>{conversation.role}</CardDescription>
                    </div>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {conversation.timestamp}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className={`text-sm ${conversation.unread ? 'font-medium' : 'text-muted-foreground'}`}>
                  {conversation.lastMessage}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {conversation.hasAttachment && (
                      <Badge variant="outline" className="text-xs gap-1">
                        <Paperclip className="h-3 w-3" />
                        Attachment
                      </Badge>
                    )}
                  </div>
                  <Button size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    View Conversation
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
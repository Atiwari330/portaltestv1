'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, Video, MapPin, FileText, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'

export function SessionsList() {
  const sessions = [
    {
      id: 1,
      date: '2024-12-05',
      time: '2:00 PM',
      provider: 'Dr. Emily Smith',
      type: 'Individual Therapy',
      format: 'video',
      status: 'upcoming',
      duration: '60 min',
      notes: false,
    },
    {
      id: 2,
      date: '2024-11-28',
      time: '2:00 PM',
      provider: 'Dr. Emily Smith',
      type: 'Individual Therapy',
      format: 'video',
      status: 'completed',
      duration: '60 min',
      notes: true,
      summary: 'Discussed coping strategies for work stress and practiced mindfulness techniques.',
    },
    {
      id: 3,
      date: '2024-11-21',
      time: '2:00 PM',
      provider: 'Dr. Emily Smith',
      type: 'Psychiatric Consultation',
      format: 'in-person',
      status: 'completed',
      duration: '30 min',
      notes: true,
      summary: 'Medication review and adjustment. Continuing current treatment plan.',
    },
    {
      id: 4,
      date: '2024-12-12',
      time: '3:00 PM',
      provider: 'Sarah Johnson, LCSW',
      type: 'Group Therapy',
      format: 'video',
      status: 'scheduled',
      duration: '90 min',
      notes: false,
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <Badge variant="warning">Upcoming</Badge>
      case 'scheduled':
        return <Badge variant="secondary">Scheduled</Badge>
      case 'completed':
        return <Badge variant="success">Completed</Badge>
      case 'cancelled':
        return <Badge variant="destructive">Cancelled</Badge>
      default:
        return null
    }
  }

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'video':
        return <Video className="h-4 w-4" />
      case 'in-person':
        return <MapPin className="h-4 w-4" />
      default:
        return null
    }
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
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Your Sessions</h2>
        <Button onClick={() => toast.info('Opening appointment scheduler...')}>
          Schedule New
        </Button>
      </div>

      {sessions.map((session) => (
        <motion.div key={session.id} variants={item}>
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{session.type}</CardTitle>
                  <CardDescription>{session.provider}</CardDescription>
                </div>
                {getStatusBadge(session.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{new Date(session.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{session.time} ({session.duration})</span>
                </div>
                <div className="flex items-center gap-2">
                  {getFormatIcon(session.format)}
                  <span className="capitalize">{session.format}</span>
                </div>
                {session.type === 'Group Therapy' && (
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>6-8 participants</span>
                  </div>
                )}
              </div>

              {session.summary && (
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-sm">{session.summary}</p>
                </div>
              )}

              <div className="flex gap-2">
                {session.status === 'upcoming' && (
                  <>
                    <Button size="sm" className="flex-1">
                      Join Session
                    </Button>
                    <Button size="sm" variant="outline">
                      Reschedule
                    </Button>
                  </>
                )}
                {session.status === 'scheduled' && (
                  <>
                    <Button size="sm" variant="outline" className="flex-1">
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      Reschedule
                    </Button>
                  </>
                )}
                {session.status === 'completed' && session.notes && (
                  <Button size="sm" variant="outline" className="flex-1">
                    <FileText className="mr-2 h-4 w-4" />
                    View Session Notes
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
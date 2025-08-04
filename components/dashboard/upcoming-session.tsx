'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, Video, MapPin } from 'lucide-react'

export function UpcomingSession() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Next Session</span>
          <Badge variant="secondary">Tomorrow</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>Tuesday, December 5th</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>2:00 PM - 3:00 PM EST</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Video className="h-4 w-4 text-muted-foreground" />
            <span>Video Session</span>
          </div>
        </div>

        <div className="rounded-lg bg-muted p-3">
          <p className="text-sm font-medium">Dr. Emily Smith</p>
          <p className="text-xs text-muted-foreground">Psychiatrist</p>
        </div>

        <div className="flex gap-2">
          <Button size="sm" className="flex-1">
            Join Session
          </Button>
          <Button size="sm" variant="outline">
            Reschedule
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
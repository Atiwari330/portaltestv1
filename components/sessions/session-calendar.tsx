'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export function SessionCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const sessions = {
    '2024-12-05': { type: 'therapy', time: '2:00 PM' },
    '2024-12-12': { type: 'group', time: '3:00 PM' },
    '2024-12-19': { type: 'therapy', time: '2:00 PM' },
    '2024-12-26': { type: 'psychiatry', time: '10:00 AM' },
  }

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }
    return days
  }

  const formatDate = (day: number) => {
    const year = currentMonth.getFullYear()
    const month = String(currentMonth.getMonth() + 1).padStart(2, '0')
    const dayStr = String(day).padStart(2, '0')
    return `${year}-${month}-${dayStr}`
  }

  const getSessionType = (type: string) => {
    switch (type) {
      case 'therapy':
        return { label: 'T', color: 'bg-primary' }
      case 'group':
        return { label: 'G', color: 'bg-secondary' }
      case 'psychiatry':
        return { label: 'P', color: 'bg-accent' }
      default:
        return { label: '?', color: 'bg-muted' }
    }
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newDate = new Date(prev)
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const monthYear = currentMonth.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  const days = getDaysInMonth(currentMonth)
  const today = new Date().getDate()
  const isCurrentMonth = 
    currentMonth.getMonth() === new Date().getMonth() &&
    currentMonth.getFullYear() === new Date().getFullYear()

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Calendar</CardTitle>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigateMonth('prev')}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium w-32 text-center">
              {monthYear}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigateMonth('next')}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 text-center">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
            <div
              key={day}
              className="text-xs font-medium text-muted-foreground p-2"
            >
              {day}
            </div>
          ))}
          {days.map((day, index) => {
            if (!day) {
              return <div key={`empty-${index}`} />
            }
            const dateStr = formatDate(day)
            const session = sessions[dateStr]
            const isToday = isCurrentMonth && day === today

            return (
              <div
                key={day}
                className={`relative p-2 text-sm ${
                  isToday ? 'font-bold' : ''
                }`}
              >
                <div
                  className={`${
                    isToday
                      ? 'bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto'
                      : ''
                  }`}
                >
                  {day}
                </div>
                {session && (
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                    <div
                      className={`w-5 h-5 rounded-full ${
                        getSessionType(session.type).color
                      } text-white text-xs flex items-center justify-center`}
                    >
                      {getSessionType(session.type).label}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
        <div className="mt-4 space-y-2 border-t pt-4">
          <p className="text-sm font-medium">Legend:</p>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-4 h-4 rounded-full bg-primary" />
              <span>Individual Therapy</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-4 h-4 rounded-full bg-secondary" />
              <span>Group Therapy</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-4 h-4 rounded-full bg-accent" />
              <span>Psychiatry</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { toast } from 'sonner'

export function NotificationSettings() {
  const handleSave = () => {
    toast.success('Notification preferences updated')
  }

  const notifications = [
    {
      id: 'appointment-reminders',
      label: 'Appointment Reminders',
      description: 'Get reminders 24 hours and 1 hour before appointments',
      defaultChecked: true,
    },
    {
      id: 'assessment-due',
      label: 'Assessment Due Dates',
      description: 'Notifications when assessments are due',
      defaultChecked: true,
    },
    {
      id: 'medication-reminders',
      label: 'Medication Reminders',
      description: 'Daily reminders to take medications',
      defaultChecked: true,
    },
    {
      id: 'new-messages',
      label: 'New Messages',
      description: 'Alerts when you receive messages from providers',
      defaultChecked: true,
    },
    {
      id: 'session-summaries',
      label: 'Session Summaries',
      description: 'Notifications when session notes are available',
      defaultChecked: true,
    },
    {
      id: 'progress-updates',
      label: 'Progress Updates',
      description: 'Weekly progress reports and milestone achievements',
      defaultChecked: false,
    },
    {
      id: 'educational-content',
      label: 'Educational Content',
      description: 'Tips and resources for mental health',
      defaultChecked: false,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>
          Choose which notifications you'd like to receive
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-center justify-between space-x-2 rounded-lg border p-4"
            >
              <div className="flex-1 space-y-1">
                <Label
                  htmlFor={notification.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {notification.label}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
              <Switch
                id={notification.id}
                defaultChecked={notification.defaultChecked}
              />
            </div>
          ))}
        </div>

        <div className="space-y-4 border-t pt-6">
          <h3 className="text-sm font-medium">Notification Methods</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <Switch id="email-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sms-notifications">SMS Notifications</Label>
              <Switch id="sms-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="push-notifications">Push Notifications</Label>
              <Switch id="push-notifications" />
            </div>
          </div>
        </div>

        <Button onClick={handleSave}>Save Preferences</Button>
      </CardContent>
    </Card>
  )
}
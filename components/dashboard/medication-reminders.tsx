'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Pill, Clock, CheckCircle2 } from 'lucide-react'
import { toast } from 'sonner'

export function MedicationReminders() {
  const medications = [
    {
      id: 1,
      name: 'Sertraline',
      dosage: '50mg',
      time: '8:00 AM',
      taken: false,
      frequency: 'Daily',
    },
    {
      id: 2,
      name: 'Melatonin',
      dosage: '5mg',
      time: '9:00 PM',
      taken: true,
      frequency: 'As needed',
    },
  ]

  const handleTakeMedication = (name: string) => {
    toast.success(`Marked ${name} as taken`)
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Pill className="h-5 w-5" />
          Medications
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {medications.map((med) => (
            <div
              key={med.id}
              className="flex items-center justify-between rounded-lg border p-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">{med.name}</span>
                  <Badge variant="outline" className="text-xs">
                    {med.dosage}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{med.time}</span>
                  <span>•</span>
                  <span>{med.frequency}</span>
                </div>
              </div>
              {med.taken ? (
                <Badge variant="success" className="gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  Taken
                </Badge>
              ) : (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleTakeMedication(med.name)}
                >
                  Take
                </Button>
              )}
            </div>
          ))}
        </div>
        <Button variant="link" className="mt-4 h-auto p-0 text-xs">
          View medication schedule →
        </Button>
      </CardContent>
    </Card>
  )
}
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { toast } from 'sonner'

export function PrivacySettings() {
  const handleSave = () => {
    toast.success('Privacy settings updated')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Privacy Settings</CardTitle>
        <CardDescription>
          Control how your information is shared and used
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-3">
            <Label>Data Sharing with Care Team</Label>
            <RadioGroup defaultValue="all">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="share-all" />
                <Label htmlFor="share-all" className="font-normal">
                  Share all health data with my care team
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="limited" id="share-limited" />
                <Label htmlFor="share-limited" className="font-normal">
                  Share limited data (assessments and appointments only)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="share-none" />
                <Label htmlFor="share-none" className="font-normal">
                  Do not share data automatically
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4 border-t pt-4">
            <h3 className="text-sm font-medium">Research Participation</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="anonymous-data">
                    Anonymous Data for Research
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Allow anonymized data to be used for mental health research
                  </p>
                </div>
                <Switch id="anonymous-data" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="quality-improvement">
                    Quality Improvement Programs
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Help improve our services through data analysis
                  </p>
                </div>
                <Switch id="quality-improvement" defaultChecked />
              </div>
            </div>
          </div>

          <div className="space-y-4 border-t pt-4">
            <h3 className="text-sm font-medium">Communication Preferences</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="provider-notes">
                    Provider Note Visibility
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    See full clinical notes from sessions
                  </p>
                </div>
                <Switch id="provider-notes" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="family-access">
                    Family Member Access
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Allow designated family members to view your progress
                  </p>
                </div>
                <Switch id="family-access" />
              </div>
            </div>
          </div>

          <div className="space-y-4 border-t pt-4">
            <h3 className="text-sm font-medium">Data Export</h3>
            <p className="text-sm text-muted-foreground">
              Download your health data for personal records
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Export Assessments
              </Button>
              <Button variant="outline" size="sm">
                Export Session Notes
              </Button>
              <Button variant="outline" size="sm">
                Export All Data
              </Button>
            </div>
          </div>
        </div>

        <Button onClick={handleSave}>Save Privacy Settings</Button>
      </CardContent>
    </Card>
  )
}
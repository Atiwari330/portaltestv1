'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { TrendingDown } from 'lucide-react'
import { motion } from 'framer-motion'

export function ProgressCharts() {
  const phq9Data = [
    { date: 'Oct 1', score: 15, severity: 'Moderate' },
    { date: 'Oct 15', score: 12, severity: 'Moderate' },
    { date: 'Nov 1', score: 10, severity: 'Moderate' },
    { date: 'Nov 15', score: 8, severity: 'Mild' },
    { date: 'Dec 1', score: 6, severity: 'Mild' },
  ]

  const gad7Data = [
    { date: 'Oct 1', score: 12, severity: 'Moderate' },
    { date: 'Oct 15', score: 10, severity: 'Moderate' },
    { date: 'Nov 1', score: 8, severity: 'Mild' },
    { date: 'Nov 15', score: 7, severity: 'Mild' },
    { date: 'Dec 1', score: 5, severity: 'Mild' },
  ]

  const moodData = [
    { date: 'Mon', mood: 6, energy: 5 },
    { date: 'Tue', mood: 7, energy: 6 },
    { date: 'Wed', mood: 5, energy: 4 },
    { date: 'Thu', mood: 7, energy: 7 },
    { date: 'Fri', mood: 8, energy: 7 },
    { date: 'Sat', mood: 8, energy: 8 },
    { date: 'Sun', mood: 7, energy: 6 },
  ]

  const maxScore = (data: any[], key: string) => 
    Math.max(...data.map(d => d[key]))

  const ChartBar = ({ value, max, color }: { value: number; max: number; color: string }) => (
    <motion.div
      className={`${color} rounded-t`}
      initial={{ height: 0 }}
      animate={{ height: `${(value / max) * 100}%` }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    />
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress Over Time</CardTitle>
        <CardDescription>
          Track your assessment scores and daily mood patterns
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="assessments">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="assessments">Assessments</TabsTrigger>
            <TabsTrigger value="mood">Daily Mood</TabsTrigger>
          </TabsList>

          <TabsContent value="assessments" className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">PHQ-9 (Depression)</h3>
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-4 w-4 text-success" />
                  <span className="text-sm text-muted-foreground">
                    60% improvement
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-end justify-between h-40 gap-2">
                  {phq9Data.map((item, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center h-full">
                      <div className="relative flex-1 w-full flex items-end">
                        <ChartBar
                          value={item.score}
                          max={27}
                          color="bg-primary"
                        />
                      </div>
                      <span className="text-xs mt-2">{item.score}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  {phq9Data.map((item, index) => (
                    <span key={index}>{item.date}</span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">GAD-7 (Anxiety)</h3>
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-4 w-4 text-success" />
                  <span className="text-sm text-muted-foreground">
                    58% improvement
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-end justify-between h-40 gap-2">
                  {gad7Data.map((item, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center h-full">
                      <div className="relative flex-1 w-full flex items-end">
                        <ChartBar
                          value={item.score}
                          max={21}
                          color="bg-secondary"
                        />
                      </div>
                      <span className="text-xs mt-2">{item.score}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  {gad7Data.map((item, index) => (
                    <span key={index}>{item.date}</span>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mood" className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">This Week's Mood & Energy</h3>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded" />
                    <span>Mood</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-secondary rounded" />
                    <span>Energy</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-end justify-between h-40 gap-2">
                  {moodData.map((item, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center h-full gap-1">
                      <div className="relative flex-1 w-full flex items-end gap-1">
                        <div className="flex-1 relative h-full flex items-end">
                          <ChartBar
                            value={item.mood}
                            max={10}
                            color="bg-primary"
                          />
                        </div>
                        <div className="flex-1 relative h-full flex items-end">
                          <ChartBar
                            value={item.energy}
                            max={10}
                            color="bg-secondary"
                          />
                        </div>
                      </div>
                      <span className="text-xs mt-2">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <p className="text-sm font-medium">Average Mood</p>
                  <p className="text-2xl font-bold">6.7/10</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Average Energy</p>
                  <p className="text-2xl font-bold">6.0/10</p>
                </div>
                <Badge variant="success">Improving</Badge>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
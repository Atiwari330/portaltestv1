'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { ArrowLeft, ArrowRight, Save } from 'lucide-react'
import { toast } from 'sonner'

const GAD7_QUESTIONS = [
  'Feeling nervous, anxious, or on edge',
  'Not being able to stop or control worrying',
  'Worrying too much about different things',
  'Trouble relaxing',
  'Being so restless that it is hard to sit still',
  'Becoming easily annoyed or irritable',
  'Feeling afraid, as if something awful might happen',
]

const ANSWER_OPTIONS = [
  { value: '0', label: 'Not at all' },
  { value: '1', label: 'Several days' },
  { value: '2', label: 'More than half the days' },
  { value: '3', label: 'Nearly every day' },
]

export function GAD7Assessment() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const progress = ((currentQuestion + 1) / GAD7_QUESTIONS.length) * 100

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value })
  }

  const handleNext = () => {
    if (currentQuestion < GAD7_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, value) => sum + parseInt(value), 0)
  }

  const getSeverity = (score: number) => {
    if (score >= 15) return { level: 'Severe', color: 'destructive' }
    if (score >= 10) return { level: 'Moderate', color: 'warning' }
    if (score >= 5) return { level: 'Mild', color: 'warning' }
    return { level: 'Minimal', color: 'success' }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    const score = calculateScore()
    const severity = getSeverity(score)
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success('Assessment completed successfully!', {
      description: `Your GAD-7 score is ${score} (${severity.level})`,
    })
    
    router.push('/assessments')
  }

  const isLastQuestion = currentQuestion === GAD7_QUESTIONS.length - 1
  const canProceed = answers[currentQuestion] !== undefined

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">GAD-7 Assessment</h1>
        <p className="text-muted-foreground">
          Generalized Anxiety Disorder 7-item Scale
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <CardTitle>Question {currentQuestion + 1} of {GAD7_QUESTIONS.length}</CardTitle>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          <CardDescription>
            Over the last 2 weeks, how often have you been bothered by the following problem?
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-medium mb-4">
              {GAD7_QUESTIONS[currentQuestion]}
            </h3>
            
            <RadioGroup
              value={answers[currentQuestion]}
              onValueChange={handleAnswer}
              className="space-y-3"
            >
              {ANSWER_OPTIONS.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent transition-colors"
                >
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label
                    htmlFor={option.value}
                    className="flex-1 cursor-pointer font-normal"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </motion.div>

          <div className="flex items-center justify-between pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            
            <Button
              variant="outline"
              onClick={() => {
                toast.info('Progress saved')
                router.push('/assessments')
              }}
            >
              <Save className="mr-2 h-4 w-4" />
              Save & Exit
            </Button>

            {isLastQuestion ? (
              <Button
                onClick={handleSubmit}
                disabled={!canProceed || isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={!canProceed}
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="pt-6">
          <h4 className="font-medium mb-2">Tips for Managing Anxiety:</h4>
          <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
            <li>Practice deep breathing exercises</li>
            <li>Try progressive muscle relaxation</li>
            <li>Engage in regular physical activity</li>
            <li>Maintain a consistent sleep schedule</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
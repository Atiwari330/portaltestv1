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

const PHQ9_QUESTIONS = [
  'Little interest or pleasure in doing things',
  'Feeling down, depressed, or hopeless',
  'Trouble falling or staying asleep, or sleeping too much',
  'Feeling tired or having little energy',
  'Poor appetite or overeating',
  'Feeling bad about yourself — or that you are a failure or have let yourself or your family down',
  'Trouble concentrating on things, such as reading the newspaper or watching television',
  'Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual',
  'Thoughts that you would be better off dead or of hurting yourself in some way',
]

const ANSWER_OPTIONS = [
  { value: '0', label: 'Not at all' },
  { value: '1', label: 'Several days' },
  { value: '2', label: 'More than half the days' },
  { value: '3', label: 'Nearly every day' },
]

export function PHQ9Assessment() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const progress = ((currentQuestion + 1) / PHQ9_QUESTIONS.length) * 100

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value })
  }

  const handleNext = () => {
    if (currentQuestion < PHQ9_QUESTIONS.length - 1) {
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
    if (score >= 20) return { level: 'Severe', color: 'destructive' }
    if (score >= 15) return { level: 'Moderately Severe', color: 'destructive' }
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
      description: `Your PHQ-9 score is ${score} (${severity.level})`,
    })
    
    router.push('/assessments')
  }

  const isLastQuestion = currentQuestion === PHQ9_QUESTIONS.length - 1
  const canProceed = answers[currentQuestion] !== undefined

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">PHQ-9 Assessment</h1>
        <p className="text-muted-foreground">
          Patient Health Questionnaire - Depression Screening
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <CardTitle>Question {currentQuestion + 1} of {PHQ9_QUESTIONS.length}</CardTitle>
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
              {PHQ9_QUESTIONS[currentQuestion]}
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

      {currentQuestion === 8 && (
        <Card className="border-destructive/50 bg-destructive/5">
          <CardContent className="pt-6">
            <p className="text-sm">
              <strong>Important:</strong> If you're having thoughts of self-harm, 
              please reach out for help immediately. You can contact the 
              National Suicide Prevention Lifeline at 988 or text "HELLO" to 741741.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
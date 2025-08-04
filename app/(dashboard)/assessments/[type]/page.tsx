import { notFound } from 'next/navigation'
import { PHQ9Assessment } from '@/components/assessments/phq9-assessment'
import { GAD7Assessment } from '@/components/assessments/gad7-assessment'

const assessmentComponents = {
  'phq-9': PHQ9Assessment,
  'gad-7': GAD7Assessment,
}

export default function AssessmentPage({
  params,
}: {
  params: { type: string }
}) {
  const AssessmentComponent = assessmentComponents[params.type as keyof typeof assessmentComponents]

  if (!AssessmentComponent) {
    notFound()
  }

  return <AssessmentComponent />
}
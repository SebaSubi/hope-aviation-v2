'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Question {
  id: string
  text: string
  options: {
    id: string
    text: string
  }[]
  correctAnswer: string
}

export default function ExamView({
  params,
}: {
  params: { courseId: string; subjectId: string; lessonId: string }
}) {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState<number | null>(null)

  // TODO: Replace with actual API call to get questions
  const questions: Question[] = [
    {
      id: '1',
      text: 'What is the first step in pre-flight procedures?',
      options: [
        { id: 'a', text: 'Check weather conditions' },
        { id: 'b', text: 'Inspect aircraft exterior' },
        { id: 'c', text: 'Review flight plan' },
        { id: 'd', text: 'Check fuel levels' },
      ],
      correctAnswer: 'a',
    },
    {
      id: '2',
      text: 'Which instrument shows aircraft altitude?',
      options: [
        { id: 'a', text: 'Airspeed indicator' },
        { id: 'b', text: 'Altimeter' },
        { id: 'c', text: 'Vertical speed indicator' },
        { id: 'd', text: 'Attitude indicator' },
      ],
      correctAnswer: 'b',
    },
    // Add more questions...
  ]

  const currentQuestion = questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === questions.length - 1

  const handleAnswerSelect = (questionId: string, answerId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }))
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
    }
  }

  const handleSubmit = () => {
    setIsSubmitting(true)
    // Calculate score
    const correctAnswers = questions.filter(
      (q) => answers[q.id] === q.correctAnswer
    ).length
    const calculatedScore = (correctAnswers / questions.length) * 100
    setScore(calculatedScore)
    setShowResults(true)

    // TODO: Submit results to backend
    console.log('Submitting exam results...')
  }

  const handleReturnToLesson = () => {
    router.push(
      `/student/my-courses/${params.courseId}/subjects/${params.subjectId}`
    )
  }

  if (showResults) {
    return (
      <div className="rounded-lg bg-white p-6 shadow">
        <h1 className="text-2xl font-bold text-gray-900">Exam Results</h1>
        <div className="mt-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900">{score}%</div>
            <p className="mt-2 text-gray-600">
              {score && score >= 70
                ? 'Congratulations! You passed the exam.'
                : 'You need to review the material and try again.'}
            </p>
          </div>
          <div className="mt-8">
            <button
              onClick={handleReturnToLesson}
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
            >
              Return to Lesson
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Lesson Exam</h1>
        <p className="mt-2 text-gray-600">
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-900">
          {currentQuestion.text}
        </h2>
        <div className="mt-4 space-y-3">
          {currentQuestion.options.map((option) => (
            <label
              key={option.id}
              className="flex cursor-pointer items-center space-x-3 rounded-lg border border-gray-200 p-4 hover:bg-gray-50"
            >
              <input
                type="radio"
                name={`question-${currentQuestion.id}`}
                value={option.id}
                checked={answers[currentQuestion.id] === option.id}
                onChange={() => handleAnswerSelect(currentQuestion.id, option.id)}
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-900">{option.text}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:opacity-50"
        >
          Previous
        </button>
        {isLastQuestion ? (
          <button
            onClick={handleSubmit}
            disabled={!answers[currentQuestion.id] || isSubmitting}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Exam'}
          </button>
        ) : (
          <button
            onClick={handleNext}
            disabled={!answers[currentQuestion.id]}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 disabled:opacity-50"
          >
            Next
          </button>
        )}
      </div>
    </div>
  )
} 
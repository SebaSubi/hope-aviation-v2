'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { use } from 'react'
import Quiz from '@/components/quiz/Quiz'
import { QuizResult, QuizQuestion } from '@/types/student'
import { mockClasses, mockQuizResults } from '@/data/mockData'

export default function ClassQuiz({ params }: { params: Promise<{ courseId: string; subjectId: string; classId: string }> }) {
  const resolvedParams = use(params)
  const [quizResults, setQuizResults] = useState<QuizResult[]>([])
  const [classTitle, setClassTitle] = useState('')
  const [questions, setQuestions] = useState<QuizQuestion[]>([])

  useEffect(() => {
    // TODO: Replace with actual API calls
    const foundClass = mockClasses.find(c => c.id === resolvedParams.classId)
    if (foundClass) {
      setClassTitle(foundClass.title)
      setQuestions(foundClass.quizQuestions || [])
      setQuizResults(mockQuizResults.filter(r => r.classId === resolvedParams.classId))
    }
  }, [resolvedParams.classId])

  const handleQuizComplete = (score: number, total: number) => {
    const newResult: QuizResult = {
      id: Date.now().toString(),
      score,
      total,
      date: new Date().toISOString(),
      userId: 'user1', // TODO: Get from auth context
      classId: resolvedParams.classId
    }
    setQuizResults([...quizResults, newResult])
    // TODO: Save results to backend
  }

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <Link
          href={`/student/my-courses/${resolvedParams.courseId}/subjects/${resolvedParams.subjectId}/classes/${resolvedParams.classId}`}
          className="text-sm text-blue-600 hover:text-blue-500"
        >
          ← Volver a la Clase
        </Link>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Quiz: {classTitle}
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Quiz
            questions={questions}
            onComplete={handleQuizComplete}
            title={`Quiz: ${classTitle}`}
          />
        </div>

        <div className="space-y-6">
          {quizResults.length > 0 && (
            <div className="rounded-lg bg-white p-6 shadow">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Historial de Intentos
              </h2>
              <div className="space-y-4">
                {quizResults.map((result) => (
                  <div key={result.id} className="border-b pb-4">
                    <p className="text-sm text-gray-500">
                      {new Date(result.date).toLocaleDateString()}
                    </p>
                    <p className="text-lg font-medium text-gray-900">
                      {result.score} de {result.total} ({Math.round((result.score / result.total) * 100)}%)
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

interface Question {
  id: string
  text: string
  type: 'multiple-choice' | 'true-false'
  options?: {
    id: string
    text: string
  }[]
  correctAnswer: string
}

interface Quiz {
  id: string
  questions: Question[]
}

export default function QuizPage() {
  const { courseId, subjectId, classId } = useParams()
  const router = useRouter()
  const [quiz, setQuiz] = useState<Quiz | null>(null)
  const [loading, setLoading] = useState(true)
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({})
  const [isSubmittingQuiz, setIsSubmittingQuiz] = useState(false)
  const [quizResult, setQuizResult] = useState<{
    correct: number
    total: number
    passed: boolean
  } | null>(null)

  useEffect(() => {
    // Datos de ejemplo del quiz
    const exampleQuiz: Quiz = {
      id: '1',
      questions: [
        {
          id: '1',
          text: '¿Quién realizó el primer vuelo exitoso de un avión más pesado que el aire?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Leonardo da Vinci' },
            { id: 'b', text: 'Los hermanos Wright' },
            { id: 'c', text: 'Otto Lilienthal' },
            { id: 'd', text: 'Alberto Santos-Dumont' },
          ],
          correctAnswer: 'b',
        },
        {
          id: '2',
          text: 'El primer vuelo transatlántico sin escalas fue realizado por Charles Lindbergh en 1927.',
          type: 'true-false',
          correctAnswer: 'true',
        },
        {
          id: '3',
          text: '¿Cuál fue el primer avión comercial a reacción?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Boeing 707' },
            { id: 'b', text: 'De Havilland Comet' },
            { id: 'c', text: 'Douglas DC-8' },
            { id: 'd', text: 'Tupolev Tu-104' },
          ],
          correctAnswer: 'b',
        },
        {
          id: '4',
          text: 'El Concorde fue el primer avión supersónico de pasajeros.',
          type: 'true-false',
          correctAnswer: 'true',
        },
        {
          id: '5',
          text: '¿En qué año se realizó el primer vuelo del Boeing 747?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '1965' },
            { id: 'b', text: '1969' },
            { id: 'c', text: '1972' },
            { id: 'd', text: '1975' },
          ],
          correctAnswer: 'b',
        },
        {
          id: '6',
          text: 'El Airbus A380 es el avión de pasajeros más grande del mundo.',
          type: 'true-false',
          correctAnswer: 'true',
        },
        {
          id: '7',
          text: '¿Cuál fue el primer avión en romper la barrera del sonido?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: 'Bell X-1' },
            { id: 'b', text: 'Lockheed SR-71' },
            { id: 'c', text: 'North American X-15' },
            { id: 'd', text: 'Mikoyan-Gurevich MiG-25' },
          ],
          correctAnswer: 'a',
        },
        {
          id: '8',
          text: 'El Boeing 787 Dreamliner fue el primer avión comercial construido principalmente con materiales compuestos.',
          type: 'true-false',
          correctAnswer: 'true',
        },
        {
          id: '9',
          text: '¿En qué año se fundó la International Air Transport Association (IATA)?',
          type: 'multiple-choice',
          options: [
            { id: 'a', text: '1945' },
            { id: 'b', text: '1950' },
            { id: 'c', text: '1960' },
            { id: 'd', text: '1970' },
          ],
          correctAnswer: 'a',
        },
        {
          id: '10',
          text: 'El primer vuelo comercial de pasajeros fue realizado por la aerolínea KLM en 1919.',
          type: 'true-false',
          correctAnswer: 'true',
        },
      ],
    }

    setQuiz(exampleQuiz)
    setLoading(false)
  }, [])

  const handleQuizAnswerChange = (questionId: string, answer: string) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }))
  }

  const handleQuizSubmit = () => {
    if (!quiz) return

    setIsSubmittingQuiz(true)
    let correct = 0
    const total = quiz.questions.length

    quiz.questions.forEach((question) => {
      if (quizAnswers[question.id] === question.correctAnswer) {
        correct++
      }
    })

    const passed = correct >= total * 0.7 // 70% para aprobar
    setQuizResult({ correct, total, passed })
    setIsSubmittingQuiz(false)
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900">
        <div className="text-xl text-white">Cargando...</div>
      </div>
    )
  }

  if (!quiz) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900">
        <div className="text-xl text-white">Quiz no encontrado</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href={`/student/my-courses/${courseId}/subjects/${subjectId}/classes/${classId}`}
            className="inline-flex items-center text-blue-400 hover:text-blue-300"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Volver a la Clase
          </Link>
        </div>

        <div className="mb-8 rounded-lg bg-gray-800 p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Quiz de la Clase
          </h1>
          <p className="mt-2 text-lg text-gray-300">
            Responde las siguientes 10 preguntas para evaluar tu comprensión del tema.
          </p>
        </div>

        {quizResult ? (
          <div className="rounded-lg bg-gray-800 p-6 shadow-sm">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white">
                {quizResult.passed ? '¡Felicidades!' : 'Inténtalo de nuevo'}
              </h3>
              <p className="mt-2 text-gray-300">
                Obtuviste {quizResult.correct} de {quizResult.total} respuestas
                correctas
              </p>
              <div className="mt-6 space-x-4">
                <button
                  onClick={() => {
                    setQuizResult(null)
                    setQuizAnswers({})
                  }}
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-500"
                >
                  Intentar de nuevo
                </button>
                <Link
                  href={`/student/my-courses/${courseId}/subjects/${subjectId}/classes/${classId}`}
                  className="rounded-md bg-gray-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gray-600"
                >
                  Volver a la Clase
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-lg bg-gray-800 p-6 shadow-sm">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleQuizSubmit()
              }}
              className="space-y-8"
            >
              {quiz.questions.map((question, index) => (
                <div key={question.id} className="rounded-lg bg-gray-700 p-6">
                  <h3 className="text-xl font-semibold text-white">
                    Pregunta {index + 1}
                  </h3>
                  <p className="mt-2 text-gray-300">{question.text}</p>

                  {question.type === 'multiple-choice' && (
                    <div className="mt-4 space-y-3">
                      {question.options?.map((option) => (
                        <label
                          key={option.id}
                          className="flex items-center space-x-3"
                        >
                          <input
                            type="radio"
                            name={`question-${question.id}`}
                            value={option.id}
                            checked={quizAnswers[question.id] === option.id}
                            onChange={() =>
                              handleQuizAnswerChange(question.id, option.id)
                            }
                            className="h-4 w-4 border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-gray-300">{option.text}</span>
                        </label>
                      ))}
                    </div>
                  )}

                  {question.type === 'true-false' && (
                    <div className="mt-4 space-y-3">
                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value="true"
                          checked={quizAnswers[question.id] === 'true'}
                          onChange={() =>
                            handleQuizAnswerChange(question.id, 'true')
                          }
                          className="h-4 w-4 border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-300">Verdadero</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value="false"
                          checked={quizAnswers[question.id] === 'false'}
                          onChange={() =>
                            handleQuizAnswerChange(question.id, 'false')
                          }
                          className="h-4 w-4 border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-300">Falso</span>
                      </label>
                    </div>
                  )}
                </div>
              ))}

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmittingQuiz}
                  className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 disabled:opacity-50"
                >
                  {isSubmittingQuiz ? 'Enviando...' : 'Enviar Quiz'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
} 
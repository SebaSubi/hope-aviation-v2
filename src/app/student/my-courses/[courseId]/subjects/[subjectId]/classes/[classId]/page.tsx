'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface Material {
  id: string
  type: 'video' | 'document'
  title: string
  url: string
  duration?: string
}

interface QuizAttempt {
  id: string
  date: string
  score: number
  totalQuestions: number
  passed: boolean
}

interface Quiz {
  id: string
  questions: {
    id: string
    text: string
    type: 'multiple-choice' | 'true-false'
    options?: {
      id: string
      text: string
    }[]
    correctAnswer: string
  }[]
}

interface Class {
  id: string
  name: string
  description: string
  duration: string
  status: 'completed' | 'in-progress'
  materials: Material[]
  quiz: Quiz
  quizAttempts: QuizAttempt[]
}

export default function ClassPage() {
  const { courseId, subjectId, classId } = useParams()
  const [classData, setClassData] = useState<Class | null>(null)
  const [loading, setLoading] = useState(true)
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({})
  const [isSubmittingQuiz, setIsSubmittingQuiz] = useState(false)
  const [quizResult, setQuizResult] = useState<{
    correct: number
    total: number
    passed: boolean
  } | null>(null)

  useEffect(() => {
    // Datos de ejemplo
    const exampleClasses: Record<string, Record<string, Record<string, Class>>> = {
      '1': {
        '1': {
          '1': {
            id: '1',
            name: 'Historia de la Aviación',
            description:
              'Un recorrido por los hitos más importantes en la historia de la aviación, desde los primeros intentos de vuelo hasta la era moderna.',
            duration: '45 min',
            status: 'completed',
            materials: [
              {
                id: '1',
                type: 'video',
                title: 'Historia de la Aviación - Documental',
                url: '/videos/historia-aviacion.mp4',
                duration: '30 min',
              },
              {
                id: '2',
                type: 'document',
                title: 'Linea de Tiempo de la Aviación',
                url: '/documents/linea-tiempo-aviacion.pdf',
              },
              {
                id: '3',
                type: 'document',
                title: 'Biografías de Pioneros de la Aviación',
                url: '/documents/pioneros-aviacion.pdf',
              },
            ],
            quiz: {
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
              ],
            },
            quizAttempts: [
              {
                id: '1',
                date: '2024-03-15',
                score: 100,
                totalQuestions: 10,
                passed: true,
              },
              {
                id: '2',
                date: '2024-03-10',
                score: 50,
                totalQuestions: 10,
                passed: false,
              },
            ],
          },
        },
      },
    }

    const selectedClass = exampleClasses[courseId as string]?.[subjectId as string]?.[classId as string]
    setClassData(selectedClass || null)
    setLoading(false)
  }, [courseId, subjectId, classId])

  const handleQuizAnswerChange = (questionId: string, answer: string) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }))
  }

  const handleQuizSubmit = () => {
    if (!classData) return

    setIsSubmittingQuiz(true)
    let correct = 0
    const total = classData.quiz.questions.length

    classData.quiz.questions.forEach((question) => {
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

  if (!classData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900">
        <div className="text-xl text-white">Clase no encontrada</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href={`/student/my-courses/${courseId}/subjects/${subjectId}`}
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
            Volver a la Materia
          </Link>
        </div>

        <div className="mb-8 rounded-lg bg-gray-800 p-6 shadow-sm">
          <div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              {classData.name}
            </h1>
            <p className="mt-2 text-lg text-gray-300">{classData.description}</p>
            <div className="mt-4 flex items-center text-gray-300">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Duración: {classData.duration}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">Contenido</h2>
          <div className="space-y-4">
            {classData.materials.map((material) => (
              <div
                key={material.id}
                className="rounded-lg bg-gray-800 p-6 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {material.title}
                    </h3>
                    {material.duration && (
                      <p className="mt-2 text-gray-300">
                        Duración: {material.duration}
                      </p>
                    )}
                  </div>
                  <a
                    href={material.url}
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-500"
                  >
                    {material.type === 'video' && 'Ver Video'}
                    {material.type === 'document' && 'Ver Documento'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">Quiz de la Clase</h2>
          <div className="rounded-lg bg-gray-800 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">Evaluación de Conocimientos</h3>
                <p className="mt-2 text-gray-300">
                  Realiza el quiz de 10 preguntas para evaluar tu comprensión del tema.
                </p>
              </div>
              <Link
                href={`/student/my-courses/${courseId}/subjects/${subjectId}/classes/${classId}/quiz`}
                className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-blue-500"
              >
                Realizar Quiz
              </Link>
            </div>
          </div>
        </div>

        {classData.quizAttempts.length > 0 && (
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              Historial de Quizzes
            </h2>
            <div className="space-y-4">
              {classData.quizAttempts.map((attempt) => (
                <div
                  key={attempt.id}
                  className="rounded-lg bg-gray-800 p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300">
                        Fecha: {new Date(attempt.date).toLocaleDateString()}
                      </p>
                      <p className="mt-2 text-gray-300">
                        Puntuación: {attempt.score} de {attempt.totalQuestions}
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                        attempt.passed
                          ? 'bg-green-900 text-green-400'
                          : 'bg-red-900 text-red-400'
                      }`}
                    >
                      {attempt.passed ? 'Aprobado' : 'No Aprobado'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 
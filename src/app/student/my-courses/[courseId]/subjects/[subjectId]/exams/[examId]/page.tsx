'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

interface Question {
  id: string
  text: string
  type: 'multiple-choice' | 'true-false' | 'short-answer'
  options?: {
    id: string
    text: string
  }[]
  correctAnswer: string
  points: number
}

interface Exam {
  id: string
  name: string
  description: string
  duration: string
  passingGrade: number
  questions: Question[]
}

export default function ExamPage() {
  const { courseId, subjectId, examId } = useParams()
  const router = useRouter()
  const [exam, setExam] = useState<Exam | null>(null)
  const [loading, setLoading] = useState(true)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [timeLeft, setTimeLeft] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Datos de ejemplo
    const exampleExams: Record<string, Record<string, Record<string, Exam>>> = {
      '1': {
        '1': {
          '1': {
            id: '1',
            name: 'Examen Parcial - Introducción a la Aviación',
            description:
              'Evaluación de los conceptos básicos de aerodinámica y componentes de la aeronave.',
            duration: '60 min',
            passingGrade: 70,
            questions: [
              {
                id: '1',
                text: '¿Cuál de las siguientes fuerzas actúa sobre una aeronave en vuelo?',
                type: 'multiple-choice',
                options: [
                  { id: 'a', text: 'Sustentación' },
                  { id: 'b', text: 'Empuje' },
                  { id: 'c', text: 'Resistencia' },
                  { id: 'd', text: 'Todas las anteriores' },
                ],
                correctAnswer: 'd',
                points: 10,
              },
              {
                id: '2',
                text: 'El principio de Bernoulli explica la generación de sustentación en las alas.',
                type: 'true-false',
                correctAnswer: 'true',
                points: 5,
              },
              {
                id: '3',
                text: '¿Cuál es la función principal del timón de dirección?',
                type: 'multiple-choice',
                options: [
                  { id: 'a', text: 'Controlar el cabeceo' },
                  { id: 'b', text: 'Controlar el alabeo' },
                  { id: 'c', text: 'Controlar la guiñada' },
                  { id: 'd', text: 'Controlar la velocidad' },
                ],
                correctAnswer: 'c',
                points: 10,
              },
              {
                id: '4',
                text: 'Describe brevemente cómo funcionan los flaps de una aeronave.',
                type: 'short-answer',
                correctAnswer: 'Los flaps aumentan la sustentación al incrementar la curvatura del ala y su área efectiva, permitiendo vuelos más lentos y seguros durante el despegue y aterrizaje.',
                points: 15,
              },
              {
                id: '5',
                text: '¿Cuál es el propósito de los spoilers en una aeronave?',
                type: 'multiple-choice',
                options: [
                  { id: 'a', text: 'Aumentar la sustentación' },
                  { id: 'b', text: 'Reducir la sustentación' },
                  { id: 'c', text: 'Mejorar la eficiencia del combustible' },
                  { id: 'd', text: 'Controlar la temperatura' },
                ],
                correctAnswer: 'b',
                points: 10,
              },
            ],
          },
        },
      },
    }

    const selectedExam = exampleExams[courseId as string]?.[subjectId as string]?.[examId as string]
    setExam(selectedExam || null)
    setLoading(false)

    // Configurar el temporizador
    if (selectedExam) {
      const durationInMinutes = parseInt(selectedExam.duration)
      setTimeLeft(durationInMinutes * 60)
    }
  }, [courseId, subjectId, examId])

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    } else if (timeLeft === 0 && !isSubmitting) {
      handleSubmit()
    }
  }, [timeLeft, isSubmitting])

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }))
  }

  const handleSubmit = async () => {
    if (isSubmitting) return
    setIsSubmitting(true)

    // Calcular la puntuación
    let totalPoints = 0
    let earnedPoints = 0

    exam?.questions.forEach((question) => {
      totalPoints += question.points
      if (answers[question.id] === question.correctAnswer) {
        earnedPoints += question.points
      }
    })

    const grade = Math.round((earnedPoints / totalPoints) * 100)

    // Aquí iría la llamada a la API para guardar los resultados
    // Por ahora solo redirigimos
    router.push(
      `/student/my-courses/${courseId}/subjects/${subjectId}/exams/${examId}/results?grade=${grade}`
    )
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900">
        <div className="text-xl text-white">Cargando...</div>
      </div>
    )
  }

  if (!exam) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900">
        <div className="text-xl text-white">Examen no encontrado</div>
      </div>
    )
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white sm:text-4xl">
                {exam.name}
              </h1>
              <p className="mt-2 text-lg text-gray-300">{exam.description}</p>
            </div>
            <div className="mt-4 flex items-center md:mt-0">
              <div className="rounded-full bg-red-900 px-4 py-2">
                <span className="text-xl font-bold text-red-400">
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-8">
          {exam.questions.map((question, index) => (
            <div
              key={question.id}
              className="rounded-lg bg-gray-800 p-6 shadow-sm"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">
                  Pregunta {index + 1}
                </h3>
                <p className="mt-2 text-gray-300">{question.text}</p>
              </div>

              {question.type === 'multiple-choice' && (
                <div className="space-y-3">
                  {question.options?.map((option) => (
                    <label
                      key={option.id}
                      className="flex items-center space-x-3"
                    >
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option.id}
                        checked={answers[question.id] === option.id}
                        onChange={() => handleAnswerChange(question.id, option.id)}
                        className="h-4 w-4 border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-300">{option.text}</span>
                    </label>
                  ))}
                </div>
              )}

              {question.type === 'true-false' && (
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value="true"
                      checked={answers[question.id] === 'true'}
                      onChange={() => handleAnswerChange(question.id, 'true')}
                      className="h-4 w-4 border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-300">Verdadero</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value="false"
                      checked={answers[question.id] === 'false'}
                      onChange={() => handleAnswerChange(question.id, 'false')}
                      className="h-4 w-4 border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-300">Falso</span>
                  </label>
                </div>
              )}

              {question.type === 'short-answer' && (
                <textarea
                  value={answers[question.id] || ''}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  className="mt-2 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows={4}
                  placeholder="Escribe tu respuesta aquí..."
                />
              )}
            </div>
          ))}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 disabled:opacity-50"
            >
              {isSubmitting ? 'Enviando...' : 'Finalizar Examen'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 
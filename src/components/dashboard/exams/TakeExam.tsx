'use client'

import { useState } from 'react'

interface Subject {
  id: string
  title: string
  classes: Class[]
}

interface Class {
  id: string
  title: string
  exam?: Exam
}

interface Exam {
  id: string
  title: string
  description: string
  questions: Question[]
}

interface Question {
  id: string
  text: string
  options: string[]
  correctAnswer: number
}

// Datos de ejemplo
const subjects: Subject[] = [
  {
    id: '1',
    title: 'Resolución de Conflictos',
    classes: [
      {
        id: '1-1',
        title: 'Shock Cultural',
        exam: {
          id: '1-1-1',
          title: 'Examen - Shock Cultural',
          description: 'Este examen evalúa tus conocimientos sobre el manejo del shock cultural en situaciones de emergencia.',
          questions: [
            {
              id: '1',
              text: '¿Cuál es el primer paso para manejar el shock cultural?',
              options: [
                'Identificar los síntomas',
                'Ignorar las diferencias culturales',
                'Imponer la propia cultura',
                'Aislarse de la situación'
              ],
              correctAnswer: 0,
            },
            {
              id: '2',
              text: '¿Qué estrategia es más efectiva para superar el shock cultural?',
              options: [
                'Aprender sobre la cultura local',
                'Mantener distancia con los locales',
                'Criticar las diferencias culturales',
                'Evitar la interacción cultural'
              ],
              correctAnswer: 0,
            },
          ],
        }
      },
      {
        id: '1-2',
        title: 'Mediación',
        exam: {
          id: '1-2-1',
          title: 'Examen - Mediación',
          description: 'Este examen evalúa tus conocimientos sobre técnicas de mediación y resolución pacífica de conflictos.',
          questions: [
            {
              id: '1',
              text: '¿Cuál es el objetivo principal de la mediación?',
              options: [
                'Encontrar una solución mutuamente aceptable',
                'Imponer una solución',
                'Evitar el conflicto',
                'Culpar a una de las partes'
              ],
              correctAnswer: 0,
            },
            {
              id: '2',
              text: '¿Qué cualidad es más importante en un mediador?',
              options: [
                'Imparcialidad',
                'Autoridad',
                'Persuasión',
                'Dominio'
              ],
              correctAnswer: 0,
            },
          ],
        }
      }
    ]
  }
]

export default function TakeExam() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [score, setScore] = useState<number | null>(null)
  const [selectedSubjectId, setSelectedSubjectId] = useState('')
  const [selectedClassId, setSelectedClassId] = useState('')

  const selectedSubject = subjects.find(s => s.id === selectedSubjectId)
  const selectedClass = selectedSubject?.classes.find(c => c.id === selectedClassId)
  const exam = selectedClass?.exam

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answerIndex
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (exam && currentQuestion < exam.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    if (!exam) return

    let correctAnswers = 0
    answers.forEach((answer, index) => {
      if (answer === exam.questions[index].correctAnswer) {
        correctAnswers++
      }
    })
    const finalScore = (correctAnswers / exam.questions.length) * 100
    setScore(finalScore)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Resultado del Examen
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Has completado el examen {exam?.title}
            </p>
            <div className="mt-8">
              <div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-2xl font-semibold text-indigo-800">
                {score?.toFixed(0)}%
              </div>
            </div>
            <div className="mt-8">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Volver a la Clase
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {!exam ? (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Seleccionar Examen
            </h2>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Materia
              </label>
              <select
                id="subject"
                name="subject"
                value={selectedSubjectId}
                onChange={(e) => {
                  setSelectedSubjectId(e.target.value)
                  setSelectedClassId('')
                }}
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Selecciona una materia</option>
                {subjects.map((subject) => (
                  <option key={subject.id} value={subject.id}>
                    {subject.title}
                  </option>
                ))}
              </select>
            </div>

            {selectedSubject && (
              <div>
                <label
                  htmlFor="class"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Clase
                </label>
                <select
                  id="class"
                  name="class"
                  value={selectedClassId}
                  onChange={(e) => setSelectedClassId(e.target.value)}
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Selecciona una clase</option>
                  {selectedSubject.classes
                    .filter(c => c.exam)
                    .map((classItem) => (
                      <option key={classItem.id} value={classItem.id}>
                        {classItem.title}
                      </option>
                    ))}
                </select>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {exam.title}
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                {exam.description}
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-500">
                  Pregunta {currentQuestion + 1} de {exam.questions.length}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-medium text-gray-900">
                  {exam.questions[currentQuestion].text}
                </h3>
              </div>

              <div className="space-y-4">
                {exam.questions[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className={`flex cursor-pointer items-center rounded-lg border p-4 ${
                      answers[currentQuestion] === index
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-600'
                    }`}
                    onClick={() => handleAnswerSelect(index)}
                  >
                    <input
                      type="radio"
                      name={`question-${currentQuestion}`}
                      checked={answers[currentQuestion] === index}
                      onChange={() => handleAnswerSelect(index)}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <span className="ml-3 text-gray-900">{option}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:opacity-50"
                >
                  Anterior
                </button>
                {currentQuestion < exam.questions.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Siguiente
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Enviar Examen
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 
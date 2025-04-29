'use client'

import { useState } from 'react'

interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
}

interface QuizProps {
  questions: Question[]
  onComplete: (score: number, total: number) => void
  title: string
}

export default function Quiz({ questions, onComplete, title }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const currentQuestion = questions[currentQuestionIndex]

  const handleAnswerSelect = (optionIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers]
    newSelectedAnswers[currentQuestionIndex] = optionIndex
    setSelectedAnswers(newSelectedAnswers)

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      calculateScore(newSelectedAnswers)
      setShowResults(true)
    }
  }

  const calculateScore = (answers: number[]) => {
    let correctAnswers = 0
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correctAnswers++
      }
    })
    setScore(correctAnswers)
    onComplete(correctAnswers, questions.length)
  }

  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswers([])
    setShowResults(false)
    setScore(0)
  }

  if (showResults) {
    return (
      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Resultados del Quiz</h2>
        <p className="text-lg text-gray-600 mb-4">
          Tu puntuación: {score} de {questions.length} ({Math.round((score / questions.length) * 100)}%)
        </p>
        <div className="space-y-4">
          {questions.map((question, index) => (
            <div key={question.id} className="border-b pb-4">
              <p className="font-medium text-gray-900">{question.question}</p>
              <p className={`mt-2 ${
                selectedAnswers[index] === question.correctAnswer
                  ? 'text-green-600'
                  : 'text-red-600'
              }`}>
                Tu respuesta: {question.options[selectedAnswers[index]]}
                {selectedAnswers[index] !== question.correctAnswer && (
                  <span className="block text-green-600">
                    Respuesta correcta: {question.options[question.correctAnswer]}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={resetQuiz}
          className="mt-6 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
        >
          Intentar de nuevo
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="mb-4">
        <p className="text-sm text-gray-500">
          Pregunta {currentQuestionIndex + 1} de {questions.length}
        </p>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        {currentQuestion.question}
      </h3>
      <div className="space-y-3">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            className="w-full rounded-md border border-gray-300 p-3 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
} 
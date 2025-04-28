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
}

interface Question {
  id: string
  text: string
  options: string[]
  correctAnswer: number
}

const subjects: Subject[] = [
  {
    id: '1',
    title: 'Resolución de Conflictos',
    classes: [
      { id: '1-1', title: 'Shock Cultural' },
      { id: '1-2', title: 'Mediación' },
      { id: '1-3', title: 'Comunicación Efectiva' }
    ]
  },
  {
    id: '2',
    title: 'Primeros Auxilios',
    classes: [
      { id: '2-1', title: 'RCP Básico' },
      { id: '2-2', title: 'Manejo de Heridas' },
      { id: '2-3', title: 'Emergencias Médicas' }
    ]
  },
  {
    id: '3',
    title: 'Transporte de Pacientes en Aeronave',
    classes: [
      { id: '3-1', title: 'Protocolos de Seguridad' },
      { id: '3-2', title: 'Equipamiento Médico' },
      { id: '3-3', title: 'Planificación de Vuelos' }
    ]
  }
]

export default function CreateExam() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [subjectId, setSubjectId] = useState('')
  const [classId, setClassId] = useState('')
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: '1',
      text: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
    },
  ])

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: (questions.length + 1).toString(),
        text: '',
        options: ['', '', '', ''],
        correctAnswer: 0,
      },
    ])
  }

  const updateQuestion = (index: number, field: keyof Question, value: any) => {
    const newQuestions = [...questions]
    if (field === 'options') {
      newQuestions[index].options = value
    } else {
      newQuestions[index] = { ...newQuestions[index], [field]: value }
    }
    setQuestions(newQuestions)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para guardar el examen
    console.log({
      title,
      description,
      subjectId,
      classId,
      questions,
    })
  }

  const selectedSubject = subjects.find(s => s.id === subjectId)
  const availableClasses = selectedSubject?.classes || []

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Crear Nuevo Examen
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Completa el formulario para crear un nuevo examen para una clase específica.
        </p>
        <form onSubmit={handleSubmit} className="mt-12 space-y-8">
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
              value={subjectId}
              onChange={(e) => {
                setSubjectId(e.target.value)
                setClassId('')
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
              value={classId}
              onChange={(e) => setClassId(e.target.value)}
              disabled={!subjectId}
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-gray-100"
            >
              <option value="">Selecciona una clase</option>
              {availableClasses.map((classItem) => (
                <option key={classItem.id} value={classItem.id}>
                  {classItem.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Título del Examen
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Preguntas</h3>
              <button
                type="button"
                onClick={addQuestion}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Agregar Pregunta
              </button>
            </div>

            {questions.map((question, index) => (
              <div key={question.id} className="rounded-lg border border-gray-200 p-6">
                <div className="mb-4">
                  <label
                    htmlFor={`question-${index}`}
                    className="block text-sm font-medium text-gray-900"
                  >
                    Pregunta {index + 1}
                  </label>
                  <input
                    type="text"
                    id={`question-${index}`}
                    value={question.text}
                    onChange={(e) =>
                      updateQuestion(index, 'text', e.target.value)
                    }
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="space-y-4">
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-center">
                      <input
                        type="radio"
                        name={`correct-answer-${index}`}
                        checked={question.correctAnswer === optionIndex}
                        onChange={() =>
                          updateQuestion(index, 'correctAnswer', optionIndex)
                        }
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <input
                        type="text"
                        value={option}
                        onChange={(e) => {
                          const newOptions = [...question.options]
                          newOptions[optionIndex] = e.target.value
                          updateQuestion(index, 'options', newOptions)
                        }}
                        className="ml-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder={`Opción ${optionIndex + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Crear Examen
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 
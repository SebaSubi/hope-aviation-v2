'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface Class {
  id: string
  name: string
  description: string
  duration: string
  status: 'completed' | 'in-progress'
}

interface Subject {
  id: string
  name: string
  description: string
  progress: number
  grade: number
  classes: Class[]
  exams: Exam[]
  imageUrl: string
}

interface Exam {
  id: string
  name: string
  description: string
  duration: string
  status: 'completed' | 'available' | 'locked'
  grade?: number
  passingGrade: number
}

export default function SubjectDetails() {
  const { courseId, subjectId } = useParams()
  const [subject, setSubject] = useState<Subject | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Datos de ejemplo
    const exampleSubjects: Record<string, Record<string, Subject>> = {
      '1': {
        '1': {
          id: '1',
          name: 'Introducción a la Aviación',
          description:
            'Conceptos básicos de aerodinámica y principios de vuelo. Aprenderás sobre la historia de la aviación, los principios físicos que hacen posible el vuelo y los componentes básicos de una aeronave.',
          progress: 100,
          grade: 95,
          imageUrl: '/images/subjects/introduccion-aviacion.jpg',
          classes: [
            {
              id: '1',
              name: 'Historia de la Aviación',
              description: 'Un recorrido por los hitos más importantes en la historia de la aviación.',
              duration: '45 min',
              status: 'completed',
            },
            {
              id: '2',
              name: 'Principios de Aerodinámica',
              description: 'Estudio de las fuerzas que actúan sobre una aeronave en vuelo.',
              duration: '60 min',
              status: 'in-progress',
            },
            {
              id: '3',
              name: 'Componentes de la Aeronave',
              description: 'Análisis detallado de los principales componentes de una aeronave.',
              duration: '50 min',
              status: 'in-progress',
            },
          ],
          exams: [
            {
              id: '1',
              name: 'Examen Parcial',
              description: 'Evaluación de los conceptos básicos de aerodinámica y componentes de la aeronave.',
              duration: '60 min',
              status: 'completed',
              grade: 95,
              passingGrade: 70,
            },
            {
              id: '2',
              name: 'Examen Final',
              description: 'Evaluación integral de todos los temas cubiertos en la materia.',
              duration: '90 min',
              status: 'available',
              passingGrade: 70,
            },
          ],
        },
      },
    }

    const selectedSubject = exampleSubjects[courseId as string]?.[subjectId as string]
    setSubject(selectedSubject || null)
    setLoading(false)
  }, [courseId, subjectId])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900">
        <div className="text-xl text-white">Cargando...</div>
      </div>
    )
  }

  if (!subject) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900">
        <div className="text-xl text-white">Materia no encontrada</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href={`/student/my-courses/${courseId}`}
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
            Volver al Curso
          </Link>
        </div>

        <div className="mb-8 rounded-lg bg-gray-800 p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white sm:text-4xl">
                {subject.name}
              </h1>
              <p className="mt-2 text-lg text-gray-300">{subject.description}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-400">
                  Progreso
                </span>
                <span className="text-sm font-medium text-white">
                  {subject.progress}%
                </span>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-gray-700">
                <div
                  className="h-3 rounded-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${subject.progress}%` }}
                />
              </div>
              {subject.grade > 0 && (
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-400">
                    Calificación
                  </span>
                  <span className="text-sm font-medium text-white">
                    {subject.grade}%
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">Clases</h2>
          <div className="space-y-4">
            {subject.classes.map((classItem) => (
              <div
                key={classItem.id}
                className="rounded-lg bg-gray-800 p-6 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {classItem.name}
                    </h3>
                    <p className="mt-2 text-gray-300">{classItem.description}</p>
                    <div className="mt-4 flex items-center text-sm text-gray-400">
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
                      {classItem.duration}
                    </div>
                  </div>
                  <div className="ml-4 flex items-center space-x-4">
                    {classItem.status === 'completed' && (
                      <span className="inline-flex items-center rounded-full bg-green-900 px-3 py-1 text-sm font-medium text-green-400">
                        Completado
                      </span>
                    )}
                    <Link
                      href={`/student/my-courses/${courseId}/subjects/${subjectId}/classes/${classItem.id}`}
                      className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-500"
                    >
                      {classItem.status === 'completed' ? 'Ver Clase' : 'Continuar Clase'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-white">Exámenes</h2>
          <div className="space-y-4">
            {subject.exams.map((exam) => (
              <div
                key={exam.id}
                className="rounded-lg bg-gray-800 p-6 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {exam.name}
                    </h3>
                    <p className="mt-2 text-gray-300">{exam.description}</p>
                    <div className="mt-4 flex items-center text-sm text-gray-400">
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
                      {exam.duration}
                    </div>
                  </div>
                  <div className="ml-4">
                    {exam.status === 'completed' && (
                      <div className="text-right">
                        <span className="inline-flex items-center rounded-full bg-green-900 px-3 py-1 text-sm font-medium text-green-400">
                          Completado
                        </span>
                        <div className="mt-2 text-sm text-white">
                          Calificación: {exam.grade}%
                        </div>
                      </div>
                    )}
                    {exam.status === 'available' && (
                      <Link
                        href={`/student/my-courses/${courseId}/subjects/${subjectId}/exams/${exam.id}`}
                        className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-500"
                      >
                        Comenzar Examen
                      </Link>
                    )}
                    {exam.status === 'locked' && (
                      <span className="inline-flex items-center rounded-full bg-gray-700 px-3 py-1 text-sm font-medium text-gray-400">
                        Bloqueado
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 
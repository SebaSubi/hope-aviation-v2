'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Course {
  id: string
  name: string
  progress: number
  nextClass?: string
}

interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  date: string
}

export default function StudentDashboard() {
  const [courses, setCourses] = useState<Course[]>([])
  const [achievements, setAchievements] = useState<Achievement[]>([])

  useEffect(() => {
    // Datos de ejemplo
    setCourses([
      {
        id: '1',
        name: 'Humanitarian Pilot Training',
        progress: 60,
        nextClass: 'Emergency Procedures - 15:00',
      },
      {
        id: '2',
        name: 'Advanced Navigation',
        progress: 30,
        nextClass: 'GPS Systems - 16:30',
      },
    ])

    setAchievements([
      {
        id: '1',
        title: 'Primer Vuelo Completado',
        description: 'Has completado tu primer vuelo de entrenamiento',
        icon: '✈️',
        date: '2024-03-15',
      },
      {
        id: '2',
        title: 'Examen Teórico Aprobado',
        description: 'Has aprobado el examen teórico con excelentes resultados',
        icon: '📚',
        date: '2024-03-10',
      },
    ])
  }, [])

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Bienvenida */}
        <div className="mb-8 rounded-lg bg-gray-800 p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            ¡Bienvenido de nuevo, Estudiante!
          </h1>
          <p className="mt-2 text-lg text-gray-300">
            Continúa tu aprendizaje y alcanza tus metas
          </p>
        </div>

        {/* Estadísticas Rápidas */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-gray-800 p-6 shadow-sm">
            <div className="flex items-center">
              <div className="rounded-full bg-blue-900 p-3">
                <svg
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-400">Cursos Activos</p>
                <p className="text-2xl font-semibold text-white">2</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-800 p-6 shadow-sm">
            <div className="flex items-center">
              <div className="rounded-full bg-green-900 p-3">
                <svg
                  className="h-6 w-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-400">Materias Completadas</p>
                <p className="text-2xl font-semibold text-white">5</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-800 p-6 shadow-sm">
            <div className="flex items-center">
              <div className="rounded-full bg-yellow-900 p-3">
                <svg
                  className="h-6 w-6 text-yellow-400"
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
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-400">Horas de Estudio</p>
                <p className="text-2xl font-semibold text-white">45</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-800 p-6 shadow-sm">
            <div className="flex items-center">
              <div className="rounded-full bg-purple-900 p-3">
                <svg
                  className="h-6 w-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-400">Logros</p>
                <p className="text-2xl font-semibold text-white">8</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cursos en Progreso */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">
              Cursos en Progreso
            </h2>
            <Link
              href="/student/my-courses"
              className="text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              Ver todos →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {courses.map((course) => (
              <div
                key={course.id}
                className="rounded-lg bg-gray-800 p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">
                      {course.name}
                    </h3>
                    {course.nextClass && (
                      <p className="mt-2 text-sm text-gray-300">
                        Próxima clase: {course.nextClass}
                      </p>
                    )}
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-gray-400">
                        Progreso
                      </div>
                      <div className="text-lg font-semibold text-white">
                        {course.progress}%
                      </div>
                    </div>
                    <div className="mt-2 h-3 w-full rounded-full bg-gray-700">
                      <div
                        className="h-3 rounded-full bg-blue-600 transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      href={`/student/my-courses/${course.id}`}
                      className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-500"
                    >
                      Continuar Curso
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logros Recientes */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Logros Recientes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="rounded-lg bg-gray-800 p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-900 text-2xl text-yellow-400">
                    {achievement.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">
                      {achievement.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-300">
                      {achievement.description}
                    </p>
                    <p className="mt-2 text-xs text-gray-400">
                      {new Date(achievement.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
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
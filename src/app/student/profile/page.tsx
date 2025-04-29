'use client'

import { useEffect, useState } from 'react'

interface Student {
  id: string
  name: string
  email: string
  phone: string
  avatar: string
  joinDate: string
  completedCourses: number
  inProgressCourses: number
  averageGrade: number
  achievements: {
    id: string
    title: string
    description: string
    date: string
  }[]
}

export default function StudentProfile() {
  const [student, setStudent] = useState<Student | null>(null)

  useEffect(() => {
    // Datos de ejemplo
    setStudent({
      id: '1',
      name: 'Juan Pérez',
      email: 'juan.perez@example.com',
      phone: '+1 234 567 890',
      avatar: '/images/avatars/juan-perez.jpg',
      joinDate: '2024-01-15',
      completedCourses: 3,
      inProgressCourses: 2,
      averageGrade: 88.5,
      achievements: [
        {
          id: '1',
          title: 'Primer Vuelo Completado',
          description: 'Has completado tu primer vuelo de entrenamiento con éxito',
          date: '2024-02-20',
        },
        {
          id: '2',
          title: 'Examen Teórico Aprobado',
          description: 'Has aprobado el examen teórico con excelentes resultados',
          date: '2024-03-05',
        },
      ],
    })
  }, [])

  if (!student) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-xl text-gray-600">Cargando...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-lg bg-gray-800 p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Mi Perfil
          </h1>
          <p className="mt-2 text-lg text-gray-300">
            Gestiona tu información personal y sigue tu progreso
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Información Personal */}
          <div className="lg:col-span-1">
            <div className="rounded-lg bg-gray-800 p-6 shadow-sm">
              <div className="flex flex-col items-center">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="h-32 w-32 rounded-full object-cover"
                />
                <h2 className="mt-4 text-2xl font-semibold text-white">
                  {student.name}
                </h2>
                <p className="mt-1 text-gray-300">Estudiante de Aviación</p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center text-gray-300">
                  <svg
                    className="mr-3 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {student.email}
                </div>
                <div className="flex items-center text-gray-300">
                  <svg
                    className="mr-3 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {student.phone}
                </div>
                <div className="flex items-center text-gray-300">
                  <svg
                    className="mr-3 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Miembro desde{' '}
                  {new Date(student.joinDate).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-500">
                  Editar Perfil
                </button>
              </div>
            </div>
          </div>

          {/* Estadísticas y Logros */}
          <div className="lg:col-span-2">
            <div className="mb-6 grid gap-6 sm:grid-cols-3">
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
                    <p className="text-sm font-medium text-gray-400">
                      Cursos Completados
                    </p>
                    <p className="text-2xl font-semibold text-white">
                      {student.completedCourses}
                    </p>
                  </div>
                </div>
              </div>

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
                    <p className="text-sm font-medium text-gray-400">
                      Cursos en Progreso
                    </p>
                    <p className="text-2xl font-semibold text-white">
                      {student.inProgressCourses}
                    </p>
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
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-400">
                      Calificación Promedio
                    </p>
                    <p className="text-2xl font-semibold text-white">
                      {student.averageGrade}%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gray-800 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-white">Logros</h2>
              <div className="mt-4 space-y-4">
                {student.achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="flex items-start rounded-lg border border-gray-700 p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-900 text-yellow-400">
                      <svg
                        className="h-6 w-6"
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
                      <h3 className="font-medium text-white">
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
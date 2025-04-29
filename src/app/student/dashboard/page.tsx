'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Course {
  id: string
  name: string
  description: string
  progress: number
  nextClass?: string
  imageUrl: string
  instructor: {
    name: string
    imageUrl: string
  }
  lastUpdated: string
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
        description: 'Aprende las técnicas y procedimientos esenciales para operar en misiones humanitarias y de emergencia.',
        progress: 60,
        nextClass: 'Emergency Procedures - 15:00',
        imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        instructor: {
          name: 'Capt. María Rodríguez',
          imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        lastUpdated: '2024-03-15',
      },
      {
        id: '2',
        name: 'Advanced Navigation',
        description: 'Domina las técnicas avanzadas de navegación aérea y el uso de sistemas GPS modernos.',
        progress: 30,
        nextClass: 'GPS Systems - 16:30',
        imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        instructor: {
          name: 'Capt. Juan Pérez',
          imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        lastUpdated: '2024-03-14',
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
      {/* Header */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          alt=""
          src="https://plus.unsplash.com/premium_photo-1681010317761-d0c42fdea9c0?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 -z-10 size-full object-cover opacity-25"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-1097/845 w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-1097/845 w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Campus Virtual</h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              Bienvenido a tu centro de aprendizaje. Aquí encontrarás tus cursos en progreso, logros y todo lo necesario para tu formación como piloto humanitario.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
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
          <div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {courses.map((course) => (
              <article
                key={course.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
              >
                <img
                  src={course.imageUrl}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={course.lastUpdated} className="mr-8">
                    {new Date(course.lastUpdated).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img
                        src={course.instructor.imageUrl}
                        alt=""
                        className="h-6 w-6 flex-none rounded-full bg-white/10"
                      />
                      {course.instructor.name}
                    </div>
                  </div>
                </div>

                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <Link href={`/student/my-courses/${course.id}`}>
                    <span className="absolute inset-0" />
                    {course.name}
                  </Link>
                </h3>

                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-300">
                      Progreso
                    </div>
                    <div className="text-lg font-semibold text-white">
                      {course.progress}%
                    </div>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-blue-600 transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>

                {course.nextClass && (
                  <p className="mt-4 text-sm text-gray-300">
                    Próxima clase: {course.nextClass}
                  </p>
                )}
              </article>
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
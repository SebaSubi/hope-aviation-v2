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

const stats = [
  { id: 1, name: 'Cursos en progreso', value: '3' },
  { id: 2, name: 'Cursos completados', value: '5' },
  { id: 3, name: 'Promedio general', value: '9.2' },
  { id: 4, name: 'Horas de estudio', value: '120+' },
]

export default function StudentDashboard() {
  const [courses, setCourses] = useState<Course[]>([])
  const [achievements, setAchievements] = useState<Achievement[]>([])

  useEffect(() => {
    // Datos de ejemplo para cursos
    setCourses([
      {
        id: '1',
        name: 'Humanitarian Pilot Training',
        progress: 75,
        description: 'Curso avanzado de pilotaje humanitario',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1739371779873-32e0e3d224ee?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        instructor: {
          name: 'Capt. María Rodríguez',
          imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        lastUpdated: '2024-04-28',
      },
      {
        id: '2',
        name: 'Advanced Navigation',
        progress: 30,
        description: 'Técnicas avanzadas de navegación aérea',
        imageUrl: 'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        instructor: {
          name: 'Capt. Juan Pérez',
          imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        lastUpdated: '2024-04-27',
      },
    ])

    // Datos de ejemplo para logros
    setAchievements([
      {
        id: '1',
        title: 'Primer vuelo completado',
        description: 'Has completado tu primer vuelo de entrenamiento',
        date: '2024-04-15',
        icon: '🎯',
      },
      {
        id: '2',
        title: 'Estudiante destacado',
        description: 'Reconocimiento por excelente desempeño académico',
        date: '2024-04-20',
        icon: '🏆',
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
        {/* Estadísticas */}
        <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col bg-white/5 p-8">
              <dt className="text-sm/6 font-semibold text-gray-300">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>

        {/* Sección de Cursos en Progreso */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">Cursos en Progreso</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {courses.map((course) => (
              <article
                key={course.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  src={course.imageUrl}
                  alt={course.name}
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <div className="flex items-center gap-x-4">
                    <div className="flex gap-x-2.5">
                      <img
                        src={course.instructor.imageUrl}
                        alt={course.instructor.name}
                        className="h-6 w-6 flex-none rounded-full bg-white/10"
                      />
                      <span className="text-gray-300">{course.instructor.name}</span>
                    </div>
                    <time dateTime={course.lastUpdated} className="text-gray-300">
                      {new Date(course.lastUpdated).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <Link href={`/student/my-courses/${course.id}`}>
                    <span className="absolute inset-0" />
                    {course.name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-300">{course.description}</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Progreso: {course.progress}%</span>
                    <Link
                      href={`/student/my-courses/${course.id}`}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      Continuar
                    </Link>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-blue-500"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sección de Logros Recientes */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">Logros Recientes</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="flex flex-col bg-white/5 p-8 rounded-2xl"
              >
                <div className="flex items-center gap-x-4">
                  <span className="text-4xl">{achievement.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                    <p className="mt-1 text-sm text-gray-300">{achievement.description}</p>
                    <time
                      dateTime={achievement.date}
                      className="mt-2 text-xs text-gray-400"
                    >
                      {new Date(achievement.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
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
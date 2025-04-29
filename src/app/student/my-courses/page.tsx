'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Course {
  id: string
  name: string
  description: string
  progress: number
  subjects: number
  imageUrl: string
}

export default function MyCourses() {
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    // Datos de ejemplo
    setCourses([
      {
        id: '1',
        name: 'Pilotaje Básico',
        description:
          'Aprende los fundamentos del pilotaje y los conceptos básicos de la aviación.',
        progress: 60,
        subjects: 8,
        imageUrl: '/images/courses/pilotaje-basico.jpg',
      },
      {
        id: '2',
        name: 'Navegación Avanzada',
        description:
          'Domina las técnicas avanzadas de navegación y el uso de sistemas modernos.',
        progress: 30,
        subjects: 12,
        imageUrl: '/images/courses/navegacion-avanzada.jpg',
      },
      {
        id: '3',
        name: 'Manejo de Emergencias',
        description:
          'Prepárate para manejar situaciones de emergencia en vuelo con confianza.',
        progress: 15,
        subjects: 6,
        imageUrl: '/images/courses/emergencias.jpg',
      },
    ])
  }, [])

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-lg bg-gray-800 p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Mis Cursos
          </h1>
          <p className="mt-2 text-lg text-gray-300">
            Gestiona y accede a tus cursos inscritos
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/student/my-courses/${course.id}`}
              className="group rounded-lg bg-gray-800 p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src={course.imageUrl}
                  alt={course.name}
                  className="rounded-lg object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-white group-hover:text-blue-400">
                {course.name}
              </h2>
              <p className="mt-2 text-gray-300 line-clamp-2">
                {course.description}
              </p>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-400">
                    Progreso
                  </span>
                  <span className="text-sm font-medium text-white">
                    {course.progress}%
                  </span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-gray-700">
                  <div
                    className="h-2 rounded-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                {course.subjects} materias
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 
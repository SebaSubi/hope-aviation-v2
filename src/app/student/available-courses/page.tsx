'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Course {
  id: string
  name: string
  description: string
  duration: string
  level: 'beginner' | 'intermediate' | 'advanced'
  instructor: string
  rating: number
  students: number
  imageUrl: string
}

export default function AvailableCourses() {
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    // Datos de ejemplo
    setCourses([
      {
        id: '1',
        name: 'Pilotaje Básico',
        description:
          'Aprende los fundamentos del pilotaje y los conceptos básicos de la aviación.',
        duration: '8 semanas',
        level: 'beginner',
        instructor: 'Capt. Juan Pérez',
        rating: 4.8,
        students: 120,
        imageUrl: '/images/courses/pilotaje-basico.jpg',
      },
      {
        id: '2',
        name: 'Navegación Avanzada',
        description:
          'Domina las técnicas avanzadas de navegación y el uso de sistemas modernos.',
        duration: '12 semanas',
        level: 'intermediate',
        instructor: 'Capt. María González',
        rating: 4.9,
        students: 85,
        imageUrl: '/images/courses/navegacion-avanzada.jpg',
      },
      {
        id: '3',
        name: 'Manejo de Emergencias',
        description:
          'Prepárate para manejar situaciones de emergencia en vuelo con confianza.',
        duration: '6 semanas',
        level: 'advanced',
        instructor: 'Capt. Carlos Rodríguez',
        rating: 4.7,
        students: 65,
        imageUrl: '/images/courses/emergencias.jpg',
      },
    ])
  }, [])

  const getLevelText = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'Principiante'
      case 'intermediate':
        return 'Intermedio'
      case 'advanced':
        return 'Avanzado'
      default:
        return 'Nivel no especificado'
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-lg bg-gray-800 p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Cursos Disponibles
          </h1>
          <p className="mt-2 text-lg text-gray-300">
            Explora nuestra selección de cursos y comienza tu viaje en la aviación
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="rounded-lg bg-gray-800 shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={course.imageUrl}
                  alt={course.name}
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                      course.level === 'beginner'
                        ? 'bg-green-900 text-green-400'
                        : course.level === 'intermediate'
                        ? 'bg-yellow-900 text-yellow-400'
                        : 'bg-red-900 text-red-400'
                    }`}
                  >
                    {getLevelText(course.level)}
                  </span>
                  <div className="flex items-center text-sm text-gray-400">
                    <svg
                      className="mr-1 h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {course.rating}
                  </div>
                </div>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  {course.name}
                </h3>
                <p className="mt-2 text-gray-300 line-clamp-2">
                  {course.description}
                </p>

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
                  {course.duration}
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  {course.instructor}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {course.students} estudiantes
                  </div>
                  <Link
                    href={`/student/available-courses/${course.id}`}
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-500"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 
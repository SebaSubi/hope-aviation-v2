'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface Subject {
  id: string
  name: string
  description: string
  progress: number
  grade: number
  classes: number
  exams: number
  imageUrl: string
}

interface Course {
  id: string
  name: string
  description: string
  instructor: string
  duration: string
  level: string
  progress: number
  subjects: Subject[]
}

export default function CourseDetails() {
  const { courseId } = useParams()
  const [course, setCourse] = useState<Course | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Datos de ejemplo
    const exampleCourses: Course[] = [
      {
        id: '1',
        name: 'Pilotaje Básico',
        description:
          'Curso completo de pilotaje básico que cubre los fundamentos de la aviación, controles de vuelo, navegación básica y procedimientos de emergencia.',
        instructor: 'Capt. Juan Pérez',
        duration: '8 semanas',
        level: 'Principiante',
        progress: 60,
        subjects: [
          {
            id: '1',
            name: 'Introducción a la Aviación',
            description: 'Conceptos básicos de aerodinámica y principios de vuelo.',
            progress: 100,
            grade: 95,
            classes: 5,
            exams: 2,
            imageUrl: '/images/subjects/introduccion-aviacion.jpg',
          },
          {
            id: '2',
            name: 'Controles de Vuelo',
            description: 'Aprendizaje de los controles principales y sistemas de la aeronave.',
            progress: 80,
            grade: 88,
            classes: 6,
            exams: 3,
            imageUrl: '/images/subjects/controles-vuelo.jpg',
          },
          {
            id: '3',
            name: 'Navegación Básica',
            description: 'Fundamentos de navegación y uso de instrumentos básicos.',
            progress: 60,
            grade: 0,
            classes: 4,
            exams: 2,
            imageUrl: '/images/subjects/navegacion-basica.jpg',
          },
          {
            id: '4',
            name: 'Meteorología',
            description: 'Estudio de fenómenos meteorológicos y su impacto en el vuelo.',
            progress: 30,
            grade: 0,
            classes: 5,
            exams: 2,
            imageUrl: '/images/subjects/meteorologia.jpg',
          },
          {
            id: '5',
            name: 'Procedimientos de Emergencia',
            description: 'Protocolos y procedimientos para situaciones de emergencia.',
            progress: 0,
            grade: 0,
            classes: 4,
            exams: 2,
            imageUrl: '/images/subjects/emergencias.jpg',
          },
        ],
      },
      {
        id: '2',
        name: 'Navegación Avanzada',
        description:
          'Curso avanzado de navegación que cubre sistemas GPS, navegación por instrumentos y planificación de rutas complejas.',
        instructor: 'Capt. María González',
        duration: '12 semanas',
        level: 'Intermedio',
        progress: 30,
        subjects: [
          {
            id: '1',
            name: 'Sistemas GPS Avanzados',
            description: 'Uso avanzado de sistemas de navegación por satélite.',
            progress: 100,
            grade: 92,
            classes: 6,
            exams: 3,
            imageUrl: '/images/subjects/gps-avanzado.jpg',
          },
          {
            id: '2',
            name: 'Navegación por Instrumentos',
            description: 'Técnicas de navegación utilizando solo instrumentos.',
            progress: 50,
            grade: 0,
            classes: 8,
            exams: 4,
            imageUrl: '/images/subjects/navegacion-instrumentos.jpg',
          },
          {
            id: '3',
            name: 'Planificación de Rutas',
            description: 'Planificación y optimización de rutas de vuelo.',
            progress: 0,
            grade: 0,
            classes: 5,
            exams: 2,
            imageUrl: '/images/subjects/planificacion-rutas.jpg',
          },
        ],
      },
      {
        id: '3',
        name: 'Manejo de Emergencias',
        description:
          'Curso especializado en el manejo de situaciones de emergencia y protocolos de seguridad.',
        instructor: 'Capt. Carlos Rodríguez',
        duration: '6 semanas',
        level: 'Avanzado',
        progress: 15,
        subjects: [
          {
            id: '1',
            name: 'Emergencias en Vuelo',
            description: 'Procedimientos para manejar emergencias durante el vuelo.',
            progress: 100,
            grade: 90,
            classes: 4,
            exams: 2,
            imageUrl: '/images/subjects/emergencias-vuelo.jpg',
          },
          {
            id: '2',
            name: 'Simulaciones de Emergencia',
            description: 'Prácticas en simulador de situaciones de emergencia.',
            progress: 0,
            grade: 0,
            classes: 6,
            exams: 3,
            imageUrl: '/images/subjects/simulaciones.jpg',
          },
        ],
      },
    ]

    const selectedCourse = exampleCourses.find((c) => c.id === courseId)
    setCourse(selectedCourse || null)
    setLoading(false)
  }, [courseId])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900">
        <div className="text-xl text-white">Cargando...</div>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900">
        <div className="text-xl text-white">Curso no encontrado</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/student/my-courses"
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
            Volver a Mis Cursos
          </Link>
        </div>

        <div className="mb-8 rounded-lg bg-gray-800 p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white sm:text-4xl">
                {course.name}
              </h1>
              <p className="mt-2 text-lg text-gray-300">{course.description}</p>
              <div className="mt-4 flex flex-wrap gap-4">
                <div className="flex items-center text-gray-300">
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
                <div className="flex items-center text-gray-300">
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
                <div className="flex items-center text-gray-300">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  {course.level}
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-400">
                  Progreso Total
                </span>
                <span className="text-sm font-medium text-white">
                  {course.progress}%
                </span>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-gray-700">
                <div
                  className="h-3 rounded-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {course.subjects.map((subject) => (
            <Link
              key={subject.id}
              href={`/student/my-courses/${courseId}/subjects/${subject.id}`}
              className="group rounded-lg bg-gray-800 p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src={subject.imageUrl}
                  alt={subject.name}
                  className="rounded-lg object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-white group-hover:text-blue-400">
                {subject.name}
              </h2>
              <p className="mt-2 text-gray-300 line-clamp-2">
                {subject.description}
              </p>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-400">
                    Progreso
                  </span>
                  <span className="text-sm font-medium text-white">
                    {subject.progress}%
                  </span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-gray-700">
                  <div
                    className="h-2 rounded-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${subject.progress}%` }}
                  />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center">
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
                  {subject.classes} clases
                </div>
                <div className="flex items-center">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {subject.exams} exámenes
                </div>
              </div>
              {subject.grade > 0 && (
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-gray-400">Calificación</span>
                  <span className="font-medium text-white">{subject.grade}%</span>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 
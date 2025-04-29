'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Course {
  id: string
  title: string
  description: string
  imageUrl: string
  instructor: string
  level: string
  duration: string
  price: number
  subjects: number
}

export default function AvailableCourses() {
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    // Datos de ejemplo
    setCourses([
      {
        id: '1',
        title: 'Humanitarian Pilot Training',
        description: 'Curso avanzado de pilotaje humanitario con enfoque en operaciones de emergencia y ayuda humanitaria.',
        imageUrl: '/images/courses/humanitarian.jpg',
        instructor: 'Capt. María Rodríguez',
        level: 'Avanzado',
        duration: '6 meses',
        price: 2999,
        subjects: 8,
      },
      {
        id: '2',
        title: 'Advanced Navigation',
        description: 'Técnicas avanzadas de navegación aérea y uso de sistemas GPS modernos para vuelos de larga distancia.',
        imageUrl: '/images/courses/navigation.jpg',
        instructor: 'Capt. Juan Pérez',
        level: 'Intermedio',
        duration: '4 meses',
        price: 1999,
        subjects: 6,
      },
      {
        id: '3',
        title: 'Emergency Response Operations',
        description: 'Procedimientos y protocolos para operaciones de respuesta a emergencias en zonas de desastre.',
        imageUrl: '/images/courses/emergency.jpg',
        instructor: 'Capt. Carlos Martínez',
        level: 'Avanzado',
        duration: '3 meses',
        price: 2499,
        subjects: 10,
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
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Cursos Disponibles</h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              Explora nuestra selección de cursos especializados en aviación humanitaria. Encuentra el programa perfecto para impulsar tu carrera como piloto humanitario.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                src={course.imageUrl}
                alt={course.title}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <div className="flex items-center gap-x-4">
                  <div className="flex gap-x-2.5">
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                        course.instructor
                      )}&background=0D8ABC&color=fff`}
                      alt={course.instructor}
                      className="h-6 w-6 flex-none rounded-full bg-white/10"
                    />
                    <span className="text-gray-300">{course.instructor}</span>
                  </div>
                  <span className="text-gray-300">{course.level}</span>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <Link href={`/student/available-courses/${course.id}`}>
                  <span className="absolute inset-0" />
                  {course.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">{course.description}</p>
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Duración: {course.duration}</span>
                  <span className="text-blue-400">${course.price}</span>
                </div>
                <div className="mt-2 flex items-center gap-x-2 text-sm text-gray-300">
                  <span>{course.subjects} materias</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 
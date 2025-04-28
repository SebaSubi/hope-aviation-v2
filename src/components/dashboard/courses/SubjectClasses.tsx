'use client'

import Link from 'next/link'

interface Class {
  id: string
  title: string
  description: string
  duration: string
  videoUrl?: string
  resources?: string[]
}

interface Subject {
  id: string
  title: string
  description: string
  classes: Class[]
}

interface Course {
  id: string
  title: string
  subjects: Subject[]
}

const courses: Course[] = [
  {
    id: '1',
    title: 'Capacitación de Piloto Humanitario',
    subjects: [
      {
        id: '1-1',
        title: 'Resolución de Conflictos',
        description: 'Aprende técnicas efectivas para manejar y resolver conflictos en situaciones de emergencia.',
        classes: [
          {
            id: '1-1-1',
            title: 'Shock Cultural',
            description: 'Entendimiento y manejo del shock cultural en situaciones de emergencia.',
            duration: '2 semanas',
            videoUrl: 'https://example.com/video1',
            resources: ['Guía de Shock Cultural.pdf', 'Casos de Estudio.docx']
          },
          {
            id: '1-1-2',
            title: 'Mediación',
            description: 'Técnicas de mediación y resolución pacífica de conflictos.',
            duration: '2 semanas',
            videoUrl: 'https://example.com/video2',
            resources: ['Manual de Mediación.pdf', 'Ejercicios Prácticos.docx']
          },
          {
            id: '1-1-3',
            title: 'Comunicación Efectiva',
            description: 'Desarrollo de habilidades de comunicación en contextos multiculturales.',
            duration: '2 semanas',
            videoUrl: 'https://example.com/video3',
            resources: ['Guía de Comunicación.pdf', 'Ejemplos de Comunicación.docx']
          }
        ]
      }
    ]
  }
]

export default function SubjectClasses({ courseId, subjectId }: { courseId: string, subjectId: string }) {
  const course = courses.find(c => c.id === courseId)
  const subject = course?.subjects.find(s => s.id === subjectId)

  if (!course || !subject) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Materia no encontrada
          </h2>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {subject.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {subject.description}
          </p>
        </div>
        <div className="mt-12 space-y-8">
          {subject.classes.map((classItem) => (
            <div
              key={classItem.id}
              className="rounded-lg border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {classItem.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {classItem.duration}
                  </p>
                </div>
                <div className="flex space-x-4">
                  {classItem.videoUrl && (
                    <Link
                      href={classItem.videoUrl}
                      className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Ver Video
                    </Link>
                  )}
                  <Link
                    href={`/courses/${courseId}/subjects/${subjectId}/classes/${classItem.id}`}
                    className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
              <p className="mt-4 text-base text-gray-500">
                {classItem.description}
              </p>
              {classItem.resources && classItem.resources.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900">Recursos:</h4>
                  <ul className="mt-2 space-y-2">
                    {classItem.resources.map((resource, index) => (
                      <li key={index} className="text-sm text-gray-500">
                        {resource}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 
'use client'

import Link from 'next/link'

interface Subject {
  id: string
  title: string
  description: string
  duration: string
  classesCount: number
  imageUrl: string
}

interface Course {
  id: string
  title: string
  description: string
  subjects: Subject[]
}

const courses: Course[] = [
  {
    id: '1',
    title: 'Capacitación de Piloto Humanitario',
    description: 'Programa completo de formación para pilotos que desean especializarse en misiones humanitarias y de emergencia.',
    subjects: [
      {
        id: '1-1',
        title: 'Resolución de Conflictos',
        description: 'Aprende técnicas efectivas para manejar y resolver conflictos en situaciones de emergencia.',
        duration: '8 semanas',
        classesCount: 3,
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      },
      {
        id: '1-2',
        title: 'Primeros Auxilios',
        description: 'Curso completo de primeros auxilios adaptado para situaciones de aviación humanitaria.',
        duration: '12 semanas',
        classesCount: 3,
        imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      },
      {
        id: '1-3',
        title: 'Transporte de Pacientes en Aeronave',
        description: 'Aprende los protocolos y técnicas para el transporte seguro de pacientes en aeronaves.',
        duration: '10 semanas',
        classesCount: 3,
        imageUrl: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      }
    ]
  }
]

export default function CourseSubjects({ courseId }: { courseId: string }) {
  const course = courses.find(c => c.id === courseId)

  if (!course) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Curso no encontrado
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
            {course.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {course.description}
          </p>
        </div>
        <div className="mt-12 space-y-12">
          {course.subjects.map((subject) => (
            <div
              key={subject.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={subject.imageUrl}
                  alt={subject.title}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/800x400?text=Imagen+no+disponible';
                  }}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600">
                      {subject.duration}
                    </p>
                    <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-800">
                      {subject.classesCount} clases
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    {subject.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    {subject.description}
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href={`/courses/${courseId}/subjects/${subject.id}`}
                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Ver Clases
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
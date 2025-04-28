'use client'

import Link from 'next/link'

interface Course {
  id: string
  title: string
  description: string
  duration: string
  level: 'beginner' | 'intermediate' | 'advanced'
  imageUrl: string
  subjectsCount: number
}

const courses: Course[] = [
  {
    id: '1',
    title: 'Capacitación de Piloto Humanitario',
    description: 'Programa completo de formación para pilotos que desean especializarse en misiones humanitarias y de emergencia.',
    duration: '6 meses',
    level: 'advanced',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    subjectsCount: 3
  },
  {
    id: '2',
    title: 'Operaciones de Emergencia Aérea',
    description: 'Curso especializado en la coordinación y ejecución de operaciones aéreas en situaciones de emergencia.',
    duration: '4 meses',
    level: 'intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    subjectsCount: 4
  },
  {
    id: '3',
    title: 'Logística de Transporte Aéreo Humanitario',
    description: 'Formación en la planificación y ejecución de operaciones logísticas para transporte aéreo humanitario.',
    duration: '3 meses',
    level: 'intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    subjectsCount: 3
  }
]

export default function AvailableCourses() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Cursos Disponibles
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Explora nuestra oferta de cursos y comienza tu formación en aviación humanitaria.
        </p>
        <div className="mt-12 space-y-12">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={course.imageUrl}
                  alt={course.title}
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
                      {course.duration}
                    </p>
                    <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-800">
                      {course.level === 'beginner' && 'Principiante'}
                      {course.level === 'intermediate' && 'Intermedio'}
                      {course.level === 'advanced' && 'Avanzado'}
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    {course.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    {course.description}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    {course.subjectsCount} materias
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href={`/courses/${course.id}`}
                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Ver Detalles del Curso
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
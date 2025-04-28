'use client'

interface Student {
  id: string
  name: string
  email: string
}

interface Subject {
  id: string
  title: string
  completed: boolean
  completionDate?: string
  finalGrade?: number
  classes: Class[]
}

interface Class {
  id: string
  title: string
  completed: boolean
  exam?: Exam
}

interface Exam {
  id: string
  title: string
  score: number
  date: string
}

// Datos de ejemplo
const student: Student = {
  id: '1',
  name: 'Juan Pérez',
  email: 'juan.perez@example.com',
}

const subjects: Subject[] = [
  {
    id: '1',
    title: 'Resolución de Conflictos',
    completed: true,
    completionDate: '2024-03-15',
    finalGrade: 85,
    classes: [
      {
        id: '1-1',
        title: 'Shock Cultural',
        completed: true,
        exam: {
          id: '1-1-1',
          title: 'Examen - Shock Cultural',
          score: 90,
          date: '2024-03-10'
        }
      },
      {
        id: '1-2',
        title: 'Mediación',
        completed: true,
        exam: {
          id: '1-2-1',
          title: 'Examen - Mediación',
          score: 80,
          date: '2024-03-12'
        }
      }
    ]
  },
  {
    id: '2',
    title: 'Primeros Auxilios',
    completed: true,
    completionDate: '2024-02-28',
    finalGrade: 92,
    classes: [
      {
        id: '2-1',
        title: 'RCP Básico',
        completed: true,
        exam: {
          id: '2-1-1',
          title: 'Examen - RCP Básico',
          score: 95,
          date: '2024-02-25'
        }
      },
      {
        id: '2-2',
        title: 'Manejo de Heridas',
        completed: true,
        exam: {
          id: '2-2-1',
          title: 'Examen - Manejo de Heridas',
          score: 89,
          date: '2024-02-27'
        }
      }
    ]
  },
  {
    id: '3',
    title: 'Transporte de Pacientes en Aeronave',
    completed: false,
    classes: [
      {
        id: '3-1',
        title: 'Protocolos de Seguridad',
        completed: true,
        exam: {
          id: '3-1-1',
          title: 'Examen - Protocolos de Seguridad',
          score: 88,
          date: '2024-03-20'
        }
      },
      {
        id: '3-2',
        title: 'Equipamiento Médico',
        completed: false
      }
    ]
  }
]

export default function StudentHistory() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Capacitación de Piloto Humanitario
          </h2>
          <div className="mt-4">
            <p className="text-lg text-gray-600">
              {student.name} - {student.email}
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {subjects.map((subject) => (
            <div key={subject.id} className="rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">
                  {subject.title}
                </h3>
                <div className="flex items-center space-x-4">
                  {subject.completed ? (
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Completado
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      En progreso
                    </span>
                  )}
                  {subject.finalGrade && (
                    <span className="text-lg font-medium text-gray-900">
                      Nota Final: {subject.finalGrade}%
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {subject.classes.map((classItem) => (
                  <div key={classItem.id} className="rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-medium text-gray-900">
                        {classItem.title}
                      </h4>
                      {classItem.completed ? (
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          Completado
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                          En progreso
                        </span>
                      )}
                    </div>
                    {classItem.exam && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-600">
                          Examen: {classItem.exam.title}
                        </p>
                        <p className="text-sm text-gray-600">
                          Calificación: {classItem.exam.score}%
                        </p>
                        <p className="text-sm text-gray-600">
                          Fecha: {new Date(classItem.exam.date).toLocaleDateString()}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 
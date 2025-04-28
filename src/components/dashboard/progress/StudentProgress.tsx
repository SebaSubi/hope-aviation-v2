'use client'

interface SubjectProgress {
  id: string
  title: string
  progress: number
  completedClasses: number
  totalClasses: number
  lastAccessed: string
  status: 'in-progress' | 'completed' | 'not-started'
  classes: ClassProgress[]
}

interface ClassProgress {
  id: string
  title: string
  progress: number
  status: 'in-progress' | 'completed' | 'not-started'
  lastAccessed: string
  exam?: {
    score: number
    date: string
  }
}

const subjectsProgress: SubjectProgress[] = [
  {
    id: '1',
    title: 'Resolución de Conflictos',
    progress: 75,
    completedClasses: 2,
    totalClasses: 3,
    lastAccessed: '2024-03-15',
    status: 'in-progress',
    classes: [
      {
        id: '1-1',
        title: 'Shock Cultural',
        progress: 100,
        status: 'completed',
        lastAccessed: '2024-03-10',
        exam: {
          score: 90,
          date: '2024-03-10'
        }
      },
      {
        id: '1-2',
        title: 'Mediación',
        progress: 100,
        status: 'completed',
        lastAccessed: '2024-03-12',
        exam: {
          score: 85,
          date: '2024-03-12'
        }
      },
      {
        id: '1-3',
        title: 'Comunicación Efectiva',
        progress: 25,
        status: 'in-progress',
        lastAccessed: '2024-03-15'
      }
    ]
  },
  {
    id: '2',
    title: 'Primeros Auxilios',
    progress: 100,
    completedClasses: 3,
    totalClasses: 3,
    lastAccessed: '2024-03-10',
    status: 'completed',
    classes: [
      {
        id: '2-1',
        title: 'RCP Básico',
        progress: 100,
        status: 'completed',
        lastAccessed: '2024-02-25',
        exam: {
          score: 95,
          date: '2024-02-25'
        }
      },
      {
        id: '2-2',
        title: 'Manejo de Heridas',
        progress: 100,
        status: 'completed',
        lastAccessed: '2024-02-28',
        exam: {
          score: 88,
          date: '2024-02-28'
        }
      },
      {
        id: '2-3',
        title: 'Emergencias Médicas',
        progress: 100,
        status: 'completed',
        lastAccessed: '2024-03-10',
        exam: {
          score: 92,
          date: '2024-03-10'
        }
      }
    ]
  },
  {
    id: '3',
    title: 'Transporte de Pacientes en Aeronave',
    progress: 0,
    completedClasses: 0,
    totalClasses: 3,
    lastAccessed: '2024-03-01',
    status: 'not-started',
    classes: [
      {
        id: '3-1',
        title: 'Protocolos de Seguridad',
        progress: 0,
        status: 'not-started',
        lastAccessed: '2024-03-01'
      },
      {
        id: '3-2',
        title: 'Equipamiento Médico',
        progress: 0,
        status: 'not-started',
        lastAccessed: '2024-03-01'
      },
      {
        id: '3-3',
        title: 'Planificación de Vuelos',
        progress: 0,
        status: 'not-started',
        lastAccessed: '2024-03-01'
      }
    ]
  }
]

export default function StudentProgress() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Mi Progreso
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Revisa tu avance en las materias y clases.
        </p>
        <div className="mt-12 space-y-8">
          {subjectsProgress.map((subject) => (
            <div
              key={subject.id}
              className="overflow-hidden rounded-lg bg-white shadow"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      {subject.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {subject.completedClasses} de {subject.totalClasses} clases completadas
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium ${
                        subject.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : subject.status === 'in-progress'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {subject.status === 'completed' && 'Completado'}
                      {subject.status === 'in-progress' && 'En progreso'}
                      {subject.status === 'not-started' && 'No iniciado'}
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">
                      Último acceso: {new Date(subject.lastAccessed).toLocaleDateString()}
                    </span>
                    <span className="font-medium text-gray-900">
                      {subject.progress}%
                    </span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-indigo-600"
                      style={{ width: `${subject.progress}%` }}
                    />
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  {subject.classes.map((classItem) => (
                    <div
                      key={classItem.id}
                      className="rounded-lg border border-gray-200 p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-md font-medium text-gray-900">
                            {classItem.title}
                          </h4>
                          <p className="mt-1 text-sm text-gray-500">
                            Último acceso: {new Date(classItem.lastAccessed).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          {classItem.exam && (
                            <span className="text-sm font-medium text-gray-900">
                              Examen: {classItem.exam.score}%
                            </span>
                          )}
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              classItem.status === 'completed'
                                ? 'bg-green-100 text-green-800'
                                : classItem.status === 'in-progress'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {classItem.status === 'completed' && 'Completado'}
                            {classItem.status === 'in-progress' && 'En progreso'}
                            {classItem.status === 'not-started' && 'No iniciado'}
                          </span>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">Progreso</span>
                          <span className="font-medium text-gray-900">
                            {classItem.progress}%
                          </span>
                        </div>
                        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                          <div
                            className="h-full rounded-full bg-indigo-600"
                            style={{ width: `${classItem.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 
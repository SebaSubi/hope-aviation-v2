'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { use } from 'react'
import { Class } from '@/types/student'
import { mockClasses } from '@/data/mockData'

export default function ClassView({ params }: { params: Promise<{ courseId: string; subjectId: string; classId: string }> }) {
  const resolvedParams = use(params)
  const [classData, setClassData] = useState<Class | null>(null)

  useEffect(() => {
    // TODO: Replace with actual API call
    const foundClass = mockClasses.find(c => c.id === resolvedParams.classId)
    setClassData(foundClass || null)
  }, [resolvedParams.classId])

  if (!classData) {
    return <div>Cargando...</div>
  }

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <Link
          href={`/student/my-courses/${resolvedParams.courseId}/subjects/${resolvedParams.subjectId}`}
          className="text-sm text-blue-600 hover:text-blue-500"
        >
          ← Volver a las Clases
        </Link>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          {classData.title}
        </h1>
        <p className="mt-2 text-gray-600">{classData.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {classData.videoUrl && (
            <div className="mb-6">
              <div className="aspect-video w-full rounded-lg bg-gray-200">
                {/* Video player would go here */}
                <div className="flex h-full items-center justify-center">
                  <span className="text-gray-500">Reproductor de Video</span>
                </div>
              </div>
            </div>
          )}

          <div className="prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: classData.content }} />
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-lg font-semibold text-gray-900">Información de la Clase</h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Duración</h3>
                <p className="mt-1 text-sm text-gray-900">{classData.duration}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Estado</h3>
                <p className="mt-1 text-sm text-gray-900">
                  {classData.status === 'completed' ? 'Completado' : 
                   classData.status === 'in-progress' ? 'En Progreso' : 'No Iniciado'}
                </p>
              </div>
            </div>
          </div>

          {classData.materials && classData.materials.length > 0 && (
            <div className="rounded-lg bg-white p-6 shadow">
              <h2 className="text-lg font-semibold text-gray-900">Materiales</h2>
              <ul className="mt-4 space-y-2">
                {classData.materials.map((material) => (
                  <li key={material.id} className="flex items-center">
                    <span className="mr-2">📄</span>
                    <a
                      href={material.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-900 hover:text-blue-600"
                    >
                      {material.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-lg font-semibold text-gray-900">Acciones</h2>
            <div className="mt-4 space-y-2">
              <button
                className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                onClick={() => {
                  // TODO: Implement mark as completed
                  console.log('Marcar como completado')
                }}
              >
                Marcar como Completado
              </button>
              <Link
                href={`/student/my-courses/${resolvedParams.courseId}/subjects/${resolvedParams.subjectId}/classes/${resolvedParams.classId}/quiz`}
                className="block w-full rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 text-center"
              >
                Realizar Quiz
              </Link>
            </div>
          </div>

          {classData.quizResults && classData.quizResults.length > 0 && (
            <div className="rounded-lg bg-white p-6 shadow">
              <h2 className="text-lg font-semibold text-gray-900">Historial de Quizzes</h2>
              <div className="mt-4 space-y-4">
                {classData.quizResults.map((result) => (
                  <div key={result.id} className="border-b pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">
                          {new Date(result.date).toLocaleDateString()}
                        </p>
                        <p className="text-lg font-medium text-gray-900">
                          {result.score} de {result.total} ({Math.round((result.score / result.total) * 100)}%)
                        </p>
                      </div>
                      <div className={`rounded-full px-3 py-1 text-sm font-medium ${
                        result.score === result.total
                          ? 'bg-green-100 text-green-800'
                          : result.score >= result.total / 2
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {result.score === result.total
                          ? 'Excelente'
                          : result.score >= result.total / 2
                          ? 'Aprobado'
                          : 'Reprobado'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 
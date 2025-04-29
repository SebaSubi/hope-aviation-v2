'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Class {
  id: string
  title: string
  description: string
  duration: string
  status: 'completed' | 'in-progress' | 'not-started'
  videoUrl?: string
  materials?: string[]
}

export default function SubjectClasses({ params }: { params: { courseId: string; subjectId: string } }) {
  const [classes, setClasses] = useState<Class[]>([])

  useEffect(() => {
    // TODO: Replace with actual API call
    setClasses([
      {
        id: '1',
        title: 'Introducción a los Procedimientos de Emergencia',
        description: 'Conceptos básicos y protocolos iniciales para manejar situaciones de emergencia en vuelo.',
        duration: '45 min',
        status: 'completed',
        videoUrl: 'https://example.com/video1',
        materials: ['Guía de Procedimientos.pdf', 'Lista de Verificación.docx']
      },
      {
        id: '2',
        title: 'Simulaciones de Emergencia',
        description: 'Prácticas de simulación para diferentes escenarios de emergencia.',
        duration: '60 min',
        status: 'in-progress',
        videoUrl: 'https://example.com/video2',
        materials: ['Manual de Simulaciones.pdf']
      },
      {
        id: '3',
        title: 'Análisis de Casos de Estudio',
        description: 'Revisión y análisis de casos reales de emergencias en vuelo.',
        duration: '50 min',
        status: 'not-started'
      }
    ])
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800'
      case 'not-started':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completado'
      case 'in-progress':
        return 'En Progreso'
      case 'not-started':
        return 'No Iniciado'
      default:
        return 'No Iniciado'
    }
  }

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Clases</h1>
        <p className="mt-2 text-gray-600">
          Accede a todas las clases de esta materia
        </p>
      </div>

      <div className="space-y-4">
        {classes.map((classItem) => (
          <div
            key={classItem.id}
            className="rounded-lg bg-white p-6 shadow hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900">
                  {classItem.title}
                </h2>
                <p className="mt-2 text-gray-600">{classItem.description}</p>
                
                {classItem.materials && classItem.materials.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-900">Materiales:</h3>
                    <ul className="mt-2 space-y-1">
                      {classItem.materials.map((material, index) => (
                        <li key={index} className="text-sm text-gray-600">
                          📄 {material}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="ml-4 flex flex-col items-end">
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(classItem.status)}`}>
                  {getStatusText(classItem.status)}
                </span>
                <span className="mt-2 text-sm text-gray-500">
                  Duración: {classItem.duration}
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Link
                href={`/student/my-courses/${params.courseId}/subjects/${params.subjectId}/classes/${classItem.id}`}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
              >
                Ver Clase
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 
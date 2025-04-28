'use client'

import { useState } from 'react'

interface Subject {
  id: string
  title: string
}

const subjects: Subject[] = [
  { id: '1', title: 'Resolución de Conflictos' },
  { id: '2', title: 'Primeros Auxilios' },
  { id: '3', title: 'Transporte de Pacientes en Aeronave' },
]

export default function CreateLesson() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [subjectId, setSubjectId] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const [resources, setResources] = useState<File[]>([])
  const [duration, setDuration] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para guardar la clase
    console.log({
      title,
      description,
      subjectId,
      videoUrl,
      resources,
      duration
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setResources(Array.from(e.target.files))
    }
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Crear Nueva Clase
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Completa el formulario para crear una nueva clase dentro de una materia.
        </p>
        <form onSubmit={handleSubmit} className="mt-12 space-y-8">
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Materia
            </label>
            <select
              id="subject"
              name="subject"
              value={subjectId}
              onChange={(e) => setSubjectId(e.target.value)}
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Selecciona una materia</option>
              {subjects.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Título de la Clase
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Duración
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="Ej: 2 semanas"
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label
              htmlFor="video"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              URL del Video
            </label>
            <input
              type="url"
              id="video"
              name="video"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label
              htmlFor="resources"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Recursos (PDFs, PPTs)
            </label>
            <input
              type="file"
              id="resources"
              name="resources"
              multiple
              onChange={handleFileChange}
              className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-indigo-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-indigo-500"
            />
            {resources.length > 0 && (
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Archivos seleccionados: {resources.length}
                </p>
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Crear Clase
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 
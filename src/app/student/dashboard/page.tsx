'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Course {
  id: string
  name: string
  progress: number
  subjectsCompleted: number
  totalSubjects: number
  averageGrade: number
}

export default function StudentDashboard() {
  const [studentName, setStudentName] = useState('')
  const [courses, setCourses] = useState<Course[]>([])
  const [overallProgress, setOverallProgress] = useState(0)
  const [totalSubjects, setTotalSubjects] = useState(0)
  const [completedSubjects, setCompletedSubjects] = useState(0)
  const [averageGrade, setAverageGrade] = useState(0)

  useEffect(() => {
    // TODO: Replace with actual API calls
    setStudentName('Guido Cruz')
    setCourses([
      {
        id: '1',
        name: 'Humanitarian Pilot Training',
        progress: 75,
        subjectsCompleted: 3,
        totalSubjects: 4,
        averageGrade: 85,
      },
      
    ])
    setOverallProgress(55)
    setTotalSubjects(9)
    setCompletedSubjects(4)
    setAverageGrade(87.5)
  }, [])

  return (
    <div>
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Panel del Estudiante</h1>
          <div className="mt-6">
            <p className="text-gray-600">
              Bienvenido al panel del estudiante. Desde aquí puedes ver tus cursos, acceder a las clases y exámenes, y seguir tu progreso.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {studentName}!
        </h1>
        <p className="mt-2 text-gray-600">
          Here's an overview of your progress and ongoing courses.
        </p>
      </div>

      {/* Progress Overview */}
      <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-lg font-medium text-gray-900">Overall Progress</h3>
          <div className="mt-4">
            <div className="relative h-2 w-full rounded-full bg-gray-200">
              <div
                className="absolute h-2 rounded-full bg-blue-600"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
            <p className="mt-2 text-2xl font-semibold text-gray-900">
              {overallProgress}%
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-lg font-medium text-gray-900">Subjects Progress</h3>
          <div className="mt-4">
            <p className="text-2xl font-semibold text-gray-900">
              {completedSubjects}/{totalSubjects}
            </p>
            <p className="mt-1 text-sm text-gray-500">Subjects completed</p>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-lg font-medium text-gray-900">Average Grade</h3>
          <div className="mt-4">
            <p className="text-2xl font-semibold text-gray-900">
              {averageGrade}%
            </p>
            <p className="mt-1 text-sm text-gray-500">Overall performance</p>
          </div>
        </div>
      </div>

      {/* Ongoing Courses */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Ongoing Courses</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {courses.map((course) => (
            <div
              key={course.id}
              className="rounded-lg bg-white p-6 shadow"
            >
              <h3 className="text-lg font-medium text-gray-900">{course.name}</h3>
              <div className="mt-4">
                <div className="relative h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="absolute h-2 rounded-full bg-blue-600"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">
                      {course.subjectsCompleted}/{course.totalSubjects} subjects
                    </p>
                    <p className="text-sm text-gray-500">
                      Average grade: {course.averageGrade}%
                    </p>
                  </div>
                  <Link
                    href={`/student/my-courses/${course.id}`}
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                  >
                    Continue
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
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Course {
  id: string
  name: string
  description: string
  progress: number
  subjects: Subject[]
}

interface Subject {
  id: string
  name: string
  progress: number
  grade: number
}

export default function MyCourses() {
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    // TODO: Replace with actual API calls
    setCourses([
      {
        id: '1',
        name: 'Humanitarian Pilot Training',
        description: 'Comprehensive training for humanitarian flight operations',
        progress: 60,
        subjects: [
          {
            id: '1',
            name: 'Basic Flight Operations',
            progress: 100,
            grade: 95,
          },
          {
            id: '2',
            name: 'Emergency Procedures',
            progress: 80,
            grade: 88,
          },
          {
            id: '3',
            name: 'Navigation Systems',
            progress: 60,
            grade: 0,
          },
          {
            id: '4',
            name: 'Aircraft Maintenance',
            progress: 0,
            grade: 0,
          },
          {
            id: '5',
            name: 'Crisis Management',
            progress: 0,
            grade: 0,
          },
        ],
      },
    ])
  }, [])

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
        <p className="mt-2 text-gray-600">
          View and manage your enrolled courses
        </p>
      </div>

      <div className="space-y-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded-lg bg-white p-6 shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {course.name}
                </h2>
                <p className="mt-1 text-gray-600">{course.description}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">
                  {course.progress}%
                </div>
                <div className="text-sm text-gray-500">Overall Progress</div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Subjects</h3>
              <div className="mt-4 space-y-4">
                {course.subjects.map((subject) => (
                  <div
                    key={subject.id}
                    className="rounded-lg border border-gray-200 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {subject.name}
                        </h4>
                        <div className="mt-1 flex items-center">
                          <div className="relative h-2 w-32 rounded-full bg-gray-200">
                            <div
                              className="absolute h-2 rounded-full bg-blue-600"
                              style={{ width: `${subject.progress}%` }}
                            />
                          </div>
                          <span className="ml-2 text-sm text-gray-500">
                            {subject.progress}%
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-900">
                          {subject.grade || '-'}%
                        </div>
                        <div className="text-sm text-gray-500">Grade</div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={`/student/my-courses/${course.id}/subjects/${subject.id}`}
                        className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                      >
                        Enter Subject
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 
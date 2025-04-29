'use client'

import { useEffect, useState } from 'react'

interface Course {
  id: string
  name: string
  description: string
  subjects: string[]
  duration: string
  level: string
}

export default function AvailableCourses() {
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    // TODO: Replace with actual API calls
    setCourses([
      {
        id: '1',
        name: 'Humanitarian Pilot Training',
        description:
          'Comprehensive training program for pilots focusing on humanitarian operations, emergency response, and crisis management in aviation.',
        subjects: [
          'Basic Flight Operations',
          'Emergency Procedures',
          'Navigation Systems',
          'Aircraft Maintenance',
          'Crisis Management',
        ],
        duration: '12 weeks',
        level: 'Advanced',
      },
    ])
  }, [])

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Available Courses</h1>
        <p className="mt-2 text-gray-600">
          Browse and enroll in new courses to expand your knowledge
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded-lg bg-white p-6 shadow"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                {course.name}
              </h2>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                {course.level}
              </span>
            </div>
            <p className="mt-2 text-gray-600">{course.description}</p>

            <div className="mt-4">
              <h3 className="font-medium text-gray-900">Subjects Included:</h3>
              <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
                {course.subjects.map((subject, index) => (
                  <li key={index}>{subject}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Duration: {course.duration}
              </div>
              <button
                onClick={() => {
                  // TODO: Implement enrollment logic
                  console.log('Enroll in course:', course.id)
                }}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
              >
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 
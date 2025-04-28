'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface DashboardLayoutProps {
  children: React.ReactNode
  userType: 'admin' | 'professor' | 'student'
}

const adminNavigation = [
  { name: 'Dashboard', href: '/admin/dashboard' },
  { name: 'Usuarios', href: '/admin/users' },
  { name: 'Cursos', href: '/admin/courses' },
  { name: 'Clases', href: '/admin/lessons' },
  { name: 'Exámenes', href: '/admin/exams' },
  { name: 'Historial', href: '/admin/history' },
]

const professorNavigation = [
  { name: 'Dashboard', href: '/professor/dashboard' },
  { name: 'Mis Cursos', href: '/professor/my-courses' },
  { name: 'Crear Clase', href: '/professor/create-lesson' },
  { name: 'Crear Examen', href: '/professor/create-exam' },
  { name: 'Historial Alumnos', href: '/professor/student-history' },
]

const studentNavigation = [
  { name: 'Dashboard', href: '/student/dashboard' },
  { name: 'Cursos Disponibles', href: '/student/available-courses' },
  { name: 'Mis Cursos', href: '/student/my-courses' },
  { name: 'Progreso', href: '/student/progress' },
]

export default function DashboardLayout({ children, userType }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const navigation = userType === 'admin' 
    ? adminNavigation 
    : userType === 'professor' 
      ? professorNavigation 
      : studentNavigation

  return (
    <div>
      <div className="min-h-full">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Abrir menú</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <div className="ml-4">
              <span className="text-sm font-medium text-gray-900">
                {userType === 'admin' ? 'Administrador' : userType === 'professor' ? 'Profesor' : 'Estudiante'}
              </span>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div
            className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-200 ease-in-out ${
              sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="flex h-16 items-center justify-between px-4">
              <div className="flex items-center">
                <img
                  className="h-8 w-auto"
                  src="/HOPE-logo.svg"
                  alt="HOPE Aviation"
                />
              </div>
            </div>
            <nav className="mt-5 space-y-1 px-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium ${
                    pathname === item.href
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Main content */}
          <div className="flex-1">
            <main className="py-10">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
} 
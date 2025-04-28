'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface CampusNavbarProps {
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

export default function CampusNavbar({ userType }: CampusNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = userType === 'admin' 
    ? adminNavigation 
    : userType === 'professor' 
      ? professorNavigation 
      : studentNavigation

  // Filtrar la navegación para excluir la página actual
  const filteredNavigation = navigation.filter(item => item.href !== pathname)

  return (
    <header className="bg-gray-900">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">HOPE AVIATION</span>
            <img
              alt=""
              src="/HOPE-logo.svg"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {filteredNavigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <span className="text-sm/6 font-semibold text-white">
            {userType === 'admin' ? 'Administrador' : userType === 'professor' ? 'Profesor' : 'Estudiante'}
          </span>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">HOPE AVIATION</span>
              <img
                alt=""
                src="/HOPE-logo.svg"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {filteredNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <span className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900">
                  {userType === 'admin' ? 'Administrador' : userType === 'professor' ? 'Profesor' : 'Estudiante'}
                </span>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
} 
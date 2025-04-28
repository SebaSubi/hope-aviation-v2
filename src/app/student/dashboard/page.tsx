'use client'

import CampusNavbar from "@/components/layout/CampusNavbar";

export default function StudentDashboard() {
  return (
    <div>
      <CampusNavbar userType="student" />
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
    </div>
  );
} 
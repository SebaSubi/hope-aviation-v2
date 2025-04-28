'use client'

import CampusNavbar from "@/components/layout/CampusNavbar";

export default function ProfessorDashboard() {
  return (
    <div>
      <CampusNavbar userType="professor" />
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Panel del Profesor</h1>
          <div className="mt-6">
            <p className="text-gray-600">
              Bienvenido al panel del profesor. Desde aquí puedes gestionar tus cursos, crear clases y exámenes, y ver el historial de tus estudiantes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 
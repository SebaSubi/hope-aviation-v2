'use client'

import CampusNavbar from "@/components/layout/CampusNavbar";

export default function AdminDashboard() {
  return (
    <div>
      <CampusNavbar userType="admin" />
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Panel de Administración</h1>
          <div className="mt-6">
            <p className="text-gray-600">
              Bienvenido al panel de administración. Desde aquí puedes gestionar usuarios, cursos, clases y exámenes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 
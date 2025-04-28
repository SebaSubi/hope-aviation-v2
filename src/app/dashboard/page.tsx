'use client'

import DashboardLayout from "@/components/layout/DashboardLayout";
import { useEffect, useState } from "react";

type UserRole = 'admin' | 'professor' | 'student';

export default function Dashboard() {
  const [userRole, setUserRole] = useState<UserRole>('student');

  useEffect(() => {
    console.log('Dashboard: Leyendo localStorage...')
    const role = localStorage.getItem('userRole') as UserRole;
    console.log('Dashboard: Rol leído:', role)
    if (role) {
      setUserRole(role);
      console.log('Dashboard: Rol actualizado:', role)
    }
  }, []);

  return (
    <DashboardLayout userRole={userRole}>
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Bienvenido al Campus Virtual</h1>
          <div className="mt-6">
            {/* Aquí irá el contenido específico del dashboard según el rol */}
            {userRole === 'admin' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Panel de Administración</h2>
                {/* Contenido para administradores */}
              </div>
            )}
            {userRole === 'professor' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Panel del Profesor</h2>
                {/* Contenido para profesores */}
              </div>
            )}
            {userRole === 'student' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Mi Aprendizaje</h2>
                {/* Contenido para estudiantes */}
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 
"use client";

import React from "react";
import Link from "next/link";

export default function DonatePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <img
          src="https://images.unsplash.com/photo-1517190525944-4edce215bc4a?q=80&w=2967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
        />
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Apoya Nuestra Misión
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Tu donación hace posible que continuemos llevando esperanza a través de la aviación humanitaria
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          {/* Donation Impact */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Impacto de Tu Donación
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Donación General</h3>
                <p className="text-gray-600">
                  Apoya nuestras operaciones diarias y nos ayuda a mantener nuestros programas en funcionamiento.
                </p>
                <Link
                  href="/donate/general"
                  className="mt-4 inline-block rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Donar Ahora
                </Link>
              </div>
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Donación Recurrente</h3>
                <p className="text-gray-600">
                  Conviértete en un socio mensual y ayúdanos a planificar mejor nuestro futuro.
                </p>
                <Link
                  href="/donate/recurring"
                  className="mt-4 inline-block rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Configurar Donación Recurrente
                </Link>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Proyectos Específicos
            </h2>
            <p className="text-gray-600 mb-8">
              También puedes apoyar proyectos específicos que te interesen:
            </p>
            <div className="grid grid-cols-1 gap-8">
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Proyectos de Clase</h3>
                <p className="text-gray-600 mb-4">
                  Apoya la educación de futuros pilotos humanitarios.
                </p>
                <Link
                  href="/projects/class"
                  className="inline-block rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Ver Proyectos
                </Link>
              </div>
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Misiones Locales</h3>
                <p className="text-gray-600 mb-4">
                  Apoya nuestras misiones en áreas remotas de Argentina.
                </p>
                <Link
                  href="/projects/missions"
                  className="inline-block rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Ver Misiones
                </Link>
              </div>
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Infraestructura</h3>
                <p className="text-gray-600 mb-4">
                  Ayúdanos a construir hangares y pistas de aterrizaje.
                </p>
                <Link
                  href="/projects/infrastructure"
                  className="inline-block rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Ver Proyectos
                </Link>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Formas de Donar
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tarjeta de Crédito/Débito</h3>
                <p className="text-gray-600">
                  Donación segura a través de nuestra plataforma de pagos.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Transferencia Bancaria</h3>
                <p className="text-gray-600">
                  Datos bancarios para transferencias directas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
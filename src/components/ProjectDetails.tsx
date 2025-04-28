import React from "react";
import { projects } from "./ProjectsList";

interface ProjectDetailsProps {
  projectId: string;
}

export default function ProjectDetails({ projectId }: ProjectDetailsProps) {
  const project = projects.find(p => p.id === parseInt(projectId));

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900">Proyecto no encontrado</h1>
        </div>
      </div>
    );
  }

  const progressPercentage = (project.currentAmount / project.targetAmount) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="relative h-96">
            <img
              className="w-full h-full object-cover"
              src={project.imageUrl}
              alt={project.name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl font-bold text-white">{project.name}</h1>
              <p className="mt-2 text-xl text-white/90">{project.category}</p>
            </div>
          </div>

          <div className="p-8">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600">{project.description}</p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900">Progreso de la Campaña</h2>
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Recaudado: ${project.currentAmount.toLocaleString()}</span>
                  <span>Meta: ${project.targetAmount.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-indigo-600 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  {progressPercentage.toFixed(1)}% completado
                </p>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href={project.donate}
                className="flex-1 rounded-md bg-indigo-600 px-6 py-3 text-center text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Donar Ahora
              </a>
              <a
                href="/projects"
                className="flex-1 rounded-md bg-white px-6 py-3 text-center text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Volver a Proyectos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
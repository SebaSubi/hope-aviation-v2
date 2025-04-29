import { Course, Subject, Class, QuizQuestion, QuizResult } from '@/types/student'

export const mockQuizQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: '¿Cuál es el primer paso en un procedimiento de emergencia?',
    options: [
      'Evaluar la situación',
      'Contactar a la torre de control',
      'Activar el sistema de emergencia',
      'Iniciar el protocolo de evacuación'
    ],
    correctAnswer: 0,
    explanation: 'Es crucial evaluar primero la situación para determinar la mejor respuesta.'
  },
  {
    id: '2',
    question: '¿Qué tipo de emergencia requiere una respuesta inmediata?',
    options: [
      'Fallo en el sistema de entretenimiento',
      'Pérdida de presión en cabina',
      'Turbulencia moderada',
      'Retraso en el servicio de comidas'
    ],
    correctAnswer: 1,
    explanation: 'La pérdida de presión en cabina es una emergencia crítica que requiere acción inmediata.'
  },
  {
    id: '3',
    question: '¿Cuál es el protocolo correcto para una evacuación de emergencia?',
    options: [
      'Correr hacia la salida más cercana',
      'Esperar instrucciones del personal',
      'Saltar por la ventana',
      'Buscar el equipaje personal'
    ],
    correctAnswer: 1,
    explanation: 'Siempre se debe esperar las instrucciones del personal de cabina durante una evacuación.'
  }
]

export const mockQuizResults: QuizResult[] = [
  {
    id: '1',
    score: 2,
    total: 3,
    date: '2024-03-15T10:30:00Z',
    userId: 'user1',
    classId: 'class1'
  },
  {
    id: '2',
    score: 3,
    total: 3,
    date: '2024-03-16T14:45:00Z',
    userId: 'user1',
    classId: 'class1'
  }
]

export const mockClasses: Class[] = [
  {
    id: 'class1',
    title: 'Introducción a los Procedimientos de Emergencia',
    description: 'Conceptos básicos y protocolos iniciales para manejar situaciones de emergencia en vuelo.',
    content: `
      <h2>Objetivos de la Clase</h2>
      <ul>
        <li>Entender los protocolos básicos de emergencia</li>
        <li>Identificar diferentes tipos de emergencias</li>
        <li>Aprender los procedimientos de comunicación</li>
        <li>Conocer las responsabilidades del equipo</li>
      </ul>
      
      <h2>Contenido Principal</h2>
      <p>En esta clase aprenderemos sobre los procedimientos estándar para manejar situaciones de emergencia durante el vuelo...</p>
    `,
    duration: '45 min',
    status: 'in-progress',
    videoUrl: 'https://example.com/video1',
    materials: [
      {
        id: 'mat1',
        name: 'Guía de Procedimientos.pdf',
        url: 'https://example.com/materials/procedures.pdf',
        type: 'pdf'
      },
      {
        id: 'mat2',
        name: 'Lista de Verificación.docx',
        url: 'https://example.com/materials/checklist.docx',
        type: 'doc'
      }
    ],
    quizResults: mockQuizResults,
    quizQuestions: mockQuizQuestions
  }
]

export const mockSubjects: Subject[] = [
  {
    id: 'subject1',
    name: 'Emergency Procedures',
    description: 'Procedimientos y protocolos para manejar situaciones de emergencia en vuelo.',
    classes: mockClasses,
    progress: 60
  }
]

export const mockCourse: Course = {
  id: 'course1',
  name: 'Humanitarian Pilot Training',
  description: 'Comprehensive training program for pilots focusing on humanitarian operations, emergency response, and crisis management in aviation.',
  subjects: mockSubjects,
  progress: 45,
  status: 'enrolled'
} 
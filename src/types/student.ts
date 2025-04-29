export interface QuizResult {
  id: string
  score: number
  total: number
  date: string
  userId: string
  classId: string
}

export interface Class {
  id: string
  title: string
  description: string
  content: string
  videoUrl?: string
  materials?: {
    id: string
    name: string
    url: string
    type: 'pdf' | 'doc' | 'video' | 'other'
  }[]
  duration: string
  status: 'completed' | 'in-progress' | 'not-started'
  quizResults?: QuizResult[]
  quizQuestions?: QuizQuestion[]
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

export interface Subject {
  id: string
  name: string
  description: string
  classes: Class[]
  progress: number
}

export interface Course {
  id: string
  name: string
  description: string
  subjects: Subject[]
  progress: number
  status: 'enrolled' | 'completed' | 'not-started'
} 
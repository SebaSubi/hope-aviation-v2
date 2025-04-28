import CourseSubjects from '@/components/dashboard/courses/CourseSubjects'

export default function CoursePage({ params }: { params: { courseId: string } }) {
  return <CourseSubjects courseId={params.courseId} />
} 
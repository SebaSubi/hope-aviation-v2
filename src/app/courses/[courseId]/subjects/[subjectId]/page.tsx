import SubjectClasses from '@/components/dashboard/courses/SubjectClasses'

export default function SubjectPage({ params }: { params: { courseId: string, subjectId: string } }) {
  return <SubjectClasses courseId={params.courseId} subjectId={params.subjectId} />
} 
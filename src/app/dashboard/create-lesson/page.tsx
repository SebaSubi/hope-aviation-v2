import DashboardLayout from "@/components/layout/DashboardLayout";
import CreateLesson from "@/components/dashboard/lessons/CreateLesson";

export default function CreateLessonPage() {
  // En una implementación real, esto vendría de la autenticación
  const userRole: 'admin' | 'professor' | 'student' = 'professor';

  return (
    <DashboardLayout userRole={userRole}>
      <CreateLesson />
    </DashboardLayout>
  );
} 
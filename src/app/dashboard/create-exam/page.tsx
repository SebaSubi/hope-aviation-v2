import DashboardLayout from "@/components/layout/DashboardLayout";
import CreateExam from "@/components/dashboard/exams/CreateExam";

export default function CreateExamPage() {
  // En una implementación real, esto vendría de la autenticación
  const userRole: 'admin' | 'professor' | 'student' = 'professor';

  return (
    <DashboardLayout userRole={userRole}>
      <CreateExam />
    </DashboardLayout>
  );
} 
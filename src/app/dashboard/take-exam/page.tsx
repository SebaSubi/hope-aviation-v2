import DashboardLayout from "@/components/layout/DashboardLayout";
import TakeExam from "@/components/dashboard/exams/TakeExam";

export default function TakeExamPage() {
  // En una implementación real, esto vendría de la autenticación
  const userRole: 'admin' | 'professor' | 'student' = 'student';

  return (
    <DashboardLayout userRole={userRole}>
      <TakeExam />
    </DashboardLayout>
  );
} 
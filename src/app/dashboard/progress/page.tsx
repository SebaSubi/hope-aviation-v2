import DashboardLayout from "@/components/layout/DashboardLayout";
import StudentProgress from "@/components/dashboard/progress/StudentProgress";

export default function ProgressPage() {
  // En una implementación real, esto vendría de la autenticación
  const userRole: 'admin' | 'professor' | 'student' = 'student';

  return (
    <DashboardLayout userRole={userRole}>
      <StudentProgress />
    </DashboardLayout>
  );
} 
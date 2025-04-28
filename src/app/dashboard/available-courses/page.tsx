import AvailableCourses from "@/components/dashboard/courses/AvailableCourses";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function AvailableCoursesPage() {
  // En una implementación real, esto vendría de la autenticación
  const userRole: 'admin' | 'professor' | 'student' = 'student';

  return (
    <DashboardLayout userRole={userRole}>
      <AvailableCourses />
    </DashboardLayout>
  );
} 
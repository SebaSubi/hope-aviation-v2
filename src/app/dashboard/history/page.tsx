import DashboardLayout from '@/components/layout/DashboardLayout'
import StudentHistory from '@/components/dashboard/progress/StudentHistory'

export default function HistoryPage() {
  const userRole = 'student' // Esto debería venir de la autenticación

  return (
    <DashboardLayout userRole={userRole}>
      <StudentHistory />
    </DashboardLayout>
  )
} 
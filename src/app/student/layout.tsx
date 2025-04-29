import CampusNavbar from '@/components/layout/CampusNavbar'

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CampusNavbar userType="student" />
      {children}
    </>
  )
} 
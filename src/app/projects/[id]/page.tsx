import ProjectDetails from "@/components/pages/projects/ProjectDetails";
import Navbar from "@/components/layout/Navbar";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <div>
      <Navbar />
      <ProjectDetails projectId={params.id} />
    </div>
  );
} 
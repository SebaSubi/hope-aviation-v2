import ProjectDetails from "@/components/ProjectDetails";
import Navbar from "@/components/Navbar";

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
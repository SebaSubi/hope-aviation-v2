import CourseDetails from "@/components/CourseDetails";
import Navbar from "@/components/Navbar";

interface CoursePageProps {
  params: {
    id: string;
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  return (
    <div>
      <Navbar />
      <CourseDetails courseId={params.id} />
    </div>
  );
} 
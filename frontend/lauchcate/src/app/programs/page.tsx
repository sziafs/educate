import Link from 'next/link';
import Sidebar from '../sidebar';

interface CourseCardProps {
  courseNumber: number;
  imageUrl: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ courseNumber, imageUrl }) => {
  const defaultImage = '/default.jpeg';

  return (
    <Link href={`/course/${courseNumber}`}>
      <div className="bg-cover bg-center h-64 rounded-lg shadow-md" style={{ backgroundImage: `url(${defaultImage})` }}>
      </div>
    </Link>
  );
};

export default function Page() {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen border-r">
        <Sidebar />
      </div>
      <div className="flex-grow p-10">
        <h1 className="text-4xl mb-4">Programs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <CourseCard courseNumber={1} imageUrl="/course1.jpg" />
          <CourseCard courseNumber={2} imageUrl="/course2.jpg" />
          <CourseCard courseNumber={3} imageUrl="/course3.jpg" />
          <CourseCard courseNumber={4} imageUrl="/course4.jpg" />
          <CourseCard courseNumber={5} imageUrl="/course5.jpg" />
          <CourseCard courseNumber={6} imageUrl="/course6.jpg" />
          <CourseCard courseNumber={7} imageUrl="/course7.jpg" />
          <CourseCard courseNumber={8} imageUrl="/course8.jpg" />
        </div>
      </div>
    </div>
  );
}
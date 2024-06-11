import Link from 'next/link';
import Sidebar from '../sidebar';

interface CourseCardProps {
  programNumber: number;
  imageUrl: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ programNumber, imageUrl }) => {
  const defaultImage = '/default.jpeg';

  return (
    <Link href={`/course/${programNumber}`}>
      <div className="p-4 border border-gray-200 rounded-lg">
        <div
          className="bg-cover bg-center h-64 rounded-lg"
          style={{ backgroundImage: `url(${imageUrl || defaultImage})` }}
        >
          <div className="h-full flex items-end bg-black bg-opacity-50 p-4 rounded-b-lg">
            <h2 className="text-white text-2xl font-bold">Program {programNumber}</h2>
          </div>
        </div>
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
        <h1 className="text-4xl mb-4">Dashboard</h1>
        <p className="text-lg mb-10">Welcome to Launchcate!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="md:col-span-2">
            <CourseCard programNumber={1} imageUrl="/course1.jpg" />
          </div>
          <CourseCard programNumber={2} imageUrl="/course2.jpg" />
          <CourseCard programNumber={3} imageUrl="/course3.jpg" />
        </div>
      </div>
    </div>
  );
}
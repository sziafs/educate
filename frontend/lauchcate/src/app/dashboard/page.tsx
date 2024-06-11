import Link from 'next/link';
import Sidebar from '../sidebar';

interface CourseCardProps {
  programNumber: number;
  programTitle: string;
  imageUrl: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ programNumber, programTitle, imageUrl }) => {
  return (
    <Link href={`/course/${programNumber}`}>
      <div className="p-4 border border-gray-600 rounded-lg">
      <p className="text-gray-300 text-sm font-bold mb-2">{programTitle}</p>
        <div
          className="bg-cover bg-center h-64 rounded-lg"
        >
          <div className="h-full rounded-lg bg-gray-400"/>
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
            <CourseCard programNumber={1} programTitle="What's new" imageUrl="/course1.jpg" />
          </div>
          <CourseCard programNumber={2} programTitle="Your program" imageUrl="/course2.jpg" />
          <CourseCard programNumber={3} programTitle="Connect with students" imageUrl="/course3.jpg" />
        </div>
      </div>
    </div>
  );
}
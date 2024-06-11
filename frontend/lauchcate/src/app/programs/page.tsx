import Link from 'next/link';
import Sidebar from '../sidebar';

interface ProgramCardProps {
  programNumber: number;
  imageUrl: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ programNumber }) => {
    return (
      <Link href={`/course/${programNumber}`}>
        <div className="p-4 rounded-lg w-11/12 bg-gray-200">
          <div className="h-80 rounded-lg">
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
          <h1 className="text-4xl mb-4">Programs</h1>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 border border-gray-200 rounded-lg p-4">
            <ProgramCard programNumber={1} imageUrl="/course1.jpg" />
            <ProgramCard programNumber={2} imageUrl="/course2.jpg" />
            <ProgramCard programNumber={3} imageUrl="/course3.jpg" />
            <ProgramCard programNumber={4} imageUrl="/course4.jpg" />
            <ProgramCard programNumber={5} imageUrl="/course5.jpg" />
            <ProgramCard programNumber={6} imageUrl="/course6.jpg" />
            <ProgramCard programNumber={7} imageUrl="/course7.jpg" />
            <ProgramCard programNumber={8} imageUrl="/course8.jpg" />
          </div>
        </div>
      </div>
    );
  }
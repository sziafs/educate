"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="h-screen w-64 fixed bg-gray-800 text-white">
      <div className="flex items-center justify-center mt-10">
        <span className="text-2xl mx-2 font-semibold">Launchcate</span>
      </div>

      <nav className="mt-10">
        <div>
          <h3 className="ml-6 text-lg font-semibold">John Doe</h3>
          <p className="ml-6 text-sm">johndoe@example.com</p>
        </div>

        <Link href="/dashboard">
          <div className={`flex items-center mt-6 py-2 px-8 ${isActive('/dashboard') ? 'bg-gray-700 text-gray-100' : 'text-gray-100'}`}>
            Dashboard
          </div>
        </Link>

        <Link href="/programs">
          <div className={`flex items-center mt-6 py-2 px-8 ${isActive('/programs') ? 'bg-gray-700 text-gray-100' : 'text-gray-100'}`}>
            Programs
          </div>
        </Link>

        <Link href="/focus-mode">
          <div className={`flex items-center mt-6 py-2 px-8 ${isActive('/focus-mode') ? 'bg-gray-700 text-gray-100' : 'text-gray-100'}`}>
            Focus Mode
          </div>
        </Link>

        <Link href="/resources">
          <div className={`flex items-center mt-6 py-2 px-8 ${isActive('/resources') ? 'bg-gray-700 text-gray-100' : 'text-gray-100'}`}>
            Resources
          </div>
        </Link>

        <Link href="/community">
          <div className={`flex items-center mt-6 py-2 px-8 ${isActive('/community') ? 'bg-gray-700 text-gray-100' : 'text-gray-100'}`}>
            Community
          </div>
        </Link>

        <Link href="/recordings">
          <div className={`flex items-center mt-6 py-2 px-8 ${isActive('/recordings') ? 'bg-gray-700 text-gray-100' : 'text-gray-100'}`}>
            Recordings
          </div>
        </Link>

        <a href="mailto:educate@support.com" className="flex items-center mt-6 py-2 px-8 text-gray-100">
          Support
        </a>

        <Link href="/settings">
          <div className={`flex items-center mt-6 py-2 px-8 ${isActive('/settings') ? 'bg-gray-700 text-gray-100' : 'text-gray-100'}`}>
            Settings
          </div>
        </Link>
      </nav>
    </div>
  );
}

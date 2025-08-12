'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">Coaching Institute</div>

        <div className="hidden md:flex gap-6 items-center text-gray-700">
          <Link href="#home" className="hover:text-blue-500">Home</Link>
          <Link href="#courses" className="hover:text-blue-500">Courses</Link>
          <Link href="#facilities" className="hover:text-blue-500">Facilities</Link>
          <Link href="#gallery" className="hover:text-blue-500">Gallery</Link>
          <Link href="#contact" className="hover:text-blue-500">Contact</Link>
        </div>

        {/* mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4">
          <Link href="#home" className="block py-2">Home</Link>
          <Link href="#courses" className="block py-2">Courses</Link>
          <Link href="#facilities" className="block py-2">Facilities</Link>
          <Link href="#gallery" className="block py-2">Gallery</Link>
          <Link href="#contact" className="block py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

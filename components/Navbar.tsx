"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import bannerBg from "@/public/assets/nav3.jpg"; // Add your background image here

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
     

      {/* Main navbar container */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="relative text-2xl font-bold text-blue-900 cinzels">
          Varsity Maths
          <sup className="absolute -top-1 -right-5 text-[15px]">™</sup>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-gray-500 text-sm font-medium">
          <Link href="#about" className="hover:text-blue-500 transition">
          Our Results
          </Link>
          <Link href="#courses" className="hover:text-blue-500 transition">
            Courses
          </Link>
          <Link href="#facilities" className="hover:text-blue-500 transition">
            Facilities
          </Link>
         

          {/* Buttons */}
          <div className="flex gap-3">
            {/* <Link
              href="/register"
              className="px-4 py-2 border border-blue-900 text-blue-900 rounded-lg hover:bg-blue-900 hover:text-white transition"
            >
              Register
            </Link> */}
            <Link
              href="/enroll"
              className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-900 transition"
            >
              Enroll Now
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 z-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          <Link href="#about" className="block hover:text-blue-500">
            Results
          </Link>
          <Link href="#courses" className="block hover:text-blue-500">
            Courses
          </Link>
          <Link href="#facilities" className="block hover:text-blue-500">
            Facilities
          </Link>
          
          <Link href="#contact" className="block hover:text-blue-500">
            Contact Us
          </Link>

          {/* <Link
            href="/login"
            className="block px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
          >
            Student Login
          </Link> */}
          <Link
            href="/enroll"
            className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
          Enroll Now
          </Link>



        </div>
      )}

   <div
  className="relative w-full py-1 overflow-hidden text-center"
  style={{
    backgroundImage: `url(${bannerBg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="flex animate-marquee gap-8 whitespace-nowrap">
    <p className="text-white text-sm">📢 Admissions Open – Apply Now! : Limited Seats</p>
    <p className="text-white text-sm">📢 Admissions Open – Apply Now! : Limited Seats</p>
    <p className="text-white text-sm">📢 Admissions Open – Apply Now! : Limited Seats</p>
    <p className="text-white text-sm">📢 Admissions Open – Apply Now! : Limited Seats</p>
  </div>

  <style jsx>{`
    @keyframes marquee {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
    .animate-marquee {
      display: inline-flex;
      animation: marquee 30s linear infinite;
    }
  `}</style>
</div>

    </nav>
  );
};

export default Navbar;

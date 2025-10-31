"use client";
import Image from "next/image";
import faculty1 from "@/public/assets/gallery/facaulty_2.png";
import faculty2 from "@/public/assets/gallery/facaulty_1.png";
import { GraduationCap } from "lucide-react";

export default function FacultySection() {
  const facultyData = [
    {
      name: "Ojesh Bhagat",
      designation: "Senior Faculty (XI-XII)",
      qualification: "B.Sc-B.Ed, M.Sc (Maths), CTET-MPTET Qualified",
      image: faculty1,
    },
    {
      name: "Mr. Anup Kujur",
      designation: "Senior Faculty (VI-VIII)",
      qualification: "B.Sc-B.Ed, MA (English)",
      image: faculty2,
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-950 flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-900 mb-12 relative">
        Our Faculties
        <span className="block w-24 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></span>
      </h2>

      <div className="flex flex-wrap justify-center gap-10 px-4">
        {facultyData.map((faculty, index) => (
          <div
            key={index}
            className="relative group bg-white dark:bg-gray-800 border border-blue-100 dark:border-gray-700 rounded-3xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-80"
          >
            {/* Faculty image takes 60% of height */}
            <div className="h-60 w-full overflow-hidden">
              <Image
                src={faculty.image}
                alt={faculty.name}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>

          {/* Text content */}
<div className="p-5 text-center bg-white dark:bg-gray-800 flex flex-col items-center min-h-[180px]">
  <div>
    <h3 className="text-xl font-semibold text-blue-800 dark:text-white">
      {faculty.name}
    </h3>

    <p className="text-sm font-medium text-orange-500 tracking-wide mt-1">
      {faculty.designation}
    </p>

    <div className="flex justify-center items-center gap-2 text-gray-700 dark:text-gray-300 text-sm mt-3">
      <GraduationCap
        size={16}
        className="text-blue-600 dark:text-blue-400"
      />
      <span>{faculty.qualification}</span>
    </div>
  </div>

  {/* Decorative underline */}
  <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-500 to-orange-400 rounded-full opacity-70 group-hover:opacity-100 transition-all duration-300"></div>
</div>





            
          </div>
        ))}
      </div>
    </section>
  );
}

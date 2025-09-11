"use client";

import girl from "@/public/assets/rankers/IMG-20250821-WA0000.jpg";
import girl3 from "@/public/assets/rankers/WhatsApp Image 2025-08-22 at 10.43.37 PM.jpeg";
import boy from "@/public/boy.jpeg";
import boy2 from "@/public/boy2.jpeg";

const achievers = [
  { name: "Aarav Sharma", score: "98% in CBSE 12th", image: boy2 },
  { name: "Priya Mehta", score: "Rank 1 - JEE Mains", image: girl3 },
  { name: "Rohan Verma", score: "95% in CBSE 10th", image: boy },
  { name: "Ishita Singh", score: "Rank 5 - NEET", image: girl },
  { name: "Aarav Sharma", score: "98% in CBSE 12th", image: boy2 },
  { name: "Priya Mehta", score: "Rank 1 - JEE Mains", image: girl3 },
  { name: "Rohan Verma", score: "95% in CBSE 10th", image: boy },
  { name: "Ishita Singh", score: "Rank 5 - NEET", image: girl },
];

export default function Achievers() {
  return (
    <section id="achievers" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Big Card */}
        <div className="rounded-3xl shadow-2xl bg-gradient-to-br from-yellow-50 to-pink-100 p-8 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-extrabold text-gray-800 uppercase tracking-wide">
            Celebrating Our Achievers 🎉
          </h2>
          <p className="text-gray-600 mt-2 mb-10 text-sm sm:text-base">
            Honoring the hard work, perseverance, and dedication of our toppers.
          </p>

          {/* Achievers Grid */}
          <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
            {achievers.map((a, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* Photo */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-yellow-400 shadow-md">
                  <img
                    src={a.image.src}
                    alt={a.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name + Score */}
                <h3 className="mt-3 font-bold text-gray-800 text-sm md:text-base">
                  {a.name}
                </h3>
                <p className="text-yellow-700 font-semibold text-xs md:text-sm">
                  {a.score}
                </p>
              </div>
            ))}
          </div>

         
        </div>
      </div>
    </section>
  );
}

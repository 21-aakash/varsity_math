"use client";

import Image from "next/image";
import girl1 from "@/public/assets/rankers/IMG-20250821-WA0000.jpg";
import girl2 from "@/public/assets/rankers/WhatsApp Image 2025-08-21 at 10.49.53 PM.jpeg";
import girl3 from "@/public/assets/rankers/WhatsApp Image 2025-08-21 at 10.50.27 PM.jpeg";
import girl4 from "@/public/assets/rankers/WhatsApp Image 2025-08-21 at 10.52.16 PM.jpeg";
import girl5 from "@/public/assets/rankers/WhatsApp Image 2025-08-21 at 10.53.08 PM.jpeg";
import girl6 from "@/public/assets/rankers/WhatsApp Image 2025-08-22 at 10.43.37 PM.jpeg";
import girl7 from "@/public/assets/rankers/WhatsApp Image 2025-08-23 at 10.00.08 PM.jpeg";
import girl8 from "@/public/assets/rankers/WhatsApp Image 2025-08-23 at 10.24.04 PM.jpeg";



const achievers = [
  { name: "Vanshika Dhurwey", score: "94%", image: girl1 },
  { name: "Diksha Yadav", score: "97.6%", image: girl2 },
  { name: "Preeti Yadav", score: "94.6%", image: girl3 },
  { name: "Namrata Yadav", score: "92.2%", image: girl4 },
  { name: "Simran Dhodhre", score: "90.6%", image: girl5 },
  { name: "Janhvi Gautam", score: "93.4%", image: girl6 },
  { name: "Akshat Soni", score: "87%", image: girl7 },
  { name: "Harsh Yadav", score: "86.6%", image: girl8 },
];

export default function Achievers() {
  return (
  <section id="achievers" className="bg-white py-20 overflow-hidden">
    <div className=" mx-auto text-center  sm:px-6">
      {/* Title */}
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 text-center  leading-tight mb-8 relative">

  Celebrating Our Achievers 🎉

      <p className="text-gray-600 mt-2 mb-8 text-sm sm:text-base md:text-lg font-medium">
        Honoring the hard work, perseverance, and dedication of our toppers.
      </p>

  <span className="block w-24 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></span>

</h2>    
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll">
          {[...achievers, ...achievers].map((a, i) => (
            <div
              key={i}
              className="flex flex-col items-center mx-3 sm:mx-6 flex-shrink-0"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-yellow-400 shadow-md">
               
                <Image
                  src={a.image}
                  alt={a.name}
                  className="object-cover w-full h-full"
                />

              </div>
              <h3 className="mt-2 font-bold text-gray-800 text-xs sm:text-base text-center">
                {a.name}
              </h3>
              <p className="text-yellow-700 font-semibold text-xs sm:text-sm text-center">
                {a.score}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Scroll Animation Styles */}
    <style jsx>{`
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .animate-scroll {
        width: max-content;
        animation: scroll 25s linear infinite;
      }

      .animate-scroll:hover {
        animation-play-state: paused;
      }
    `}</style>
  </section>
);

}

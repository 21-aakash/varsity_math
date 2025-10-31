"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import back from "@/public/assets/hero.png";
import back2 from "@/public/assets/DeWatermark.ai_1757695078522.jpeg";

export default function Hero() {
  return (
    <section
      className="w-full mt-6 min-h-screen flex flex-col items-center justify-center px-4 py-10 gap-6 bg-gradient-to-t from-white to-transparent "
      style={{
        backgroundImage: `url(${back2.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Card */}
      <div
        className="relative w-full max-w-5xl h-[65vh] md:h-[65vh] rounded-3xl overflow-hidden shadow-2xl mt-12 flex items-center justify-center shadow-gray-700"
        style={{
          backgroundImage: `url(${back.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0" />

        {/* Enroll Now Ribbon */}
        <div className="absolute top-4 right-[-40px] rotate-45 bg-red-600 text-white px-14 py-1 text-xs md:text-sm font-semibold shadow-lg">
          Enroll Now
        </div>

        {/* Content */}
        <div className="mb-56 relative z-10 text-center text-cyan-700 px-4 md:gap-2 ">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:mb-25 md:gap-2 text-center">
            {/* Slogan */}
            <p className="text-muted-foreground sm:text-4xl md:text-xl font-medium leading-snug">
              LEARN SMART. LEARN DEEP BUILD YOUR FUTURE
            </p>

            {/* Lottie Animation */}
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center">
              <DotLottieReact
                src="https://lottie.host/de2f865c-1bb5-425e-aaf7-44722ff66bcf/qbhwtdg4zm.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </div>
      </div>

      {/* Button Outside the Image */}
      <button
        className=" px-8 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-semibold text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-cyan-400/50 focus:ring-4 focus:ring-cyan-300"
      >
        Enroll Now!
      </button>
    </section>
  );
}

"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import back from "@/public/assets/hero.png";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white px-4 py-10 mt-10">
      {/* Hero Card */}
      <div
        className="relative w-full max-w-5xl h-[70vh] md:h-[80vh] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center transition-transform duration-500"
        style={{
          backgroundImage: `url(${back.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Enroll Now Ribbon */}
        <div className="absolute top-4 right-[-40px] rotate-45 bg-red-600 text-white px-14 py-1 text-xs md:text-sm font-semibold shadow-lg">
          Enroll Now
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-cyan-700 px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-40 md:mb-80">
            {/* Slogan */}
            <p className="text-base sm:text-lg md:text-xl font-normal">
              LEARN SMART. LEARN DEEP. BUILD YOUR FUTURE
            </p>

            {/* Lottie Animation */}
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
              <DotLottieReact
                src="https://lottie.host/de2f865c-1bb5-425e-aaf7-44722ff66bcf/qbhwtdg4zm.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

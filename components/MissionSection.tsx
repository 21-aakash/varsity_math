"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import logo from "@/public/assets/gallery/logo_2.png";

export default function MissionSection() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(card, {
        rotateY: x / 15,
        rotateX: -y / 15,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.3)",
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="w-full py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Animated Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center md:w-1/2"
          style={{
            perspective: "1000px", // <-- Parent needs perspective
          }}
        >
          <div
            ref={cardRef}
            className=" rounded-3xl shadow-lg  cursor-pointer transform-gpu"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src={logo}
              alt="Varsity Math Logo"
              className="object-contain w-58 h-58 sm:w-68 sm:h-68"
              priority
            />
          </div>
        </motion.div>

        {/* Right: Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6 relative">
            Why Varsity Maths?
            <span className="block w-24 h-1 bg-orange-500 mt-3 rounded-full mx-auto md:mx-0"></span>
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
            At <span className="font-semibold text-blue-600">Varsity Math</span>,
            our journey began with a simple mission — to make strong conceptual
            understanding accessible to every student.  
            <br /> <br />
            We believe great teachers and guided practice can transform ordinary
            learning into deep curiosity. Our programs are designed to build
            confidence, clarity, and love for problem-solving — not just scores.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

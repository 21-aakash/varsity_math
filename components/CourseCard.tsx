"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

interface CourseCardProps {
  title: string;
  target: string;
  features: string[];
  scholarship?: boolean;
  recorded?: boolean;
  link: string;
}

const CourseCard: FC<CourseCardProps> = ({
  title,
  target,
  features,
  scholarship = false,
  recorded = false,
  link,
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 max-w-md w-full p-6 group overflow-hidden"
    >
      {/* Gradient border animation */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/60 rounded-2xl transition-all duration-500"></div>

      {/* Scholarship Badge */}
      {scholarship && (
        <span className="absolute top-4 right-4 text-xs font-semibold bg-gradient-to-r from-orange-500 to-orange-400 text-white px-3 py-1 rounded-tr-xl rounded-bl-xl shadow-md">
          Enroll Now!
        </span>
      )}

      {/* Recorded Tag */}
      {recorded && (
        <span className="inline-block text-xs font-semibold bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full mb-3">
          🎥 Recorded Available
        </span>
      )}

      {/* Title & Target */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        {target}
      </p>

      {/* Features List */}
      <ul className="space-y-2 mb-6">
        {features.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
          >
            <CheckCircle
              size={16}
              className="text-green-500 mt-0.5 flex-shrink-0"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="flex items-center justify-end">
        <Link
          href={link}
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:gap-2 transition-all"
        >
          Know more →
        </Link>
      </div>
    </motion.div>
  );
};

export default CourseCard;

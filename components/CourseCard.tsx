"use client";

import { FC } from "react";
import Link from "next/link";

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
    <div className="relative bg-white border rounded-xl shadow-sm p-6 flex flex-col justify-between w-full max-w-md hover:shadow-lg transition">
      {/* Top tags */}
      <div className="flex items-center justify-between mb-4">
        {recorded && (
          <span className="text-xs font-medium bg-gray-100 border px-3 py-1 rounded-full">
            🎥 RECORDED
          </span>
        )}
        {scholarship && (
          <span className="absolute top-4 right-4 text-xs font-semibold bg-orange-500 text-white px-3 py-1 rounded-tr-lg rounded-bl-lg">
            SCHOLARSHIP ELIGIBLE
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">Target {target}</p>

      {/* Features */}
      <ul className="space-y-2 text-sm text-gray-700 mb-6">
        {features.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-green-600 font-bold">✔</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Price + CTA */}
      <div className="flex items-center justify-between">
        
        <Link
          href={link}
          className="text-blue-600 font-medium hover:underline flex items-center gap-1"
        >
          Know more →
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;


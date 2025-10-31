"use client";
import { useEffect, useRef } from "react";
import image1 from "@/public/assets/gallery/excited-young-indian-expert-telling-team-about-new-product.jpg";
import image2 from "@/public/assets/gallery/top-view-adult-correcting-grammar-mistakes.jpg";
import image3 from "@/public/assets/gallery/3184215.jpg";
import image4 from "@/public/assets/gallery/book-with-green-board-background.jpg";
import image5 from "@/public/assets/gallery/shot-four-young-south-asian-friends-india-sitting-indoors-looking-tablet.jpg";
import image6 from "@/public/assets/gallery/smiling-businesswomen-talking-drinking-coffee.jpg";
import image7 from "@/public/assets/gallery/front-view-smiley-man-holding-paper.jpg";

export default function FacilitiesVerticalScroll() {
  const facilities = [
    { name: "Weekly Test & Discussion", img: image1.src },
    { name: "Full Course Coverage", img: image5.src },
    { name: "Instant Doubt Support", img: image6.src },
    { name: "Digital Performance Tracker", img: image3.src },
    { name: "Personalized Improvements & Feedbacks", img: image7.src },
    { name: "Previous Papers & Handwritten Notes", img: image2.src },
    { name: "CBSE & MP Board", img: image4.src },
  ];

  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollColumn = (col: HTMLDivElement | null, speed: number) => {
      if (!col) return;
      let scrollY = 0;

      const scroll = () => {
        scrollY += 0.5; // Adjust smoothness/speed
        if (scrollY >= col.scrollHeight / 2) scrollY = 0;
        col.scrollTop = scrollY;
        requestAnimationFrame(scroll);
      };

      requestAnimationFrame(scroll);
    };

    scrollColumn(col1Ref.current, 0.5);
    scrollColumn(col2Ref.current, 0.5);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 bg-white">
     <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-10 sm:mb-12 relative text-center">
  Our Facilities
  <span className="block w-24 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></span>
</h2>

      <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 max-w-6xl mx-auto">
        {/* Column 1 */}
        <div
          ref={col1Ref}
          className="h-[400px] sm:h-[500px] w-full sm:w-80 overflow-hidden space-y-4 sm:space-y-6"
        >
          {[...facilities, ...facilities].map((f, i) => (
            <div
              key={`col1-${i}`}
              className="relative h-40 sm:h-48 w-full rounded-xl shadow-lg overflow-hidden bg-gray-200 will-change-transform"
              style={{
                backgroundImage: `url(${f.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 sm:bg-black/40" />
              <div className="absolute bottom-0 w-full text-center p-3 sm:p-4">
                <h3 className="text-sm sm:text-lg font-semibold text-white drop-shadow-md">
                  {f.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div
          ref={col2Ref}
          className="h-[400px] sm:h-[500px] w-full sm:w-80 overflow-hidden space-y-4 sm:space-y-6 pt-12 sm:pt-24"
        >
          {[...facilities, ...facilities].map((f, i) => (
            <div
              key={`col2-${i}`}
              className="relative h-40 sm:h-48 w-full rounded-xl shadow-lg overflow-hidden bg-gray-200 will-change-transform"
              style={{
                backgroundImage: `url(${f.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 sm:bg-black/40" />
              <div className="absolute bottom-0 w-full text-center p-3 sm:p-4">
                <h3 className="text-sm sm:text-lg font-semibold text-white drop-shadow-md">
                  {f.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// components/ResultsStats.tsx
export default function ResultsStats() {
  return (
    <div className="w-full flex justify-center items-center py-10 bg-white">
      <div className="w-[95%] md:w-[70%] bg-blue-50 rounded-2xl shadow-md flex flex-col md:flex-row justify-between items-center p-6 md:p-8 gap-8 md:gap-0">
        
        {/* Heading */}
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Proven Results <span className="text-blue-600">in 2024</span>
          </h2>
        </div>

        {/* Divider for desktop only */}
        <div className="hidden md:block h-16 w-[1px] bg-gray-300"></div>

        {/* Stat 1 */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-blue-600">50+</h3>
          <p className="text-gray-700 text-sm md:text-base">
            Students Scored Above 85%
          </p>
        </div>

        {/* Divider for desktop only */}
        <div className="hidden md:block h-16 w-[1px] bg-gray-300"></div>

        {/* Stat 2 */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-blue-600">95%</h3>
          <p className="text-gray-700 text-sm md:text-base">
            Students Passed CBSE 10th & 12th
          </p>
        </div>
      </div>
    </div>
  );
}

import CourseCard from "@/components/CourseCard";

export default function Courses() {
  return (
    <section className="w-full px-12 py-24 bg-gray-50 ">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Foundation Course */}
        <CourseCard
          title="Foundation Course"
          target="For Classes 7–10"
          features={[
            "Weekly tests & assignments",
            "Concept strengthening sessions",
            "Doubt clearing support",
            "Digital study material (Books, RACEs & more)",
            "Offline classes available",
          ]}
          recorded={false}
          scholarship
          link="/courses/foundation"
        />

        {/* Advanced Course */}
        <CourseCard
          title="Advanced Course"
          target="For Classes 11–12"
          features={[
            "Full syllabus coverage with recorded + offline classes",
            "Weekly and monthly tests with performance analysis",
            "Revision notes & advanced study material",
            "Dedicated doubt sessions",
            "Offline support for practice & guidance",
          ]}
          recorded={false}
          scholarship
          link="/courses/advanced"
        />
      </div>
    </section>
  );
}

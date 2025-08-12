// components/CoursesGrid.tsx
export default function CoursesGrid() {
  const courses = [
    { title: 'Mathematics', desc: 'Advanced coaching for competitive exams.' },
    { title: 'Physics', desc: 'Learn concepts from top educators.' },
    { title: 'Chemistry', desc: 'Master organic, inorganic, and physical chemistry.' },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {courses.map((course, i) => (
          <div
            key={i}
            className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p>{course.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

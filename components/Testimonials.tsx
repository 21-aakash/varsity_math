"use client";

const testimonials = [
  {
    name: "Aarav Sharma",
    feedback:
      "These coaching classes helped me improve my grades significantly! The teachers are very supportive and explain concepts clearly.",
    image: "/images/student1.jpg",
  },
  {
    name: "Priya Mehta",
    feedback:
      "I gained a lot of confidence in my studies. The interactive teaching methods really kept me engaged.",
    image: "/images/student2.jpg",
  },
  {
    name: "Rohan Verma",
    feedback:
      "The personal attention and doubt-solving sessions made a huge difference in my performance.",
    image: "/images/student3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          What Our Students Say
        </h2>
        <p className="text-gray-600 text-center mt-2 mb-10">
          Hear from students who have benefited from our coaching.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-blue-500"
              />
              <p className="mt-4 text-gray-600 italic">`{t.feedback}`</p>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {t.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

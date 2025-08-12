// components/Facilities.tsx
export default function Facilities() {
  const facilities = [
    { name: 'Smart Classrooms', icon: '🏫' },
    { name: 'Experienced Faculty', icon: '👨‍🏫' },
    { name: 'Library & Study Material', icon: '📚' },
    { name: 'Test Series & Doubt Clearing', icon: '📝' },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Our Facilities</h2>
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
        {facilities.map((f, i) => (
          <div key={i} className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="text-lg font-semibold">{f.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

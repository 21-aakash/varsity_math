// components/FeesTable.tsx
export default function FeesTable() {
  const fees = [
    { course: 'Mathematics', duration: '6 months', amount: '₹12,000' },
    { course: 'Physics', duration: '6 months', amount: '₹12,000' },
    { course: 'Chemistry', duration: '6 months', amount: '₹12,000' },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Fee Structure</h2>
      <div className="overflow-x-auto max-w-4xl mx-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-3 px-4">Course</th>
              <th className="py-3 px-4">Duration</th>
              <th className="py-3 px-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((f, i) => (
              <tr key={i} className="border-b">
                <td className="py-3 px-4">{f.course}</td>
                <td className="py-3 px-4">{f.duration}</td>
                <td className="py-3 px-4">{f.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

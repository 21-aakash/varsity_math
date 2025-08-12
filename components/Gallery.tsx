// components/Gallery.tsx
export default function Gallery() {
  const images = [
    '/gallery1.jpg',
    '/gallery2.jpg',
    '/gallery3.jpg',
    '/gallery4.jpg',
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Gallery ${i}`}
            className="w-full h-48 object-cover rounded-lg shadow"
          />
        ))}
      </div>
    </section>
  );
}

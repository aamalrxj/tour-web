import { useState, useEffect } from "react";

export default function TopPlacesCarousel({ places, category }) {
  const [index, setIndex] = useState(0);

  // Autoplay logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % places.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [places]);

  // If current index is out of bounds due to filtered items shrinking
  useEffect(() => {
    if (index >= places.length) setIndex(0);
  }, [places.length, index]);

  if (!places.length) return null;

  return (
    <div className="mx-auto max-w-5xl p-6 transition-all duration-500">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Top Rated {category}
      </h2>
      <div className="relative h-[400px] overflow-hidden rounded-xl shadow-lg">
        <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full z-10 uppercase shadow-md">
          {places[index].category}
        </span>
        <img
          src={places[index].image}
          alt={places[index].name}
          className="w-full h-full object-cover transition duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center p-3 text-lg font-medium">
          {places[index].name} — {places[index].rating} ★
        </div>
      </div>
    </div>
  );
}

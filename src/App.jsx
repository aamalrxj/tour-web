import { useState, useMemo } from "react";
import Header from "./components/Header";
import PlaceCard from "./components/PlaceCard";
import ScrollTopButton from "./components/ScrollTopButton";
import TopPlacesCarousel from "./components/TopPlacesCarousel";
import MusicButton from "./components/MusicButton";
import KozhikodeInfo from "./components/KozhikodeInfo";
import places from "./data/calicutData.json";

export default function App() {
  const categories = ["All", "Food", "Heritage", "Nature", "Malls"];
  const [category, setCategory] = useState(categories[0]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("rating");

  const ratingOptions = [0, 3, 3.5, 4, 4.5, 5];
  const sortOptions = [
    { value: "rating", label: "Rating (High to Low)" },
    { value: "name", label: "Name (A-Z)" },
    { value: "category", label: "Category (A-Z)" }
  ];

  const filteredPlaces = useMemo(() => {
    let filtered = places.filter(
      p =>
        (category === "All" || p.category === category) &&
        typeof p.rating === "number" &&
        p.rating >= minRating
    );
    if (sortBy === "rating") {
      filtered = filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "name") {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
      filtered = filtered.sort((a, b) => a.category.localeCompare(b.category));
    }
    return filtered;
  }, [places, category, minRating, sortBy]);

  const topPlaces = useMemo(() => {
    return categories
      .filter(cat => cat !== "All")
      .map(cat => {
        const inCat = places.filter(p => p.category === cat);
        return inCat.sort((a, b) => b.rating - a.rating)[0];
      })
      .filter(Boolean);
  }, [places]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-yellow-50">
      {/* Sticky header with colored background and shadow */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-teal-600 to-blue-600 shadow-lg">
        <Header categories={categories} selected={category} onChange={setCategory} />
        <div className="flex flex-wrap items-center gap-4 px-4 py-2">
          {/* Category dropdown with accent color */}
          <div className="flex items-center gap-2">
            <label htmlFor="category-filter" className="text-white font-semibold">Category:</label>
            <select
              id="category-filter"
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="border border-teal-300 rounded px-2 py-1 bg-white text-teal-700 font-semibold shadow-md focus:ring-2 focus:ring-teal-400"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          {/* Rating filter */}
          <div className="flex items-center gap-2">
            <label htmlFor="rating-filter" className="text-white font-semibold">Min Rating:</label>
            <select
              id="rating-filter"
              value={minRating}
              onChange={e => setMinRating(Number(e.target.value))}
              className="border border-yellow-300 rounded px-2 py-1 bg-white text-yellow-700 font-semibold shadow-md focus:ring-2 focus:ring-yellow-400"
            >
              {ratingOptions.map(r => (
                <option key={r} value={r}>{r === 0 ? "All" : `${r} ⭐ & up`}</option>
              ))}
            </select>
          </div>
          {/* Sort by filter */}
          <div className="flex items-center gap-2">
            <label htmlFor="sort-by" className="text-white font-semibold">Sort by:</label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="border border-blue-300 rounded px-2 py-1 bg-white text-blue-700 font-semibold shadow-md focus:ring-2 focus:ring-blue-400"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Top places carousel */}
      <div className="my-8">
        <TopPlacesCarousel
          places={topPlaces.map(place => ({
            id: place.id,
            name: place.name,
            image: place.image
          }))}
          className="shadow-xl rounded-2xl"
        />
      </div>

      {/* Place cards grid with enhanced card design */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {filteredPlaces.map(place => (
          <div
            key={place.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-teal-400"
          >
            <PlaceCard place={place} />
          </div>
        ))}
      </div>

      <ScrollTopButton />
      <footer className="bg-gradient-to-r from-teal-600 to-blue-600 text-white text-center py-4 mt-8 rounded-t-2xl shadow-xl">
      </footer>
      <MusicButton />
      <KozhikodeInfo />
    </div>
  );
}

export default function PlaceCard({ place }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img src={place.image} alt={place.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{place.name}</h2>
        <p className="text-sm text-gray-600">Category: {place.category}</p>
        <p className="text-sm text-yellow-600">Rating: {place.rating} ★</p>
        <details className="mt-2 text-sm">
          <summary className="cursor-pointer text-blue-500">More Info</summary>
          <p className="mt-1 text-gray-700">{place.description}</p>
        </details>
      </div>
    </div>
  );
}

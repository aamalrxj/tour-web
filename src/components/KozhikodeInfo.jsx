import { useState } from "react";

export default function KozhikodeInfo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-24 right-6 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="mb-2 px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
      >
        What is Kozhikode?
      </button>
      {open && (
        <div className="max-w-sm p-5 bg-white rounded-2xl shadow-xl border border-blue-200 animate-fade-in">
          <h2 className="text-xl font-bold mb-2 text-blue-800">Kozhikode (Calicut)</h2>
          <p className="text-gray-700">
            Kozhikode, also known as Calicut, is a city in Kerala, India, famed for its rich maritime history, vibrant spice trade, and cultural heritage.
            Once a major port visited by explorers like Vasco da Gama, it is now known for its beautiful beaches, delicious Malabar cuisine, and a unique blend of tradition and modernity. Kozhikode is a gateway to the Malabar region and a hub for festivals, arts, and tourism.
          </p>
          <button
            onClick={() => setOpen(false)}
            className="mt-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

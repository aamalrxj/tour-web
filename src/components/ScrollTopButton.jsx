import { ChevronUp } from "lucide-react";

export default function ScrollTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700"
    >
      <ChevronUp size={24} />
    </button>
  );
}

import { useRef, useState } from "react";

export default function MusicButton() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleToggle = () => {
    if (!playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center">
      <button
        onClick={handleToggle}
        className="p-3 rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white text-2xl focus:outline-none hover:scale-110 transition-transform"
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {playing ? "⏸️" : "▶️"}
      </button>
      <audio ref={audioRef} src="/song/song1.mp3" loop />
    </div>
  );
}

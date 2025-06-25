🧭 Destination Explorer – Kozhikode
An interactive, single-page tourism web app for exploring the best of **Kozhikode (Calicut)** — from heritage spots and food hubs to beaches and malls.
🔗 Live Preview: [https://aamalrxj.github.io/tour-web](https://aamalrxj.github.io/tour-web)

🚀 Features
- 🏝️ Explore top-rated destinations by category: Nature, Heritage, Food, Malls
- 🖼️ Image carousel with autoplay for top places
- 🎵 Music player toggle with ambient background audio
- 🧭 Clean and responsive design using Tailwind CSS
- ⚡ Lightning-fast performance with Vite + React

🛠️ Tech Stack
- React 19
- Vite
- Tailwind CSS
- gh-pages for deployment
- Framer Motion for animations

📦 Installation & Development
git clone https://github.com/aamalrxj/tour-web.git
cd tour-web
npm install
npm run dev
Open http://localhost:5173 in your browser.

🏗️ Build for Production
bash
Copy
Edit
npm run build
Built files will be in the dist/ directory.

📁 Project Structure
css
Copy
Edit
public/
  ├── images/     → All image assets used across places
  └── song/       → Background audio (song1.mp3)

src/
  ├── components/ → React components (e.g., Header, Carousel, Cards)
  ├── data/       → Static data (calicutData.json)
  └── App.jsx     → Main application logic
🧠 Author
Amal Raj Praseena Sajeeve
GitHub @aamalrxj

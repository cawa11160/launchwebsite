import { useEffect, useState } from "react";

const images = [
  "/image1.png",
  "/image2.jpg",
  "/image3.jpg",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      
      {/* Image Gallery */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Offtrack live music"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Discover Music
          <br />
          Off The Beaten Track
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-200">
          Map-based discovery. Less biased algorithms. Real underground music.
        </p>

        <a
          href="#waitlist"
          className="mt-8 px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Join Waitlist
        </a>
      </div>
    </section>
  );
}

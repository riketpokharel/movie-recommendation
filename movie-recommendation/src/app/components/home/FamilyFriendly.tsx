"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const kidsMovies = [
  {
    title: "Barbie Dreamhouse",
    image: "/assets/images/barbie.jpg", // Using Barbie as it fits
    age: "5+",
    duration: "1h 30m",
  },
  {
    title: "Spider-Man: Junior",
    image: "/assets/images/interstellarcover.jpg", // Placeholder
    age: "7+",
    duration: "25m",
  },
  {
    title: "Space Explorers",
    image: "/assets/images/interstellar-thumb.jpg", // Placeholder
    age: "All",
    duration: "45m",
  },
  {
    title: "Jungle Adventure",
    image: "/assets/images/thekillers.jpg", // Placeholder
    age: "6+",
    duration: "1h 15m",
  },
];

export default function FamilyFriendly() {
  return (
    <section className="w-full py-20 px-6 md:px-16 text-white bg-[#030A1B] overflow-hidden relative">
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-yellow-400 font-bold tracking-wide uppercase text-sm mb-2">
          Safe & Fun
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-white">
          Family Friendly
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Hand-picked movies and shows for the little ones. Safe, educational,
          and entertaining for the whole family.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16 relative z-10">
        {kidsMovies.map((movie, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 shadow-xl hover:shadow-pink-500/20"
          >
            <div className="aspect-[2/3] relative">
              <Image
                src={movie.image}
                alt={movie.title}
                fill
                className="object-cover transition-all duration-300 group-hover:brightness-75"
              />
              <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-md">
                {movie.age}
              </div>
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="w-full bg-white text-black py-2 rounded-full flex items-center justify-center gap-2 font-bold hover:bg-gray-200 transition-colors">
                <FaPlay size={12} /> Play
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center relative z-10">
        <button className="px-10 py-4 bg-blue-500  rounded-full text-lg font-bold shadow-lg shadow-purple-500/30 hover:scale-105 hover:shadow-blue-500/50 transition-all duration-300 animate-bounce-subtle cursor-pointer">
          Watch the Children's Section
        </button>
      </div>

      {/* Fun Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}

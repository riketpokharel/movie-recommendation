"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { movies } from "../../data/movies.data";
import MovieCard from "../ui/MovieCard";

export default function Trending() {
  return (
    <section className="w-full px-6 md:px-16 py-20 bg-[#030A1B] text-white">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">Trending</h1>
        <p className="group flex items-center gap-1 md:gap-2 text-blue-500 cursor-pointer transition-all duration-300 font-medium">
          See More{" "}
          <FaArrowRightLong className="transform transition-all duration-300 group-hover:translate-x-1" />
        </p>
      </div>

      <div className="relative group/carousel">
        <button
          onClick={() => {
            const container = document.getElementById('trending-carousel');
            if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 cursor-pointer"
        >
          <GoArrowLeft size={24} />
        </button>

        <div
          id="trending-carousel"
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="min-w-[160px] md:min-w-[200px]">
              <MovieCard image={movie.image} title={movie.title} />
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            const container = document.getElementById('trending-carousel');
            if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 cursor-pointer"
        >
          <GoArrowRight size={24} />
        </button>
      </div>
    </section>
  );
}

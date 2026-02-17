"use client";

import { FaArrowRightLong } from "react-icons/fa6";
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
      <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} image={movie.image} title={movie.title} />
        ))}
      </div>
    </section>
  );
}

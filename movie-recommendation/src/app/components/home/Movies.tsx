"use client";

import { useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import MovieCard from "../ui/MovieCard";
import { movies } from "../../data/movies.data";
import { options } from "../../data/options";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export default function Movies() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // Scroll handler
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Toggle selected option
  const toggleOption = (option: string) => {
    setSelectedOptions(
      (prev) =>
        prev.includes(option)
          ? prev.filter((opt) => opt !== option) // unselect if already selected
          : [...prev, option] // add if not selected
    );
  };

  return (
    <section className="w-full px-6 md:px-16 py-20 bg-[#030A1B] text-white">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">Movies</h1>
        <p className="group flex items-center gap-1 md:gap-2 text-blue-500 cursor-pointer transition-all duration-300 font-medium">
          See More{" "}
          <FaArrowRightLong className="transform transition-all duration-300 group-hover:translate-x-1" />
        </p>
      </div>

      {/* Scrollable Options */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => scroll("left")}
          className="p-2 rounded-full hover:bg-[#EF99FE] transition hover:text-black cursor-pointer"
        >
          <GoArrowLeft size={20} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-12 overflow-x-auto scrollbar-hide scroll-smooth px-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {options.map((option) => {
            const isSelected = selectedOptions.includes(option.option);
            return (
              <h2
                key={option.option}
                onClick={() => toggleOption(option.option)}
                className={`border border-solid border-[#812bc7] px-4 py-1 rounded-3xl cursor-pointer whitespace-nowrap transition 
                  ${isSelected
                    ? "bg-[#812bc7] text-white"
                    : "text-white hover:bg-[#812bc7]/60"
                  }`}
              >
                {option.option}
              </h2>
            );
          })}
        </div>

        <button
          onClick={() => scroll("right")}
          className="p-2 rounded-full hover:bg-[#EF99FE] transition hover:text-black cursor-pointer"
        >
          <GoArrowRight size={20} />
        </button>
      </div>

      {/* Movie Cards */}
      <div className="flex gap-8 mt-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} image={movie.image} title={movie.title} />
        ))}
      </div>
    </section>
  );
}

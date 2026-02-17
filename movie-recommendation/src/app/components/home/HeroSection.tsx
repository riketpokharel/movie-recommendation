"use client";

import Image from "next/image";
import { covermovies } from "../../data/movies.data";
import { FaPlay } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState, useEffect } from "react";
export default function HeroSection() {
  const [currentMovie, setCurrentMovie] = useState(covermovies[0]);

  //Auto rotate in every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovie((prev) => {
        const currentIndex = covermovies.findIndex((m) => m.id === prev.id);
        const nextIndex = (currentIndex + 1) % covermovies.length;
        return covermovies[nextIndex];
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background cover image */}
      <Image
        src={currentMovie.coverImage}
        fill
        alt={currentMovie.title}
        priority
        // objectFit="cover"
        className="object-cover brightness-70 transition-all duration-700"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030A1B] via-[#030A1B]/40 to-transparent"></div>

      <div className="absolute bottom-20 md:left-16 left-6 z-10 text-white max-w-xl pr-6">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">
            {currentMovie.title}
          </h1>
          <p className="text-lg mb-3 text-gray-200 line-clamp-3 md:line-clamp-none">
            {currentMovie.description}
          </p>
        </div>
        <div className="flex items-center gap-3 mb-5 flex-wrap">
          <div className="flex items-center gap-1">
            <h3>⭐⭐⭐⭐</h3>
          </div>
          <h4 className="text-lg font-medium flex items-center gap-2">
            <span className="bg-yellow-400 text-black px-1 rounded-lg font-bold">
              IMDb
            </span>{" "}
            {currentMovie.rating}
          </h4>
          <Image
            src="/assets/images/netflix.png"
            alt="Netflix Image"
            width={60}
            height={60}
            priority
            className="object-contain"
          />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <button className="flex items-center gap-2 rounded-3xl py-3 px-8 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold">
            <FaPlay />
            Watch Now
          </button>
          <button className="flex items-center rounded-3xl ring-1 py-3 px-8 ring-blue-400 gap-1 hover:bg-white transition-all duration-200 hover:text-black font-semibold bg-black/30 backdrop-blur-sm">
            More Info
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </section>
  );
}

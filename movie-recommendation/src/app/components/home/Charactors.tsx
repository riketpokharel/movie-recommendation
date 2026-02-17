"use client";

import Image from "next/image";

const characters = [
  {
    name: "Cillian Murphy",
    role: "Actor",
    image: "/assets/images/oppenheimer.jpg",
  }, // Reuse oppenheimer
  {
    name: "Margot Robbie",
    role: "Actress",
    image: "/assets/images/barbie.jpg",
  }, // Reuse barbie
  {
    name: "Leonardo DiCaprio",
    role: "Actor",
    image: "/assets/images/inception-thumb.jpg",
  }, // Reuse inception
  {
    name: "Christian Bale",
    role: "Actor",
    image: "/assets/images/darkknight-thumb.jpg",
  }, // Reuse darkknight
  { name: "Henry Cavill", role: "Actor", image: "/assets/images/witcher.jpg" }, // Reuse witcher
];

export default function Charactors() {
  return (
    <section className="w-full py-20 bg-[#030A1B] text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
          <div className="flex flex-col">
            <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-2">
              Star Cast
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold">Top Celebrities</h1>
          </div>
          <button className="text-sm font-semibold border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors">
            View All Cast
          </button>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12">
          {characters.map((char, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-transparent group-hover:border-blue-500 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/50">
                <Image
                  src={char.image}
                  alt={char.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold group-hover:text-blue-400 transition-colors text-center">
                {char.name}
              </h3>
              <p className="text-gray-400 text-sm">{char.role}</p>
            </div>
          ))}

          {/* Add more button style placeholder */}
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/10 bg-white/5 group-hover:bg-white/10 group-hover:border-blue-400/50 transition-all duration-300">
              <span className="text-2xl font-light text-gray-400 group-hover:text-white">
                +
              </span>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-400 group-hover:text-white transition-colors">
              More
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

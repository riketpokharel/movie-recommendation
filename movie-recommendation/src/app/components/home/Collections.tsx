"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const collections = [
    {
        title: "The Batman Saga",
        image: "/assets/images/darkknight-cover.jpg",
        description: "Experience the dark and gritty world of Gotham's vigilante.",
        color: "from-blue-900",
    },
    {
        title: "John Wick Chapters",
        image: "/assets/images/inception-cover.jpg", // Placeholder using existing asset
        description: "The legendary hitman seeking vengeance.",
        color: "from-purple-900",
    },
    {
        title: "Spider-Man Universe",
        image: "/assets/images/interstellarcover.jpg", // Placeholder using existing asset
        description: "Swing through the multiverse with your friendly neighborhood hero.",
        color: "from-red-900",
    },
];

export default function Collections() {
    return (
        <section className="w-full py-20 px-6 md:px-16 text-white bg-[#030A1B]">
            <div className="text-center mb-16">
                <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-2">
                    Cinematic Universes
                </h2>
                <h1 className="text-3xl md:text-5xl font-bold">Explore Franchises</h1>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    Dive deep into your favorite movie series. Binge-watch entire
                    collections from start to finish.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {collections.map((collection, index) => (
                    <div
                        key={index}
                        className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/20 border border-white/5"
                    >
                        <Image
                            src={collection.image}
                            alt={collection.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300`} />

                        <div className="absolute inset-0 flex flex-col justify-end p-8">
                            <h3 className="text-3xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                {collection.title}
                            </h3>
                            <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                {collection.description}
                            </p>

                            <button className="w-fit flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md px-6 py-3 rounded-xl font-semibold transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white border border-white/10">
                                <FaPlay className="text-sm" />
                                View Collection
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

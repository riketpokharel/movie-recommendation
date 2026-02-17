"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";

import KidsNavbar from "../components/navigation/KidsNavbar";
import KidsFooter from "../components/children/KidsFooter";

const kidsHero = {
    title: "The Super Mario Bros. Movie",
    description:
        "Join Mario and Luigi on a whirlwind adventure through the Mushroom Kingdom! Power up and save the day!",
    image: "/assets/images/mario-cover.jpg", // Placeholder - will use text/gradient if image missing or existing asset
    bgGradient: "bg-gradient-to-r from-red-500/80 to-blue-500/80",
};

const categories = [
    {
        id: "trending",
        title: "Trending Now ",
        movies: [
            { id: 1, image: "/assets/images/barbie.jpg" },
            { id: 2, image: "/assets/images/spiderman1.jpg" },
            { id: 3, image: "/assets/images/interstellarcover.jpg" },
            { id: 4, image: "/assets/images/inception-thumb.jpg" },
        ],
    },
    {
        id: "superheroes",
        title: "Superheroes 🦸‍♂️",
        movies: [
            { id: 5, image: "/assets/images/darkknight-cover.jpg" },
            { id: 6, image: "/assets/images/spiderman2.jpg" },
            { id: 7, image: "/assets/images/spiderma3.jpg" },
            { id: 8, image: "/assets/images/johnwick.jpg" },
        ],
    },
    {
        id: "adventures",
        title: "Fun Adventures 🎈",
        movies: [
            { id: 9, image: "/assets/images/goldenglobe.jpg" },
            { id: 10, image: "/assets/images/oppenheimer.jpg" },
            { id: 11, image: "/assets/images/thekillers.jpg" },
            { id: 12, image: "/assets/images/witcher.jpg" },
        ],
    },
];

export default function ChildrenPage() {
    return (
        <main className="min-h-screen bg-[#1a0b2e] text-white font-sans selection:bg-yellow-400 selection:text-black">
            <KidsNavbar />

            {/* Hero Section */}
            <section className="relative w-full h-[70vh] flex items-center pt-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/images/barbie.jpg"
                        alt="Hero Background"
                        fill
                        className="object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] via-[#1a0b2e]/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a0b2e] via-transparent to-transparent" />
                </div>

                <div className="container mx-auto px-6 md:px-16 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <span className="bg-yellow-400 text-black px-3 py-1 rounded-lg font-bold text-xs uppercase mb-4 inline-block">
                            #1 Movie for Kids
                        </span>
                        <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight drop-shadow-lg">
                            Super <span className="text-pink-500">Fun</span> <br />
                            Adventure!
                        </h1>
                        <p className="text-lg text-gray-200 mb-8 max-w-lg font-medium">
                            {kidsHero.description}
                        </p>
                        <div className="flex items-center gap-4">
                            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition-transform hover:scale-105 flex items-center gap-2">
                                <FaPlay /> Play Now
                            </button>
                            <button className="bg-white/20 backdrop-blur-md border border-white/20 px-8 py-3 rounded-full font-bold text-lg hover:bg-white/30 transition-colors">
                                My List +
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rows */}
            <div className="pb-10 space-y-12">
                {categories.map((cat, index) => (
                    <section key={index} id={cat.id} className="px-6 md:px-16">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-300">{cat.title}</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {cat.movies.map((movie) => (
                                <div key={movie.id} className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent hover:border-pink-500 transition-all duration-300 transform hover:-translate-y-2 shadow-xl hover:shadow-pink-500/30">
                                    <Image
                                        src={movie.image}
                                        alt="Movie Cover"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                    <div className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                                        <FaPlay size={16} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <KidsFooter />
        </main>
    );
}

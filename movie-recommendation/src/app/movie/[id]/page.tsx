import { movies } from "@/app/data/movies.data";
import Navbar from "@/app/components/navigation/Navbar";
import Footer from "@/app/components/home/Footer";
import MovieCard from "@/app/components/ui/MovieCard";
import Link from "next/link";
import { FaPlay, FaStar } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import { BsCalendar2 } from "react-icons/bs";

export default async function MovieDetails({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const movie = movies.find((m) => m.id === id);

    if (!movie) {
        return (
            <div className="min-h-screen bg-[#030A1B] text-white flex flex-col justify-center items-center gap-4">
                <h1 className="text-3xl font-bold">Movie Not Found</h1>
                <Link href="/" className="text-blue-500 hover:underline">
                    Go back home
                </Link>
            </div>
        );
    }

    // Sort similar movies by genre match
    const similarMovies = movies
        .filter((m) => m.id !== id)
        .sort((a, b) => {
            const aMatch = a.genre?.filter((g) => movie.genre?.includes(g)).length ?? 0;
            const bMatch = b.genre?.filter((g) => movie.genre?.includes(g)).length ?? 0;
            return bMatch - aMatch;
        })
        .slice(0, 5);

    return (
        <main className="min-h-screen bg-[#030A1B] text-white">
            <Navbar />

            {/* Video / Hero Section */}
            <div className="relative w-full h-[60vh] md:h-[70vh] bg-black">
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 overflow-hidden">
                    {/* Blurred movie poster as background */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-40 blur-sm scale-105"
                        style={{ backgroundImage: `url(${movie.image})` }}
                    />

                    {/* Play Button */}
                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <div className="w-24 h-24 bg-blue-600/80 hover:bg-blue-600 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-2xl shadow-blue-600/50 hover:scale-110 ring-4 ring-white/20">
                            <FaPlay className="text-3xl ml-2 text-white" />
                        </div>
                        <p className="text-lg font-medium text-white/80 tracking-wide">
                            Watch Trailer / Stream
                        </p>
                    </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#030A1B] to-transparent" />
            </div>

            {/* Movie Details */}
            <div className="px-6 md:px-16 py-10 -mt-24 relative z-20">
                <div className="flex flex-col md:flex-row gap-10 items-start">
                    {/* Poster */}
                    <div className="hidden md:block w-56 flex-shrink-0 rounded-xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-blue-500/30">
                        <img
                            src={movie.image}
                            alt={movie.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex-1">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            {movie.title}
                        </h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-6">
                            <div className="flex items-center gap-2">
                                <FaStar className="text-yellow-400" />
                                <span className="font-semibold">{movie.rating}</span>
                                <span className="text-gray-500">/ 10</span>
                            </div>
                            {movie.duration && (
                                <div className="flex items-center gap-2">
                                    <BiTime className="text-blue-400" />
                                    <span>{movie.duration}</span>
                                </div>
                            )}
                            {movie.year && (
                                <div className="flex items-center gap-2">
                                    <BsCalendar2 className="text-green-400" />
                                    <span>{movie.year}</span>
                                </div>
                            )}
                        </div>

                        {/* Genres */}
                        {movie.genre && (
                            <div className="flex gap-2 mb-6 flex-wrap">
                                {movie.genre.map((g, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium border border-white/20 hover:bg-blue-500/20 hover:border-blue-500/50 transition-colors"
                                    >
                                        {g}
                                    </span>
                                ))}
                            </div>
                        )}

                        <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl">
                            {movie.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex gap-4 flex-wrap">
                            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/30 hover:scale-105">
                                <FaPlay /> Watch Now
                            </button>
                            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white font-bold border border-white/20 transition-all hover:scale-105">
                                + Add to List
                            </button>
                        </div>
                    </div>
                </div>

                {/* Cast Section */}
                {movie.cast && movie.cast.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold mb-6 border-l-4 border-blue-500 pl-4">
                            Top Cast
                        </h2>
                        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                            {movie.cast.map((actor, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center min-w-[100px] gap-3 group cursor-pointer"
                                >
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600/40 to-purple-600/40 flex items-center justify-center text-xl font-bold border-2 border-blue-500/40 group-hover:border-blue-400 transition-colors">
                                        {actor
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </div>
                                    <p className="text-center text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                        {actor}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Similar Movies Section */}
                {similarMovies.length > 0 && (
                    <div className="mt-20 mb-10">
                        <h2 className="text-2xl font-bold mb-6 border-l-4 border-purple-500 pl-4">
                            Similar Movies
                        </h2>
                        <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
                            {similarMovies.map((similarMovie) => (
                                <div
                                    key={similarMovie.id}
                                    className="min-w-[160px] md:min-w-[200px]"
                                >
                                    <MovieCard
                                        id={similarMovie.id}
                                        image={similarMovie.image}
                                        title={similarMovie.title}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}

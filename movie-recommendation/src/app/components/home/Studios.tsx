"use client";

import Image from "next/image";

const studios = [
    {
        name: "Netflix",
        logo: "/assets/images/netflix.png",
        isImage: true,
    },
    {
        name: "Disney+",
        color: "bg-gradient-to-b from-blue-900 via-blue-700 to-blue-900",
        textStyle: "font-serif tracking-wider italic font-bold",
        isImage: false,
    },
    {
        name: "MARVEL",
        color: "bg-red-600",
        textStyle: "font-sans font-black tracking-tighter",
        isImage: false,
    },
    {
        name: "DC",
        color: "bg-white text-blue-600 ring-4 ring-blue-600",
        textStyle: "font-serif font-bold rounded-full p-2 w-16 h-16 flex items-center justify-center border-4 border-blue-600",
        isImage: false,
        customRender: true,
    },
    {
        name: "SONY",
        color: "bg-black",
        textStyle: "font-serif tracking-[0.2em] font-bold",
        isImage: false,
    },
    {
        name: "HBO",
        color: "bg-black",
        textStyle: "font-sans font-black tracking-widest",
        isImage: false,
    },
];

export default function Studios() {
    return (
        <section className="w-full py-16 bg-[#030A1B] overflow-hidden border-y border-white/5">
            <div className="container mx-auto px-6 md:px-16 text-center">
                <p className="text-gray-400 text-sm font-semibold tracking-widest uppercase mb-10">
                    Stream Exclusive Content From
                </p>

                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                    {studios.map((studio, index) => (
                        <div
                            key={index}
                            className="group relative flex items-center justify-center w-32 h-20 md:w-40 md:h-24 transition-transform hover:scale-110 cursor-pointer"
                        >
                            {studio.isImage ? (
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <Image
                                        src={studio.logo || ""}
                                        alt={studio.name}
                                        width={120}
                                        height={60}
                                        className="object-contain max-h-16"
                                    />
                                </div>
                            ) : studio.customRender ? (
                                <div className="w-16 h-16 rounded-full border-4 border-blue-600 flex items-center justify-center bg-white text-blue-600 font-bold text-2xl shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                                    DC
                                </div>
                            ) : (
                                <div
                                    className={`w-full h-14 flex items-center justify-center rounded-lg shadow-lg ${studio.color} text-white text-xl md:text-2xl ${studio.textStyle}`}
                                >
                                    {studio.name}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

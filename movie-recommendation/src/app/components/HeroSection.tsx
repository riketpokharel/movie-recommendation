"use client"

import Image from "next/image"
import { movies } from "../data/movies.data"
import { FaPlay } from "react-icons/fa"
import { FaArrowRightLong } from "react-icons/fa6"
import { useState, useEffect } from "react"
export default function HeroSection(){

    const [currentMovie, setCurrentMovie]=useState(movies[0])

    //Auto rotate in every 6s
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentMovie((prev)=>{
                const currentIndex = movies.findIndex(m=>m.id===prev.id)
                const nextIndex=(currentIndex + 1) % movies.length
                return movies[nextIndex]
            })
        },6000)
        return ()=>clearInterval(interval)
    },[])


    return(
        <section className="relative w-full h-[100vh] overflow-hidden">
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

            <div className="absolute bottom-18 left-16 z-10 text-white max-w-xl">
                <div>

                <h1 className="text-5xl font-bold mb-3 drop-shadow-lg">{currentMovie.title}</h1>
                <p className="text-lg mb-3 text-gray-200">{currentMovie.description}</p>
                </div>
                <div className="flex items-center gap-3 mb-5">

                    <h3>⭐⭐⭐⭐</h3>
                    <h4 className="text-lg font-medium"> <span className="bg-yellow-400 text-black px-1 rounded-lg font-bold">IMDb</span> {currentMovie.rating}</h4>
                    <Image
                    src="/assets/images/netflix.png"
                    alt="Netflix Image"
                    width={60}
                    height={60}
                    priority
                    className="object-contain"
                />
                </div>
                <div className="flex items-center gap-4 cursor-pointer">
                    <h2 className="flex items-center gap-2 rounded-3xl py-2 px-8 bg-blue-400"> <FaPlay/>Watch Now</h2>
                    <h2 className="flex items-center rounded-3xl ring-1 py-2 px-8 ring-blue-400 gap-1">More Info<FaArrowRightLong/></h2>
                </div>
            </div>
        </section>
    )
}
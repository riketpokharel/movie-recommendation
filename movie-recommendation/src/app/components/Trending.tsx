"use client"

import { FaArrowRightLong } from "react-icons/fa6"


export default function Trending(){
    return(
        <section className="w-full px-14 py-6">
            <div className="flex items-center justify-between">
                <h1 className="text-4xl font-medium">Trending</h1>
                <p className=" group flex items-center gap-2 text-blue-500 cursor-pointer transition-all duration-300">See More <FaArrowRightLong className="transform transition-all duration-300 group-hover:translate-x-1"/></p>
            </div>
        </section>
    )
}
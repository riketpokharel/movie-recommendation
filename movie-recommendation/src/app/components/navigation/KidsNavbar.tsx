"use client";

import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";

export default function KidsNavbar() {
    return (
        <nav className="fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-[#1a0b2e]/90 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center gap-4">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-yellow-400 hover:text-white transition-colors font-bold text-sm uppercase tracking-wider"
                >
                    <GoArrowLeft size={20} />
                    Exit Kids
                </Link>
                <div className="h-6 w-px bg-white/20" />
                <h1 className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 cursor-default">
                    KIDS ZONE
                </h1>
            </div>

            <div className="flex items-center gap-4">
                <ul className="hidden md:flex gap-6 font-bold text-sm tracking-wide">
                    {['Characters', 'Movies', 'Shows', 'Games'].map((item) => (
                        <li key={item} className="hover:text-pink-500 cursor-pointer transition-colors">
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="h-6 w-px bg-white/20 hidden md:block" />
                <div className="bg-white/10 p-2 rounded-full hover:bg-white/20 cursor-pointer transition text-yellow-400">
                    <FaSearch />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 border-2 border-white cursor-pointer hover:scale-110 transition-transform" />
            </div>
        </nav>
    );
}

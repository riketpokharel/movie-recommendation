"use client";

import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { useState } from "react";

export default function KidsNavbar() {
  const [isOpen, setIsOpen] = useState(false);

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
        <h1 className="text-2xl text-white tracking-tighter font-bold bg-clip-text">
          KIDS <span className="text-pink-500">ZONE</span>
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <ul className="hidden md:flex gap-6 font-bold text-sm tracking-wide">
          <li className="hover:text-pink-500 cursor-pointer transition-colors">
            <Link href="/children/#superheroes">Characters</Link>
          </li>
          <li className="hover:text-pink-500 cursor-pointer transition-colors">
            <Link href="/children/#trending">Movies</Link>
          </li>
          <li className="hover:text-pink-500 cursor-pointer transition-colors">
            <Link href="/children/#adventures">Shows</Link>
          </li>
          <li className="hover:text-pink-500 cursor-pointer transition-colors">
            <Link href="#">Games</Link>
          </li>
        </ul>

        <div className="h-6 w-px bg-white/20 hidden md:block" />

        <div className="flex gap-4 items-center">
          <div className="hidden md:flex items-center bg-white/10 rounded-full px-4 py-2 border border-white/20 focus-within:border-yellow-400 focus-within:bg-white/20 transition-all duration-300 w-64">
            <FaSearch className="text-yellow-400 mr-2" />
            <input
              type="text"
              placeholder="Search movies..."
              className="bg-transparent border-none outline-none text-white text-sm w-full placeholder-gray-300"
            />
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 border-2 border-white cursor-pointer hover:scale-110 transition-transform hidden md:block" />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <GoArrowLeft className="rotate-180" /> : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#1a0b2e] border-b border-white/10 p-6 flex flex-col gap-4 shadow-xl md:hidden">
            <Link href="/children/#superheroes" className="text-xl font-bold hover:text-pink-500" onClick={() => setIsOpen(false)}>Characters</Link>
            <Link href="/children/#trending" className="text-xl font-bold hover:text-pink-500" onClick={() => setIsOpen(false)}>Movies</Link>
            <Link href="/children/#adventures" className="text-xl font-bold hover:text-pink-500" onClick={() => setIsOpen(false)}>Shows</Link>
            <Link href="#" className="text-xl font-bold hover:text-pink-500" onClick={() => setIsOpen(false)}>Games</Link>
            <div className="h-px w-full bg-white/10 my-2" />
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 border-2 border-white" />
              <span className="font-bold">My Profile</span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

"use client";
import Link from "next/link";
import { navLinks } from "@/app/data/navLinks";
import { BiSearch, BiMenu, BiX } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { BsBrightnessHighFill } from "react-icons/bs";
import { RiMovie2Line } from "react-icons/ri";
import { useState } from "react";
import { FiUser } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" absolute top-0 left-0 w-full z-30 flex justify-center px-4 py-6">
      <div className="flex items-center justify-between gap-40 md:gap-40 px-5 py-3 backdrop-blur-[2px] bg-black/30 rounded-4xl w-fit shadow-md ring-1 ring-blue-500">
        {/* logo */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <RiMovie2Line className="text-4xl" />
          <span className="font-medium text-lg">MyMovie</span>
        </div>

        {/* Desktop Nav links */}
        <ul className="hidden md:flex flex-row gap-6 text-white text-md">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="hover:text-blue-400 transition-all duration-300"
            >
              <Link href={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Icons visible on desktop and minimal on mobile */}
        <div className="hidden md:flex flex-row items-center gap-4 text-xl text-white">
          <div className="relative group">
            <input
              type="text"
              placeholder="Search..."
              className="bg-black/50 border border-white/20 rounded-full py-1 px-4 pl-10 text-sm focus:outline-none focus:border-blue-500 w-0 group-hover:w-48 focus:w-48 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer focus:cursor-text"
            />
            <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white group-hover:text-blue-500 transition-colors pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center group-hover:hidden pointer-events-none"></div>
          </div>
          <div className="relative group flex items-center">
            <IoIosNotifications className="cursor-pointer hover:text-blue-500 transition-all duration-300" />
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm font-medium px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-max z-50">
              You&apos;ll get your notifications here
            </div>
          </div>
          <Link href="/login" className="relative group flex items-center">
            <FiUser className="cursor-pointer hover:text-blue-500 transition-all duration-300" />
            <span className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs font-medium px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Login
            </span>
          </Link>
          {/* <BsBrightnessHighFill className="cursor-pointer  hover:text-blue-500 transition-all duration-300" /> */}
        </div>

        {/* Mobile HamburgerButton */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <BiX /> : <BiMenu />}
        </button>

        {/* Moible Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-16 right-6 bg-black/70 backdrop-blur-md rounded-lg shadow-lg p-6 w-48 flex flex-col gap-4 text-white text-lg md:hidden">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600 transition"
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile Icons */}
            <div className="flex gap-4 mt-4 text-xl">
              <BiSearch />
              <IoIosNotifications />
              <FiUser />
              <BsBrightnessHighFill />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

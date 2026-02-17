"use client";
import Link from "next/link";
import { navLinks } from "@/app/data/navLinks";
import { BiSearch, BiUser, BiMenu, BiX } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { BsBrightnessHighFill, BsBrightnessHigh } from "react-icons/bs";
import { RiMovie2Line } from "react-icons/ri";
import { useState } from "react";

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
        <div className="hidden md:flex flex-row gap-4 text-xl text-white">
          <BiSearch className="cursor-pointer  hover:text-blue-500 transition-all duration-300" />
          <IoIosNotifications className="cursor-pointer  hover:text-blue-500 transition-all duration-300" />
          <BiUser className="cursor-pointer  hover:text-blue-500 transition-all duration-300" />
          <BsBrightnessHighFill className="cursor-pointer  hover:text-blue-500 transition-all duration-300" />
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
              <BiUser />
              <BsBrightnessHighFill />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

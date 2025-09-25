"use client"
import Link from "next/link"
import Image from "next/image"
import { navLinks } from "../data/navLinks"
import { BiSearch, BiUser } from "react-icons/bi"
import { IoIosNotifications } from "react-icons/io"
import { BsBrightnessHighFill, BsBrightnessHigh } from "react-icons/bs"
import { RiMovie2Line } from "react-icons/ri"

export default function Navbar(){
    return (
        <nav className=" absolute top-0 left-0 w-full z-30 flex justify-center px-4 py-6">
            <div className="flex items-center justify-between gap-64 px-16 py-3 backdrop-blur-[2px] bg-black/30 rounded-4xl w-fit shadow-md ring-1 ring-blue-400">

            {/* logo */}
            <div className="flex items-center space-x-1">
                <RiMovie2Line className="text-4xl"/>
                <span className="font-medium text-lg">MyMovie</span>
            </div>

            {/* Nav links */}
            <ul className="flex flex-row gap-6 text-white text-md">
                {navLinks.map((link,index)=>(
                    <li key={index}>
                        <Link href={link.path}>{link.label}</Link>
                    </li>
                ))}
            </ul>

            {/* Icons */}
            <div className="flex flex-row gap-4 text-xl text-white"><BiSearch/>
            <IoIosNotifications/>
            <BiUser/> 
            <BsBrightnessHighFill/>
            </div>
            </div>
        </nav>
    )
}
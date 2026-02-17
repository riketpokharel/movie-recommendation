"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { RiMovie2Line } from "react-icons/ri";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#020817] text-gray-300 pt-20 pb-10 px-6 md:px-16 border-t border-white/5">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex items-center gap-2 text-blue-400">
                            <RiMovie2Line className="text-4xl" />
                            <span className="font-bold text-2xl text-white">MyMovie</span>
                        </div>
                        <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
                            Your ultimate destination for premium entertainment. Stream unlimited
                            movies, TV shows, and anime in 4K HDR.
                        </p>
                        <div className="flex gap-4 mt-2">
                            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="p-3 rounded-full bg-white/5 hover:bg-blue-500 hover:text-white transition-all duration-300"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Explore</h3>
                        <ul className="space-y-4 text-sm">
                            {["Movies", "Series", "Trending", "Collections"].map(
                                (item) => (
                                    <li key={item}>
                                        <a href={`/#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Support</h3>
                        <ul className="space-y-4 text-sm">
                            {["Help Center", "Account", "Media Center", "Privacy Policy", "Terms of Use"].map(
                                (item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-blue-400 transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Links Column 3 */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Company</h3>
                        <ul className="space-y-4 text-sm">
                            {["About Us", "Careers", "Press", "Contact Us", "Ways to Watch"].map(
                                (item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-blue-400 transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>
                        &copy; {currentYear} MyMovie Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">
                            Privacy
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Terms
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Sitemap
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

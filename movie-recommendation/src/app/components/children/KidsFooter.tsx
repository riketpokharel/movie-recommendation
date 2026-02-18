"use client";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function KidsFooter() {
  return (
    <footer className="w-full bg-[#130623] text-white pt-16 pb-8 px-6 md:px-16 border-t border-white/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[80px]" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
              KIDS ZONE
            </h2>
            <p className="text-gray-400 max-w-sm">
              Making entertainment safe, fun, and magical for everyone. diverse
              stories for diverse minds!
            </p>
          </div>

          <div className="flex gap-4">
            {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
              <div
                key={i}
                className="bg-white/10 p-3 rounded-full hover:bg-pink-500 hover:scale-110 transition-all cursor-pointer"
              >
                <Icon size={20} />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm font-semibold text-gray-300 text-center md:text-left">
          <div className="flex flex-col gap-3">
            <span className="text-white font-bold opacity-50 mb-1 uppercase tracking-wider text-xs">
              Watch
            </span>
            <a href="/children/#trending" className="hover:text-yellow-400">
              Movies
            </a>
            <a href="/children/#adventures" className="hover:text-yellow-400">
              TV Shows
            </a>
            <a href="/children/#superheroes" className="hover:text-yellow-400">
              Cartoons
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white font-bold opacity-50 mb-1 uppercase tracking-wider text-xs">
              Support
            </span>
            <a href="#" className="hover:text-yellow-400">
              Help Center
            </a>
            <a href="#" className="hover:text-yellow-400">
              Parental Controls
            </a>
            <a href="#" className="hover:text-yellow-400">
              Account
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white font-bold opacity-50 mb-1 uppercase tracking-wider text-xs">
              Legal
            </span>
            <a href="#" className="hover:text-yellow-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-yellow-400">
              Terms of Use
            </a>
            <a href="#" className="hover:text-yellow-400">
              Cookie Preferences
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white font-bold opacity-50 mb-1 uppercase tracking-wider text-xs">
              Contact
            </span>
            <p>Questions? Ask your parents!</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} MyMovie Kids. All Rights Reserved.
            Stay Awesome!
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { FaCheck } from "react-icons/fa";

const packages = [
  {
    name: "Standard",
    price: "10.00",
    features: [
      "Access to standard movies",
      "HD Resolution",
      "Watch on 1 device",
      "Ads support",
    ],
    highlight: false,
  },
  {
    name: "Premium",
    price: "15.00",
    features: [
      "Access to all movies",
      "4K + HDR Resolution",
      "Watch on 4 devices",
      "No Ads",
      "Offline Downloads",
    ],
    highlight: true,
  },
  {
    name: "Business",
    price: "25.00",
    features: [
      "Commercial License",
      "multiple account Access",
      "Dedicated Support",
      "Custom playlists",
      "Analytics Dashboard",
    ],
    highlight: false,
  },
];

export default function Packages() {
  return (
    <section className="w-full py-20 px-6 md:px-16 text-white bg-[#030A1B]">
      <div className="text-center mb-16">
        <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-2">
          Pricing Plans
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold">Choose Your Plan</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Unlock the best movie experience with our flexible pricing options.
          Choose the plan that fits your entertainment needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative rounded-3xl p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl 
              ${pkg.highlight
                ? "bg-gradient-to-b from-blue-900/50 to-blue-900/10 border-blue-500/50 shadow-blue-500/20 scale-105 z-10"
                : "bg-white/5 border border-white/10 hover:border-blue-400/30"
              }
              backdrop-blur-md border`}
          >
            {pkg.highlight && (
              <div className="absolute top-0 right-0 bg-blue-500 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                POPULAR
              </div>
            )}

            <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold">${pkg.price}</span>
              <span className="text-gray-400 text-sm">/month</span>
            </div>

            <ul className="space-y-4 mb-8">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span className={`p-1 rounded-full ${pkg.highlight ? "bg-blue-500" : "bg-white/10"}`}>
                    <FaCheck className="text-[10px]" />
                  </span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 
                ${pkg.highlight
                  ? "bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white/10 hover:bg-white/20 text-white border border-white/5"
                }
              `}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-0" />
    </section>
  );
}

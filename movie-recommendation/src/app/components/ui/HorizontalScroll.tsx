"use client";

import { useRef, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

interface HorizontalScrollProps {
  items: string[];
  borderColor?: string;
  hoverColor?: string;
  activeColor?: string;
  textColor?: string;
  scrollAmount?: number;
  className?: string;
  onSelect?: (item: string) => void;
}

export default function HorizontalScroll({
  items,
  borderColor = "#812bc7",

  activeColor = "#812bc7",
  textColor = "#000000",
  scrollAmount = 200,
  className = "",
  onSelect,
}: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleSelect = (item: string) => {
    setActiveItem(item);
    onSelect?.(item);
  };

  return (
    <div className={`flex justify-between items-center ${className}`}>
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="p-2 rounded-full hover:bg-[#EF99FE] transition hover:text-black cursor-pointer"
      >
        <GoArrowLeft size={20} />
      </button>

      {/* Scrollable Items */}
      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto scroll-smooth px-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {items.map((item, index) => {
          const isActive = item === activeItem;
          return (
            <h2
              key={index}
              onClick={() => handleSelect(item)}
              className={`border border-solid px-3 py-1 rounded-3xl cursor-pointer whitespace-nowrap transition select-none ${
                isActive ? "text-white" : "hover:text-white hover:opacity-90"
              }`}
              style={{
                borderColor,
                backgroundColor: isActive ? activeColor : "transparent",
                color: isActive ? "#fff" : textColor,
              }}
            >
              {item}
            </h2>
          );
        })}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="p-2 rounded-full hover:bg-[#EF99FE] transition hover:text-black cursor-pointer"
      >
        <GoArrowRight size={20} />
      </button>
    </div>
  );
}

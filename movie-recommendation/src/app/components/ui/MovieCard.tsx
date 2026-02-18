"use client";

import Link from "next/link";
type MovieCardProps = { id: string | number; image: string; title: string };

export default function MovieCard({ id, image, title }: MovieCardProps) {
  return (
    <Link href={`/movie/${id}`}>
      <div
        className="mt-5 w-48 h-72 bg-cover bg-center rounded-sm shadow-lg hover:scale-105 transition duration-200 ease-in-out cursor-pointer"
        style={{ backgroundImage: `url(${image})` }}
        title={title}
      ></div>
    </Link>
  );
}

"use client";

type MovieCardProps = { image: string; title: string };

export default function MovieCard({ image, title }: MovieCardProps) {
  return (
    <div
      className="mt-5 w-48 h-72 bg-cover bg-center rounded-sm shadow-lg hover:scale-103 transition duration-200 ease-in-out cursor-pointer"
      style={{ backgroundImage: `url(${image})` }}
      title={title}
    ></div>
  );
}

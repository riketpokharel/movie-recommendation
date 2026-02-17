"use client";

import { goldenglobe } from "@/app/data/movies.data";
import Image from "next/image";

export default function GoldenGlobe() {
  return (
    <section className=" flex items-center gap-2 md:gap-12 mt-4 px-6 md:px-16 bg-[#DAA420]  border-t-50 border-purple-700">
      <div className="mx-4 z-10">
        <Image
          src="/assets/images/goldenglobe.jpg"
          alt="Golden Globe Awards"
          width={600}
          height={300}
        />
      </div>
      <div className="m-8 grid grid-cols-2 gap-2 md:flex md:gap-6">
        {goldenglobe.map((goldenglobe) => (
          <Image
            key={goldenglobe.id}
            src={goldenglobe.image}
            width={180}
            height={150}
            alt={goldenglobe.title}
          />
        ))}
      </div>
    </section>
  );
}

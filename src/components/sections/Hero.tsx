"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const banners = [
  "/banner-bueno.png",
  "/banner-festa.png",
  "/banner-confeitaria.png",
  "/banner-embalagens.png",
];

export function Hero() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
   <section className="relative w-full h-[70vh] overflow-hidden">
      <Image
        src={banners[currentBanner]}
        alt="Banner Rio Pardo Embalagens"
        fill
        priority
        className="object-cover transition-all duration-700"
      />

      <div className="absolute inset-0 bg-black/10" />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentBanner === index
                ? "bg-white w-8"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

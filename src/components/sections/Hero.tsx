"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const banners = [
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
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src={banners[currentBanner]}
        alt="Banner Rio Pardo Embalagens"
        fill
        priority
        className="object-cover transition-all duration-700"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center">
        <h1 className="text-white text-4xl md:text-7xl font-black uppercase drop-shadow-lg">
          Rio Pardo Embalagens
        </h1>

        <p className="text-white/90 text-lg md:text-2xl mt-4 max-w-2xl">
          Soluções completas em embalagens, confeitaria,
          descartáveis e artigos para festas.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <Link
            href="https://wa.me/5519998926166"
            target="_blank"
            className="bg-red-600 hover:bg-red-700 transition-all px-8 py-4 rounded-xl text-white font-bold uppercase"
          >
            Fazer orçamento
          </Link>

          <Link
            href="#produtos"
            className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all px-8 py-4 rounded-xl text-white font-bold uppercase"
          >
            Ver produtos
          </Link>
        </div>
      </div>

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

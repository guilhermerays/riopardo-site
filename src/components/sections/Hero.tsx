"use client";

import Image from "next/image";
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
    <section className="relative w-full h-[70vh] overflow-hidden bg-zinc-950">

      {/* GLOW CINEMATOGRÁFICO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none z-0" />

      {/* IMAGEM */}
      <Image
        src={banners[currentBanner]}
        alt="Banner Rio Pardo Embalagens"
        fill
        priority
        className="object-cover transition-all duration-1000 ease-out scale-[1.01]"
      />

      {/* OVERLAY SUAVE */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-black/10 z-10" />

      {/* SOMBRA INFERIOR */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent z-20 pointer-events-none" />

      {/* GLOW LATERAL */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-500/5 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none" />

      {/* INDICADORES */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`
              transition-all duration-300 rounded-full
              ${
                currentBanner === index
                  ? "bg-white w-10 h-3 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                  : "bg-white/40 hover:bg-white/70 w-3 h-3"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}

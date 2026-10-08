"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const banners = [
  "/banner-criancas.png",
  "/banner-halloween.png",
  "/banner-locacao.png",
];

export function Hero() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full aspect-[1000/469] overflow-hidden bg-zinc-950">

      {/* GLOW CINEMATOGRÁFICO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none z-0" />

      {/* IMAGEM DO BANNER */}
      <Image
        src={banners[currentBanner]}
        alt="Banner Rio Pardo Embalagens"
        fill
        priority
        sizes="100vw"
        className="object-contain w-full h-full transition-all duration-1000 ease-out"
      />

      {/* OVERLAY MUITO SUAVE */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10 pointer-events-none" />

      {/* GLOW LATERAL */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-500/5 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none" />

      {/* INDICADORES */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            aria-label={`Ir para o banner ${index + 1}`}
            className={`
              transition-all duration-700 ease-out rounded-full
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

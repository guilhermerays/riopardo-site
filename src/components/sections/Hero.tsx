"use client";

import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-zinc-950 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full z-11">
        {}
        <Image
          src="/fachada.jpg"
          alt="Fachada Rio Pardo"
          fill
          priority
          className="object-cover object-center opacity-40"
        />

        {}
        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black via-black/60 to-transparent z-12"></div>
      </div>

      <div className="relative flex items-center justify-center flex-col z-13 p-3 w-full max-w-7xl mx-auto">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-center relative"
        >
          {}
          <div className="relative min-w-full md:min-w-[600px]  flex flex-col items-center justify-center">
            <h1 className="flex flex-col font-bold text-center leading-tight">
              <span className="text-xl md:text-3xl text-zinc-300 tracking-[0.2em] uppercase mb-2">
                DO VAREJO AO ATACADO
              </span>

              {}
              <span className="text-4xl md:text-7xl font-black bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent drop-shadow-sm italic p-3">
                SOLUÇÕES COMPLETAS
              </span>
            </h1>

            {}
            <a
              href="https://wa.me/5519989926166"
              target="_blank"
              className="mt-8 text-lg md:text-2xl font-bold text-red-600 hover:text-red-500 border-b-2 border-red-600 hover:border-red-500 transition-all uppercase tracking-widest pb-1"
            >
              Fazer Orçamento
            </a>
          </div>
        </div>

        {}
        {}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 hidden lg:block opacity-30 hover:opacity-100 transition-opacity duration-700">
          {}
        </div>

        {}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 hidden lg:block opacity-30 hover:opacity-100 transition-opacity duration-700">
          {}
        </div>
      </div>
    </section>
  );
}

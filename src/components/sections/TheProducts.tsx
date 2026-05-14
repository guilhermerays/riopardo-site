"use client";

import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaArrowRight, FaStar } from "react-icons/fa";


const featuredBanner = {
  title: "Arraiá de Ofertas",
  description:
    "Tudo para sua festa junina: doces típicos, decorações, fantasias e muito mais.",
  image: "/banner-festa-junina.png",
};

const products = [
  {
    id: 1,
    name: "Bobina Picotada",
    categoryLabel: "Industrial",
    image: "/card-bobina.png",
  },
  {
    id: 2,
    name: "Sacos de Lixo",
    categoryLabel: "Limpeza",
    image: "/card-sacos-lixo.png",
  },
  {
    id: 3,
    name: "Chocolates para Confeitaria",
    categoryLabel: "Confeitaria",
    image: "/card-chocolates.png",
  },
  {
    id: 4,
    name: "Produtos de Limpeza",
    categoryLabel: "Limpeza",
    image: "/card-limpeza.png",
  },
];

const categories = [
  { id: "todos", label: "Destaques" },
  { id: "industrial", label: "Industrial" },
  { id: "festas", label: "Festas" },
  { id: "confeitaria", label: "Confeitaria" },
];

export function TheProducts() {
  const [activeFilter, setActiveFilter] = useState("todos");

  const filteredProducts = products;

  const phoneNumber = "5519989926166";

  return (
    <section
      id="produtos"
      className="py-24 bg-black relative border-t border-white/5 overflow-hidden"
    >
      {}
      {}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {}
        <div className="flex flex-col  items-center justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase leading-none mb-4">
              Produtos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500 pr-2">
                Selecionados
              </span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base text-center leading-relaxed">
              Confira abaixo alguns dos <strong>itens mais vendidos</strong> em
              nossa loja. Temos um catálogo completo com mais de 5.000 itens
              disponíveis no balcão.
            </p>
          </div>

          {}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`
                  px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200
                  ${
                    activeFilter === cat.id
                      ? "bg-yellow-500 text-black shadow-[0_0_15px_rgba(234,179,8,0.4)] scale-105" 
                      : "bg-zinc-900 text-zinc-400 border border-white/10 hover:border-yellow-500/50 hover:text-white" 
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  
  {/* BANNER GIGANTE */}
  <a
    href={`https://wa.me/${phoneNumber}`}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative overflow-hidden rounded-2xl border border-white/10 min-h-[420px] lg:min-h-[520px]"
  >
    <Image
      src={featuredBanner.image}
      alt={featuredBanner.title}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

    
  </a>
<div className="bg-zinc-900 border border-t-0 border-white/10 rounded-b-2xl p-6 -mt-1">
  <span className="text-yellow-400 uppercase text-xs font-black tracking-[0.2em]">
    Destaque da Temporada
  </span>

  <h3 className="text-3xl lg:text-5xl font-black text-white leading-none mt-3 uppercase">
    {featuredBanner.title}
  </h3>

  <p className="text-zinc-400 text-sm lg:text-base mt-4 leading-relaxed">
    {featuredBanner.description}
  </p>
</div>
  {/* GRID DOS CARDS */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {products.map((product) => {
      const message = `Olá! Vi o destaque *${product.name}* no site e gostaria de saber se tem em estoque.`;

      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;

      return (
        <a
          key={product.id}
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-2xl border border-white/10 min-h-[250px]"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        </a>
        <div className="bg-zinc-900 border border-t-0 border-white/10 rounded-b-2xl p-4 -mt-1">
  <span className="text-yellow-400 text-[10px] uppercase font-bold tracking-widest">
    {product.categoryLabel}
  </span>

  <h3 className="text-white text-xl font-black leading-tight mt-2">
    {product.name}
  </h3>
</div>
      );
    })}
  </div>
</div>

        {}
        <div className="mt-16 text-center border-t border-white/5 pt-8">
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            className="inline-flex items-center gap-3 px-8 py-3 bg-transparent border border-zinc-700 hover:border-yellow-500 text-white font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:bg-yellow-500 hover:text-black rounded-sm"
          >
            Ver Catálogo Completo no WhatsApp <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

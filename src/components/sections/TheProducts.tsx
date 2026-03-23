"use client";

import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaArrowRight, FaStar } from "react-icons/fa";


const products = [
  {
    id: 1,
    name: "Bobina Fundo Estrela",
    category: "industrial",
    categoryLabel: "Industrial",
    description: "Alta resistência para cargas pesadas. Material 100% virgem.",
    image: "/fachada.jpg",
    isNew: true,
  },
  {
    id: 2,
    name: "Kit Confeiteiro Pro",
    category: "confeitaria",
    categoryLabel: "Confeitaria",
    description:
      "Bicos, sacos e espátulas profissionais para acabamento perfeito.",
    image: "/fachada.jpg",
    isNew: false,
  },
  {
    id: 3,
    name: "Saco de Lixo 100L",
    category: "industrial",
    categoryLabel: "Limpeza",
    description: "Reforçado, micra grossa. Ideal para condomínios e empresas.",
    image: "/fachada.jpg",
    isNew: false,
  },
  {
    id: 4,
    name: "Decoração Patrulha Canina",
    category: "festas",
    categoryLabel: "Festas",
    description: "Kit completo de mesa: Pratos, copos e decoração temática.",
    image: "/fachada.jpg",
    isNew: true,
  },
  {
    id: 5,
    name: "Embalagem Delivery Kraft",
    category: "food",
    categoryLabel: "Food Service",
    description: "Sustentável e resistente a gordura. Vários tamanhos.",
    image: "/fachada.jpg",
    isNew: false,
  },
  {
    id: 6,
    name: "Forma de Acetato Premium",
    category: "confeitaria",
    categoryLabel: "Confeitaria",
    description: "Ideal para bombons e trufas. Fácil desenforme.",
    image: "/fachada.jpg",
    isNew: false,
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

  const filteredProducts =
    activeFilter === "todos"
      ? products
      : products.filter((p) => p.category === activeFilter);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
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
                className="group flex flex-col bg-zinc-900 border border-white/5 rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/30"
              >
                {}
                <div className="relative h-60 overflow-hidden bg-zinc-950">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />

                  {}
                  {product.isNew && (
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black uppercase px-2 py-1 rounded-sm shadow-md flex items-center gap-1 z-10">
                      <FaStar className="w-3 h-3" /> Novo
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>

                {}
                <div className="flex flex-col flex-1 p-5 relative">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5 group-hover:bg-yellow-500/50 transition-colors" />

                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300">
                      {product.categoryLabel}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-yellow-500 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-zinc-400 text-xs leading-relaxed mb-6 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider group-hover:text-white transition-colors">
                      Consultar Disponibilidade
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                      <FaWhatsapp className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
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

"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Produtos para Festas",
    category: "festas",
    categoryLabel: "Festas",
    image: "/card-festas.png",
  },
  {
    id: 2,
    name: "Produtos para Confeitaria",
    category: "confeitaria",
    categoryLabel: "Confeitaria",
    image: "/card-confeitaria.png",
  },
  {
    id: 3,
    name: "Embalagens",
    category: "embalagens",
    categoryLabel: "Embalagens",
    image: "/card-embalagens.png",
  },
  {
    id: 4,
    name: "Produtos de Limpeza",
    category: "limpeza",
    categoryLabel: "Limpeza",
    image: "/card-limpeza.png",
  },
  {
    id: 5,
    name: "Linha Industrial",
    category: "industrial",
    categoryLabel: "Industrial",
    image: "/card-industrial.png",
  },
  {
    id: 6,
    name: "Descartáveis",
    category: "descartaveis",
    categoryLabel: "Descartáveis",
    image: "/card-descartaveis.png",
  },
];

const categories = [
  { id: "todos", label: "Destaques" },
  { id: "industrial", label: "Industrial" },
  { id: "festas", label: "Festas" },
  { id: "confeitaria", label: "Confeitaria" },
  { id: "embalagens", label: "Embalagens" },
  { id: "limpeza", label: "Limpeza" },
];

export function TheProducts() {
  const [activeFilter, setActiveFilter] = useState("todos");

  const phoneNumber = "5519989926166";

  const filteredProducts =
    activeFilter === "todos"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <section
      id="produtos"
      className="py-32 bg-black relative border-t border-white/5 overflow-hidden"
    >
      {/* FUNDO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* TOPO */}
        <div className="flex flex-col items-center mb-12 gap-8">

          <div className="max-w-2xl">

            <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase leading-none mb-4 text-center">
              Produtos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500 pr-2">
                Selecionados
              </span>
            </h2>

            <p className="text-zinc-400 text-sm md:text-base text-center leading-relaxed">
              Confira abaixo alguns dos{" "}
              <strong>itens mais vendidos</strong> em nossa loja. Temos um
              catálogo completo com mais de 5.000 itens disponíveis no balcão.
            </p>

          </div>

          {/* FILTROS */}
          <div className="flex flex-wrap gap-2 justify-center">

            {categories.map((cat) => (

              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`
                  px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-wider
                  transition-all duration-200
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

        {/* GRID DE PRODUTOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredProducts.map((product) => {

            const message = `Olá! Vi o destaque *${product.name}* no site e gostaria de saber se tem em estoque.`;

            const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`;

            return (

              <div
                key={product.id}
                className="group"
              >

                {/* IMAGEM */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    relative
                    aspect-[4/3]
                    overflow-hidden
                    rounded-t-2xl
                    border border-white/10
                    bg-zinc-900
                    block
                  "
                >

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="
                      object-contain
                      p-4
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* GRADIENTE SUAVE */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                </a>

                {/* INFORMAÇÕES */}
                <div
                  className="
                    bg-zinc-900
                    border
                    border-t-0
                    border-white/10
                    rounded-b-2xl
                    p-5
                  "
                >

                  <span className="text-yellow-400 text-[10px] uppercase font-bold tracking-widest">
                    {product.categoryLabel}
                  </span>

                  <h3 className="text-white text-xl font-black leading-tight mt-2">
                    {product.name}
                  </h3>

                  <div className="mt-4 flex items-center justify-between">

                    <span className="text-zinc-500 text-xs uppercase tracking-wider">
                      Consulte disponibilidade
                    </span>

                    <FaArrowRight
                      className="
                        text-yellow-500
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />

                  </div>

                </div>

              </div>

            );

          })}

        </div>

        {/* BOTÃO FINAL */}
        <div className="mt-16 text-center border-t border-white/5 pt-8">

          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              px-8
              py-3
              bg-transparent
              border
              border-zinc-700
              hover:border-yellow-500
              text-white
              font-bold
              uppercase
              tracking-widest
              text-xs
              transition-all
              duration-300
              hover:bg-yellow-500
              hover:text-black
              rounded-sm
            "
          >
            Ver Catálogo Completo no WhatsApp

            <FaArrowRight />

          </a>

        </div>

      </div>
    </section>
  );
}

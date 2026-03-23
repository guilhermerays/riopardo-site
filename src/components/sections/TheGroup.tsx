"use client";

import Image from "next/image";
import { FaStore, FaTruck, FaIndustry, FaScroll } from "react-icons/fa";

export function TheGroup() {
  const companies = [
    {
      id: "loja",
      name: "Rio Pardo Embalagens",
      description:
        "A maior variedade em artigos de festa, confeitaria e descartáveis da região.",
      icon: <FaStore className="w-8 h-8 text-yellow-500" />,
      color: "hover:border-yellow-500/50 hover:bg-yellow-500/5",
      cols: "md:col-span-2",
      link: "#loja",
      image: "/fachada.jpg",
    },
    {
      id: "distribuidora",
      name: "Rio Pardo Distribuidora",
      description:
        "Atacado especializado para restaurantes, lanchonetes e comércios.",
      icon: <FaTruck className="w-8 h-8 text-red-500" />,
      color: "hover:border-red-500/50 hover:bg-red-500/5",
      cols: "md:col-span-1",
      link: "#atacado",
      image: "/fachada.jpg",
    },
    {
      id: "plasticos",
      name: "Rio Pardo Plásticos",
      description:
        "Fábrica própria de sacolas e sacos de lixo de alta resistência.",
      icon: <FaIndustry className="w-8 h-8 text-yellow-500" />,
      color: "hover:border-yellow-500/50 hover:bg-yellow-500/5",
      cols: "md:col-span-1",
      link: "#industria",
      image: "/fachada.jpg",
    },
    {
      id: "bobroll",
      name: "BobRoll",
      description:
        "Indústria de bobinas picotadas para uso comercial e industrial.",
      icon: <FaScroll className="w-8 h-8 text-red-500" />,
      color: "hover:border-red-500/50 hover:bg-red-500/5",
      cols: "md:col-span-2",
      link: "#industria",
      image: "/fachada.jpg",
    },
  ];

  return (
    <section id="grupo" className="py-24 relative overflow-hidden ">
      <div className="absolute top-0 right-0 w-150 h-150 bg-red-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase leading-tight">
            Um Grupo, <br />
            <span className="text-yellow-500">Quatro Soluções.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {companies.map((company, index) => (
            <div
              key={company.id}
              className={`
                group relative p-8 rounded-sm border border-white/5 bg-zinc-950
                transition-all duration-300 ease-out cursor-pointer overflow-hidden
                flex flex-col justify-between
                ${company.cols} ${company.color}
              `}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={company.image}
                  alt={company.name}
                  fill
                  className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-300" />
              </div>

              <div className="bg-white/5 p-3 rounded-sm w-fit group-hover:scale-110 transition-transform duration-300 relative z-10">
                {company.icon}
              </div>

              <div className="relative z-10 mt-4">
                <h3 className="text-xl font-bold text-white mb-2 uppercase italic group-hover:translate-x-1 transition-transform">
                  {company.name}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-[95%] group-hover:text-zinc-300">
                  {company.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

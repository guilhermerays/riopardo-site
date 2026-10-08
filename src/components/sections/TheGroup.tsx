"use client";

import Image from "next/image";
import {
  FaStore,
  FaTruck,
  FaIndustry,
  FaScroll,
} from "react-icons/fa";

export function TheGroup() {
  const companies = [
    {
      id: "loja",
      name: "Rio Pardo Embalagens",
      description:
        "A maior variedade em artigos de festa, confeitaria e descartáveis da região.",
      icon: <FaStore className="w-7 h-7 text-yellow-400" />,
      image: "/fachada-embalagens.jpg",
    },
    {
      id: "distribuidora",
      name: "Rio Pardo Distribuidora",
      description:
        "Atacado especializado para restaurantes, lanchonetes e comércios.",
      icon: <FaTruck className="w-7 h-7 text-red-500" />,
      image: "/fachada-distribuidora.jpg",
    },
    {
      id: "plasticos",
      name: "Rio Pardo Plásticos",
      description:
        "Fábrica própria de sacolas e sacos de lixo de alta resistência.",
      icon: <FaIndustry className="w-7 h-7 text-yellow-400" />,
      image: "/fachada-plasticos.jpg",
    },
    {
      id: "bobroll",
      name: "BobRoll",
      description:
        "Indústria de bobinas picotadas para uso comercial e industrial.",
      icon: <FaScroll className="w-7 h-7 text-red-500" />,
      image: "/fachada-bobroll.jpg",
    },
  ];

  return (
    <section
      id="grupo"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-zinc-950 to-zinc-900"
    >
      {/* GLOW DE FUNDO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_60%)] pointer-events-none" />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* TOPO */}
        <div
          className="mb-16 text-center max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          <span className="text-yellow-500 uppercase tracking-[0.25em] text-xs font-bold">
            Conheça o Grupo
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase leading-none mt-4">
            Um Grupo, <br />
            <span className="text-yellow-500">
              Quatro Soluções.
            </span>
          </h2>

          <p className="text-zinc-400 text-sm md:text-base mt-6 leading-relaxed">
            Estrutura completa para atender desde o consumidor final até
            empresas, indústrias e grandes operações comerciais.
          </p>
        </div>

        {/* GRID 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {companies.map((company, index) => (
            <div
              key={company.id}
              className="
                group
                relative
                h-[360px]
                md:h-[400px]
                rounded-3xl
                overflow-hidden
                border border-white/10
                bg-zinc-900
                transition-all
                duration-500
                hover:border-white/20
                hover:-translate-y-1
                hover:shadow-[0_15px_50px_rgba(0,0,0,0.45)]
              "
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              {/* IMAGEM */}
              <div className="absolute inset-0 bg-zinc-900">

                <Image
                  src={company.image}
                  alt={company.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.03]
                  "
                />

                {/* GRADIENTE SOMENTE NA PARTE INFERIOR */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/85
                    via-black/20
                    to-transparent
                  "
                />

              </div>

              {/* CONTEÚDO */}
              <div className="relative z-10 h-full flex flex-col justify-between p-7 md:p-8">

                {/* ÍCONE */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-black/30
                    backdrop-blur-md
                    border
                    border-white/20
                    flex
                    items-center
                    justify-center
                    shadow-[0_0_30px_rgba(0,0,0,0.3)]
                    group-hover:scale-110
                    transition-transform
                    duration-500
                  "
                >
                  {company.icon}
                </div>

                {/* TEXTO */}
                <div>

                  <h3
                    className="
                      text-2xl
                      md:text-3xl
                      font-black
                      text-white
                      uppercase
                      italic
                      mb-3
                      leading-tight
                      drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
                    "
                  >
                    {company.name}
                  </h3>

                  <p
                    className="
                      text-white/90
                      text-sm
                      md:text-base
                      leading-relaxed
                      max-w-xl
                      drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]
                    "
                  >
                    {company.description}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

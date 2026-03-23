"use client";

import {
  FaTags,
  FaTruckLoading,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

export function Features() {
  const features = [
    {
      icon: <FaTags className="w-10 h-10 text-yellow-500" />,
      title: "Preço de Fábrica",
      description:
        "Produção própria de bobinas e plásticos (BobRoll). Garantimos o melhor custo-benefício sem intermediários.",
    },
    {
      icon: <FaTruckLoading className="w-10 h-10 text-red-600" />,
      title: "Pronta Entrega",
      description:
        "Centro de distribuição robusto e frota própria para garantir que seu comércio nunca pare por falta de insumos.",
    },
    {
      icon: <FaShieldAlt className="w-10 h-10 text-zinc-300" />,
      title: "Tradição e Confiança",
      description:
        "Referência em São José do Rio Pardo com atendimento especializado tanto no varejo quanto no atacado.",
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-b border-white/5 overflow-hidden">
      {}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {}
        <div className="flex flex-col items-center justify-between mb-16 gap-8 text-center">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase leading-none mb-6">
              Por que escolher a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 px-2">
                Rio Pardo?
              </span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Não somos apenas uma loja, somos parceiros do seu negócio. Entenda
              os diferenciais que nos tornam líderes no mercado regional.
            </p>
          </div>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center p-8 rounded-sm bg-zinc-900/50 border border-white/5 hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {}
              <div className="relative mb-6">
                <div
                  className="absolute inset-0 bg-current opacity-0 group-hover:opacity-20 blur-xl rounded-full transition-opacity duration-500"
                  style={{
                    color:
                      index === 1
                        ? "#DC2626"
                        : index === 0
                          ? "#EAB308"
                          : "#D4D4D8",
                  }}
                />
                <div className="relative bg-zinc-950 border border-white/10 p-5 rounded-full group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>

              {}
              <h3 className="text-xl font-bold text-white uppercase italic tracking-wider mb-3 group-hover:text-yellow-500 transition-colors">
                {feature.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-yellow-500 group-hover:w-1/3 transition-all duration-300 opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {}
        <div className="mt-16 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-2 block">
              Atendimento Corporativo
            </span>
            <h4 className="text-xl md:text-2xl font-bold text-white">
              Precisa abastecer sua empresa ou evento?
            </h4>
          </div>

          <a
            href="https://wa.me/5519989926166"
            target="_blank"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 hover:bg-yellow-500/75 text-gray-900 font-black uppercase tracking-widest text-sm transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(255,230,0,0.1)] hover:shadow-[0_0_30px_rgba(255,230,0,0.2)]"
          >
            Falar com Vendedor{" "}
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

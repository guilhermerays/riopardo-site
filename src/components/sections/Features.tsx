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
      icon: <FaTags className="w-9 h-9 text-yellow-400" />,
      title: "Preço de Fábrica",
      description:
        "Produção própria de bobinas e plásticos (BobRoll). Garantimos o melhor custo-benefício sem intermediários.",
    },
    {
      icon: <FaTruckLoading className="w-9 h-9 text-red-500" />,
      title: "Pronta Entrega",
      description:
        "Centro de distribuição robusto e frota própria para garantir que seu comércio nunca pare por falta de insumos.",
    },
    {
      icon: <FaShieldAlt className="w-9 h-9 text-zinc-200" />,
      title: "Tradição e Confiança",
      description:
        "Referência em São José do Rio Pardo com atendimento especializado tanto no varejo quanto no atacado.",
    },
  ];

  return (
    <section className="relative py-28 bg-zinc-950 border-t border-b border-white/5 overflow-hidden">
      
      {/* GLOW FUNDO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_60%)] pointer-events-none" />

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* TOPO */}
        <div className="flex flex-col items-center justify-between mb-20 gap-8 text-center">
          <div className="max-w-3xl">
            
            <span className="text-yellow-500 uppercase tracking-[0.25em] text-xs font-bold">
              Diferenciais
            </span>

            <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase leading-none mt-5 mb-6">
              Por que escolher a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 px-2">
                Rio Pardo?
              </span>
            </h2>

            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Não somos apenas uma loja. Somos parceiros do seu negócio,
              oferecendo estrutura, variedade e confiança para atender desde
              pequenos eventos até grandes operações comerciais.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                group
                relative
                flex
                flex-col
                items-center
                text-center
                p-10
                rounded-3xl
                bg-zinc-900/50
                backdrop-blur-sm
                border border-white/5
                hover:border-yellow-500/20
                transition-all duration-500
                hover:-translate-y-2
                hover:bg-zinc-900/70
                hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                overflow-hidden
              "
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              
              {/* GLOW CARD */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    index === 1
                      ? "radial-gradient(circle at top, rgba(220,38,38,0.08), transparent 70%)"
                      : index === 0
                      ? "radial-gradient(circle at top, rgba(234,179,8,0.08), transparent 70%)"
                      : "radial-gradient(circle at top, rgba(255,255,255,0.04), transparent 70%)",
                }}
              />

              {/* ÍCONE */}
              <div className="relative mb-8">
                <div className="relative bg-zinc-950/80 border border-white/10 p-5 rounded-2xl backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.25)] group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* TÍTULO */}
              <h3 className="text-2xl font-black text-white uppercase italic tracking-wide mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                {feature.title}
              </h3>

              {/* TEXTO */}
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>

              {/* LINHA */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-yellow-500 group-hover:w-1/3 transition-all duration-500 opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="text-center md:text-left">
            <span className="text-red-500 font-bold uppercase tracking-[0.25em] text-xs mb-3 block">
              Atendimento Corporativo
            </span>

            <h4 className="text-2xl md:text-3xl font-black text-white leading-tight">
              Precisa abastecer sua empresa ou evento?
            </h4>

            <p className="text-zinc-400 mt-3 text-sm md:text-base">
              Fale com nossa equipe e receba atendimento personalizado.
            </p>
          </div>

          <a
            href="https://wa.me/5519989926166"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-3
              px-8
              py-4
              bg-yellow-500
              hover:bg-yellow-400
              text-black
              font-black
              uppercase
              tracking-widest
              text-sm
              transition-all duration-300
              rounded-2xl
              shadow-[0_0_25px_rgba(234,179,8,0.15)]
              hover:shadow-[0_0_40px_rgba(234,179,8,0.25)]
            "
          >
            Falar com Vendedor

            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}

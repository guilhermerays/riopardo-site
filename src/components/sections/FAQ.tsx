'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Vocês realizam vendas online?",
    answer:
      "Nosso site é institucional para apresentação dos nossos produtos e serviços. Para realizar compras ou orçamentos, entre em contato diretamente pelo nosso WhatsApp ou visite nossa loja física.",
  },
  {
    question: "Vendem no atacado e varejo?",
    answer:
      "Sim! A Rio Pardo Embalagens atende o varejo com nossa loja completa e o atacado através da nossa Distribuidora, oferecendo condições especiais para grandes volumes.",
  },
  {
    question: "Onde a loja está localizada?",
    answer:
      "Estamos localizados no coração de São José do Rio Pardo, na R. Campos Salles, 724 - Centro. Venha nos visitar!",
  },
  {
    question: "Quais os horários de atendimento?",
    answer:
      "Nossa loja física funciona de segunda a sexta em horário comercial e aos sábados até às 13h. O atendimento via WhatsApp segue o mesmo horário.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="relative py-32 bg-zinc-950 text-zinc-100 overflow-hidden"
      id="faq"
    >
      {/* GLOW FUNDO */}
      
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* TOPO */}
        <div className="text-center mb-14">
          <span className="text-yellow-500 font-bold tracking-[0.25em] text-xs uppercase">
            Tire suas dúvidas
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-5 text-white uppercase leading-none">
            Perguntas Frequentes
          </h2>

          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Tudo o que você precisa saber sobre a Rio Pardo Embalagens,
            nossos produtos e formas de atendimento.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`
                group
                border border-white/5
                rounded-2xl
                overflow-hidden
                bg-zinc-900/50
                backdrop-blur-sm
                transition-all duration-300
                hover:border-yellow-500/30
                hover:bg-zinc-900/70
                ${
                  openIndex === index
                    ? 'border-yellow-500/30 bg-zinc-900/80'
                    : ''
                }
              `}
            >
              <button
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-lg md:text-xl text-white pr-6 leading-snug">
                  {faq.question}
                </span>

                <div
                  className={`
                    min-w-[42px]
                    h-[42px]
                    rounded-full
                    flex
                    items-center
                    justify-center
                    transition-all duration-300
                    ${
                      openIndex === index
                        ? 'bg-yellow-500 text-black'
                        : 'bg-white/5 text-zinc-400 group-hover:bg-white/10 group-hover:text-white'
                    }
                  `}
                >
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              <div
                className={`
                  overflow-hidden
                  transition-all duration-500 ease-in-out
                  ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }
                `}
              >
                <div className="px-6 md:px-8 pb-8">
                  <div className="w-full h-px bg-white/5 mb-6" />

                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                    {faq.answer}
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

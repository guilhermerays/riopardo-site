'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Vocês realizam vendas online?",
    answer: "Nosso site é institucional para apresentação dos nossos produtos e serviços. Para realizar compras ou orçamentos, entre em contato diretamente pelo nosso WhatsApp ou visite nossa loja física."
  },
  {
    question: "Vendem no atacado e varejo?",
    answer: "Sim! A Rio Pardo Embalagens atende o varejo com nossa loja completa e o atacado através da nossa Distribuidora, oferecendo condições especiais para grandes volumes."
  },
  {
    question: "Onde a loja está localizada?",
    answer: "Estamos localizados no coração de São José do Rio Pardo, na R. Campos Salles, 724 - Centro. Venha nos visitar!"
  },
  {
    question: "Quais os horários de atendimento?",
    answer: "Nossa loja física funciona de segunda a sexta em horário comercial e aos sábados até às 13h. O atendimento via WhatsApp segue o mesmo horário."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-zinc-950 text-zinc-100" id="faq">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-yellow-500 font-semibold tracking-wider text-sm uppercase">Tire suas dúvidas</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Perguntas Frequentes</h2>
          <p className="text-zinc-400">Tudo o que você precisa saber sobre a Rio Pardo Embalagens.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900/50 hover:border-zinc-700 transition-colors duration-300"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-yellow-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-zinc-500" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-zinc-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
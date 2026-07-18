"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quanto custa uma formatação?",
      answer: "O valor da formatação depende da necessidade de backup de arquivos e do pacote de programas a serem instalados. Entre em contato para um orçamento rápido e sem compromisso.",
    },
    {
      question: "Vocês fazem atendimento em domicílio?",
      answer: "Sim! Realizamos atendimentos em domicílio para serviços rápidos e configuração de redes, sujeito à disponibilidade na sua região.",
    },
    {
      question: "O computador ficou lento, vale a pena fazer upgrade?",
      answer: "Na grande maioria dos casos, sim. A simples troca de um HD antigo por um SSD e o aumento da memória RAM podem deixar seu computador até 10x mais rápido, gastando muito menos que a compra de um equipamento novo.",
    },
    {
      question: "Quanto tempo demora o serviço?",
      answer: "Serviços como formatação e instalação de SSD geralmente são entregues no mesmo dia ou no dia seguinte. Reparos mais complexos podem levar de 2 a 5 dias úteis, dependendo da necessidade de importação ou compra de peças específicas.",
    },
    {
      question: "Vocês atendem empresas?",
      answer: "Sim! Oferecemos planos de manutenção preventiva e corretiva para escritórios e empresas de pequeno a médio porte, garantindo que o seu negócio não pare por problemas de tecnologia.",
    },
  ];

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
            Dúvidas Comuns
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            Perguntas Frequentes
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-black border border-white/10 rounded-2xl overflow-hidden transition-colors hover:border-white/20"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-primary" : ""
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

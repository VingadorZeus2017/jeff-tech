"use client";

import { motion } from "framer-motion";
import { MessageSquareText, Search, PenTool, CheckCircle } from "lucide-react";

export function Process() {
  const steps = [
    {
      title: "Contato",
      description: "Você entra em contato conosco descrevendo o problema ou necessidade.",
      icon: <MessageSquareText className="w-8 h-8" />,
    },
    {
      title: "Diagnóstico",
      description: "Avaliamos o equipamento e apresentamos um orçamento transparente.",
      icon: <Search className="w-8 h-8" />,
    },
    {
      title: "Execução",
      description: "Realizamos o serviço com agilidade, qualidade e cuidado.",
      icon: <PenTool className="w-8 h-8" />,
    },
    {
      title: "Entrega",
      description: "Equipamento testado, higienizado e pronto para uso com garantia.",
      icon: <CheckCircle className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
            Como Funciona
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Processo de Atendimento
          </h3>
          <p className="text-gray-400 text-lg">
            Simples, rápido e sem enrolação. Acompanhe as etapas do nosso serviço.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full" />
          <div className="hidden md:block absolute top-1/2 left-0 w-3/4 h-1 bg-gradient-to-r from-primary to-transparent -translate-y-1/2 rounded-full blur-[2px]" />

          <div className="grid md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Step Number */}
                <div className="absolute -top-6 -right-2 text-8xl font-black text-white/5 select-none pointer-events-none">
                  {index + 1}
                </div>
                
                <div className="w-20 h-20 rounded-2xl bg-black border border-primary/30 flex items-center justify-center text-primary mb-6 shadow-[0_0_20px_rgba(59,130,246,0.2)] relative z-10">
                  {step.icon}
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

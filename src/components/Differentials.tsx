"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Search, 
  Tag, 
  MonitorSmartphone, 
  Home, 
  ShieldCheck, 
  Cpu, 
  Headset 
} from "lucide-react";

export function Differentials() {
  const differentials = [
    { title: "Atendimento Rápido", icon: <Zap className="w-6 h-6" /> },
    { title: "Diagnóstico Transparente", icon: <Search className="w-6 h-6" /> },
    { title: "Preço Justo", icon: <Tag className="w-6 h-6" /> },
    { title: "Atendimento Remoto", icon: <MonitorSmartphone className="w-6 h-6" /> },
    { title: "Atendimento em Domicílio", icon: <Home className="w-6 h-6" /> },
    { title: "Garantia do Serviço", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Peças de Qualidade", icon: <Cpu className="w-6 h-6" /> },
    { title: "Suporte Pós-serviço", icon: <Headset className="w-6 h-6" /> },
  ];

  return (
    <section id="diferenciais" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-900/5 backdrop-blur-3xl" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              Por que nos escolher?
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Nossos Diferenciais
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              Trabalhamos com honestidade e eficiência para entregar o melhor resultado. Seu problema resolvido sem dor de cabeça e com garantia de qualidade.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4">
            {differentials.map((diff, index) => {
              // Creating a Bento Grid pattern by spanning some items
              const isWide = index === 0 || index === 3 || index === 6;
              const isTall = index === 1;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`bg-black/40 border border-white/5 rounded-3xl p-8 flex flex-col justify-center gap-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group shadow-lg overflow-hidden relative ${
                    isWide ? "md:col-span-2" : "md:col-span-1"
                  } ${isTall ? "md:row-span-2" : "md:row-span-1"} ${
                    isWide ? "items-start text-left" : "items-center text-center"
                  }`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-colors" />
                  
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all z-10 shadow-[0_0_15px_rgba(59,130,246,0)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    {diff.icon}
                  </div>
                  
                  <div className="z-10">
                    <span className={`font-bold text-gray-200 group-hover:text-white transition-colors ${
                      isWide ? "text-xl" : "text-base"
                    }`}>
                      {diff.title}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

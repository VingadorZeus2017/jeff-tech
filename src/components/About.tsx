"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const features = [
    "Atendimento Personalizado",
    "Diagnóstico Preciso",
    "Soluções Rápidas",
    "Doméstico e Corporativo",
  ];

  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Image Placeholder with Tech Feel */}
            <div className="aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden border border-white/10 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              <img 
                src="/tech-workspace.jpg" 
                alt="Workspace da Jeff Tech" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-black border border-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-xl">
              <p className="text-4xl font-bold text-primary mb-1">+10</p>
              <p className="text-sm text-gray-400 font-medium">Anos de<br/>Experiência</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              Sobre Nós
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Especialistas em <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Tecnologia</span>
            </h3>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-8">
              <p>
                A Jeff Tech nasceu com o propósito de descomplicar a tecnologia. Entendemos que o seu computador é essencial para o trabalho, estudos ou lazer, e por isso tratamos cada equipamento com o máximo de cuidado e profissionalismo.
              </p>
              <p>
                Oferecemos soluções completas em informática, combinando conhecimento técnico avançado com um atendimento humano e transparente. Seja um reparo simples ou a montagem de um setup de alto desempenho, garantimos a melhor performance para o seu equipamento.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-gray-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

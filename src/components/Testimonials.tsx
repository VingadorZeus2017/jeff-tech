"use client";

import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Eduardo",
      role: "Empresário",
      content: "Excelente profissional! Arrumou o computador da minha empresa muito rápido. Recomendo de olhos fechados.",
    },
    {
      name: "Mariana Silva",
      role: "Estudante",
      content: "Meu notebook estava travando muito. O Jeff fez um upgrade para SSD e agora parece que comprei um novo. Preço justo e muito atencioso.",
    },
    {
      name: "Roberto Almeida",
      role: "Gamer",
      content: "Montou meu setup gamer perfeitamente. Organização de cabos impecável, as temperaturas estão ótimas. Trabalho de primeira linha.",
    },
    {
      name: "Ana Paula",
      role: "Arquiteta",
      content: "Precisava do PC urgente para entregar um projeto e ele me atendeu no mesmo dia. Salvou minha semana!",
    }
  ];

  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
            Depoimentos
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            O que nossos clientes dizem
          </h3>
        </div>

        {/* Carousel Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar">
          {testimonials.map((test, index) => (
            <div 
              key={index} 
              className="snap-center shrink-0 w-80 md:w-96 bg-black/40 border border-white/10 p-8 rounded-3xl backdrop-blur-md"
            >
              <div className="flex gap-1 text-primary mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 text-lg mb-8 italic line-clamp-4">
                "{test.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-800 flex items-center justify-center text-white font-bold text-lg">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h5 className="text-white font-bold">{test.name}</h5>
                  <p className="text-gray-400 text-sm">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <style jsx>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { 
  MonitorDown, 
  MonitorPlay, 
  HardDriveDownload, 
  ShieldAlert, 
  Wind, 
  HardDrive, 
  Cpu, 
  Gamepad2, 
  Stethoscope, 
  Wrench, 
  PackageCheck, 
  Zap 
} from "lucide-react";

export function Services() {
  const servicesList = [
    {
      title: "Formatação",
      description: "Instalação limpa do sistema, removendo todos os arquivos antigos e garantindo um computador rápido como novo.",
      icon: <MonitorDown className="w-8 h-8" />,
    },
    {
      title: "Instalação do Windows",
      description: "Instalamos e configuramos as versões mais recentes do Windows com todos os drivers e atualizações.",
      icon: <MonitorPlay className="w-8 h-8" />,
    },
    {
      title: "Backup e Recuperação",
      description: "Salvamos seus dados importantes com segurança ou recuperamos arquivos deletados acidentalmente.",
      icon: <HardDriveDownload className="w-8 h-8" />,
    },
    {
      title: "Remoção de Vírus",
      description: "Limpeza profunda de malwares, adwares e spywares, mantendo suas informações seguras.",
      icon: <ShieldAlert className="w-8 h-8" />,
    },
    {
      title: "Limpeza Física",
      description: "Remoção de poeira e troca de pasta térmica para evitar superaquecimento e melhorar a vida útil.",
      icon: <Wind className="w-8 h-8" />,
    },
    {
      title: "Troca para SSD",
      description: "Dê vida nova ao seu PC ou Notebook trocando o HD antigo por um SSD até 10x mais rápido.",
      icon: <HardDrive className="w-8 h-8" />,
    },
    {
      title: "Upgrade de RAM",
      description: "Aumente a memória do seu computador para poder realizar mais tarefas simultâneas sem travamentos.",
      icon: <Cpu className="w-8 h-8" />,
    },
    {
      title: "Montagem Gamer",
      description: "Montamos o setup dos seus sonhos, com organização de cabos e escolha ideal de peças para jogar no ultra.",
      icon: <Gamepad2 className="w-8 h-8" />,
    },
    {
      title: "Manutenção Preventiva",
      description: "Revisão periódica do sistema e hardware para evitar que problemas graves aconteçam no futuro.",
      icon: <Stethoscope className="w-8 h-8" />,
    },
    {
      title: "Manutenção Corretiva",
      description: "Seu PC parou? Diagnosticamos e reparamos peças defeituosas com rapidez e transparência.",
      icon: <Wrench className="w-8 h-8" />,
    },
    {
      title: "Instalação de Programas",
      description: "Pacote Office, navegadores, leitores de PDF, softwares de edição e tudo mais que você precisar.",
      icon: <PackageCheck className="w-8 h-8" />,
    },
    {
      title: "Otimização",
      description: "Configurações avançadas no sistema operacional para extrair o máximo de desempenho do seu hardware.",
      icon: <Zap className="w-8 h-8" />,
    },
  ];

  return (
    <section id="servicos" className="py-24 relative bg-zinc-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
            Nossos Serviços
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Soluções completas para o seu equipamento
          </h3>
          <p className="text-gray-400 text-lg">
            Realizamos desde manutenções simples até reparos complexos e montagem de setups de alto nível, sempre com foco na qualidade e durabilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Tilt 
                tiltMaxAngleX={10} 
                tiltMaxAngleY={10} 
                scale={1.02}
                transitionSpeed={2500}
                className="h-full group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] group-hover:bg-primary/20 transition-colors" />
                
                <div className="w-14 h-14 bg-black/50 border border-white/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:text-white group-hover:bg-primary transition-all duration-300">
                  {service.icon}
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

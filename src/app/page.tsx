import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Differentials } from "@/components/Differentials";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      
      {/* Botão Flutuante do WhatsApp */}
      <a 
        href="https://wa.me/5511960303782?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20da%20Jeff%20Tech!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all z-50 animate-bounce"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </main>
  );
}

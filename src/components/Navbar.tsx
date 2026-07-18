"use client";

import { useState, useEffect } from "react";
import { Menu, X, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/60 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-primary/20 p-2 rounded-xl border border-primary/30 group-hover:bg-primary/40 transition-colors">
            <Wrench className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Jeff <span className="text-primary">Tech</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            className="px-5 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]"
          >
            Falar Conosco
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-4 px-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-5 py-3 bg-primary text-center text-white text-base font-semibold rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              Falar Conosco
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

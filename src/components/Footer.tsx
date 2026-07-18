export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-bold tracking-tight text-white mb-2">
            Jeff <span className="text-primary">Tech</span>
          </span>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Jeff Tech. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-primary transition-colors">Início</a>
          <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>
      </div>
    </footer>
  );
}

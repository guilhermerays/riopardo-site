export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-950 border-t border-white/5 overflow-hidden">
      
      {/* GLOW FUNDO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 py-10 relative z-10">
        
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Copyright © {currentYear}{" "}
            <span className="text-white font-semibold">
              Rio Pardo Embalagens
            </span>
            . Todos os direitos reservados.
          </p>

          <p className="text-zinc-600 text-xs tracking-widest uppercase">
            Comércio • Distribuidora • Indústria
          </p>
        </div>
      </div>
    </footer>
  );
}

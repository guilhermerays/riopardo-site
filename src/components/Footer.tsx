import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-950 border-t border-white/5 overflow-hidden">

      {/* GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 pb-14 border-b border-white/5">

          {/* LOGO */}
          <div>
            <Image
              src="/logo-embalagens.webp"
              alt="Rio Pardo Embalagens"
              width={220}
              height={65}
              className="mb-6"
            />

            <p className="text-zinc-400 leading-relaxed text-sm max-w-sm">
              Soluções completas em embalagens, confeitaria,
              descartáveis, limpeza e artigos para festas.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-6">
              Navegação
            </h3>

            <div className="flex flex-col gap-4">
              <Link
                href="#grupo"
                className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm"
              >
                O Grupo
              </Link>

              <Link
                href="#produtos"
                className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Produtos
              </Link>

              <Link
                href="#faq"
                className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Perguntas Frequentes
              </Link>

              <Link
                href="#loc"
                className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Localização
              </Link>
            </div>
          </div>

          {/* CONTATO */}
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-6">
              Contato
            </h3>

            <div className="flex flex-col gap-5">

              <a
                href="https://wa.me/5519989926166"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <FaWhatsapp className="text-green-400" />
                </div>

                <span className="text-sm">
                  (19) 98992-6166
                </span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                  <FaInstagram className="text-pink-400" />
                </div>

                <span className="text-sm">
                  Instagram
                </span>
              </a>

              <div className="flex items-start gap-3 text-zinc-400">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center min-w-[40px]">
                  <FaMapMarkerAlt className="text-yellow-400" />
                </div>

                <span className="text-sm leading-relaxed">
                  R. Campos Salles, 724 <br />
                  São José do Rio Pardo - SP
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-zinc-500 text-sm text-center md:text-left">
            © {currentYear} Rio Pardo Embalagens. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-2 text-zinc-600 text-xs uppercase tracking-[0.2em]">
            <span>Comércio</span>
            <span>•</span>
            <span>Distribuidora</span>
            <span>•</span>
            <span>Indústria</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

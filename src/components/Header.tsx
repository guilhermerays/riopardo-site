"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "O Grupo", href: "#grupo" },
    { name: "Produtos", href: "#produtos" },
    { name: "Localização", href: "#loc" },
    { name: "Perguntas Frequentes", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
          : "bg-transparent py-3 border-b border-white/5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {}
        <Link href="/" className="relative z-50 flex items-center gap-2 group">
          <Image
            src="/logo-embalagens.webp"
            alt="Rio Pardo Embalagens"
            priority
            className="w-full max-w-[200px]"
            data-aos="fade-down"
            width={400}
            height={118}
          />
        </Link>

        {}
        <nav className="hidden md:flex items-center gap-8 bg-black/20 px-8 py-2 rounded-full border border-white/5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold text-zinc-300 uppercase tracking-widest hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/5519989926166"
            target="_blank"
            className="group relative px-6 py-2 bg-red-600 overflow-hidden rounded-sm transition-all hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <span className="relative text-xs font-black text-white uppercase tracking-widest">
              Falar no WhatsApp
            </span>
          </a>
        </div>

        {}
        <button
          className="md:hidden text-white z-50 p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
        </button>

        {}
        <div
          className={`fixed inset-0 bg-zinc-950 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden min-h-screen ${
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="text-2xl font-black text-white uppercase tracking-wider hover:text-red-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/5519989926166"
            className="mt-4 px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-sm rounded-sm"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

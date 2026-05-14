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
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/55 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
          : "bg-zinc-950/35 backdrop-blur-xl py-3 border-b border-white/5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="relative z-50 flex items-center gap-2 group">
          <Image
            src="/logo-embalagens.webp"
            alt="Rio Pardo Embalagens"
            priority
            className="w-full max-w-[200px]"
            width={400}
            height={118}
          />
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 bg-zinc-900/20 px-8 py-2 rounded-full border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.15)]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold text-zinc-200 uppercase tracking-widest hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* BOTÃO DESKTOP */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/5519989926166"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-2 bg-red-600/90 overflow-hidden rounded-sm transition-all duration-300 hover:bg-red-600 hover:shadow-[0_0_20px_rgba(220,38,38,0.35)] backdrop-blur-md"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />

            <span className="relative text-xs font-black text-white uppercase tracking-widest">
              Falar no WhatsApp
            </span>
          </a>
        </div>

        {/* MENU MOBILE BUTTON */}
        <button
          className="md:hidden text-white z-50 p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
        </button>

        {/* MENU MOBILE */}
        <div
          className={`fixed inset-0 bg-zinc-950/75 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden min-h-screen ${
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
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-8 py-4 bg-red-600/90 text-white font-bold uppercase tracking-widest text-sm rounded-sm shadow-[0_0_20px_rgba(220,38,38,0.25)] backdrop-blur-md"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

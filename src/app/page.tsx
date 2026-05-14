import { Header } from "@/components/Header";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { TheGroup } from "@/components/sections/TheGroup";
import { TheProducts } from "@/components/sections/TheProducts";
import Location from "../components/sections/Location";
import FAQ from "../components/sections/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Hero />

<section className="bg-black text-white py-14 text-center">
  <h1 className="text-5xl font-black uppercase">
    Rio Pardo Embalagens
  </h1>

  <p className="text-zinc-300 mt-4 text-xl max-w-3xl mx-auto">
    Soluções completas em embalagens, confeitaria,
    descartáveis e artigos para festas.
  </p>

  <div className="flex justify-center gap-4 mt-8">
    <a
      href="https://wa.me/5519998926166"
      target="_blank"
      className="bg-red-600 hover:bg-red-700 transition-all px-8 py-4 rounded-xl text-white font-bold uppercase"
    >
      Fazer orçamento
    </a>

    <a
      href="#produtos"
      className="bg-zinc-800 hover:bg-zinc-700 transition-all px-8 py-4 rounded-xl text-white font-bold uppercase"
    >
      Ver produtos
    </a>
  </div>
</section>

<TheGroup />
        <TheGroup />
        <Features />
        <TheProducts />
        <Location />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

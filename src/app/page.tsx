import { Header } from "@/components/Header";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { TheGroup } from "@/components/sections/TheGroup";
<section className="w-full bg-black py-8 flex justify-center">
  <div className="flex flex-row gap-4">
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

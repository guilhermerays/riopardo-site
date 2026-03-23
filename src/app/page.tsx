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

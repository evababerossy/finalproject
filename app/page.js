import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-fullscreen flex-col md:items-center justify-center p-24">
    <Header />
    <Hero />
    <Skills />
    </main>
  );
}

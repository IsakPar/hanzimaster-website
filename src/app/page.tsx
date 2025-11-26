import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Engine } from "@/components/sections/Engine";
import { Methodology } from "@/components/sections/Methodology";
import { Philosophy } from "@/components/sections/Philosophy";
import { Library } from "@/components/sections/Library";
import { Showcase } from "@/components/sections/Showcase";
import { Careers } from "@/components/sections/Careers";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-ink min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Engine />
      <Methodology />
      <Philosophy />
      <Library />
      <Showcase />
      <Careers />
      <Footer />
    </main>
  );
}


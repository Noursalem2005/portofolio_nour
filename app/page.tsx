import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121514] text-[#F2E8DA] selection:bg-[#B96F4D] selection:text-[#121514]">
      <Preloader />
      <Navbar />
      <Hero />
      <SelectedWork />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Internship from "@/components/Internship";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-[#121212]">
      <Navbar />
      
      {/* Cinematic Intro Section */}
      <section className="relative">
        <ScrollyCanvas />
        <Overlay />
      </section>

      {/* Narrative Portfolio Flow */}
      <div className="relative z-20">
        <About />
        <Skills />
        <Projects />
        <Internship />
        <Leadership />
        <Contact />
      </div>

      <footer className="w-full bg-[#121212] py-20 text-center border-t border-white/5">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
          Chintav Patel — Portfolio 2024
        </p>
      </footer>
    </main>
  );
}

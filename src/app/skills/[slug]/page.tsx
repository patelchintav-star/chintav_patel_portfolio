"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { ArrowLeft, Box, Cpu, Settings, Activity, PenTool } from "lucide-react";
import Link from "next/link";

const SKILLS_DATA: Record<string, any> = {
  "cad": {
    title: "CAD & Design",
    skills: ["SolidWorks", "AutoCAD"],
    description: "Advanced 3D modeling and engineering design using industry-standard CAD software to bring complex systems from concept to reality.",
    icon: <PenTool className="text-pink-500 w-8 h-8" />,
    media: [
      { type: "video", url: "/skills/cad/WhatsApp Video 2026-03-15 at 10.13.46 PM.mp4" },
      { type: "video", url: "/skills/cad/WhatsApp Video 2026-03-15 at 10.14.42 PM.mp4" },
      { type: "video", url: "/skills/cad/WhatsApp Video 2026-03-16 at 7.55.35 PM.mp4" },
      { type: "image", url: "/skills/cad/WhatsApp Image 2026-03-15 at 10.13.49 PM.jpeg" },
      { type: "image", url: "/skills/cad/WhatsApp Image 2026-03-15 at 10.13.51 PM.jpeg" },
      { type: "image", url: "/skills/cad/WhatsApp Image 2026-03-15 at 10.13.54 PM.jpeg" },
    ]
  },
  "programming": {
    title: "Programming & Logic",
    skills: ["MATLAB", "Python", "C", "Arduino IDE", "Octave"],
    description: "Developing robust algorithms and embedded systems code to automate processes and analyze complex engineering data.",
    icon: <Cpu className="text-blue-500 w-8 h-8" />,
    media: []
  },
  "sim": {
    title: "Simulation & Analysis",
    skills: ["Ansys Fluent", "Static Structural", "Topology Optimization", "Explicit Dynamics"],
    description: "High-fidelity physics simulations to validate structural integrity and fluid dynamics before physical prototyping.",
    icon: <Activity className="text-emerald-500 w-8 h-8" />,
    media: [
      { type: "video", url: "/skills/sim/WhatsApp Video 2026-03-15 at 10.11.43 PM.mp4" },
      { type: "video", url: "/skills/sim/WhatsApp Video 2026-03-15 at 10.21.31 PM.mp4" },
      { type: "video", url: "/skills/sim/WhatsApp Video 2026-02-07 at 1.38.20 AM.mp4" },
      { type: "image", url: "/skills/sim/WhatsApp Image 2026-03-15 at 10.13.44 PM.jpeg" },
      { type: "image", url: "/skills/sim/WhatsApp Image 2026-03-15 at 10.13.50 PM.jpeg" },
    ]
  },
  "tools": {
    title: "Engineering Tools",
    skills: ["TinkerCAD", "Design Expert", "CoolPack", "XFLR5"],
    description: "Mastery of specialized utility tools for aerodynamic analysis, refrigeration systems, and experimental design.",
    icon: <Settings className="text-orange-500 w-8 h-8" />,
    media: []
  },
  "mfg": {
    title: "Advanced Manufacturing",
    skills: ["Shop Floor Management", "Precision Tooling", "Fabrication"],
    description: "Direct hands-on experience in modern manufacturing processes and shop floor operational excellence.",
    icon: <Box className="text-white w-8 h-8" />,
    media: []
  }
};

export default function SkillPage() {
  const params = useParams();
  const slug = params.slug as string;
  const skill = SKILLS_DATA[slug];

  if (!skill) return null;

  return (
    <main className="min-h-screen bg-[#121212] text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full px-10 py-8 mix-blend-difference">
        <Link 
          href="/#skills" 
          className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Toolkit
        </Link>
      </nav>

      {/* Header */}
      <section className="relative px-10 pt-40 pb-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 flex items-center gap-6">
              <div className="h-20 w-20 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10 ring-1 ring-white/5">
                {skill.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 uppercase">
                Expertise Area
              </span>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tighter md:text-8xl lg:text-9xl mb-8">
              {skill.title.split('&')[0]} <br />
              <span className="text-white/20 italic">& {skill.title.split('&')[1] || "Logic"}</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <p className="text-xl text-white/40 leading-relaxed max-w-xl">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-3 items-start content-start">
                {skill.skills.map((s: string) => (
                  <span key={s} className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-[9px] font-black uppercase tracking-widest text-white/40">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-10 pb-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skill.media.map((item: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-[3rem] border border-white/5 bg-white/5 ${
                  idx === 0 ? "md:col-span-2 aspect-[21/9]" : "aspect-square md:aspect-video"
                }`}
              >
                {item.type === "video" ? (
                  <video
                    src={item.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={item.url}
                    alt={`${skill.title} demonstration ${idx}`}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                )}
              </motion.div>
            ))}
          </div>
          
          {skill.media.length === 0 && (
            <div className="flex flex-col items-center justify-center py-40 border border-dashed border-white/10 rounded-[4rem]">
              <p className="text-sm font-black uppercase tracking-[0.4em] text-white/10">
                Documentation for this category coming soon
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

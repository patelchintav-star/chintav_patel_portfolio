"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Trophy, Plane, Zap, Lock, Box } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ModelViewer from "@/components/ModelViewer";

const PROJECTS_DATA: Record<string, any> = {
  "vayu-x": {
    title: "VAYU X – Heavy Payload RC Aircraft",
    achievement: "2nd Prize in Design & Tech Report",
    description: "4 kg aircraft capable of carrying and dropping a 7 kg payload from 100 ft altitude.",
    tools: ["SolidWorks", "XFLR5", "Ansys Structural"],
    icon: <Trophy className="text-yellow-500 w-8 h-8" />,
    media: [
      { type: "image", url: "/projects/vayu/df.jpeg" },
      { type: "image", url: "/projects/vayu/WhatsApp Image 2026-03-15 at 10.13. PM.jpeg" },
      { type: "image", url: "/projects/vayu/WhatsApp Image 2026-03-15 at 10.13.43 PM.jpeg" },
      { type: "image", url: "/projects/vayu/WhatsApp Image 2026-03-15 at 10.13.44 PM.jpeg" },
      { type: "image", url: "/projects/vayu/WhatsApp Image 2026-03-15 at 10.13.45 PM.jpeg" },
    ]
  },
  "raven": {
    title: "RAVEN – RC Aircraft",
    achievement: "Overall AIR 10",
    description: "1.5 kg aircraft capable of carrying 3 kg payload, optimized for efficiency and flight stability.",
    tools: ["SolidWorks", "XFLR5", "Fabrication"],
    icon: <Plane className="text-blue-400 w-8 h-8" />,
    media: [
      { type: "video", url: "/projects/raven/WhatsApp Video 2026-03-15 at 10.13.54 PM.mp4" },
      { type: "image", url: "/projects/raven/WhatsApp Image 2026-03-15 at 10.13.52 PM.jpeg" },
    ]
  },
  "boeing-national": {
    title: "Boeing National Aeromodelling",
    achievement: "AIR 7 among 257 teams",
    description: "1 kg aircraft designed to drop 26 golf balls with precision accuracy in varied wind conditions.",
    tools: ["Aerodynamics", "Payload Mechanisms", "RC Flight"],
    icon: <Zap className="text-orange-400 w-8 h-8" />,
    media: [
      { type: "image", url: "/projects/boeing/hjk.jpeg" },
      { type: "image", url: "/projects/boeing/WhatsApp Image 2026-03-15 at 10.13.53 PM.jpeg" },
      { type: "image", url: "/projects/boeing/WhatsApp Image 2026-03-15 at 10.13.55 PM.jpeg" },
    ]
  },
  "turbofan-engine": {
    title: "Turbofan Engine Simulation",
    achievement: "Design & Airflow Mastery",
    description: "Full CAD modelling and high-fidelity airflow simulation of a commercial turbofan engine.",
    tools: ["SolidWorks", "Ansys Fluent"],
    icon: <Box className="text-purple-400 w-8 h-8" />,
    media: [
       { type: "model", url: "/projects/turbofan/turbofan_it_2.glb", label: "Interactive 3D Simulation" }
    ]
  },
  "arduino-lock": {
    title: "Arduino Keyless Door System",
    achievement: "Automation Project",
    description: "Password-based secure lock system utilizing Arduino UNO, keypad interface, and servo actuators.",
    tools: ["Arduino", "Embedded C", "Circuit Design"],
    icon: <Lock className="text-emerald-400 w-8 h-8" />,
    media: []
  }
};

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const project = PROJECTS_DATA[slug];

  if (!project) return null;

  return (
    <main className="min-h-screen bg-[#121212] text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full px-10 py-8 mix-blend-difference">
        <Link 
          href="/#projects" 
          className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>
      </nav>

      {/* Hero Header */}
      <section className="relative px-10 pt-40 pb-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 flex items-center gap-6">
              <div className="h-20 w-20 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10 ring-1 ring-white/5">
                {project.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
                {project.achievement}
              </span>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tighter md:text-8xl lg:text-9xl mb-8">
              {project.title.split('–')[0]} <br />
              <span className="text-white/20 italic">{project.title.split('–')[1] || ""}</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <p className="text-xl text-white/40 leading-relaxed max-w-xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 items-start content-start">
                {project.tools.map((tool: string) => (
                  <span key={tool} className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-[9px] font-black uppercase tracking-widest text-white/40">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="px-10 pb-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.media.map((item: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-[3rem] border border-white/5 bg-white/5 ${
                  idx === 0 || item.type === "model" ? "md:col-span-2 min-h-[500px]" : "aspect-square md:aspect-video"
                }`}
              >
                {item.type === "model" ? (
                  <ModelViewer url={item.url} />
                ) : item.type === "video" ? (
                  <video
                    src={item.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : item.type === "image" ? (
                  <img
                    src={item.url}
                    alt={`${project.title} screenshot ${idx}`}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                   <div className="flex h-full w-full items-center justify-center p-20 text-center">
                      <p className="text-sm font-black uppercase tracking-[0.4em] text-white/20">
                        {item.label}
                      </p>
                   </div>
                )}
              </motion.div>
            ))}
          </div>
          
          {project.media.length === 0 && (
            <div className="flex flex-col items-center justify-center py-40 border border-dashed border-white/10 rounded-[4rem]">
              <p className="text-sm font-black uppercase tracking-[0.4em] text-white/10">
                Electronic implementation - Documentation pending
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="px-10 py-20 border-t border-white/5 text-center">
        <Link 
          href="/#contact" 
          className="text-2xl font-bold tracking-tighter text-white/20 hover:text-white transition-colors duration-500"
        >
          Have a similar project in mind? <span className="text-white italic underline decoration-white/20 underline-offset-8">Let's talk.</span>
        </Link>
      </footer>
    </main>
  );
}

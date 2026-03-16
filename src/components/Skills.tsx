"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    slug: "cad",
    title: "CAD & Design",
    skills: ["SolidWorks", "AutoCAD"],
    video: "/skills/cad/WhatsApp Video 2026-03-15 at 10.13.46 PM.mp4"
  },
  {
    slug: "programming",
    title: "Programming",
    skills: ["MATLAB", "Python", "C", "Arduino IDE", "Octave"]
  },
  {
    slug: "sim",
    title: "Simulation",
    skills: ["Ansys Fluent", "Static Structural", "Topology Optimization", "Explicit Dynamics"],
    video: "/skills/sim/WhatsApp Video 2026-03-15 at 10.11.43 PM.mp4"
  },
  {
    slug: "tools",
    title: "Engineering Tools",
    skills: ["TinkerCAD", "Design Expert", "CoolPack", "XFLR5"]
  },
  {
    slug: "mfg",
    title: "Manufacturing",
    skills: ["Shop Floor Management", "Precision Tooling", "Fabrication"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-[#121212] py-32 px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-4"> Expertise </h2>
          <h3 className="text-4xl font-bold tracking-tighter text-white md:text-6xl italic">
            Engineering <span className="text-white/30 not-italic">Toolkit.</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass glass-hover group relative overflow-hidden rounded-[2.5rem] border border-white/5 transition-all duration-500 min-h-[300px] flex flex-col"
            >
              <Link href={`/skills/${category.slug}`} className="absolute inset-0 z-20" />
              
              {category.video && (
                <div className="absolute inset-0 z-0">
                  <video
                    src={category.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover opacity-20 grayscale transition-all duration-700 group-hover:opacity-40 group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/80 via-transparent to-[#121212]/80" />
                </div>
              )}
              
              <div className="relative z-10 flex flex-1 flex-col justify-between p-8">
                <div className="flex justify-between items-start">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">
                    {category.title}
                  </h4>
                  <ArrowUpRight className="h-4 w-4 text-white/20 group-hover:text-white transition-colors" />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white/5 px-4 py-2 text-[9px] font-black uppercase tracking-widest text-white/40 border border-white/5 transition-all hover:text-white hover:bg-white/10 hover:border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

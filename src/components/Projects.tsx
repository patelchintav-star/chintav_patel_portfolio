"use client";

import { motion } from "framer-motion";
import { Trophy, Plane, Zap, Lock, Box, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    slug: "vayu-x",
    title: "VAYU X – Heavy Payload RC Aircraft",
    achievement: "2nd Prize in Design & Tech Report",
    description: "4 kg aircraft capable of carrying and dropping a 7 kg payload from 100 ft altitude.",
    tools: ["SolidWorks", "XFLR5", "Ansys Structural"],
    icon: <Trophy className="text-yellow-500" />,
    image: "/projects/vayu/df.jpeg",
  },
  {
    slug: "raven",
    title: "RAVEN – RC Aircraft",
    achievement: "Overall AIR 10",
    description: "1.5 kg aircraft capable of carrying 3 kg payload, optimized for efficiency and flight stability.",
    tools: ["SolidWorks", "XFLR5", "Fabrication"],
    icon: <Plane className="text-blue-400" />,
    video: "/projects/raven/WhatsApp Video 2026-03-15 at 10.13.54 PM.mp4",
  },
  {
    slug: "boeing-national",
    title: "Boeing National Aeromodelling",
    achievement: "AIR 7 among 257 teams",
    description: "1 kg aircraft designed to drop 26 golf balls with precision accuracy in varied wind conditions.",
    tools: ["Aerodynamics", "Payload Mechanisms", "RC Flight"],
    icon: <Zap className="text-orange-400" />,
    image: "/projects/boeing/hjk.jpeg",
  },
  {
    slug: "turbofan-engine",
    title: "Turbofan Engine Simulation",
    achievement: "Design & Airflow Mastery",
    description: "Full CAD modelling and high-fidelity airflow simulation of a commercial turbofan engine.",
    tools: ["SolidWorks", "Ansys Fluent"],
    icon: <Box className="text-purple-400" />,
    model: "/projects/turbofan/turbofan_it_2.glb",
  },
  {
    slug: "arduino-lock",
    title: "Arduino Keyless Door System",
    achievement: "Automation Project",
    description: "Password-based secure lock system utilizing Arduino UNO, keypad interface, and servo actuators.",
    tools: ["Arduino", "Embedded C", "Circuit Design"],
    icon: <Lock className="text-emerald-400" />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#121212] py-32 px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-4"> Portfolio </h2>
          <h3 className="text-4xl font-bold tracking-tighter text-white md:text-6xl">
            Selected <span className="text-white/30 italic">Engineering Works.</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass glass-hover group flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/5 transition-all duration-500"
            >
              <Link href={`/projects/${project.slug}`} className="block h-full cursor-pointer">
                <div className="relative h-48 w-full overflow-hidden bg-white/5">
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover opacity-50 transition-opacity group-hover:opacity-100"
                    />
                  ) : project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover opacity-50 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white/5 to-transparent">
                      <div className="h-20 w-20 rounded-full bg-white/5 blur-2xl animate-pulse" />
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60" />
                  
                  <div className="absolute top-6 left-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10">
                      {project.icon}
                    </div>
                  </div>
                  
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-8 pt-6">
                  <div>
                    <div className="mb-4">
                      {project.achievement.includes("AIR") || project.achievement.includes("Prize") ? (
                        <span className="text-[9px] font-black uppercase tracking-widest text-white/30 border-b border-white/10 pb-1">
                          {project.achievement}
                        </span>
                      ) : null}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-white/80 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-xs text-white/40 leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-[8px] font-black uppercase tracking-[0.2em] text-white/20 group-hover:text-white/40 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

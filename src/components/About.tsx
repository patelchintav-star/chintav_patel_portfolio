"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative min-h-[80vh] w-full bg-[#121212] py-32 px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left: Branding/Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-8">
              Profile
            </h2>
            <div className="space-y-6">
              <p className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                Mechanical Engineering <br />
                at <span className="text-white/40 italic underline decoration-white/10 underline-offset-8">SVNIT, Surat.</span>
              </p>
              <p className="text-lg text-white/50 leading-relaxed max-w-xl">
                I am a passionate engineering student focused on the intersection of aerospace systems, 
                advanced simulations, and automation. My work is driven by a commitment to precision 
                and innovation in mechanical design.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/5 pt-12">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/20">Overall CGPA</span>
                <p className="mt-2 text-3xl font-bold text-white">9.32</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/20">ELECTRONICS MINOR CGPA</span>
                <p className="mt-2 text-3xl font-bold text-white">8.5</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Specific Interests */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="glass flex flex-col justify-center rounded-[3rem] p-12 lg:p-16"
          >
            <h3 className="text-xl font-bold text-white mb-8">Core Interests</h3>
            <ul className="space-y-8">
              {[
                { title: "Aerospace Systems", desc: "Design and analysis of high-performance flight vehicles." },
                { title: "Engineering Simulations", desc: "CFD and structural analysis using Ansys and MATLAB." },
                { title: "Automation", desc: "Robotics and control systems integration with Arduino." },
                { title: "Advanced Manufacturing", desc: "Optimization of manufacturing processes and technologies." }
              ].map((item, idx) => (
                <li key={idx} className="group">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white transition-colors group-hover:text-white/60">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-white/40 leading-relaxed">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

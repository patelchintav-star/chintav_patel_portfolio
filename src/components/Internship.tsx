"use client";

import { motion } from "framer-motion";
import { Beaker, BarChart3, Settings } from "lucide-react";

export default function Internship() {
  return (
    <section id="internship" className="relative w-full bg-[#121212] py-32 px-10">
      <div className="mx-auto max-w-7xl">
        <div className="glass overflow-hidden rounded-[3rem] border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Branding & Role */}
            <div className="bg-white/5 p-12 lg:p-20 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="rounded-full bg-white/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white/50 border border-white/10">
                    Summer 2024
                  </div>
                  <div className="h-px flex-1 bg-white/5" />
                </div>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-4"> Experience </h2>
                <h3 className="text-4xl font-bold tracking-tighter text-white md:text-6xl mb-6">
                  Research <br /><span className="text-white/30 italic">Internship.</span>
                </h3>
                <p className="text-xl font-medium text-white/60">SVNIT Surat</p>
              </motion.div>
            </div>

            {/* Right: Work Details */}
            <div className="p-12 lg:p-20 bg-transparent flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-10">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/30 mb-4">Topic</h4>
                  <p className="text-2xl font-bold text-white leading-tight">
                    Exergy Analysis and Performance Enhancement of Vapor Compression Refrigeration System.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  {[
                    { icon: <Beaker className="w-5 h-5 text-blue-400" />, text: "Conducted high-precision experimental testing on VCR test rigs." },
                    { icon: <BarChart3 className="w-5 h-5 text-emerald-400" />, text: "Processed complex datasets using MATLAB for performance metric analysis." },
                    { icon: <Settings className="w-5 h-5 text-orange-400" />, text: "Optimized system parameters using Design Expert and CoolPack software." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 group">
                      <div className="mt-1 flex-shrink-0 transition-transform group-hover:scale-110 duration-300">
                        {item.icon}
                      </div>
                      <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

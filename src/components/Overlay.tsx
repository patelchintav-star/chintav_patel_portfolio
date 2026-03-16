"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.15], [1, 0.8]);
  const blur1 = useTransform(scrollYProgress, [0, 0.15], ["blur(0px)", "blur(20px)"]);

  const opacity2 = useTransform(scrollYProgress, [0.2, 0.35, 0.5], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

  const opacity3 = useTransform(scrollYProgress, [0.6, 0.75, 0.9], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.9], [50, -50]);

  return (
    <div className="pointer-events-none fixed inset-0 z-10 flex flex-col items-center justify-center overflow-hidden text-white">
      {/* Section 1: Hero */}
      <motion.section
        style={{ opacity: opacity1, scale: scale1, filter: blur1 }}
        className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col items-center">
            <h1 className="text-6xl font-black uppercase tracking-[-0.04em] md:text-[12rem] leading-[0.85]">
              Chintav <br />
              <span className="text-white/10 italic">Patel</span>
            </h1>
            <div className="mt-8 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-medium text-white/40">
              <span className="h-px w-8 bg-white/20" />
              Mechanical Engineer
              <span className="h-px w-8 bg-white/20" />
            </div>
          </div>
          
          <p className="mt-4 max-w-lg text-sm font-medium uppercase tracking-[0.2em] text-white/60 leading-relaxed md:text-base">
            Designing, Simulating, and <br /> Building Engineering Systems.
          </p>
        </motion.div>
      </motion.section>

      {/* Section 2: Aerospace */}
      <motion.section
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-x-0 bottom-1/4 flex flex-col items-center justify-center p-10 text-center"
      >
        <span className="text-[10px] mb-4 uppercase tracking-[0.5em] font-bold text-white/20">Focus Domain</span>
        <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tighter md:text-8xl italic">
          Aerospace <br />
          <span className="text-white/30 not-italic">Enthusiast.</span>
        </h2>
      </motion.section>

      {/* Section 3: Engineering */}
      <motion.section
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center"
      >
        <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tighter md:text-8xl">
          Bridging <br />
          <span className="text-white/30">Physics & <br />Design.</span>
        </h2>
      </motion.section>

      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity: opacity1 }}
        className="absolute bottom-12 flex flex-col items-center gap-4"
      >
        <div className="h-12 w-px bg-gradient-to-b from-white to-transparent opacity-20" />
        <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-white/20">Scroll to Explore</span>
      </motion.div>
    </div>
  );
}

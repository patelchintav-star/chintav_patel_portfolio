"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 z-50 flex w-full items-center justify-between px-10 py-8 mix-blend-difference"
    >
      <div className="text-xl font-black tracking-tighter text-white">
        CHINTAV.
      </div>
      
      <div className="hidden md:flex gap-10">
        {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase() === "experience" ? "internship" : item.toLowerCase()}`}
            className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50 transition-colors hover:text-white"
          >
            {item}
          </a>
        ))}
        <a
          href="https://drive.google.com/file/d/1CzlS_RTJ-jCU472id87oOLUHQ4tBAc2g/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50 transition-colors hover:text-white"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
}

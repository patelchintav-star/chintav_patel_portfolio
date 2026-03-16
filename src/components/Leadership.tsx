"use client";

import { motion } from "framer-motion";

const ROLES = [
  {
    title: "Analysis Head",
    organization: "SAE Phoenix Aero Student Chapter",
    period: "2024 - Present",
    description: "Leading the structural and aerodynamic analysis wing for high-performance RC aircraft development.",
  },
  {
    title: "Junior Technical Member",
    organization: "SAE Phoenix Aero Student Chapter",
    period: "2023 - 2024",
    description: "Contributed to design optimization and material selection for competitive aeromodelling projects.",
  },
  {
    title: "Co-Head",
    organization: "Mindbend Technical Team",
    period: "2024",
    description: "Coordinating technical events and workshops for the annual technical festival of SVNIT Surat.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="relative w-full bg-[#121212] py-32 px-10">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-4"> Contribution </h2>
          <h3 className="text-4xl font-bold tracking-tighter text-white md:text-6xl italic">
            Leadership <span className="text-white/30 not-italic">& Impact.</span>
          </h3>
        </motion.div>

        <div className="relative border-l border-white/5 ml-4 md:ml-0 md:pl-0">
          {ROLES.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-16 pl-12 md:pl-24 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-white/20 transition-all group-hover:bg-white group-hover:scale-150 duration-500" />
              
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-8">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-2 md:mb-0 min-w-32">
                  {role.period}
                </span>
                <div>
                  <h4 className="text-2xl font-bold text-white group-hover:translate-x-2 transition-transform duration-500">
                    {role.title}
                  </h4>
                  <p className="text-sm font-medium text-white/40 mt-1 uppercase tracking-widest">
                    {role.organization}
                  </p>
                  <p className="mt-4 text-sm text-white/30 leading-relaxed max-w-2xl">
                    {role.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

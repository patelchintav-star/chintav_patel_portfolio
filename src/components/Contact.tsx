"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#121212] py-40 px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-6"> Get in Touch </h2>
            <p className="max-w-4xl text-5xl font-bold tracking-tighter text-white md:text-[7rem] leading-[0.9]">
              Let's build something <br />
              <span className="text-white/20 italic">innovative</span> together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-12"
          >
            <p className="max-w-2xl text-lg text-white/50 leading-relaxed">
              Mechanical engineering student passionate about aerospace, automation, 
              and advanced manufacturing. Currently open for research opportunities 
              and technical collaborations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
              <a 
                href="mailto:chintavpatel2208@gmail.com"
                className="glass glass-hover flex flex-col items-center gap-4 rounded-3xl p-8 border border-white/5 transition-all duration-500"
              >
                <Mail className="w-6 h-6 text-white/40" />
                <span className="text-[10px] uppercase tracking-widest text-white/20 font-black">Personal Email</span>
                <span className="text-sm font-bold text-white text-wrap md:text-nowrap overflow-hidden">chintavpatel2208@gmail.com</span>
              </a>

              <a 
                href="mailto:u23me149@med.svnit.ac.in"
                className="glass glass-hover flex flex-col items-center gap-4 rounded-3xl p-8 border border-white/5 transition-all duration-500"
              >
                <Mail className="w-6 h-6 text-white/40" />
                <span className="text-[10px] uppercase tracking-widest text-white/20 font-black">Institute Email</span>
                <span className="text-sm font-bold text-white text-wrap md:text-nowrap overflow-hidden">u23me149@med.svnit.ac.in</span>
              </a>

              <a 
                href="tel:+917043493777"
                className="glass glass-hover flex flex-col items-center gap-4 rounded-3xl p-8 border border-white/5 transition-all duration-500"
              >
                <Phone className="w-6 h-6 text-white/40" />
                <span className="text-[10px] uppercase tracking-widest text-white/20 font-black">Phone</span>
                <span className="text-sm font-bold text-white">+91 70434 93777</span>
              </a>
            </div>

            <div className="flex gap-12 mb-12">
              <a 
                href="https://www.linkedin.com/in/chintavpatel?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                target="_blank" 
                className="group flex flex-col items-center gap-3 transition-all duration-500"
              >
                <div className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
                  <Linkedin className="w-6 h-6 text-white/40 group-hover:text-white" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 group-hover:text-white transition-colors">LinkedIn</span>
              </a>

              <a 
                href="https://www.instagram.com/chintav.patel" 
                target="_blank" 
                className="group flex flex-col items-center gap-3 transition-all duration-500"
              >
                <div className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
                  <Instagram className="w-6 h-6 text-white/40 group-hover:text-white" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 group-hover:text-white transition-colors">Instagram</span>
              </a>
            </div>

            <a 
              href="https://drive.google.com/file/d/1CzlS_RTJ-jCU472id87oOLUHQ4tBAc2g/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-full bg-white px-12 py-5 transition-transform hover:scale-105 duration-500 inline-block"
            >
              <span className="relative z-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-black">
                Download Resume <ArrowUpRight className="w-4 h-4" />
              </span>
              <div className="absolute inset-x-0 bottom-0 h-0 bg-black transition-all group-hover:h-full duration-500" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const premiumEase = [0.16, 1, 0.3, 1];

  return (
    <section className="relative w-full h-[100dvh] flex items-center overflow-hidden hero-gradient">
      {/* Floating Navigation */}
      <div className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-50">
        <a
          href="#work"
          className="vertical-text -rotate-180 font-label-sm text-[9px] md:text-xs tracking-[0.2em] text-secondary hover:text-primary transition-colors cursor-pointer block"
        >
          [ WORK ]
        </a>
      </div>
      <div className="absolute right-6 md:right-6 top-1/2 -translate-y-1/2 z-50">
        <a
          href="#contact"
          className="vertical-text font-label-sm text-[9px] md:text-xs tracking-[0.2em] text-secondary hover:text-primary transition-colors cursor-pointer block"
        >
          [ CONTACT ]
        </a>
      </div>

      {/* LAYER 1: CINEMATIC PORTRAIT */}
      <div className="absolute bottom-0 right-0 md:right-[8%] z-10 w-full md:w-[50%] h-[50vh] md:h-[90vh] pointer-events-none flex justify-center md:justify-end items-end">
        {/* Notice how this is <motion.img> and not just <img> */}
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: premiumEase }}
          src="/portrait.webp"
          alt="Mian Muhammad Jahanzaib"
          className="w-auto h-full object-contain object-bottom drop-shadow-[0_15px_35px_rgba(0,0,0,0.08)]"
        />
      </div>

      {/* LAYER 2: PURE TYPOGRAPHY */}
      <div className="relative z-20 w-full md:w-[55%] h-full flex flex-col justify-start md:justify-center pt-10 md:pt-0 px-10 md:px-16 lg:px-24">
        <div className="max-w-xl w-full">
          {/* Based in Pakistan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: premiumEase }}
            className="flex items-center gap-3 mb-4 md:mb-6"
          >
            <span className="w-8 h-[1px] bg-primary"></span>
            <p className="font-label-sm text-[9px] md:text-xs tracking-[0.3em] text-primary uppercase font-bold">
              Based in Pakistan
            </p>
          </motion.div>

          {/* Name Reveal */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: premiumEase }}
            className="font-bold text-primary tracking-tighter leading-[1.05] md:leading-[1.1] mb-4 md:mb-6 text-3xl min-[400px]:text-4xl md:text-[3.5rem] lg:text-[4.5rem]"
          >
            Mian Muhammad <br className="block 2xl:hidden" /> Jahanzaib
          </motion.h2>

          {/* Full-Stack Developer - REAL PREMIUM GLASS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: premiumEase }}
            className="inline-flex items-center justify-center px-6 py-2.5 mb-6 md:mb-8 rounded-full bg-gradient-to-br from-white/70 to-white/10 backdrop-blur-xl border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_8px_30px_rgba(0,0,0,0.2)]"
          >
            <h3 className="text-sm md:text-xl font-black text-primary uppercase tracking-widest">
              Full - Stack Developer
            </h3>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: premiumEase }}
            className="text-xs md:text-lg text-secondary font-medium tracking-wide leading-relaxed w-full md:max-w-md mb-6 md:mb-10"
          >
            Building software that solves real problems — Websites, Desktop
            apps, CRMs, POS systems, and more.
          </motion.p>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: premiumEase }}
            className="flex items-center mt-40 md:mt-0"
          >
            <a
              href="#about"
              className="font-label-md text-[10px] md:text-sm tracking-widest uppercase text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors"
            >
              See Value ⟶
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

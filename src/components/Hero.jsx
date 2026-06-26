import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const premiumEase = [0.16, 1, 0.3, 1];

  // State and logic for the Chess flip badge
  const [isChess, setIsChess] = useState(false);
  const hasInteracted = useRef(false);

  useEffect(() => {
    // 1. Auto-flip to Chess after 4 seconds
    const timer1 = setTimeout(() => {
      if (!hasInteracted.current) {
        setIsChess(true);
      }
    }, 4000);

    // 2. Flip back to Developer 3 seconds later (Total 7 seconds)
    const timer2 = setTimeout(() => {
      if (!hasInteracted.current) {
        setIsChess(false);
      }
    }, 7000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleMouseEnter = () => {
    hasInteracted.current = true;
    setIsChess(true); // Hover reveals the Chess side
  };

  const handleMouseLeave = () => {
    hasInteracted.current = true;
    setIsChess(false); // Unhover goes back to the Developer side
  };

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
            className="font-bold text-primary tracking-tighter leading-[1.05] md:leading-[1.1] mb-4 md:mb-6 text-4xl min-[400px]:text-5xl md:text-[3.5rem] lg:text-[4.5rem]"
          >
            Mian Muhammad <br className="block 2xl:hidden" /> Jahanzaib
          </motion.h2>

          {/* Full-Stack Developer / Chess Player Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: premiumEase }}
            /* CHANGED: Block stretching exactly to the original paragraph's width limits */
            className="mb-6 md:mb-8 block w-full md:max-w-md cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              hasInteracted.current = true;
              setIsChess(!isChess);
            }}
          >
            <div
              className="grid relative w-full"
              style={{ gridTemplateAreas: "'stack'" }}
            >
              {/* Front Side: Developer */}
              <motion.div
                animate={{
                  rotateX: isChess ? 90 : 0,
                  opacity: isChess ? 0 : 1,
                  pointerEvents: isChess ? "none" : "auto",
                }}
                transition={{ duration: 0.5, ease: premiumEase }}
                className="flex w-full items-center justify-center px-4 md:px-6 py-2.5 rounded-full bg-gradient-to-br from-white/70 to-white/10 backdrop-blur-xl border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_8px_30px_rgba(0,0,0,0.2)]"
                style={{ gridArea: "stack", transformOrigin: "center" }}
              >
                <h3 className="text-xs min-[400px]:text-sm md:text-xl font-black text-primary uppercase tracking-widest whitespace-nowrap flex">
                  {"Full-Stack Developer".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 5 }}
                      animate={
                        !isChess ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }
                      }
                      transition={{
                        duration: 0.2,
                        delay: !isChess ? index * 0.03 : 0,
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </h3>
              </motion.div>

              {/* Back Side: Chess Player */}
              <motion.div
                initial={{ rotateX: -90, opacity: 0 }}
                animate={{
                  rotateX: isChess ? 0 : -90,
                  opacity: isChess ? 1 : 0,
                  pointerEvents: isChess ? "auto" : "none",
                }}
                transition={{ duration: 0.5, ease: premiumEase }}
                className="flex w-full items-center justify-between gap-2 md:gap-4 px-5 min-[400px]:px-6 md:px-6 py-2.5 rounded-full bg-black border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.5)] whitespace-nowrap"
                style={{ gridArea: "stack", transformOrigin: "center" }}
              >
                <h3 className="text-[10px] min-[400px]:text-[11px] md:text-xl font-black text-white uppercase tracking-widest whitespace-nowrap flex">
                  {"Part-Time Chess Player".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 5 }}
                      animate={
                        isChess ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }
                      }
                      transition={{
                        duration: 0.2,
                        delay: isChess ? index * 0.03 : 0,
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </h3>

                {/* Slim Stacked Challenge Me Link */}
                <motion.a
                  href="https://www.chess.com/member/mian_jahanzaib"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isChess
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.3, delay: isChess ? 0.8 : 0 }}
                  className="flex items-center gap-1 text-[6px] min-[400px]:text-[7px] md:text-[8px] font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors group"
                >
                  <span className="text-left leading-tight transition-colors">
                    Wanna Challenge
                    <br />
                    Me?
                  </span>
                  <span className="material-symbols-outlined text-[8px] min-[400px]:text-[10px] md:text-[12px] leading-none">
                    north_east
                  </span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: premiumEase }}
            /* CHANGED: Reverted back exactly to original bounds */
            className="text-sm min-[400px]:text-base md:text-lg text-secondary font-medium tracking-wide leading-relaxed w-full md:max-w-md mb-6 md:mb-10"
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
              href="#services"
              className="font-label-md text-[10px] md:text-sm tracking-widest uppercase text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors"
            >
              See Services ⟶
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

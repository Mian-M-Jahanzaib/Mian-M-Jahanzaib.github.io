import React, { useState } from "react";
// MENTOR FIX: Use 'm' instead of 'motion' to drastically reduce bundle size
// eslint-disable-next-line no-unused-vars
import { m } from "framer-motion";

// MENTOR FIX: Importing images from src/assets enables Vite caching and hashing
import alAliahImg from "../assets/al-aliah.webp";
import habitgridImg from "../assets/habitgrid.avif";
import digisphereImg from "../assets/digisphere.avif";
import shopifyImg from "../assets/shopify.avif";

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const premiumEase = [0.16, 1, 0.3, 1];

  const projects = [
    {
      title: "Al Aliah Management CRM",
      desc: "Secure, high-performance Electron desktop application engineered for a Dubai-based real estate client to manage complex property workflows.",
      tags: ["Electron.js", "Node.js", "React"],
      img: alAliahImg,
      link: "https://github.com/Mian-M-Jahanzaib/Al-Aliah-International-Case-Study",
    },
    {
      title: "HabitGrid",
      desc: "A full-stack, responsive habit-tracking web platform focused on intuitive user experience and dynamic data visualization.",
      tags: ["React", "Node.js", "SQLite"],
      img: habitgridImg,
      link: "https://github.com/Mian-M-Jahanzaib/habit-grid",
    },
    {
      title: "DigiSphere",
      desc: "A robust, dynamic tech blog platform. Architected with a custom admin panel and strict SEO management including automated XML sitemap generation.",
      tags: ["Core PHP", "MySQL", "SEO Architecture"],
      img: digisphereImg,
      link: "https://digisphere.iblogger.org/",
    },
    {
      title: "Shopify-Linked POS System",
      desc: "Built a custom POS system for a local retail client, synced in real-time with their Shopify storefront — handling inventory, order processing, and automated stock updates.",
      tags: ["Prisma", "Shopify API", "Node.js"],
      img: shopifyImg,
      link: "",
    },
  ];

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) handleNext();
    if (touchStart - touchEnd < -50) handlePrev();
  };

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const getCardStyle = (index) => {
    const total = projects.length;
    let position = (index - currentIndex) % total;
    if (position < 0) position += total;

    if (position === 0) {
      return "translate-x-0 scale-100 z-30 opacity-100 blur-0 shadow-[0_30px_60px_rgba(0,0,0,0.12)] cursor-default";
    } else if (position === 1) {
      return "translate-x-[40%] md:translate-x-[65%] scale-[0.8] z-20 opacity-40 blur-[3px] shadow-sm cursor-pointer hover:opacity-60";
    } else if (position === total - 1) {
      return "-translate-x-[40%] md:-translate-x-[65%] scale-[0.8] z-20 opacity-40 blur-[3px] shadow-sm cursor-pointer hover:opacity-60";
    } else {
      return "translate-x-0 scale-[0.5] z-10 opacity-0 pointer-events-none";
    }
  };

  return (
    <section
      className="py-12 md:py-16 bg-surface-container-lowest relative overflow-hidden"
      id="work"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: premiumEase }}
          className="mb-8 md:mb-10"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-primary leading-tight tracking-tighter">
            Featured Work.
          </h2>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: premiumEase }}
          className="relative w-full h-[500px] md:h-[600px] flex justify-center items-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {projects.map((project, index) => {
            const isCenter = index === currentIndex;
            const isClickable = isCenter && project.link;
            const ImageWrapper = isClickable ? "a" : "div";

            return (
              <div
                key={index}
                onClick={() => {
                  if (!isCenter) setCurrentIndex(index);
                }}
                className={`absolute w-[85%] max-w-[320px] md:max-w-[450px] bg-white rounded-[2rem] p-4 border border-black/5 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${getCardStyle(index)}`}
              >
                <ImageWrapper
                  href={isClickable ? project.link : undefined}
                  target={isClickable ? "_blank" : undefined}
                  rel={isClickable ? "noopener noreferrer" : undefined}
                  className="group/img relative block aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-black/5"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    width="450"
                    height="338"
                    className={`w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isClickable ? "group-hover/img:scale-105" : ""}`}
                    src={project.img}
                    alt={project.title}
                  />

                  {isClickable && (
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                      <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center scale-75 group-hover/img:scale-100 transition-transform duration-500 shadow-xl">
                        {/* MENTOR FIX: SVG Replacement */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </ImageWrapper>

                <div className="px-2 pb-2">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-black text-primary tracking-tight pr-2">
                      {project.title}
                    </h3>

                    {isClickable && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 border border-primary/20 bg-transparent hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary mt-1"
                      >
                        Visit {/* MENTOR FIX: SVG Replacement */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-[1em] h-[1em] text-[12px]"
                        >
                          <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" />
                        </svg>
                      </a>
                    )}
                  </div>

                  <p className="text-xs md:text-sm text-secondary font-medium mb-4 leading-relaxed line-clamp-3">
                    {project.desc}
                  </p>

                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-black/5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 1.2, ease: premiumEase }}
          className="flex justify-center items-center gap-6 mt-6 md:mt-8 z-40 relative"
        >
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-primary hover:bg-black/5 transition-colors duration-300"
          >
            {/* MENTOR FIX: SVG Replacement */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[1em] h-[1em] text-xl"
            >
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
          </button>

          <div className="flex gap-2">
            {projects.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${currentIndex === idx ? "w-6 bg-primary" : "bg-black/20"}`}
              ></span>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-primary hover:bg-black/5 transition-colors duration-300"
          >
            {/* MENTOR FIX: SVG Replacement */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[1em] h-[1em] text-xl"
            >
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </button>
        </m.div>
      </div>
    </section>
  );
};

export default Work;

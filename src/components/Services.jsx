import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const premiumEase = [0.16, 1, 0.3, 1];

  return (
    <section className="py-12 md:py-16 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-primary mb-10 md:mb-16 md:whitespace-nowrap leading-tight tracking-tighter"
        >
          How I bring value to your vision.
        </motion.h2>

        {/* The animation is now on the grid wrapper, moving them all at the exact same time */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {/* Card 1: Business Owners */}
          <div className="group bg-white rounded-3xl p-8 md:p-10 border border-black/5 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2">
            <div className="w-14 h-14 bg-black/5 text-primary rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 group-hover:bg-primary group-hover:text-white">
              <span
                className="material-symbols-outlined text-2xl"
                data-icon="desktop_windows"
              >
                desktop_windows
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-black text-primary mb-2">
              Business Owners
            </h3>
            <p className="text-[10px] md:text-xs font-bold text-secondary mb-4 uppercase tracking-[0.2em]">
              Custom Software (Secure & Scalable)
            </p>
            <p className="text-sm md:text-base text-secondary font-medium leading-relaxed">
              Replacing messy spreadsheets with secure, custom-built management
              systems and desktop apps to streamline your daily operations and
              workflows.
            </p>
          </div>

          {/* Card 2: Tech Startups */}
          <div className="group bg-white rounded-3xl p-8 md:p-10 border border-black/5 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2">
            <div className="w-14 h-14 bg-black/5 text-primary rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 group-hover:bg-primary group-hover:text-white">
              <span
                className="material-symbols-outlined text-2xl"
                data-icon="rocket_launch"
              >
                rocket_launch
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-black text-primary mb-2">
              SaaS & Startups
            </h3>
            <p className="text-[10px] md:text-xs font-bold text-secondary mb-4 uppercase tracking-[0.2em]">
              Scalable Web Platforms
            </p>
            <p className="text-sm md:text-base text-secondary font-medium leading-relaxed">
              <br></br>Helping startups launch faster with modern MVPs, scalable
              web apps, dashboards, and secure backend systems.
            </p>
          </div>

          {/* Card 3: E-Commerce & Websites */}
          <div className="group bg-white rounded-3xl p-8 md:p-10 border border-black/5 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2">
            <div className="w-14 h-14 bg-black/5 text-primary rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 group-hover:bg-primary group-hover:text-white">
              <span
                className="material-symbols-outlined text-2xl"
                data-icon="storefront"
              >
                storefront
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-black text-primary mb-2">
              Digital Brands
            </h3>
            <p className="text-[10px] md:text-xs font-bold text-secondary mb-4 uppercase tracking-[0.2em]">
              E-Commerce & Dynamic Websites
            </p>
            <p className="text-sm md:text-base text-secondary font-medium leading-relaxed">
              Creating fast, dynamic websites and custom storefronts. I handle
              the complex integrations behind the scenes so your customers get a
              flawless digital experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
// eslint-disable-next-line no-unused-vars
import { m } from "framer-motion";

const Services = () => {
  const premiumEase = [0.16, 1, 0.3, 1];

  return (
    <section className="py-12 md:py-16 bg-surface-container-low" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* MENTOR FIX: Swapped motion for m to reduce bundle size */}
        <m.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-primary mb-10 md:mb-16 md:whitespace-nowrap leading-tight tracking-tighter"
        >
          How I bring value to your vision.
        </m.h2>

        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {/* Card 1: Business Owners */}
          <div className="group bg-white rounded-3xl p-8 md:p-10 border border-black/5 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2">
            <div className="w-14 h-14 bg-black/5 text-primary rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 group-hover:bg-primary group-hover:text-white">
              {/* MENTOR FIX: Replaced desktop_windows text with native SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
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
              {/* MENTOR FIX: Replaced rocket_launch text with native SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7"
                >
                  <path d="M22 2.9c0-.4-.4-.8-.9-.9C15-.3 6.9 2.5 2.8 6.5L1.4 7.9c-.3.3-.2.8.1 1l4.4 2.8-2 2c-.4.4-.4 1 0 1.4l5.6 5.6c.4.4 1 .4 1.4 0l2-2 2.8 4.4c.2.3.7.4 1 .1l1.4-1.4c4-4.1 6.8-12.2 4-18.9zm-7 8.1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                </svg>
              </svg>
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
              {/* MENTOR FIX: Replaced storefront text with native SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path d="M5.4 3.2C5.7 2.5 6.4 2 7.2 2h9.6c.8 0 1.5.5 1.8 1.2L21 9v2c0 1.1-.9 2-2 2v7c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-7c-1.1 0-2-.9-2-2V9l2.4-5.8zM14 20v-6h-4v6h4z" />
              </svg>
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
        </m.div>
      </div>
    </section>
  );
};

export default Services;

import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  // Global Luxury Smooth Scroll Engine
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      // Find the closest anchor tag that was clicked
      const target = e.target.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      // Only intercept internal anchor links (e.g., "#work"), ignore external links or empty "#"
      if (!href || !href.startsWith("#") || href === "#") return;

      const targetElement = document.querySelector(href);
      if (!targetElement) return;

      // Prevent the default browser jump
      e.preventDefault();

      // Math for the physics scroll
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;

      // 1200ms duration for a heavy, deliberate, luxury feel
      const duration = 1200;
      let start = null;

      // Premium Easing Curve: easeOutQuart (starts fast, gracefully glides to a stop)
      const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

      const animationStep = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);

        window.scrollTo(0, startPosition + distance * easeOutQuart(percentage));

        if (progress < duration) {
          window.requestAnimationFrame(animationStep);
        }
      };

      window.requestAnimationFrame(animationStep);
    };

    // Listen to all clicks on the document
    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <div className="antialiased font-body-md text-body-md text-on-surface bg-surface min-h-screen">
      <Hero />
      <Stack />
      <Services />
      <Work />
      <Contact />
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;

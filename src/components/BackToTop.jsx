import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      // MENTOR FIX: Throttle the scroll event to 60fps to prevent layout thrashing
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // 1. Visibility Logic
          setIsVisible(window.scrollY > 500);

          // 2. Pixel-Perfect Collision Detection (Restored original accuracy)
          const button = document.getElementById("smart-back-to-top");
          const contactSection = document.getElementById("contact");

          if (button && contactSection) {
            const buttonRect = button.getBoundingClientRect();
            const contactRect = contactSection.getBoundingClientRect();

            // Find the absolute mathematical center of the button
            const buttonCenterY = buttonRect.top + buttonRect.height / 2;

            // Invert only when the button's exact center crosses the dark section
            if (
              buttonCenterY >= contactRect.top &&
              buttonCenterY <= contactRect.bottom
            ) {
              setIsOverDarkSection(true);
            } else {
              setIsOverDarkSection(false);
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <button
      id="smart-back-to-top"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-9 z-[99] w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] border transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-110 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] 
      ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      } 
      ${
        isOverDarkSection
          ? "bg-white text-primary border-white"
          : "bg-primary text-white border-transparent"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-[1em] h-[1em] text-xl md:text-2xl font-bold"
      >
        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
      </svg>
    </button>
  );
};

export default BackToTop;

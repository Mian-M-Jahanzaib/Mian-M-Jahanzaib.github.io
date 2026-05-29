import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Visibility Logic (Show after scrolling 500px)
      setIsVisible(window.scrollY > 500);

      // 2. Spatial Awareness / Collision Detection Logic
      const button = document.getElementById("smart-back-to-top");
      const contactSection = document.getElementById("contact");

      if (button && contactSection) {
        // Get the exact physical boundaries of the button and the contact section on the screen
        const buttonRect = button.getBoundingClientRect();
        const contactRect = contactSection.getBoundingClientRect();

        // Find the absolute center of the button
        const buttonCenterY = buttonRect.top + buttonRect.height / 2;

        // Check if the button's center is floating over the contact section
        if (
          buttonCenterY >= contactRect.top &&
          buttonCenterY <= contactRect.bottom
        ) {
          setIsOverDarkSection(true); // Invert colors!
        } else {
          setIsOverDarkSection(false); // Default colors
        }
      }
    };

    // Attach the scroll listener (using passive for maximum performance)
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
          ? "bg-white text-primary border-white" // High-contrast inverted state over Contact
          : "bg-primary text-white border-transparent" // Default state
      }`}
    >
      <span className="material-symbols-outlined text-xl md:text-2xl font-bold">
        arrow_upward
      </span>
    </button>
  );
};

export default BackToTop;

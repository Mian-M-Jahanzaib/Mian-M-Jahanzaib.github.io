import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const contactSection = document.getElementById("contact");
    let observer;

    if (contactSection) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsOverDarkSection(entry.isIntersecting);
        },
        { rootMargin: "0px 0px -15% 0px", threshold: 0 },
      );

      observer.observe(contactSection);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observer && contactSection) observer.disconnect();
    };
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
      {/* MENTOR FIX: SVG Replacement */}
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

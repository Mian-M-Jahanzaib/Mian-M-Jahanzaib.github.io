import React, { useRef, useEffect } from "react";

// Custom component to handle flawless infinite scrolling + drag interactions
const MarqueeRow = ({ items, direction = "left", speed = 1 }) => {
  const rowRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    // If scrolling right, initialize scroll position to the middle to prevent snapping
    if (direction === "right") {
      row.scrollLeft = row.scrollWidth / 2;
    }

    let animationFrameId;

    const scroll = () => {
      // Only auto-scroll if the user IS NOT actively dragging/holding
      if (!isDragging.current && row) {
        const halfWidth = row.scrollWidth / 2;

        if (direction === "left") {
          row.scrollLeft += speed;
          if (row.scrollLeft >= halfWidth) {
            row.scrollLeft = 0; // Seamless loop back to start
          }
        } else {
          row.scrollLeft -= speed;
          if (row.scrollLeft <= 0) {
            row.scrollLeft = halfWidth; // Seamless loop to end
          }
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [direction, speed]);

  // --- MOUSE & TOUCH DRAG LOGIC ---
  const handleInteractionStart = (pageX) => {
    isDragging.current = true;
    startX.current = pageX - rowRef.current.offsetLeft;
    scrollLeft.current = rowRef.current.scrollLeft;
  };

  const handleInteractionMove = (pageX) => {
    if (!isDragging.current || !rowRef.current) return;

    // Calculate drag distance (multiplied by 1.5 for a slightly faster, more responsive feel)
    const walk = (pageX - rowRef.current.offsetLeft - startX.current) * 1.5;
    let newScroll = scrollLeft.current - walk;

    const halfWidth = rowRef.current.scrollWidth / 2;

    // Maintain infinite loop even when dragging furiously
    if (newScroll <= 0) {
      newScroll += halfWidth;
      scrollLeft.current += halfWidth; // Adjust origin to prevent jumping
    } else if (newScroll >= halfWidth) {
      newScroll -= halfWidth;
      scrollLeft.current -= halfWidth;
    }

    rowRef.current.scrollLeft = newScroll;
  };

  const handleInteractionEnd = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={rowRef}
      className="flex overflow-x-hidden cursor-grab active:cursor-grabbing w-full no-scrollbar select-none"
      style={{ touchAction: "pan-y" }} // Allows vertical page scrolling, but captures horizontal swipes
      onMouseDown={(e) => handleInteractionStart(e.pageX)}
      onMouseMove={(e) => handleInteractionMove(e.pageX)}
      onMouseUp={handleInteractionEnd}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={(e) => handleInteractionStart(e.touches[0].pageX)}
      onTouchMove={(e) => handleInteractionMove(e.touches[0].pageX)}
      onTouchEnd={handleInteractionEnd}
    >
      {/* We render exactly 2 identical blocks side-by-side to create a flawless mathematical loop */}
      {[1, 2].map((set) => (
        <div key={set} className="flex shrink-0">
          {items.map((skill, index) => (
            <div
              key={`${set}-${index}`}
              className="flex items-center justify-center"
            >
              <span className="text-4xl md:text-6xl font-black text-outline/20 mx-4 md:mx-8 uppercase tracking-widest hover:text-primary transition-colors duration-300">
                {skill}
              </span>
              <span className="text-primary/30 text-xl md:text-2xl mx-2 md:mx-4">
                ✦
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const Stack = () => {
  // We duplicate the core stack multiple times in the array so it easily fills large 4K monitors
  const baseTop = [
    "React",
    "TypeScript",
    "Node.js",
    "Next.js",
    "Prisma",
    "Shopify API",
  ];
  const baseBottom = [
    "Core PHP",
    "Electron.js",
    "MySQL",
    "SQLite",
    "Tailwind CSS",
    "Git",
  ];

  const topRow = [...baseTop, ...baseTop, ...baseTop];
  const bottomRow = [...baseBottom, ...baseBottom, ...baseBottom];

  return (
    <section className="py-12 md:py-24 border-b border-outline-variant/30 bg-surface-container-lowest overflow-hidden">
      <div className="flex flex-col gap-6 md:gap-10">
        {/* speed={1} controls how fast it moves when not touched */}
        <MarqueeRow items={topRow} direction="left" speed={1.2} />
        <MarqueeRow items={bottomRow} direction="right" speed={1.2} />
      </div>
    </section>
  );
};

export default Stack;

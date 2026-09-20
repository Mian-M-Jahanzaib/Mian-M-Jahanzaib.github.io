import React, { Suspense, lazy } from "react";
// MENTOR FIX: Added LazyMotion and domAnimation for huge bundle savings
import { MotionConfig, LazyMotion, domAnimation } from "framer-motion";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import BackToTop from "./components/BackToTop";

// MENTOR FIX: Lazy load the below-the-fold components so they don't block the initial page render
const Services = lazy(() => import("./components/Services"));
const Work = lazy(() => import("./components/Work"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <div className="antialiased font-body-md text-body-md text-on-surface bg-surface min-h-screen">
          <Hero />
          <Stack />

          {/* MENTOR FIX: Suspense acts as a placeholder while the lazy components download */}
          <Suspense fallback={<div className="min-h-screen" />}>
            <Services />
            <Work />
            <Contact />
            <Footer />
          </Suspense>

          <BackToTop />
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}

export default App;

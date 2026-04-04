import React, { useRef, useState } from 'react'

function App() {
  const scrollContainerRef = useRef(null);
  const [isHireHighlighted, setIsHireHighlighted] = useState(false);
  // --- STATE FOR MOBILE MENU ---
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- SCROLL LOGIC FOR PROJECT ARROWS ---
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      // Scrolling by 650 ensures we pass the 600px snap point on desktop
      const scrollAmount = window.innerWidth > 768 ? 650 : window.innerWidth * 0.85;
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 650 : window.innerWidth * 0.85;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // --- SMOOTH SCROLL FOR NAVBAR ---
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu when a link is clicked
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- HIRE ME HIGHLIGHT ANIMATION ---
  const handleHireMeClick = (e) => {
    e.preventDefault();
    const footer = document.getElementById('footer-hire');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
    // Trigger the yellow glow effect
    setIsHireHighlighted(true);
    // Turn it off after 2 seconds
    setTimeout(() => {
      setIsHireHighlighted(false);
    }, 2000);
  };

  return (
    <div className="bg-background-dark min-h-screen text-slate-100 font-display selection:bg-primary selection:text-black">
      
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background-dark/80 backdrop-blur-md h-16">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="text-primary font-black text-xl tracking-tighter">
            M_M_JAHANZAIB
          </a>
          
          {/* Desktop Links (Reordered) */}
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="hover:text-primary transition-colors">Stack</a>
            <a href="#work" onClick={(e) => handleNavClick(e, 'work')} className="hover:text-primary transition-colors">Work</a>
            <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="hover:text-primary transition-colors">Career</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Hamburger Button (Mobile) */}
          <button 
            className="md:hidden text-white hover:text-primary transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-background-dark/95 backdrop-blur-md border-t border-white/5 flex flex-col items-center justify-center md:hidden">
          <div className="flex flex-col gap-10 text-center text-2xl font-black uppercase tracking-widest">
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="hover:text-primary transition-colors">Stack</a>
            <a href="#work" onClick={(e) => handleNavClick(e, 'work')} className="hover:text-primary transition-colors">Work</a>
            <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="hover:text-primary transition-colors">Career</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      )}

      <main className="relative grid-pattern pt-16" id="home">
        
        {/* 2. HERO SECTION */}
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center px-6 py-12 md:py-0 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6 md:space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] uppercase border border-primary/20">
                  Available for hire
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
                  Full-Stack<br/>
                  <span className="text-primary">Developer</span><br/>
                  <span className="text-white/20">MERN & PHP</span>
                </h1>
              </div>
              <p className="max-w-lg text-base md:text-lg text-slate-400 font-light leading-relaxed">
                Architecting scalable web applications, optimizing databases, and engineering robust backend systems with a focus on high-performance code.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="#footer-hire" 
                  onClick={handleHireMeClick} 
                  className="bg-primary text-black px-8 py-3 md:px-10 md:py-4 font-black uppercase tracking-tighter hover:bg-white transition-all inline-block cursor-pointer"
                >
                  Hire Me Directly
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, 'contact')} 
                  className="border border-white/20 text-white px-8 py-3 md:px-10 md:py-4 font-black uppercase tracking-tighter hover:border-primary hover:text-primary transition-all inline-block"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 relative group mt-8 lg:mt-0 w-3/4 sm:w-1/2 lg:w-full mx-auto">
              <div className="absolute -inset-4 border border-primary/30 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 hidden md:block"></div>
              <div className="relative aspect-[4/5] bg-slate-800 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src="/profile.jpeg" 
                  alt="Mian Muhammad Jahanzaib"
                  className="w-full h-full object-cover opacity-80" 
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop' }}
                />
              </div>
            </div>

          </div>
        </section>

        {/* 3. SKILLS (INFINITE MARQUEE) */}
        <section className="py-12 md:py-24 border-y border-white/5 bg-black/40" id="skills">
          <div className="space-y-8 md:space-y-12">
            
            {/* Top Row: Frontend & UI */}
            <div className="marquee group">
              <div className="marquee-content animate-scroll-left">
                <span className="text-4xl md:text-7xl font-black text-white/5 flex items-center gap-8 px-4">REACT <span className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full"></span></span>
                <span className="text-4xl md:text-7xl font-black text-white/5 flex items-center gap-8 px-4">TYPESCRIPT <span className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full"></span></span>
                <span className="text-4xl md:text-7xl font-black text-white/5 flex items-center gap-8 px-4">TAILWIND <span className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full"></span></span>
                <span className="text-4xl md:text-7xl font-black text-white/5 flex items-center gap-8 px-4">FRAMER MOTION <span className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full"></span></span>
                <span className="text-4xl md:text-7xl font-black text-white/5 flex items-center gap-8 px-4">JAVASCRIPT <span className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full"></span></span>
              </div>
              <div className="marquee-content animate-scroll-left">
                <span className="text-4xl md:text-7xl font-black text-white/5 flex items-center gap-8 px-4">REACT <span className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full"></span></span>
                <span className="text-4xl md:text-7xl font-black text-white/5 flex items-center gap-8 px-4">TYPESCRIPT <span className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full"></span></span>
                <span className="text-4xl md:text-7xl font-black text-white/5 flex items-center gap-8 px-4">TAILWIND <span className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full"></span></span>
                <span className="text-4xl md:text-7xl font-black text-white/5 flex items-center gap-8 px-4">FRAMER MOTION <span className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full"></span></span>
                <span className="text-4xl md:text-7xl font-black text-white/5 flex items-center gap-8 px-4">JAVASCRIPT <span className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full"></span></span>
              </div>
            </div>

            {/* Bottom Row: Backend, Desktop & DB */}
            <div className="marquee">
              <div className="marquee-content animate-scroll-right">
                <span className="text-4xl md:text-7xl font-black text-white/5 flex items-center gap-8 px-4">NODE.JS <span className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full"></span></span>
                <span className="text-4xl md:text-7xl font-black text-white/5 flex items-center gap-8 px-4">ELECTRON.JS <span className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full"></span></span>
                <span className="text-4xl md:text-7xl font-black text-white/5 flex items-center gap-8 px-4">CORE PHP <span className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full"></span></span>
                <span className="text-4xl md:text-7xl font-black text-white/5 flex items-center gap-8 px-4">MONGODB <span className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full"></span></span>
                <span className="text-4xl md:text-7xl font-black text-white/5 flex items-center gap-8 px-4">SQLITE <span className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full"></span></span>
              </div>
              <div className="marquee-content animate-scroll-right">
                <span className="text-4xl md:text-7xl font-black text-white/5 flex items-center gap-8 px-4">NODE.JS <span className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full"></span></span>
                <span className="text-4xl md:text-7xl font-black text-white/5 flex items-center gap-8 px-4">ELECTRON.JS <span className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full"></span></span>
                <span className="text-4xl md:text-7xl font-black text-white/5 flex items-center gap-8 px-4">CORE PHP <span className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full"></span></span>
                <span className="text-4xl md:text-7xl font-black text-white/5 flex items-center gap-8 px-4">MONGODB <span className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full"></span></span>
                <span className="text-4xl md:text-7xl font-black text-white/5 flex items-center gap-8 px-4">SQLITE <span className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full"></span></span>
              </div>
            </div>

          </div>
        </section>

        {/* 4. FEATURED PROJECTS CAROUSEL */}
        <section className="py-16 md:py-24 px-6 overflow-hidden" id="work">
          <div className="max-w-7xl mx-auto space-y-10 md:space-y-16">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <h2 className="text-4xl font-black uppercase tracking-tighter">Featured Projects</h2>
              
              <div className="flex gap-4 self-end">
                <button 
                  onClick={scrollLeft}
                  className="w-12 h-12 flex items-center justify-center border border-white/10 hover:border-primary hover:text-primary transition-all active:scale-95 bg-black/50"
                  aria-label="Scroll Left"
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button 
                  onClick={scrollRight}
                  className="w-12 h-12 flex items-center justify-center border border-white/10 hover:border-primary hover:text-primary transition-all active:scale-95 bg-black/50"
                  aria-label="Scroll Right"
                >
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>

            <div ref={scrollContainerRef} className="flex gap-8 overflow-x-auto no-scrollbar pb-8 md:pb-12 snap-x">
              
              <a href="https://github.com/Mian-M-Jahanzaib/habit-grid" target="_blank" rel="noopener noreferrer" className="min-w-[85vw] md:min-w-[600px] snap-center group block cursor-pointer">
                <div className="relative aspect-video overflow-hidden mb-6 bg-slate-900 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <img src="habitgrid.png" alt="HabitGrid" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 border border-primary/50 text-primary bg-primary/10">React/Node</span>
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 border border-white/20">SQLite</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase group-hover:text-primary transition-colors">HabitGrid</h3>
                  <p className="text-sm md:text-base text-slate-400 max-w-md leading-relaxed">Full-stack tracking application featuring interactive data visualization, streak calculations, and secure data persistence.</p>
                </div>
              </a>

              <a href="https://digisphere.wuaze.com" target="_blank" rel="noopener noreferrer" className="min-w-[85vw] md:min-w-[600px] snap-center group block cursor-pointer">
                <div className="relative aspect-video overflow-hidden mb-6 bg-slate-900 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <img src="digisphere.png" alt="DigiSphere" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 border border-primary/50 text-primary bg-primary/10">PHP</span>
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 border border-white/20">MySQL</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase group-hover:text-primary transition-colors">DigiSphere</h3>
                  <p className="text-sm md:text-base text-slate-400 max-w-md leading-relaxed">Dynamic tech blog platform built from scratch with a relational database designed for complex content routing and user sessions.</p>
                </div>
              </a>

              <a href="https://github.com/Mian-M-Jahanzaib/mern-portfolio" target="_blank" rel="noopener noreferrer" className="min-w-[85vw] md:min-w-[600px] snap-center group block cursor-pointer">
                <div className="relative aspect-video overflow-hidden mb-6 bg-slate-900 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <img src="portfolio.png" alt="MERN Portfolio" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 border border-primary/50 text-primary bg-primary/10">React/Tailwind</span>
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 border border-white/20">Express</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase group-hover:text-primary transition-colors">Neo-Brutalist Portfolio</h3>
                  <p className="text-sm md:text-base text-slate-400 max-w-md leading-relaxed">High-performance personal portfolio featuring a custom Neo-Brutalist UI, Framer Motion animations, and automated CI/CD deployment.</p>
                </div>
              </a>

              <a href="https://github.com/Mian-M-Jahanzaib/airline_system" target="_blank" rel="noopener noreferrer" className="min-w-[85vw] md:min-w-[600px] snap-center group block cursor-pointer">
                <div className="relative aspect-video overflow-hidden mb-6 bg-slate-900 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <img src="airline.png" alt="Airline System" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 border border-primary/50 text-primary bg-primary/10">React</span>
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 border border-white/20">JS/CSS</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase group-hover:text-primary transition-colors">Airline Booking System</h3>
                  <p className="text-sm md:text-base text-slate-400 max-w-md leading-relaxed">Responsive airline booking interface demonstrating advanced UI/UX principles, accessible design, and clean component architecture.</p>
                </div>
              </a>

              <a href="https://github.com/Mian-M-Jahanzaib/Bank-Management-System-Cpp" target="_blank" rel="noopener noreferrer" className="min-w-[85vw] md:min-w-[600px] snap-center group block cursor-pointer">
                <div className="relative aspect-video overflow-hidden mb-6 bg-slate-900 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <img src="bank.png" alt="Bank MS" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 border border-primary/50 text-primary bg-primary/10">C++</span>
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 border border-white/20">OOP</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase group-hover:text-primary transition-colors">Bank Management (BMS)</h3>
                  <p className="text-sm md:text-base text-slate-400 max-w-md leading-relaxed">Complex Object-Oriented Programming (OOP) application simulating secure banking operations, memory allocation, and file handling.</p>
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* 5. CAREER TIMELINE */}
        <section className="py-16 md:py-24 px-6 bg-white/[0.02]" id="experience">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-10 md:mb-16 text-center">Career Timeline</h2>
            
            <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-8 md:space-y-12">
              
              <div className="relative pl-8 md:pl-12 group">
                <div className="absolute -left-[9px] top-2 h-4 w-4 bg-primary shadow-[0_0_15px_rgba(204,255,0,0.5)]"></div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[6px_6px_0px_0px_rgba(204,255,0,0.1)]">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="inline-block text-[10px] md:text-xs font-black text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20 uppercase tracking-wide mb-3">
                        Early 2026 - Present
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1">Full-Stack Web Developer</h3>
                      <p className="text-xs md:text-sm font-bold text-primary mb-3">HabitGrid & Portfolio</p>
                      <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed max-w-md">
                        Architected high-performance applications using the MERN stack and SQLite, deploying via automated CI/CD pipelines.
                      </p>
                    </div>
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                      alt="React Logo" 
                      className="w-10 h-10 md:w-14 md:h-14 object-contain opacity-50 group-hover:opacity-100 transition-opacity hidden sm:block" 
                    />
                  </div>
                </div>
              </div>

              <div className="relative pl-8 md:pl-12 group">
                <div className="absolute -left-[9px] top-2 h-4 w-4 bg-background-dark border-2 border-white/20"></div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[6px_6px_0px_0px_rgba(204,255,0,0.1)]">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="inline-block text-[10px] md:text-xs font-black text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/10 uppercase tracking-wide mb-3 group-hover:text-primary group-hover:border-primary/20 group-hover:bg-primary/10 transition-colors">
                        2025
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1">Full-Stack PHP Developer</h3>
                      <p className="text-xs md:text-sm font-bold text-primary mb-3">DigiSphere</p>
                      <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed max-w-md">
                        Built and deployed a dynamic tech blog platform from scratch using Core PHP, JavaScript, and a relational MySQL database.
                      </p>
                    </div>
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" 
                      alt="PHP Logo" 
                      className="w-10 h-10 md:w-14 md:h-14 object-contain opacity-50 group-hover:opacity-100 transition-opacity hidden sm:block" 
                    />
                  </div>
                </div>
              </div>

              <div className="relative pl-8 md:pl-12 group">
                <div className="absolute -left-[9px] top-2 h-4 w-4 bg-background-dark border-2 border-white/20"></div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[6px_6px_0px_0px_rgba(204,255,0,0.1)]">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="inline-block text-[10px] md:text-xs font-black text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/10 uppercase tracking-wide mb-3 group-hover:text-primary group-hover:border-primary/20 group-hover:bg-primary/10 transition-colors">
                        2024
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1">Front-End Project Lead</h3>
                      <p className="text-xs md:text-sm font-bold text-primary mb-3">Airline Management System</p>
                      <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed max-w-md">
                        Spearheaded a team to build a responsive airline booking interface using React, JavaScript, HTML, and CSS.
                      </p>
                    </div>
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                      alt="JS Logo" 
                      className="w-10 h-10 md:w-14 md:h-14 object-contain opacity-50 group-hover:opacity-100 transition-opacity hidden sm:block" 
                    />
                  </div>
                </div>
              </div>

              <div className="relative pl-8 md:pl-12 group">
                <div className="absolute -left-[9px] top-2 h-4 w-4 bg-background-dark border-2 border-white/20"></div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[6px_6px_0px_0px_rgba(204,255,0,0.1)]">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="inline-block text-[10px] md:text-xs font-black text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/10 uppercase tracking-wide mb-3 group-hover:text-primary group-hover:border-primary/20 group-hover:bg-primary/10 transition-colors">
                        2023
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1">C++ Project Manager</h3>
                      <p className="text-xs md:text-sm font-bold text-primary mb-3">Bank Management System (BMS)</p>
                      <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed max-w-md">
                        Led a team to architect 8 complex Object-Oriented Programming (OOP) projects, handling memory allocation and data structures.
                      </p>
                    </div>
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" 
                      alt="C++ Logo" 
                      className="w-10 h-10 md:w-14 md:h-14 object-contain opacity-50 group-hover:opacity-100 transition-opacity hidden sm:block" 
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. CONTACT SECTION */}
        <section className="py-16 md:py-32 px-6" id="contact">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
                Get In<br/><span className="text-primary">Touch.</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl font-light">Fluent in English and Urdu. Available for freelance opportunities and part-time roles.</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <a href="mailto:jahanzaibm120@gmail.com" className="flex items-center justify-between p-6 md:p-10 border border-white/10 hover:bg-primary hover:text-black transition-all group">
                <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter">Email</span>
                <span className="material-symbols-outlined text-3xl md:text-4xl transform group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </a>
              <a href="https://wa.me/923711570073" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 md:p-10 border border-white/10 hover:bg-primary hover:text-black transition-all group">
                <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter">WhatsApp</span>
                <span className="material-symbols-outlined text-3xl md:text-4xl transform group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </a>
              <a href="https://linkedin.com/in/mian-m-jahanzaib" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 md:p-10 border border-white/10 hover:bg-primary hover:text-black transition-all group">
                <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter">LinkedIn</span>
                <span className="material-symbols-outlined text-3xl md:text-4xl transform group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </a>
              <a href="https://github.com/Mian-M-Jahanzaib" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 md:p-10 border border-white/10 hover:bg-primary hover:text-black transition-all group">
                <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter">GitHub</span>
                <span className="material-symbols-outlined text-3xl md:text-4xl transform group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </a>
            </div>

          </div>
        </section>

      </main>

      {/* 7. EXPANDED FOOTER (FREELANCE + SOCIALS) WITH HIGHLIGHT LOGIC */}
      <footer className="py-16 md:py-24 border-t border-white/5 px-6 bg-black/40" id="footer-hire">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-16 md:gap-12">
          
          <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-500 mt-2">
            © {new Date().getFullYear()} MIAN MUHAMMAD JAHANZAIB
          </div>
          
          <div className="flex flex-col sm:flex-row gap-16 md:gap-32 w-full md:w-auto items-center sm:items-start">
            
            {/* Freelance Column - Highlight controlled by Hero Button */}
            <div className={`flex flex-col gap-6 p-4 -m-4 rounded-xl transition-all duration-500 ${isHireHighlighted ? 'bg-primary/20 scale-105' : ''}`}>
              <span className={`font-black uppercase tracking-widest text-base border-b-2 pb-2 transition-colors duration-500 ${isHireHighlighted ? 'text-primary border-primary' : 'text-white border-white/10'}`}>
                Hire Me
              </span>
              <div className="flex flex-col gap-4 items-center sm:items-start">
                <a href="https://www.upwork.com/freelancers/~0156dbf67a8031770f" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Upwork</a>
                <a href="https://contra.com/mian_m_jahanzaib" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Contra</a>
                <a href="https://www.freelancer.pk/u/mmjdeveloper" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Freelancer</a>
              </div>
            </div>

            {/* Socials Column */}
            <div className="flex flex-col gap-6 items-center sm:items-start">
              <span className="text-white font-black uppercase tracking-widest text-base border-b-2 border-white/10 pb-2">Socials</span>
              <div className="flex flex-col gap-4 items-center sm:items-start">
                <a href="https://x.com/mmj_developer" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">X (Twitter)</a>
                <a href="https://www.instagram.com/jahanzaib._.21/" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Instagram</a>
                <a href="https://web.facebook.com/muhammad.jahanzaib.215993" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Facebook</a>
              </div>
            </div>

          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
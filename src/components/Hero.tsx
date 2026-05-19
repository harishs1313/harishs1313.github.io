import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';
import { ChevronDown, Zap } from 'lucide-react';

interface HeroProps {
  isIntroComplete?: boolean;
}

export default function Hero({ isIntroComplete = false }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseActive, setMouseActive] = useState(false);
  const [displayCoords, setDisplayCoords] = useState({ x: 0, y: 0 });
  const [sectionMenuOpen, setSectionMenuOpen] = useState(false);

  // Motion values for smooth tracker animation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Soft springs for high-end tracking feel (matching CAD layout software)
  const springConfig = { stiffness: 150, damping: 25, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mouseX.set(x);
    mouseY.set(y);
    setDisplayCoords({ x: Math.round(x), y: Math.round(y) });
  };

  // Staggered contents variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  const titleLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const titleRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 0.4, 
      x: 0, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setMouseActive(true)}
      onMouseLeave={() => setMouseActive(false)}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 overflow-hidden bg-[#0a0a0a] cursor-default"
    >
      {/* Background Graphic Grid (Altium design grid system) */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] select-none pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center brightness-[0.12] contrast-125" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#0a0a0a]/70 to-[#0a0a0a]" />

      {/* Dynamic Ambient Background Glow (NorthGarden Sunset Aura effect) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        <motion.div 
          className="absolute rounded-full w-[700px] h-[700px] blur-[160px] opacity-[0.22] mix-blend-screen"
          style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.45) 0%, rgba(239, 68, 68, 0.15) 50%, transparent 80%)',
            left: smoothX,
            top: smoothY,
            x: '-50%',
            y: '-50%',
          }}
        />
        {/* Subtle center core glow to elevate contrast behind text */}
        <motion.div 
          className="absolute rounded-full w-[350px] h-[350px] blur-[90px] opacity-[0.18]"
          style={{
            background: 'radial-gradient(circle, rgba(254, 139, 40, 0.3) 0%, transparent 70%)',
            left: smoothX,
            top: smoothY,
            x: '-50%',
            y: '-50%',
          }}
        />
      </div>

      {/* Fictional Corner Grid Markers */}
      <div className="absolute top-28 left-8 md:left-14 w-20 h-[1px] bg-white/5 flex items-center justify-between pointer-events-none select-none">
        <span className="text-[8px] font-mono text-white/20">GRID_REF_A</span>
        <div className="w-1.5 h-1.5 bg-white/10 rounded-sm" />
      </div>
      <div className="absolute bottom-12 right-8 md:right-14 w-28 h-[1px] bg-white/5 flex items-center justify-between pointer-events-none select-none">
        <span className="text-[8px] font-mono text-white/20">SAMP_RATE_10GHZ</span>
        <div className="w-1.5 h-1.5 bg-white/10 rounded-sm animate-ping" />
      </div>

      {/* Main Content Area */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isIntroComplete ? "visible" : "hidden"}
        className="max-w-7xl mx-auto w-full relative z-25"
      >
        <div className="flex flex-col gap-2">
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-2 mb-4"
          >
            <Zap size={14} className="text-yellow-500 fill-yellow-500 animate-pulse" />
            <span className="text-xs md:text-sm font-mono tracking-[0.4em] text-white/60">
              Electronics & Communication Engineer // Hardware Design
            </span>
          </motion.div>
          
          <h1 className="text-[10vw] md:text-[8vw] lg:text-[7vw] font-mono leading-[0.9] font-bold tracking-tighter mb-8 select-none">
            <motion.span
              variants={titleLeftVariants}
              className="block text-white font-futuristic"
            >
              HARISH S.
            </motion.span>
            <motion.span
              variants={titleRightVariants}
              className="block text-right text-brand-accent/40 font-futuristic"
            >
              HARDWARE ENG.
            </motion.span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mt-12 gap-12">
          <motion.div 
            variants={itemVariants}
            className="max-w-xl"
          >
            <p className="text-lg md:text-xl font-light text-white/70 leading-relaxed mb-6">
              Specializing in PCB Layout & Routing, Schematic Design, and Embedded Systems. 
              Designing reliable electronic solutions from concept to silicon reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1 border border-white/10 rounded-sm text-[10px] font-mono uppercase tracking-widest bg-white/5 whitespace-nowrap hover:bg-white/10 hover:border-white/20 transition-all duration-300">PCB & Schematic Capture</span>
              <span className="px-3 py-1 border border-white/10 rounded-sm text-[10px] font-mono uppercase tracking-widest bg-white/5 whitespace-nowrap hover:bg-white/10 hover:border-white/20 transition-all duration-300">VLSI Design</span>
              <span className="px-3 py-1 border border-white/10 rounded-sm text-[10px] font-mono uppercase tracking-widest bg-white/5 whitespace-nowrap hover:bg-white/10 hover:border-white/20 transition-all duration-300">Hardware Systems</span>
            </div>
          </motion.div>

          {/* Interactive Custom Pull-down / Dropdown Menu */}
          <motion.div 
            variants={itemVariants}
            className="relative select-none shrink-0"
          >
            <div className="relative">
              <button 
                onClick={() => setSectionMenuOpen(!sectionMenuOpen)}
                className="flex items-center gap-4 px-6 py-4 bg-[#0f0f0f] hover:bg-[#141414] border border-white/10 hover:border-white/30 rounded-full cursor-pointer transition-all duration-300 text-left w-[240px] sm:w-[260px] relative z-40 active:scale-95 group"
              >
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all duration-300 animate-pulse">
                  <ChevronDown size={14} className={`text-white transition-transform duration-300 ${sectionMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-white/50">Navigation Panel</span>
                  <span className="text-xs font-bold text-white tracking-widest uppercase">Select Section</span>
                </div>
              </button>

              <AnimatePresence>
                {sectionMenuOpen && (
                  <>
                    {/* Backdrop to close list */}
                    <div 
                      className="fixed inset-0 z-30" 
                      onClick={() => setSectionMenuOpen(false)} 
                    />

                    {/* Dropdown Options List */}
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute bottom-[calc(100%+12px)] left-0 md:left-auto md:right-0 w-[280px] sm:w-[320px] bg-[#0d0d0d]/95 backdrop-blur-xl border border-white/10 rounded-xl p-3 z-40 shadow-2xl flex flex-col gap-1.5"
                    >
                      {/* Corner high-tech markers */}
                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20" />
                      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20" />
                      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20" />
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20" />

                      <div className="text-[8px] font-mono text-white/30 uppercase tracking-[0.25em] px-3 pb-2 pt-1.5 border-b border-white/5 flex justify-between items-center">
                        <span>Terminal Gateway</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
                      </div>

                      {[
                        { title: 'Project Portfolio', desc: 'Hardware, PCB layouts & systems', id: 'work' },
                        { title: 'Background / Certifications', desc: 'Academics & credentials', id: 'about' },
                        { title: 'Contact & Inquiry', desc: 'Send an email or message', id: 'contact' },
                      ].map((sec, idx) => (
                        <button
                          key={sec.id}
                          onClick={() => {
                            setSectionMenuOpen(false);
                            const targetElement = document.getElementById(sec.id);
                            if (targetElement) {
                              targetElement.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                          className="w-full text-left p-2.5 rounded hover:bg-white/5 group/opt border border-transparent hover:border-white/5 cursor-pointer transition-all duration-300 flex items-center justify-between"
                        >
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-white group-hover/opt:text-[#f97316] transition-colors">
                              {idx + 1}. {sec.title}
                            </span>
                            <span className="text-[10px] text-white/50 group-hover/opt:text-white/70 transition-colors mt-0.5">
                              {sec.desc}
                            </span>
                          </div>
                          <span className="text-[9px] font-mono opacity-25 group-hover/opt:opacity-100 group-hover/opt:translate-x-1 transition-all">
                            →
                          </span>
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

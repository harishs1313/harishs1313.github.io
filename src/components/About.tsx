import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ChevronUp, Award } from 'lucide-react';
import profileImage from '@/image.jpg';

export default function About() {
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  return (
    <section id="about" className="py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative text */}
      <div className="absolute top-0 right-0 text-[20vw] font-serif italic opacity-[0.02] pointer-events-none select-none">
        PROFILE
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, rotate: -3 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 max-w-md aspect-[3/4] glass-morphism p-3 relative group overflow-hidden border border-white/10 rounded-lg shadow-2xl shadow-brand-accent/5"
        >
          {/* Subtle back glowing effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <img 
            src={profileImage} 
            alt="Harish S"
            className="w-full h-full object-cover object-top rounded grayscale opacity-80 contrast-110 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-in-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-12">
             <div className="text-[6vw] font-mono font-bold opacity-[0.03] text-white break-all leading-none">0101010101010101010101</div>
          </div>
        </motion.div>

        <div className="w-full md:w-1/2">
          <motion.h2 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
            className="text-4xl md:text-6xl font-mono font-bold mb-12 uppercase tracking-tighter"
          >
            Harish S
          </motion.h2>
          
          <div className="space-y-8 text-lg font-light leading-relaxed text-white/80">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Self-motivated and technically oriented Electronics and Communication Engineering graduate with practical 
              experience in schematic design, hardware prototyping, and VLSI systems. I am dedicated to architecting 
              reliable electronic circuits and creating scalable hardware products.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 border-b border-white/10 pb-2">Experience</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-bold">Intern, Loyal Wingman Technologies</span>
                    <span className="text-[10px] font-mono opacity-50">Jan 2026 — Present</span>
                  </div>
                  <p className="text-xs opacity-60 italic">Embedded Hardware & PCB Design</p>
                </div>
                <div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-bold">Intern, Cosmic Embedded Systems</span>
                    <span className="text-[10px] font-mono opacity-50">Mar 2025 — Jun 2025</span>
                  </div>
                  <p className="text-xs opacity-60 italic">Smart Switch System & IoT</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8">
            <div>
              <span className="text-[10px] uppercase tracking-widest opacity-40 mb-4 block underline underline-offset-4">Technical Skills</span>
              <ul className="text-xs font-mono uppercase tracking-widest space-y-2 opacity-70">
                <li>OrCAD / KiCad / Altium</li>
                <li>Schematic Design / DRC</li>
                <li>UART / SPI / I2C / Ethernet</li>
                <li>C / Python / Verilog</li>
              </ul>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest opacity-40 mb-4 block underline underline-offset-4">Education</span>
              <p className="text-xs font-mono uppercase tracking-widest opacity-70 leading-loose">
                B.E. Electronics & Communication<br/>
                Nehru Institute of Engineering & Tech<br/>
                CGPA: 8.0
              </p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
            <div>
              <span className="text-[10px] uppercase tracking-widest opacity-40 mb-6 block underline underline-offset-4">Certifications</span>
              <ul className="text-[11px] font-mono space-y-6">
                {/* 1. PCB Design */}
                <li>
                  <div className="flex items-start gap-2.5 group/cert">
                    <Award size={14} className="mt-0.5 text-[#e5e7eb] opacity-40 group-hover/cert:scale-110 group-hover/cert:opacity-100 transition-all shrink-0" />
                    <div>
                      <span className="block font-bold text-white text-[12px] leading-tight group-hover/cert:text-brand-accent transition-colors">PCB Design Fundamentals v24.1</span>
                      <span className="block italic opacity-50 text-[9px] mb-1">Cadence Design Systems</span>
                      <p className="text-[10px] text-white/50 leading-relaxed font-sans max-w-sm">
                        <span className="font-mono text-[9px] text-[#e5e7eb] opacity-40 uppercase tracking-wider block mb-0.5">Learnings</span>
                        Analog simulation, waveform analysis, circuit validation
                      </p>
                    </div>
                  </div>
                </li>

                {/* 2. Analog Simulation */}
                <li>
                  <div className="flex items-start gap-2.5 group/cert">
                    <Award size={14} className="mt-0.5 text-[#e5e7eb] opacity-40 group-hover/cert:scale-110 group-hover/cert:opacity-100 transition-all shrink-0" />
                    <div>
                      <span className="block font-bold text-white text-[12px] leading-tight group-hover/cert:text-brand-accent transition-colors">Analog Simulation with PSpice v24.1</span>
                      <span className="block italic opacity-50 text-[9px] mb-1">Cadence Design Systems</span>
                      <p className="text-[10px] text-white/50 leading-relaxed font-sans max-w-sm">
                        <span className="font-mono text-[9px] text-[#e5e7eb] opacity-40 uppercase tracking-wider block mb-0.5">Learnings</span>
                        Analog simulation, waveform analysis, circuit validation
                      </p>
                    </div>
                  </div>
                </li>

                {/* 3. Design Fundamentals */}
                <li>
                  <div className="flex items-start gap-2.5 group/cert">
                    <Award size={14} className="mt-0.5 text-[#e5e7eb] opacity-40 group-hover/cert:scale-110 group-hover/cert:opacity-100 transition-all shrink-0" />
                    <div>
                      <span className="block font-bold text-white text-[12px] leading-tight group-hover/cert:text-brand-accent transition-colors">Digital IC Design Fundamentals v2.0</span>
                      <span className="block italic opacity-50 text-[9px] mb-1">Cadence Design Systems</span>
                      <p className="text-[10px] text-white/50 leading-relaxed font-sans max-w-sm">
                        <span className="font-mono text-[9px] text-[#e5e7eb] opacity-40 uppercase tracking-wider block mb-0.5">Learnings</span>
                        Logic design, synthesis, VLSI design flow
                      </p>
                    </div>
                  </div>
                </li>
              </ul>

              {/* Expander Trigger */}
              <button
                onClick={() => setShowAllCertifications(!showAllCertifications)}
                className="mt-6 flex items-center justify-between w-full max-w-sm gap-2 text-[10px] font-mono uppercase tracking-widest text-[#e5e7eb] opacity-60 hover:opacity-100 bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-sm border border-white/10 active:scale-95 transition-all text-left cursor-pointer"
              >
                <span>{showAllCertifications ? "Hide Extra Certifications" : "View More Certifications"}</span>
                {showAllCertifications ? (
                  <ChevronUp size={14} className="opacity-60" />
                ) : (
                  <ChevronDown size={14} className="opacity-60" />
                )}
              </button>

              {/* Collapsible content */}
              <motion.div
                initial={false}
                animate={{ height: showAllCertifications ? 'auto' : 0, opacity: showAllCertifications ? 1 : 0 }}
                className="overflow-hidden w-full max-w-sm"
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <ul className="text-[11px] font-mono space-y-6 pt-6 border-t border-white/5 mt-6">
                  {/* 4. System Design Through Verilog */}
                  <li>
                    <div className="flex items-start gap-2.5 group/cert">
                      <Award size={14} className="mt-0.5 text-[#e5e7eb] opacity-40 group-hover/cert:scale-110 group-hover/cert:opacity-100 transition-all shrink-0" />
                      <div>
                        <span className="block font-bold text-white text-[12px] leading-tight group-hover/cert:text-brand-accent transition-colors">System Design Through Verilog</span>
                        <span className="block italic opacity-50 text-[9px] mb-1">NPTEL</span>
                        <p className="text-[10px] text-white/50 leading-relaxed font-sans">
                          <span className="font-mono text-[9px] text-[#e5e7eb] opacity-40 uppercase tracking-wider block mb-0.5">Learnings</span>
                          Analog simulation, waveform analysis, circuit validation
                        </p>
                      </div>
                    </div>
                  </li>

                  {/* 5. Introduction to IoT */}
                  <li>
                    <div className="flex items-start gap-2.5 group/cert">
                      <Award size={14} className="mt-0.5 text-[#e5e7eb] opacity-40 group-hover/cert:scale-110 group-hover/cert:opacity-100 transition-all shrink-0" />
                      <div>
                        <span className="block font-bold text-white text-[12px] leading-tight group-hover/cert:text-brand-accent transition-colors">Introduction to Internet of Things</span>
                        <span className="block italic opacity-50 text-[9px] mb-1">NPTEL</span>
                        <p className="text-[10px] text-white/50 leading-relaxed font-sans">
                          <span className="font-mono text-[9px] text-[#e5e7eb] opacity-40 uppercase tracking-wider block mb-0.5">Learnings</span>
                          IoT architecture, protocols, sensor networks
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest opacity-40 mb-6 block underline underline-offset-4">Achievements</span>
              <div className="space-y-4">
                <div className="border border-white/10 p-4 rounded-sm bg-white/5">
                  <span className="block text-xs font-bold mb-1">Won 2nd Prize @ NSITE2K23</span>
                  <p className="text-[10px] opacity-60 leading-relaxed">Smart Environmental Monitoring System using IoT.</p>
                </div>
                <div className="border border-white/10 p-4 rounded-sm bg-white/5">
                  <span className="block text-xs font-bold mb-1">Won 1st Prize @ Science Day 22</span>
                  <p className="text-[10px] opacity-60 leading-relaxed">Paper presentation on Indoor Air Pollution monitoring.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

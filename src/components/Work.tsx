import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ChevronDown, Github, Info, Terminal } from 'lucide-react';

const projectSections = [
  {
    category: "PCB Design & Hardware",
    projects: [
      {
        id: '01',
        title: 'USB-to-UART Converter',
        description: 'Complete converter circuit using CP2102. Features ESD protection, proper decoupling, and crystal/clock circuitry. Designed in KiCad with specialized routing for USB differential pairs.',
        year: '2023',
        link: '#'
      },
      {
        id: '02',
        title: 'STM32 Bluetooth Hardware',
        description: 'Bluetooth-enabled embedded hardware system utilizing STM32. Implemented advanced power routing and decoupling capacitor placement in KiCad for stable RF communication.',
        year: '2023',
        link: '#'
      }
    ],
    extraProjects: [],
    quote: "A significant volume of high-speed impedance-matched PCB routing, power distribution networks (PDN), and multi-layer RF layouts remains governed by active NDAs. Next-generation silicon prototyping is continuously simulated and verified on the physical lab bench."
  },
  {
    category: "Embedded Systems & IoT",
    projects: [
      {
        id: '03',
        title: 'Integrated Load Analysis',
        description: 'Edge AI energy monitoring system for real-time power analysis. Features ZMPT101B and ACS712 sensors with ADS1115 ADC for high-precision data acquisition and fault detection.',
        year: '2024',
        link: '#'
      },
      {
        id: '04',
        title: 'Smart Switch System',
        description: 'IoT-enabled switch system using ESP32. Integrated 8× TTP223 capacitive touch sensors for load control with UART-based field configuration and debugging.',
        year: '2023',
        link: '#'
      }
    ],
    extraProjects: [
      {
        id: '05',
        title: 'Automatic LED Adjusting System',
        description: 'Smart plant lighting setup at NIET that automatically controls LED brightness based on ambient light conditions to ensure healthy growth in indoor environments.',
        tech: 'Embedded C / Sensors & LDR',
        year: '2024',
        link: '#'
      }
    ],
    quote: "Architecting clean, responsive firmware that guarantees reliable packet transmission while preventing sensor drift is a crucial discipline. New low-latency modules and customized communications logic are integrated daily."
  },
  {
    category: "VLSI & Digital Logic",
    projects: [
      {
        id: '06',
        title: 'MiniCPU Verilog',
        description: 'Single-cycle CPU architecture designed from the ground up in Verilog. Optimized for FPGA resource utilization and instruction path efficiency.',
        year: '2024',
        link: 'https://github.com/harishs1313/MiniCPU_Verilog'
      },
      {
        id: '07',
        title: 'SPST Low-Power MAC Unit',
        description: 'VLSI implementation of a Multiply-Accumulate unit using Spurious Power Suppression Technique (SPST) to minimize dynamic switching power in DSP logic.',
        year: '2024',
        link: 'https://github.com/harishs1313/SPST-Based-Low-Power-MAC-Unit'
      }
    ],
    extraProjects: [
      {
        id: '08',
        title: 'Interrupt Priority Encoder',
        description: 'Nested Interrupt Priority Encoder with full nested preemption support, designed for structured hardware system interrupts.',
        tech: 'Verilog / Digital RTL',
        year: '2024',
        link: 'https://github.com/harishs1313/Interrupt-Priority-Encoder-with-Nested-Interrupt-Support-in-Verilog'
      },
      {
        id: '09',
        title: 'Elevator Controller FSM',
        description: 'Finite State Machine representing a complete multi-floor elevator simulator with floor encoders and automatic door safety interlocks.',
        tech: 'Verilog / Sequential Logic',
        year: '2024',
        link: 'https://github.com/harishs1313/Elevator-Controller-Finite-State-Machine-Verilog'
      },
      {
        id: '10',
        title: 'Password Lock FSM',
        description: 'Secure digital passcode authorization controller modeling strict sequential states and auto-blocking criteria.',
        tech: 'Verilog / FSM RTL',
        year: '2024',
        link: 'https://github.com/harishs1313/Password-Lock-FSM-Verilog-Project'
      },
      {
        id: '11',
        title: 'Verilog Voting Machine',
        description: 'Interactive electronic voting registrar with candidate registers, clear controls, and voter verification tallies.',
        tech: 'Verilog / Behavioral',
        year: '2024',
        link: 'https://github.com/harishs1313/Verilog-Voting-Machine'
      },
      {
        id: '12',
        title: '4-bit Barrel Shifter',
        description: 'High-performance combinational bit shifter designed and synthesised using optimized multiplexer trees in Vivado.',
        tech: 'Verilog / Vivado',
        year: '2024',
        link: 'https://github.com/harishs1313/4bit-barrel-shifter-vivado'
      },
      {
        id: '13',
        title: 'Serial-To-Parallel Converter',
        description: 'Synchronous shift register converter with dynamic strobe signals, validating serial data deserialization.',
        tech: 'Verilog / Registers',
        year: '2024',
        link: 'https://github.com/harishs1313/Serial-To-Parallel-Converter'
      }
    ],
    quote: "Optimizing digital subsystems to suppress dynamic switching power and secure system register paths is fundamental to robust SOC pipelines. The Vivado suites continuously test and benchmark these RTL targets on physical silicon."
  }
];

export default function Work() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (category: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-white/10 pb-8">
          <h2 className="text-4xl md:text-6xl font-mono font-bold uppercase tracking-tighter mb-4 md:mb-0">Selected Works</h2>
          <span className="text-xs uppercase tracking-[0.3em] opacity-40">Projects 2022 — <span className="animate-pulse">∞</span></span>
        </div>

        <div className="space-y-32">
          {projectSections.map((section) => {
            const isExpanded = !!expandedSections[section.category];
            const hasExtra = section.extraProjects && section.extraProjects.length > 0;

            return (
              <div key={section.category} className="border-b border-white/5 pb-20 last:border-0 last:pb-0">
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-4">
                    <div className="h-px w-8 bg-brand-accent/20" />
                    <h3 className="text-xs font-mono uppercase tracking-[0.4em] text-white/40">{section.category}</h3>
                  </div>
                </div>
                
                {/* Primary Project Cards (At most 2 shown directly) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  {section.projects.map((project, index) => (
                    <motion.a 
                      key={project.id}
                      href={project.link}
                      target={project.link === '#' ? undefined : "_blank"}
                      rel={project.link === '#' ? undefined : "noopener noreferrer"}
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative p-8 border border-white/10 glass-morphism rounded-sm hover:border-brand-accent/30 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[220px]"
                    >
                      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={18} className="text-brand-accent" />
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-[10px] font-mono text-brand-accent/60 tracking-widest leading-none bg-brand-accent/5 px-2 py-1 rounded-sm border border-brand-accent/10">PROJECT_{project.id}</span>
                          <span className="text-[10px] font-mono opacity-30 tracking-widest">{project.year}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <h4 className="text-2xl font-mono font-bold group-hover:text-brand-accent transition-colors">{project.title}</h4>
                          {project.link.includes('github.com') && (
                            <Github size={18} className="text-brand-accent/40 group-hover:text-brand-accent transition-colors" />
                          )}
                        </div>
                        <p className="text-sm font-light text-white/60 leading-relaxed max-w-sm">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-8 flex items-center gap-2">
                         <div className="h-px w-4 bg-white/10 group-hover:w-8 group-hover:bg-brand-accent transition-all duration-500" />
                         <span className="text-[9px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-40 transition-all">View Details</span>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Explore More Collapsible Trigger Button */}
                <div className="mt-12 flex justify-center">
                  <button
                    onClick={() => toggleSection(section.category)}
                    className="group flex items-center gap-3 px-6 py-3 border border-white/10 hover:border-brand-accent/40 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 rounded-full cursor-pointer text-[10px] font-mono uppercase tracking-[0.2em] text-white/70 hover:text-white"
                  >
                    <span>{isExpanded ? "Minimize Category" : "Explore More"}</span>
                    <ChevronDown size={14} className={`text-brand-accent transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                </div>

                {/* Smooth Animated Pull-down panel containing extras or engineering quotes */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden w-full"
                    >
                      <div className="border-t border-dashed border-white/10 mt-10 pt-10 space-y-8">
                        {hasExtra && (
                          <div>
                            <div className="text-[9px] font-mono text-brand-accent uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
                              <Terminal size={12} />
                              <span>Extended Repositories // Category Archive</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                              {section.extraProjects.map((project, idx) => (
                                <motion.a 
                                  key={idx}
                                  href={project.link || '#'}
                                  target={project.link && project.link !== '#' ? "_blank" : undefined}
                                  rel={project.link && project.link !== '#' ? "noopener noreferrer" : undefined}
                                  initial={{ y: 20, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{ delay: idx * 0.08 }}
                                  className="group relative p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-brand-accent/20 rounded-sm transition-all duration-300 flex flex-col justify-between min-h-[180px]"
                                >
                                  <div>
                                    <div className="flex justify-between items-baseline mb-3">
                                      <span className="text-[8px] font-mono tracking-wider opacity-30">
                                        {project.tech || "Hardware Logic"}
                                      </span>
                                      <span className="text-[9px] font-mono opacity-40">{project.year || "2024"}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 mb-2">
                                      <h4 className="text-sm font-mono font-bold group-hover:text-brand-accent transition-colors">
                                        {project.title}
                                      </h4>
                                      {project.link?.includes('github.com') && (
                                        <Github size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                                      )}
                                    </div>
                                    <p className="text-xs font-light text-white/50 leading-relaxed">
                                      {project.description}
                                    </p>
                                  </div>
                                  
                                  <div className="mt-4 flex justify-end">
                                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-brand-accent transition-all duration-300" />
                                  </div>
                                </motion.a>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Stately designed quote block to emphasize heavy project flow under NDAs */}
                        {section.quote && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: hasExtra ? 0.2 : 0.05 }}
                            className="p-6 md:p-8 bg-brand-accent/[0.01] border border-brand-accent/10 rounded-sm relative overflow-hidden"
                          >
                            {/* Scientific schematic style corner markers */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-accent/20" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-accent/20" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-accent/20" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-accent/20" />

                            <div className="flex items-start gap-4">
                              <div className="p-2 bg-brand-accent/5 rounded-sm border border-brand-accent/10 shrink-0">
                                <Info size={14} className="text-brand-accent" />
                              </div>
                              <div className="space-y-1.5">
                                <span className="text-[8px] font-mono uppercase tracking-[0.25em] text-brand-accent/60 block font-bold">
                                  Engineering Telemetry & Design Log
                                </span>
                                <p className="text-xs md:text-sm font-light text-white/70 italic leading-relaxed">
                                  "{section.quote}"
                                </p>
                                <span className="text-[8px] font-mono uppercase tracking-widest text-white/20 block pt-1">
                                  // STATUS CHECK COMPLETE // SIGNED & ENCRYPTED BY DESIGNER HARISH S.
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Pipeline / NDA Active Projects Board */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-32 border border-white/10 glass-morphism p-8 md:p-12 rounded-sm relative overflow-hidden flex flex-col lg:flex-row items-stretch justify-between gap-12"
          >
            {/* Soft ambient gradient aura in container */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] bg-[#f97316]/5 pointer-events-none rounded-full" />
            
            <div className="max-w-xl relative z-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-ping" />
                <span className="text-[9px] font-mono tracking-[0.32em] uppercase text-brand-accent font-bold">FABRICATION PIPELINE ACTIVE</span>
              </div>
              <h3 className="text-2xl md:text-3.5xl font-mono font-black uppercase tracking-tighter text-white mb-6 leading-none">
                THE LAB NEVER SLEEPS.<br/>MORE DESIGNS ARE ACTIVE.
              </h3>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed font-sans font-light">
                "A significant body of active research and hardware design remains under non-disclosure agreements or is currently undergoing bench test validation. New multi-layer high-speed schematics, customized sensor matrices, and private RTL pipelines are pushed and built regularly in my workspace."
              </p>
            </div>

            <div className="flex flex-col gap-6 w-full lg:w-auto shrink-0 font-mono text-[10px] bg-white/[0.02] border border-white/5 p-6 rounded relative z-10 min-w-[280px] justify-center">
              <div className="text-white/30 uppercase tracking-[0.2em] border-b border-white/5 pb-2 mb-2 font-bold font-sans">
                WORKBENCH TELEMETRY
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/40">CAD_RUNS:</span>
                <span className="text-white font-bold tracking-widest">03 STAGED DESIGNS</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/40">HW_PROTOTYPING:</span>
                <span className="text-brand-accent font-bold tracking-widest">ACTIVE_FAB_CYCLE</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/40">VERILOG_TESTS:</span>
                <span className="text-white font-bold tracking-widest">OK (XILINX VIVADO)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/40">PROPRIETARY:</span>
                <span className="text-[#f97316]/80 font-bold tracking-widest">NDA_RESTRICTED</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

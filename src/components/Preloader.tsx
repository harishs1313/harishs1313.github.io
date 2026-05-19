import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const statusLogs = [
    'SYS_INIT: Bootstrapping hardware profile...',
    'CAD_COMP: Loading local netlist files...',
    'VLSI_ENG: Checking signal integrity channels...',
    'INTEG_CHECK: Mapping interactive tracking grids...',
    'SYS_ACTIVE: ESTABLISHING SECURE GATEWAY...',
  ];

  useEffect(() => {
    // Elegant incremental loader simulating technical verification
    let current = 0;
    const interval = setInterval(() => {
      // Create organic progress pacing
      const increment = current < 30 
        ? Math.floor(Math.random() * 8) + 4
        : current < 75 
        ? Math.floor(Math.random() * 5) + 2
        : current < 95
        ? Math.floor(Math.random() * 2) + 1
        : 1;

      current = Math.min(100, current + increment);
      setProgress(current);

      // Advance logs based on percent thresholds
      if (current < 25) setStatusIndex(0);
      else if (current < 50) setStatusIndex(1);
      else if (current < 75) setStatusIndex(2);
      else if (current < 95) setStatusIndex(3);
      else setStatusIndex(4);

      if (current === 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          // Small delay before final unmount callback to allow door transition
          setTimeout(onComplete, 850);
        }, 500);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] overflow-hidden text-[#e5e7eb] flex flex-col justify-between p-6 md:p-12 font-mono"
        >
          {/* Subtle architectural loading grid */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="w-full h-full" style={{
              backgroundImage: 'linear-gradient(to right, rgba(229, 231, 235, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(229, 231, 235, 0.08) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Top Interface Info */}
          <div className="flex justify-between items-start text-[10px] uppercase tracking-[0.2em] relative z-10 select-none opacity-60">
            <div className="flex flex-col gap-1">
              <span>DESIGNER & ENGINEER</span>
              <span className="text-[#a3a3a3]">HARISH S // PORTFOLIO v2.0</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span>EST. TIME: 19:12:15 GMT</span>
              <span className="text-[#a3a3a3]">SYS_READY // OK</span>
            </div>
          </div>

          {/* Middle Cinematic Progress Bar / Large Typography */}
          <div className="relative flex flex-col items-center justify-center my-auto z-10 w-full max-w-4xl mx-auto">
            {/* Fine border design guidelines */}
            <div className="absolute -inset-x-8 top-1/2 h-[1px] bg-white/5" />
            
            <div className="relative py-12 px-6 flex flex-col items-center">
              {/* Technical corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/25" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/25" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/25" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/25" />

              {/* Huge Monospace loaded counter */}
              <div className="text-7xl sm:text-8xl md:text-9xl font-futuristic tracking-tighter leading-none select-none text-white font-black text-center relative">
                {String(progress).padStart(3, '0')}
                <span className="text-xl sm:text-2xl font-mono text-white/30 align-super ml-2">%</span>
              </div>

              {/* Progress Bar Track */}
              <div className="w-64 sm:w-80 h-[2px] bg-white/5 mt-8 overflow-hidden rounded-full relative">
                <motion.div 
                  className="absolute left-0 top-0 bottom-0 bg-white" 
                  style={{ width: `${progress}%` }} 
                />
              </div>
            </div>
          </div>

          {/* Bottom Terminal Action Log & Fast skip trigger */}
          <div className="flex flex-col sm:flex-row justify-between items-end gap-4 text-[10px] tracking-wider relative z-10">
            <div className="flex flex-col gap-1.5 w-full sm:max-w-md select-none">
              <span className="text-[#a3a3a3] uppercase text-[9px] tracking-[0.25em]">Execution Pipeline</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                <span className="font-mono text-white/95 truncate">
                  {statusLogs[statusIndex]}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setProgress(100);
                setIsDone(true);
                setTimeout(onComplete, 100);
              }}
              className="text-[#e2e8f0]/40 group hover:text-white border-b border-white/10 hover:border-white hover:pb-0.5 cursor-pointer text-[10px] tracking-widest font-mono uppercase transition-all shrink-0 pb-1"
            >
              Skip Intro
            </button>
          </div>

          {/* Swipe curtains reveal layer animation */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isDone ? 1 : 0 }}
            style={{ originY: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-x-0 top-0 h-1/2 bg-[#0d0d0d] z-50 border-b border-white/10 pointer-events-none"
          />
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isDone ? 1 : 0 }}
            style={{ originY: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-x-0 bottom-0 h-1/2 bg-[#0d0d0d] z-50 border-t border-white/10 pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBrand, setShowBrand] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 200) {
      setShowBrand(true);
    } else {
      setShowBrand(false);
    }
  });

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center bg-gradient-to-b from-brand-bg/95 to-transparent backdrop-blur-md transition-all duration-300">
      <motion.a 
        href="#"
        animate={{ 
          opacity: showBrand ? 1 : 0, 
          x: showBrand ? 0 : -15,
          pointerEvents: showBrand ? 'auto' : 'none' 
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="flex items-center transition-transform hover:scale-105"
      >
        <span className="text-2xl md:text-3xl font-futuristic tracking-tighter uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          HARISH S
        </span>
      </motion.a>

      <div className="hidden md:flex gap-12">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-xs uppercase tracking-[0.2em] font-medium hover:text-white transition-colors"
          >
            {link.name}
          </motion.a>
        ))}
      </div>

      <button 
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-brand-bg border-t border-white/10 p-8 flex flex-col gap-6 md:hidden glass-morphism"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg uppercase tracking-widest font-medium"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

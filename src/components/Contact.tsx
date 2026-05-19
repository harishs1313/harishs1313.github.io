import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-white text-brand-bg rounded-t-[3rem] md:rounded-t-[6rem]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-mono font-bold uppercase tracking-tighter mb-8"
            >
              Engineer the future.
            </motion.h2>
            <p className="text-xl font-light leading-relaxed mb-12 opacity-70">
              Open for technical consultations, hardware-software integration projects, 
              or R&D collaborations. Let's discuss your next physical system.
            </p>
          </div>

          <div className="w-full md:w-auto self-end flex flex-col items-end">
            <a 
              href="mailto:harishsaravananm@gmail.com" 
              className="text-2xl md:text-4xl font-mono border-b-2 border-brand-bg/10 hover:border-brand-bg transition-colors pb-2"
            >
              harishsaravananm@gmail.com
            </a>
            <div className="mt-6 flex gap-6 text-xs uppercase tracking-widest font-bold">
              <a href="https://github.com/harishs1313" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">GitHub</a>
              <a href="https://linkedin.com/in/harishs22106026" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-brand-bg/10 flex flex-col md:flex-row justify-between gap-8 md:items-center">
          <div className="flex items-center gap-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 block mb-2">Location</span>
              <span className="text-sm font-medium">Tamil Nadu, India</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 block mb-2">Phone</span>
              <span className="text-sm font-medium">+91 8825677590</span>
            </div>
          </div>
          
          <a 
            href="mailto:harishsaravananm@gmail.com?subject=Project%20Inquiry"
            className="flex items-center gap-3 bg-brand-bg text-white px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold hover:scale-105 transition-transform cursor-pointer"
          >
            Send a message <Send size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

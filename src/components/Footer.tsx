export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-white text-brand-bg px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-brand-bg/5 pt-12">
        <div className="text-[10px] uppercase tracking-[0.3em] font-bold">
          © {currentYear} Harish — All rights reserved
        </div>
        
        <div className="flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-bold">
          <a href="#" className="hover:line-through transition-all">Privacy</a>
          <a href="#" className="hover:line-through transition-all">Terms</a>
          <a href="#" className="hover:line-through transition-all">Cookies</a>
        </div>

        <div className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">
          Designed with intention
        </div>
      </div>
    </footer>
  );
}

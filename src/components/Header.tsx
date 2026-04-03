import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Quem Somos', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'ESG', href: '#esg' },
    { name: 'Educação', href: '#education' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-beige/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <img 
            src="/logo.png" 
            alt="Flor de Embaúba Logo" 
            className="w-12 h-12 object-contain transition-transform group-hover:scale-110"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback if image is not found
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="w-10 h-10 bg-brand-pink rounded-full hidden items-center justify-center text-white font-display text-xl transition-transform group-hover:scale-110">
            F
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold text-brand-green leading-tight">Flor de Embaúba</span>
            <span className="text-[10px] uppercase tracking-widest text-brand-pink font-medium">Restauração Ambiental</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-sm font-medium text-brand-dark hover:text-brand-pink transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-brand-green text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-green/90 transition-all flex items-center gap-2 shadow-lg shadow-brand-green/20"
          >
            <Phone size={16} />
            Fale com um Especialista
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-brand-green p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-beige border-t border-brand-pink-soft overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-lg font-medium text-brand-dark hover:text-brand-pink transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-brand-green text-white px-6 py-4 rounded-xl text-center font-semibold flex items-center justify-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone size={18} />
                Fale com um Especialista
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

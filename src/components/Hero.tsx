import { motion } from 'motion/react';
import { ArrowRight, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-beige">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-brand-green">
          <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90.1,-16.3,88.5,-0.9C86.9,14.4,81.1,28.8,72.3,41.2C63.5,53.6,51.8,64,38.5,71.3C25.2,78.6,10.3,82.8,-4.1,89.9C-18.5,97,-32.4,107,-44.8,105.1C-57.2,103.2,-68.1,89.4,-76.1,75.1C-84.1,60.8,-89.2,46,-92.4,30.8C-95.6,15.6,-96.9,0,-94.1,-14.8C-91.3,-29.6,-84.4,-43.6,-74.1,-55.1C-63.8,-66.6,-50.1,-75.6,-36.4,-83.1C-22.7,-90.6,-9,-96.6,2.9,-101.6C14.8,-106.6,29.6,-110.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-brand-pink"></div>
            <span className="text-brand-pink font-bold uppercase tracking-widest text-xs">20 Anos de Experiência</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-dark leading-[1.1] mb-8">
            Ciência e Natureza <br />
            <span className="text-brand-green italic">unidas para restaurar</span> <br />
            o futuro.
          </h1>
          
          <p className="text-lg md:text-xl text-brand-dark/70 max-w-lg mb-10 leading-relaxed">
            A FERA transforma o agronegócio e recupera ecossistemas com soluções inteligentes, rentáveis e cientificamente embasadas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#services" 
              className="bg-brand-green text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-green/90 transition-all shadow-xl shadow-brand-green/20 group"
            >
              Conheça nossos Projetos
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#contact" 
              className="border-2 border-brand-pink text-brand-pink px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-pink hover:text-white transition-all"
            >
              Fale com um Especialista
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1000" 
              alt="Magnolia Flower" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
          </div>
          
          {/* Floating Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-2xl shadow-2xl z-20 max-w-[240px]"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-brand-pink-soft rounded-full flex items-center justify-center text-brand-pink">
                <Leaf size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-green">100%</div>
                <div className="text-[10px] uppercase font-bold text-brand-dark/50 tracking-wider">Sustentável</div>
              </div>
            </div>
            <p className="text-xs text-brand-dark/60 leading-relaxed">
              Restauração ecológica verdadeira com foco em resiliência climática.
            </p>
          </motion.div>

          {/* Decorative Circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-pink-soft rounded-full -z-10 blur-3xl opacity-60"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-green/10 rounded-full -z-10 blur-3xl opacity-40"></div>
        </motion.div>
      </div>
    </section>
  );
}

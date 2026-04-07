import { motion } from 'motion/react';
import { ArrowRight, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-beige">
      {/* Background Floral Overlay */}
      <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none z-0">
        <img 
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1920" 
          alt="Floral Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-brand-pink"></div>
            <span className="text-brand-pink font-bold uppercase tracking-widest text-xs">Ciência & Restauração</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-display font-bold text-brand-dark leading-[1.1] mb-8">
            Restaurando o <br />
            <span className="text-brand-green italic">Equilíbrio</span> <br />
            da Terra.
          </h1>
          
          <p className="text-lg md:text-xl text-brand-dark/70 max-w-lg mb-10 leading-relaxed">
            Com 20 anos de experiência, a FERA une ciência rigorosa e conhecimento popular para transformar o agronegócio e recuperar ecossistemas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#services" 
              className="bg-brand-green text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-green/90 transition-all shadow-xl shadow-brand-green/20 group"
            >
              Nossos Serviços
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#contact" 
              className="border-2 border-brand-pink text-brand-pink px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-pink hover:text-white transition-all"
            >
              Fale Conosco
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square border-8 border-white">
            <img 
              src="/flordeEmbauba.jpeg" 
              alt="Dra. Lidiane Poyer Rocha" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
          </div>
          
          {/* Floating Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-8 rounded-3xl shadow-2xl z-20 max-w-[260px] border border-brand-pink-soft"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-brand-pink-soft rounded-full flex items-center justify-center text-brand-pink">
                <Leaf size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-green">FERA</div>
                <div className="text-[10px] uppercase font-bold text-brand-dark/50 tracking-wider">Flor de Embaúba</div>
              </div>
            </div>
            <p className="text-xs text-brand-dark/60 leading-relaxed font-medium">
              Restauração ecológica verdadeira e resiliência climática para o agronegócio brasileiro.
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

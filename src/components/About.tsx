import { motion } from 'motion/react';
import Section from './Section';
import { VALUES } from '../constants';
import * as Icons from 'lucide-react';

export default function About() {
  return (
    <Section 
      id="about" 
      className="text-brand-dark"
      bgColor="var(--color-brand-pink-soft)"
      bgImage="/flordeEmbauba.jpeg"
      overlayOpacity={0.05}
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[3/4] border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000" 
              alt="Dra. Lidiane Poyer Rocha" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-brand-dark/80 to-transparent text-white">
              <h3 className="text-2xl font-bold mb-1">Dra. Lidiane Poyer Rocha</h3>
              <p className="text-sm font-medium text-brand-pink-soft uppercase tracking-widest">Cientista & Bióloga</p>
            </div>
          </div>
          
          {/* Background Decorative */}
          <div className="absolute -top-10 -left-10 w-40 h-40 border-4 border-brand-pink rounded-[40px] -z-10 opacity-20"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-green/10 rounded-full -z-10 blur-3xl"></div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-brand-pink"></div>
            <span className="text-brand-pink font-bold uppercase tracking-widest text-xs">Quem Somos</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark leading-tight mb-8">
            Cientista à frente <br />
            <span className="text-brand-green italic">da preservação.</span>
          </h2>
          
          <p className="text-lg text-brand-dark/70 mb-10 leading-relaxed">
            A **Flor de Embaúba (FERA)** nasceu da união entre ciência rigorosa e conhecimento popular. 
            Liderada pela **Dra. Lidiane Poyer Rocha**, bióloga especialista em botânica e ecologia vegetal, 
            nossa missão é tornar propriedades rurais sustentáveis e economicamente prósperas através da restauração ecológica verdadeira.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {VALUES.map((value) => {
              const IconComponent = (Icons as any)[value.icon];
              return (
                <div key={value.title} className="flex gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-pink-soft rounded-xl flex items-center justify-center text-brand-pink">
                    {IconComponent && <IconComponent size={24} />}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">{value.title}</h4>
                    <p className="text-xs text-brand-dark/60 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

import { motion } from 'motion/react';
import Section from './Section';
import { SERVICE_CATEGORIES } from '../constants';
import * as Icons from 'lucide-react';

export default function Services() {
  return (
    <Section id="services" className="bg-white relative overflow-hidden">
      {/* Decorative Floral Element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 opacity-5 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800" 
          alt="Floral Deco" 
          className="w-full h-full object-contain rotate-12"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="text-center mb-20 max-w-3xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-[1px] w-12 bg-brand-pink"></div>
          <span className="text-brand-pink font-bold uppercase tracking-widest text-xs">Nossas Soluções</span>
          <div className="h-[1px] w-12 bg-brand-pink"></div>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-dark leading-tight mb-8">
          Expertise Técnica para <br />
          <span className="text-brand-green italic">Resultados Sustentáveis</span>
        </h2>
        
        <p className="text-lg text-brand-dark/70 leading-relaxed">
          Oferecemos um portfólio completo de serviços ambientais, unindo conformidade legal, eficiência produtiva e conservação da biodiversidade.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {SERVICE_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group"
          >
            <div className="bg-brand-beige/50 p-8 rounded-[40px] border border-brand-pink-soft h-full transition-all hover:bg-white hover:shadow-2xl hover:shadow-brand-green/10">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-green mb-8 shadow-sm group-hover:bg-brand-green group-hover:text-white transition-colors">
                <Icons.Layers size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-brand-dark mb-6 leading-tight group-hover:text-brand-green transition-colors">
                {category.title}
              </h3>
              
              <div className="space-y-8">
                {category.services.map((service) => {
                  const IconComponent = (Icons as any)[service.icon];
                  return (
                    <div key={service.title}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-brand-pink-soft rounded-lg flex items-center justify-center text-brand-pink">
                          {IconComponent && <IconComponent size={16} />}
                        </div>
                        <h4 className="font-bold text-sm text-brand-green uppercase tracking-wider">{service.title}</h4>
                      </div>
                      
                      <ul className="space-y-3">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-brand-dark/70 leading-relaxed">
                            <Icons.Check size={14} className="mt-1 flex-shrink-0 text-brand-pink" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 p-12 rounded-[40px] bg-brand-green text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-brand-green/20 relative z-10">
        <div className="max-w-xl">
          <h3 className="text-3xl font-display font-bold mb-4">Precisa de uma solução personalizada?</h3>
          <p className="text-white/80">Nossa equipe está pronta para analisar seu caso e propor a melhor estratégia técnica e ambiental.</p>
        </div>
        <a 
          href="#contact" 
          className="bg-white text-brand-green px-10 py-4 rounded-full font-bold hover:bg-brand-pink hover:text-white transition-all whitespace-nowrap"
        >
          Solicitar Orçamento
        </a>
      </div>
    </Section>
  );
}

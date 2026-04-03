import { motion } from 'motion/react';
import Section from './Section';
import { SERVICE_CATEGORIES } from '../constants';
import * as Icons from 'lucide-react';

export default function Services() {
  return (
    <Section id="services" className="bg-brand-beige">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-[1px] w-12 bg-brand-pink"></div>
          <span className="text-brand-pink font-bold uppercase tracking-widest text-xs">Nossos Serviços</span>
          <div className="h-[1px] w-12 bg-brand-pink"></div>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-dark leading-tight mb-8">
          Soluções inteligentes <br />
          <span className="text-brand-green italic">para o futuro da terra.</span>
        </h2>
        
        <p className="text-lg text-brand-dark/70 leading-relaxed">
          Organizamos nossos diversos serviços em 4 pilares estratégicos para facilitar a navegação e o entendimento das nossas soluções.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICE_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group"
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-brand-green/5 border border-brand-pink-soft h-full transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-green/10">
              <div className="w-16 h-16 bg-brand-green/5 rounded-2xl flex items-center justify-center text-brand-green mb-8 group-hover:bg-brand-green group-hover:text-white transition-colors">
                <Icons.Layers size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-brand-dark mb-6 leading-tight">
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
    </Section>
  );
}

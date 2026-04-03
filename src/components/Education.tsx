import { motion } from 'motion/react';
import Section from './Section';
import { BookOpen, GraduationCap, Presentation, Users } from 'lucide-react';

export default function Education() {
  return (
    <Section id="education" className="bg-white">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600" 
                  alt="Workshop" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600" 
                  alt="Nature Study" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600" 
                  alt="Team Meeting" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600" 
                  alt="Education" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-pink-soft rounded-full -z-10 blur-3xl opacity-60"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-green/10 rounded-full -z-10 blur-3xl opacity-40"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-brand-pink"></div>
            <span className="text-brand-pink font-bold uppercase tracking-widest text-xs">Educação Ambiental</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark leading-tight mb-8">
            Educar para <br />
            <span className="text-brand-green italic">preservar o amanhã.</span>
          </h2>
          
          <p className="text-lg text-brand-dark/70 mb-10 leading-relaxed">
            Assessorias pedagógicas, treinamentos e oficinas. Organização de eventos com metodologia Lixo Zero e calculadora de neutralização de carbono.
          </p>

          <div className="space-y-6">
            {[
              { icon: GraduationCap, title: "Assessorias Técnicas", text: "Consultoria científica e pedagógica para instituições de ensino." },
              { icon: BookOpen, title: "Treinamentos e Oficinas", text: "Minicursos práticos sobre botânica, ecologia e sustentabilidade." },
              { icon: Presentation, title: "Eventos Lixo Zero", text: "Organização de eventos sustentáveis com neutralização de carbono." },
              { icon: Users, title: "Sensibilização", text: "Promoção da consciência socioambiental em todos os níveis." }
            ].map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-brand-beige rounded-2xl flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all">
                  <item.icon size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1">{item.title}</h4>
                  <p className="text-sm text-brand-dark/60 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

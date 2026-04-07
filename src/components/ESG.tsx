import { motion } from 'motion/react';
import Section from './Section';
import { Shield, BarChart3, Recycle, TreePine } from 'lucide-react';

export default function ESG() {
  return (
    <Section 
      id="esg" 
      className="text-white"
      bgColor="var(--color-brand-green)"
      bgImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1920"
      overlayOpacity={0.7}
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-brand-pink"></div>
            <span className="text-brand-pink font-bold uppercase tracking-widest text-xs">Governança e Valor</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            ESG: Transformando <br />
            <span className="text-brand-pink-soft italic">natureza em valor real.</span>
          </h2>
          
          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            Implementamos governança corporativa socioambiental. Transformamos relatórios de recursos naturais em valor real para a sua empresa, assegurando a diminuição de resíduos e a valorização da biodiversidade humana e ambiental.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Shield, title: "Socioambiental", text: "Governança corporativa com foco em impacto positivo." },
              { icon: BarChart3, title: "Valor Real", text: "Transformação de ativos naturais em valor econômico." },
              { icon: Recycle, title: "Lixo Zero", text: "Metodologias para redução drástica de resíduos." },
              { icon: TreePine, title: "Biodiversidade", text: "Valorização da vida em todas as suas formas." }
            ].map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-[32px] border border-white/20 hover:bg-white/20 transition-all"
              >
                <item.icon className="text-brand-pink-soft mb-4" size={28} />
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-white/60 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="rounded-[40px] overflow-hidden shadow-2xl aspect-square border-8 border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000" 
              alt="Nature Landscape" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-10 -right-10 bg-brand-pink p-8 rounded-full shadow-2xl text-white text-center w-40 h-40 flex flex-col items-center justify-center border-8 border-brand-green/20">
            <div className="text-4xl font-bold font-display">ESG</div>
            <div className="text-[10px] uppercase font-bold tracking-widest mt-1">Liderança</div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

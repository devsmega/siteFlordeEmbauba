import { motion } from 'motion/react';
import Section from './Section';
import { Camera, ExternalLink } from 'lucide-react';
import { CONTACT } from '../constants';

const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
    title: "Dra. Lidiane em Campo",
    category: "Lidiane"
  },
  {
    url: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800",
    title: "Restauração de Nascentes",
    category: "Projeto"
  },
  {
    url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    title: "Monitoramento de Fauna",
    category: "Projeto"
  },
  {
    url: "/flordeEmbauba.jpeg",
    title: "Dra. Lidiane Poyer Rocha",
    category: "Lidiane"
  },
  {
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    title: "Recuperação de Áreas Degradadas",
    category: "Projeto"
  },
  {
    url: "/flordeEmbauba2.jpeg",
    title: "Consultoria em Campo",
    category: "Lidiane"
  }
];

export default function Gallery() {
  return (
    <Section id="gallery" className="bg-white">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-[1px] w-12 bg-brand-pink"></div>
          <span className="text-brand-pink font-bold uppercase tracking-widest text-xs">Portfólio Visual</span>
          <div className="h-[1px] w-12 bg-brand-pink"></div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6">
          Ciência em <span className="text-brand-green italic">Movimento</span>
        </h2>
        <p className="text-brand-dark/60 max-w-2xl mx-auto">
          Confira registros de nossos projetos em execução e a atuação da Dra. Lidiane Poyer Rocha na restauração de ecossistemas brasileiros.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERY_IMAGES.map((image, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative aspect-square overflow-hidden rounded-3xl shadow-lg cursor-pointer"
          >
            <img 
              src={image.url} 
              alt={image.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <span className="text-brand-pink font-bold text-[10px] uppercase tracking-widest mb-2">{image.category}</span>
              <h3 className="text-white font-display text-xl font-bold">{image.title}</h3>
              <div className="mt-4 flex items-center gap-2 text-white/60 text-xs">
                <Camera size={14} />
                <span>Ver Detalhes</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <a 
          href={`https://www.instagram.com/${CONTACT.instagram}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-brand-green font-bold hover:text-brand-pink transition-colors group"
        >
          Siga-nos no Instagram para mais registros
          <ExternalLink size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </Section>
  );
}

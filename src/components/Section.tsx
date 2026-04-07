import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bgColor?: string;
  bgImage?: string;
  overlayOpacity?: number;
}

export default function Section({ 
  children, 
  className = "", 
  id, 
  bgColor = "transparent",
  bgImage,
  overlayOpacity = 0
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {bgImage && (
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${bgImage})`,
          }}
        />
      )}
      {overlayOpacity > 0 && (
        <div 
          className="absolute inset-0 z-0 bg-brand-dark"
          style={{ opacity: overlayOpacity }}
        />
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}

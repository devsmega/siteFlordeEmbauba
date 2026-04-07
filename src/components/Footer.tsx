import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, ArrowUp, Send } from 'lucide-react';
import { CONTACT } from '../constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-brand-dark text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-pink via-brand-green to-brand-pink"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          {/* Contact Form / Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[1px] w-12 bg-brand-pink"></div>
              <span className="text-brand-pink font-bold uppercase tracking-widest text-xs">Fale Conosco</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight">
              Vamos restaurar <br />
              <span className="text-brand-green italic">o futuro juntos?</span>
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-pink border border-white/10">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-white/50 uppercase tracking-widest text-xs mb-2">Endereço</h4>
                  <p className="text-lg font-medium">{CONTACT.address}</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-pink border border-white/10">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-white/50 uppercase tracking-widest text-xs mb-2">Telefone</h4>
                  <div className="flex flex-col gap-1">
                    {CONTACT.phones.map(phone => (
                      <p key={phone} className="text-lg font-medium">{phone}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-pink border border-white/10">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-white/50 uppercase tracking-widest text-xs mb-2">E-mail</h4>
                  <p className="text-lg font-medium">{CONTACT.email}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href={`https://www.instagram.com/${CONTACT.instagram}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-brand-pink rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-brand-pink/20"
              >
                <Instagram size={24} />
              </a>
              <a 
                href={`https://wa.me/5567999719237`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-green text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-brand-green/90 transition-all shadow-lg shadow-brand-green/20"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Contact Form Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-8">Envie uma mensagem</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50">Nome</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-pink transition-colors" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50">E-mail</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-pink transition-colors" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">Assunto</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-pink transition-colors appearance-none">
                  <option className="bg-brand-dark">Recuperação Ambiental</option>
                  <option className="bg-brand-dark">Licenciamento</option>
                  <option className="bg-brand-dark">ESG / Governança</option>
                  <option className="bg-brand-dark">Educação Ambiental</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">Mensagem</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-pink transition-colors h-32 resize-none" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <button className="w-full bg-brand-pink text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-pink/90 transition-all shadow-xl shadow-brand-pink/20">
                Enviar Mensagem
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img 
              src="/flordeEmbauba2.jpeg" 
              alt="Flor de Embaúba Logo" 
              className="w-12 h-12 object-contain rounded-full bg-white p-1"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold leading-tight">Flor de Embaúba</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-pink font-bold">Soluções Ambientais</span>
            </div>
          </div>

          <p className="text-white/40 text-sm text-center md:text-left">
            © 2026 Flor de Embaúba. Todos os direitos reservados. <br className="md:hidden" />
            Desenvolvido com ciência e paixão.
          </p>

          <button 
            onClick={scrollToTop}
            className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10 group"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

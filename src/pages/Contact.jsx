import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Send, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    const message = `Consulta Vanessa Vasconcellos:\nNome: ${formData.nome}\nEmail: ${formData.email}\nAssunto: ${formData.mensagem}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* Left Side: Contact Info */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <h2 className="text-sm uppercase tracking-[0.3em] text-pastel-brown font-semibold">Canais de Atendimento</h2>
            <h1 className="text-4xl md:text-5xl font-light text-pastel-charcoal leading-tight italic">Vamos iniciar uma conversa?</h1>
            <p className="text-pastel-charcoal/70 font-light text-lg leading-relaxed max-w-md">
              Sinta-se à vontade para entrar em contato para agendamentos ou dúvidas sobre o processo terapêutico.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 border border-gray-100 flex items-center justify-center text-gray-300">
                <Mail size={18} strokeWidth={1} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-pastel-charcoal/50 mb-1">Email</h4>
                <p className="text-pastel-charcoal/60 font-light">contato@vanessavasconcellos.com.br</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 border border-gray-100 flex items-center justify-center text-gray-300">
                <MapPin size={18} strokeWidth={1} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-pastel-charcoal/50 mb-1">Localização</h4>
                <p className="text-pastel-charcoal/60 font-light">Atendimento Presencial e Online</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 pt-4">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-gray-100 flex items-center justify-center text-gray-300 hover:text-pastel-brown hover:border-pastel-brown transition-all"
            >
              <MessageCircle size={20} strokeWidth={1} />
            </a>
            <a
              href="https://instagram.com/vanessa_vasconcellos"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-gray-100 flex items-center justify-center text-gray-300 hover:text-pastel-brown hover:border-pastel-brown transition-all"
            >
              <Instagram size={20} strokeWidth={1} />
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="bg-gray-50/50 p-8 md:p-12 border border-gray-100 rounded-sm">
            <form onSubmit={handleWhatsAppRedirect} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Nome Completo</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-pastel-brown outline-none transition-all font-light text-pastel-charcoal"
                    placeholder="Seu nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">E-mail Corporativo</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-pastel-brown outline-none transition-all font-light text-pastel-charcoal"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Assunto / Mensagem</label>
                <textarea
                  required
                  rows="4"
                  className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-pastel-brown outline-none transition-all font-light text-pastel-charcoal resize-none"
                  placeholder="Descreva brevemente sua necessidade"
                  value={formData.mensagem}
                  onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-pastel-charcoal text-white py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-pastel-charcoal/90 transition-all shadow-sm flex items-center justify-center space-x-3"
              >
                <span>Solicitar Contato</span>
                <Send size={14} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

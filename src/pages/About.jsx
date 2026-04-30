import { motion } from 'framer-motion';
import { User, Target, Zap, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-24"
      >
        <div className="text-center space-y-6">
          <h2 className="text-sm uppercase tracking-[0.3em] text-pastel-brown font-semibold">Minha Trajetória</h2>
          <h1 className="text-4xl md:text-5xl font-light text-pastel-charcoal leading-tight">Vanessa Vasconcellos</h1>
          <div className="w-12 h-[1px] bg-pastel-rose/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div className="relative group">
            <div className="aspect-[4/5] bg-gray-50 overflow-hidden rounded-sm">
              <div className="w-full h-full flex items-center justify-center text-pastel-rose/20">
                <User size={120} strokeWidth={0.5} />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-pastel-rose/20 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
          </div>
          
          <div className="space-y-8 text-pastel-charcoal font-light text-lg leading-relaxed">
            <p>
              Sou Vanessa Vasconcellos, psicóloga clínica com foco em intervenções baseadas em evidências para a regulação emocional e o desenvolvimento da resiliência psíquica.
            </p>
            <p>
              Meu trabalho é fundamentado na premissa de que a saúde mental é um equilíbrio dinâmico entre o autoconhecimento profundo e a aplicação prática de ferramentas de enfrentamento.
            </p>
            <p>
              Com especialização em técnicas de manejo de estresse e regulação do sistema nervoso, ofereço um acompanhamento estruturado para quem busca não apenas alívio sintomático, mas uma transformação sustentável em sua qualidade de vida.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-gray-100">
          <div className="space-y-6 group">
            <div className="w-12 h-12 flex items-center justify-center text-pastel-brown group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck size={32} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-medium text-pastel-charcoal tracking-wide">Ética e Acolhimento</h3>
            <p className="text-pastel-charcoal/70 font-light leading-relaxed">Um ambiente de absoluta confidencialidade e respeito à individualidade de cada processo terapêutico.</p>
          </div>
          <div className="space-y-6 group">
            <div className="w-12 h-12 flex items-center justify-center text-pastel-brown group-hover:scale-110 transition-transform duration-300">
              <Zap size={32} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-medium text-pastel-charcoal tracking-wide">Regulação Prática</h3>
            <p className="text-pastel-charcoal/70 font-light leading-relaxed">Foco no desenvolvimento de estratégias concretas para a modulação de estados de ansiedade e estresse.</p>
          </div>
          <div className="space-y-6 group">
            <div className="w-12 h-12 flex items-center justify-center text-pastel-brown group-hover:scale-110 transition-transform duration-300">
              <Target size={32} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-medium text-pastel-charcoal tracking-wide">Foco em Resultados</h3>
            <p className="text-pastel-charcoal/70 font-light leading-relaxed">Abordagem direcionada a objetivos claros, promovendo autonomia e evolução contínua.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

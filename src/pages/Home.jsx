import { motion } from 'framer-motion';

const Butterfly = ({ delay, style }) => {
  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{
        x: [0, 40, -20, 30, 0],
        y: [0, -40, -80, -40, 0],
        rotateX: [0, 45, 0, 45, 0],
        rotateY: [0, 45, 0, 45, 0],
        opacity: [0.3, 0.5, 0.4, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
      className="absolute pointer-events-none"
      style={style}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-pastel-rose opacity-40">
        <path d="M12 10c-.5-2-2-4-4-4S4 8 4 10s2 4 4 4 3.5-2 4-4zm0 0c.5-2 2-4 4-4s4 2 4 4-2 4-4 4-3.5-2-4-4z" />
      </svg>
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="relative min-h-[calc(100vh-64px)] w-full flex items-center justify-center overflow-hidden bg-ochre-light">
      
      {/* Background Tree - Large, B&W, Subtle */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.05] grayscale pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-[120%] h-[120%] md:w-[80%] md:h-[80%] max-w-none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 180 Q100 140 100 100 M100 140 Q80 120 60 130 M100 120 Q120 100 140 110 M100 100 Q85 80 70 90 M100 90 Q115 70 130 80 M100 80 Q90 60 100 40" stroke="black" strokeWidth="2" fill="none" />
          <circle cx="60" cy="130" r="15" fill="black" />
          <circle cx="140" cy="110" r="18" fill="black" />
          <circle cx="70" cy="90" r="12" fill="black" />
          <circle cx="130" cy="80" r="14" fill="black" />
          <circle cx="100" cy="40" r="20" fill="black" />
        </svg>
      </div>

      {/* Interactive Butterflies */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Butterfly delay={0} style={{ top: '20%', left: '15%' }} />
        <Butterfly delay={2} style={{ top: '45%', left: '75%' }} />
        <Butterfly delay={4} style={{ top: '70%', left: '30%' }} />
        <Butterfly delay={1} style={{ top: '15%', left: '60%' }} />
        <Butterfly delay={5} style={{ top: '60%', left: '85%' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <h1 className="font-handwriting text-7xl md:text-9xl text-pastel-brown tracking-tight">
            Vanessa Vasconcellos
          </h1>
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-xl md:text-2xl font-light text-pastel-charcoal uppercase tracking-[0.2em]">
              Psicologia Clínica & Regulação Psíquica
            </h2>
            <p className="text-lg text-pastel-brown/80 font-light leading-relaxed">
              Um espaço de acolhimento e desenvolvimento pessoal, focado no equilíbrio emocional e bem-estar integral.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-8"
          >
            <a 
              href="/sobre" 
              className="inline-block px-10 py-4 border border-pastel-brown text-pastel-brown hover:bg-pastel-brown hover:text-white transition-all duration-500 tracking-widest text-sm uppercase font-medium rounded-sm"
            >
              Explorar Abordagem
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Subtle Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
    </div>
  );
};

export default Home;

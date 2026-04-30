import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookText, CheckCircle2, Moon, Sun, Wind, Activity, LogOut, Plus, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Platform = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('diario');
  const [diaryEntry, setDiaryEntry] = useState('');
  const [entries, setEntries] = useState(() => {
    try {
      const saved = localStorage.getItem('diaryEntries');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Error parsing diary entries:", e);
      return [];
    }
  });

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    if (auth !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const saveEntry = () => {
    if (!diaryEntry.trim()) return;
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }),
      text: diaryEntry
    };
    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem('diaryEntries', JSON.stringify(updatedEntries));
    setDiaryEntry('');
  };

  const tasks = [
    { id: 1, title: 'Ciclo de Respiração', description: 'Técnica 4-7-8 para redução imediata de cortisol.', icon: <Wind size={24} />, color: '#98c1d9' }, // pastel-blue
    { id: 2, title: 'Check-in Somático', description: 'Monitoramento de tensões musculares e pontos de pressão.', icon: <Activity size={24} />, color: '#9caf88' }, // pastel-sage
    { id: 3, title: 'Higiene Mental', description: 'Exercício de visualização para encerramento do dia.', icon: <Moon size={24} />, color: '#c9ada7' }, // pastel-rose
    { id: 4, title: 'Registro de Gratidão', description: 'Identificação de 3 pilares de suporte no dia atual.', icon: <Sun size={24} />, color: '#8d7b6d' }, // pastel-brown
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        
        {/* Header - Adaptive Layout */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
          <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-light text-pastel-charcoal tracking-tight">Painel de Regulação</h1>
            <p className="text-sm text-gray-400 uppercase tracking-widest">Espaço Privado / Vanessa Vasconcellos</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-2 text-gray-400 hover:text-pastel-charcoal transition-colors text-sm font-medium border border-gray-200 px-4 py-2 rounded-sm"
          >
            <LogOut size={16} />
            <span>Encerrar Sessão</span>
          </button>
        </header>

        {/* Navigation Tabs */}
        <div className="flex flex-col sm:flex-row gap-2 mb-10 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('diario')}
            className={`px-6 py-4 text-sm font-medium tracking-wider transition-all relative ${
              activeTab === 'diario' ? 'text-pastel-charcoal' : 'text-gray-300 hover:text-gray-400'
            }`}
          >
            MEU DIÁRIO
            {activeTab === 'diario' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 w-full h-0.5 bg-pastel-brown" />}
          </button>
          <button
            onClick={() => setActiveTab('tarefas')}
            className={`px-6 py-4 text-sm font-medium tracking-wider transition-all relative ${
              activeTab === 'tarefas' ? 'text-pastel-charcoal' : 'text-gray-300 hover:text-gray-400'
            }`}
          >
            TAREFAS TÉCNICAS
            {activeTab === 'tarefas' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 w-full h-0.5 bg-pastel-brown" />}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'diario' ? (
            <motion.div
              key="diario"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10"
            >
              {/* Entry Section */}
              <div className="lg:col-span-8 space-y-8">
                <div className="bg-white p-6 md:p-10 border border-gray-100 rounded-sm">
                  <h3 className="text-lg font-medium mb-6 text-pastel-charcoal">Nova Reflexão</h3>
                  <textarea
                    className="w-full h-40 p-0 border-none focus:ring-0 outline-none text-pastel-charcoal font-light text-lg placeholder:text-gray-200 resize-none"
                    placeholder="Inicie sua escrita aqui..."
                    value={diaryEntry}
                    onChange={(e) => setDiaryEntry(e.target.value)}
                  ></textarea>
                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={saveEntry}
                      className="flex items-center space-x-2 bg-pastel-brown text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-pastel-brown/90 transition-all rounded-sm"
                    >
                      <Plus size={16} />
                      <span>Salvar Registro</span>
                    </button>
                  </div>
                </div>

                {/* Past Entries */}
                <div className="space-y-6">
                  <h3 className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em]">Histórico de Atividade</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {entries.length === 0 ? (
                      <div className="p-12 text-center border border-dashed border-gray-100 rounded-sm">
                        <p className="text-gray-300 text-sm font-light italic">Nenhum registro encontrado no histórico.</p>
                      </div>
                    ) : (
                      entries.map(entry => (
                        <div key={entry.id} className="bg-white p-6 border border-gray-100 rounded-sm hover:border-gray-200 transition-colors">
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-[10px] font-bold text-pastel-brown tracking-[0.2em] uppercase">{entry.date}</span>
                          </div>
                          <p className="text-pastel-charcoal font-light leading-relaxed text-sm whitespace-pre-wrap">{entry.text}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Side Info */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-pastel-charcoal text-white p-8 rounded-sm">
                  <BookText className="mb-6 opacity-30" size={32} strokeWidth={1} />
                  <h4 className="text-lg font-medium mb-4 tracking-wide">Diretriz de Escrita</h4>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">
                    A escrita expressiva é uma ferramenta clínica para a descompressão emocional. Utilize este espaço sem preocupações formais.
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="tarefas"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {tasks.map(task => (
                <div key={task.id} className="bg-white p-8 border border-gray-100 rounded-sm hover:border-pastel-brown transition-all group cursor-pointer">
                  <div className="mb-6" style={{ color: task.color }}>
                    {task.icon}
                  </div>
                  <h3 className="text-lg font-medium text-pastel-charcoal mb-2 tracking-wide">{task.title}</h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">{task.description}</p>
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-gray-300 group-hover:text-pastel-brown transition-colors">
                    <span>Executar Protocolo</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Platform;

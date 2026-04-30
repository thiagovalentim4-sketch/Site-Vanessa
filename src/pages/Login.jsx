import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'paz') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/plataforma');
    } else {
      setError('Credenciais inválidas.');
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 bg-gray-50/30">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white p-12 border border-gray-100 shadow-sm"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-pastel-rose/10 rounded-full flex items-center justify-center mx-auto mb-6 text-pastel-rose">
            <Lock size={24} strokeWidth={1} />
          </div>
          <h2 className="text-2xl font-light text-pastel-charcoal tracking-tight">Acesso à Plataforma</h2>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-2">Área Privada de Regulação</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-8">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Senha de Acesso</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-pastel-brown outline-none transition-all font-light text-pastel-charcoal text-center tracking-[0.3em]"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
            />
          </div>
          
          {error && (
            <p className="text-red-300 text-[10px] text-center font-bold uppercase tracking-widest">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-pastel-brown text-white py-4 text-[10px] font-bold uppercase tracking-[0.3em] flex items-center justify-center space-x-3 hover:bg-pastel-brown/90 transition-all shadow-sm"
          >
            <span>Autenticar</span>
            <ArrowRight size={14} />
          </button>
        </form>

        <p className="mt-12 text-center text-[10px] font-light text-gray-400 leading-relaxed italic">
          O acesso é restrito a pacientes em acompanhamento ativo.<br/>
          Caso tenha esquecido sua senha, contate o suporte.
        </p>
      </motion.div>
    </div>
  );
};

export default Login;

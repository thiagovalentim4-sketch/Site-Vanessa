import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Platform from './pages/Platform';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-white">
        {/* Navigation */}
        <nav className="bg-white/90 backdrop-blur-md border-b border-gray-50 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="font-handwriting text-3xl font-bold text-pastel-brown hover:text-pastel-brown/80 transition-colors">
                  Vanessa Vasconcellos
                </Link>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-12 items-center">
                <Link to="/" className="text-xs font-bold uppercase tracking-[0.2em] text-pastel-charcoal hover:text-pastel-brown transition-colors">Início</Link>
                <Link to="/sobre" className="text-xs font-bold uppercase tracking-[0.2em] text-pastel-charcoal hover:text-pastel-brown transition-colors">Sobre</Link>
                <Link to="/contato" className="text-xs font-bold uppercase tracking-[0.2em] text-pastel-charcoal hover:text-pastel-brown transition-colors">Contato</Link>
                <Link to="/login" className="border border-pastel-brown text-pastel-brown px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-pastel-brown hover:text-white transition-all">Área do Paciente</Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-pastel-charcoal p-2" aria-label="Menu">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-50 px-6 pt-4 pb-10 space-y-4 shadow-xl">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold uppercase tracking-widest text-pastel-charcoal">Home</Link>
              <Link to="/sobre" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold uppercase tracking-widest text-pastel-charcoal">Sobre</Link>
              <Link to="/contato" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold uppercase tracking-widest text-pastel-charcoal">Contato</Link>
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold uppercase tracking-widest text-pastel-brown pt-4">Área do Paciente</Link>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/plataforma" element={<Platform />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-50/50 py-12 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-pastel-charcoal/40">
              &copy; 2026 Vanessa Vasconcellos - Psicóloga Clínica
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

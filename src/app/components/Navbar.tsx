import { useState } from 'react';
import { Menu, X, Beaker } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="bg-blue-600 p-2 rounded-lg">
              <Beaker className="size-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">Lab. Arauz Reyes</span>
              <span className="text-xs text-gray-600 hidden sm:block">Laboratorio Clínico</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Contacto
            </button>
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Agendar Cita
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 transition-colors text-left px-4 py-2">
                Inicio
              </button>
              <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-blue-600 transition-colors text-left px-4 py-2">
                Servicios
              </button>
              <button onClick={() => scrollToSection('nosotros')} className="text-gray-700 hover:text-blue-600 transition-colors text-left px-4 py-2">
                Nosotros
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-blue-600 transition-colors text-left px-4 py-2">
                Contacto
              </button>
              <button 
                onClick={() => scrollToSection('contacto')} 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mx-4"
              >
                Agendar Cita
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Sun, Moon } from 'lucide-react';
import { Logo } from './Logo';
import { getBudgetWhatsAppUrl, CONTACT_INFO } from '../utils/whatsapp';
import { ThemeVariant } from '../types';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  themeVariant: ThemeVariant;
  onToggleVariant: (variant: ThemeVariant) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  themeVariant,
  onToggleVariant,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'productos', label: 'Productos' },
    { id: 'trabajos', label: 'Trabajos' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  const isWhite = themeVariant === 'white';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isWhite
          ? isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-zinc-200'
            : 'bg-white py-4 border-b border-zinc-200'
          : isScrolled
          ? 'bg-[#141518]/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10'
          : 'bg-[#141518] py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('inicio');
          }}
          className="flex items-center group cursor-pointer focus:outline-none"
          aria-label="Ir al inicio de Click Revestimientos"
        >
          <Logo
            variant="full"
            theme={isWhite ? 'light' : 'dark'}
            size="md"
            showTagline={false}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors focus:outline-none cursor-pointer ${
                  isActive
                    ? isWhite
                      ? 'text-[#FF5500] bg-[#FF5500]/10 font-bold'
                      : 'text-[#FF5500] bg-white/5'
                    : isWhite
                    ? 'text-zinc-700 hover:text-[#141518] hover:bg-zinc-100'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Variant Switcher & CTA Button (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Variant Switcher (Blanco vs Oscuro) */}
          <div
            className={`flex items-center p-1 rounded-xl border text-xs font-bold transition-colors ${
              isWhite
                ? 'bg-zinc-100 border-zinc-300 text-zinc-700'
                : 'bg-white/10 border-white/10 text-zinc-300'
            }`}
            title="Cambiar variante de color"
          >
            <button
              onClick={() => onToggleVariant('white')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                isWhite
                  ? 'bg-white text-[#141518] shadow-sm font-extrabold'
                  : 'text-zinc-400 hover:text-white'
              }`}
              id="switch-variant-white-desktop"
            >
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              <span>Blanco</span>
            </button>
            <button
              onClick={() => onToggleVariant('dark')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                !isWhite
                  ? 'bg-[#141518] text-white shadow-sm font-extrabold'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
              id="switch-variant-dark-desktop"
            >
              <Moon className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Oscuro</span>
            </button>
          </div>

          <a
            href={getBudgetWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF5500] hover:bg-[#e64d00] text-white px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg focus:outline-none transform hover:-translate-y-0.5 active:translate-y-0"
            id="header-cta-btn"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Solicitar presupuesto</span>
          </a>
        </div>

        {/* Mobile Right Controls: Variant Switcher + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          {/* Quick toggle on mobile header */}
          <button
            onClick={() => onToggleVariant(isWhite ? 'dark' : 'white')}
            className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1 border transition-colors ${
              isWhite
                ? 'bg-zinc-100 text-zinc-800 border-zinc-300'
                : 'bg-white/10 text-zinc-200 border-white/10'
            }`}
            title={`Cambiar a variante ${isWhite ? 'oscura' : 'blanca'}`}
            id="switch-variant-mobile-quick"
          >
            {isWhite ? (
              <Moon className="w-4 h-4 text-[#FF5500]" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2.5 rounded-lg transition-colors focus:outline-none cursor-pointer ${
              isWhite
                ? 'text-zinc-800 hover:bg-zinc-100'
                : 'text-zinc-300 hover:text-white hover:bg-white/10'
            }`}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl ${
            isWhite ? 'bg-white border-zinc-200' : 'bg-[#141518] border-white/10'
          }`}
        >
          {/* Selector de variante en menú móvil */}
          <div className="mb-3 pb-3 border-b border-zinc-200/50 flex items-center justify-between">
            <span className={`text-xs font-bold uppercase tracking-wider ${isWhite ? 'text-zinc-500' : 'text-zinc-400'}`}>
              Variante de diseño:
            </span>
            <div
              className={`flex items-center p-1 rounded-xl border text-xs font-bold ${
                isWhite ? 'bg-zinc-100 border-zinc-300' : 'bg-white/10 border-white/10'
              }`}
            >
              <button
                onClick={() => onToggleVariant('white')}
                className={`px-3 py-1 rounded-lg flex items-center gap-1.5 ${
                  isWhite ? 'bg-white text-[#141518] shadow-sm font-extrabold' : 'text-zinc-400'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>Blanco</span>
              </button>
              <button
                onClick={() => onToggleVariant('dark')}
                className={`px-3 py-1 rounded-lg flex items-center gap-1.5 ${
                  !isWhite ? 'bg-[#141518] text-white shadow-sm font-extrabold' : 'text-zinc-600'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>Oscuro</span>
              </button>
            </div>
          </div>

          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold transition-colors text-left ${
                    isActive
                      ? isWhite
                        ? 'bg-[#FF5500]/10 text-[#FF5500] font-bold'
                        : 'bg-white/10 text-[#FF5500]'
                      : isWhite
                      ? 'text-zinc-800 hover:bg-zinc-100'
                      : 'text-zinc-200 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#FF5500]" />}
                </button>
              );
            })}
          </nav>

          <div className={`mt-4 pt-4 border-t flex flex-col gap-2.5 ${isWhite ? 'border-zinc-200' : 'border-white/10'}`}>
            <a
              href={getBudgetWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#FF5500] hover:bg-[#e64d00] text-white py-3 px-4 rounded-lg text-sm font-bold tracking-wide transition-all shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Solicitar presupuesto por WhatsApp</span>
            </a>
            <div className={`text-center text-xs mt-1 ${isWhite ? 'text-zinc-500' : 'text-zinc-400'}`}>
              Atención directa en {CONTACT_INFO.serviceArea}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

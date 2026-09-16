import React from 'react';
import { Sun, Moon, Palette } from 'lucide-react';
import { ThemeVariant } from '../types';

interface VariantSwitcherProps {
  themeVariant: ThemeVariant;
  onToggleVariant: (variant: ThemeVariant) => void;
}

export const VariantSwitcher: React.FC<VariantSwitcherProps> = ({
  themeVariant,
  onToggleVariant,
}) => {
  const isWhite = themeVariant === 'white';

  return (
    <aside
      aria-label="Selector de estilo visual"
      className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-1.5 p-1.5 bg-white/95 backdrop-blur-md text-[#141518] rounded-2xl shadow-xl border border-zinc-200 text-xs font-bold transition-all"
    >
      <div className="flex items-center gap-1.5 px-2.5 py-1 text-zinc-500 font-semibold border-r border-zinc-200">
        <Palette className="w-3.5 h-3.5 text-[#FF5500]" />
        <span className="hidden md:inline">Variante:</span>
      </div>

      <button
        onClick={() => onToggleVariant('white')}
        className={`flex items-center gap-1 px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
          isWhite
            ? 'bg-[#141518] text-white shadow-sm font-extrabold'
            : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
        }`}
        title="Ver versión en color blanco"
        id="floating-switcher-white"
      >
        <Sun className="w-3.5 h-3.5 text-amber-400" />
        <span>Blanco</span>
      </button>

      <button
        onClick={() => onToggleVariant('dark')}
        className={`flex items-center gap-1 px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
          !isWhite
            ? 'bg-[#141518] text-white shadow-sm font-extrabold'
            : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
        }`}
        title="Ver versión en fondo oscuro"
        id="floating-switcher-dark"
      >
        <Moon className="w-3.5 h-3.5 text-[#FF5500]" />
        <span>Oscuro</span>
      </button>
    </aside>
  );
};

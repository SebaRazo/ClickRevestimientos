import React from 'react';
import { MessageCircle, ArrowDown, MapPin, CheckCircle2 } from 'lucide-react';
import { getBudgetWhatsAppUrl, CONTACT_INFO } from '../utils/whatsapp';
import { ThemeVariant } from '../types';

interface HeroProps {
  onExploreProducts: () => void;
  themeVariant: ThemeVariant;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, themeVariant }) => {
  const isWhite = themeVariant === 'white';

  return (
    <section
      id="inicio"
      className={`relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden transition-colors duration-300 ${
        isWhite
          ? 'bg-gradient-to-b from-[#FAFAFA] via-white to-zinc-50 text-[#141518] border-b border-zinc-200'
          : 'bg-[#141518] text-white'
      }`}
    >
      {/* Background with subtle architectural texture overlay */}
      <div className={`absolute inset-0 z-0 ${isWhite ? 'opacity-40' : 'opacity-25'}`}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke={isWhite ? '#141518' : '#FFFFFF'}
                strokeWidth="0.5"
                strokeOpacity={isWhite ? '0.07' : '0.12'}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      {/* Subtle radial lighting for architectural depth */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] rounded-full blur-3xl pointer-events-none ${
          isWhite ? 'bg-[#FF5500]/6' : 'bg-[#FF5500]/10'
        }`}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Badge: Reconquista y zona */}
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 shadow-sm ${
            isWhite
              ? 'bg-white border border-zinc-200 text-zinc-800'
              : 'bg-white/10 border border-white/15 text-zinc-200'
          }`}
        >
          <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
          <span>{CONTACT_INFO.serviceArea}</span>
          <span className={isWhite ? 'text-zinc-300' : 'text-zinc-500'}>•</span>
          <span className={isWhite ? 'text-zinc-600 font-normal' : 'text-zinc-300 font-normal'}>
            Santa Fe, Argentina
          </span>
        </div>

        {/* Título Principal */}
        <h1
          className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight sm:leading-none ${
            isWhite ? 'text-[#141518]' : 'text-white'
          }`}
        >
          Transformá tus espacios con{' '}
          <span className={`inline-block font-black italic ${isWhite ? 'text-[#141518]' : 'text-white'}`}>
            Click
            <span className="text-[#FF5500] not-italic">!</span>
          </span>
        </h1>

        {/* Subtítulo */}
        <p
          className={`mt-6 text-lg sm:text-xl max-w-2xl font-normal leading-relaxed ${
            isWhite ? 'text-zinc-600' : 'text-zinc-300'
          }`}
        >
          Revestimientos en seco para renovar tus ambientes de forma rápida, práctica y duradera.
        </p>

        {/* Frase de marca destacada */}
        <div
          className={`mt-4 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold tracking-wider uppercase ${
            isWhite ? 'text-zinc-700' : 'text-zinc-400'
          }`}
        >
          <span className={isWhite ? 'text-zinc-800 font-bold' : 'text-zinc-200'}>Rápido</span>
          <span className="text-[#FF5500] font-bold">·</span>
          <span className={isWhite ? 'text-zinc-800 font-bold' : 'text-zinc-200'}>Práctico</span>
          <span className="text-[#FF5500] font-bold">·</span>
          <span className={isWhite ? 'text-zinc-800 font-bold' : 'text-zinc-200'}>Duradero</span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Botón Principal: Naranja WhatsApp */}
          <a
            href={getBudgetWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FF5500] hover:bg-[#e64d00] text-white px-8 py-4 rounded-xl text-base font-bold tracking-wide transition-all duration-200 shadow-xl shadow-[#FF5500]/20 hover:shadow-2xl hover:shadow-[#FF5500]/30 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            id="hero-budget-cta"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Pedir presupuesto</span>
          </a>

          {/* Botón Secundario: Ver productos */}
          <button
            onClick={onExploreProducts}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold tracking-wide transition-all duration-200 cursor-pointer focus:outline-none ${
              isWhite
                ? 'bg-white hover:bg-zinc-100 text-zinc-800 border border-zinc-300 shadow-sm'
                : 'bg-white/10 hover:bg-white/15 text-white border border-white/20'
            }`}
            id="hero-explore-cta"
          >
            <span>Ver productos</span>
            <ArrowDown className={`w-4 h-4 ${isWhite ? 'text-zinc-600' : 'text-zinc-300'}`} />
          </button>
        </div>

        {/* Key trust bullets */}
        <div
          className={`mt-12 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left w-full max-w-3xl ${
            isWhite ? 'border-t border-zinc-200' : 'border-t border-white/10'
          }`}
        >
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
            <span className={isWhite ? 'text-zinc-700' : 'text-zinc-300'}>Sin obra húmeda</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
            <span className={isWhite ? 'text-zinc-700' : 'text-zinc-300'}>Resistente al agua</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
            <span className={isWhite ? 'text-zinc-700' : 'text-zinc-300'}>Colocación veloz</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
            <span className={isWhite ? 'text-zinc-700' : 'text-zinc-300'}>Cero mantenimiento</span>
          </div>
        </div>
      </div>
    </section>
  );
};

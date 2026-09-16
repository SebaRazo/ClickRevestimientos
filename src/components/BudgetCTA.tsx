import React from 'react';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getBudgetWhatsAppUrl, CONTACT_INFO } from '../utils/whatsapp';
import { ThemeVariant } from '../types';

interface BudgetCTAProps {
  themeVariant?: ThemeVariant;
}

export const BudgetCTA: React.FC<BudgetCTAProps> = ({ themeVariant = 'white' }) => {
  const isWhite = themeVariant === 'white';

  return (
    <section
      className={`py-20 sm:py-24 relative overflow-hidden transition-colors duration-300 ${
        isWhite
          ? 'bg-gradient-to-b from-zinc-50 via-white to-zinc-50 text-[#141518] border-y border-zinc-200'
          : 'bg-[#141518] text-white'
      }`}
    >
      {/* Visual background pattern */}
      <div className={`absolute inset-0 pointer-events-none ${isWhite ? 'opacity-30' : 'opacity-10'}`}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ctaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect
                width="40"
                height="40"
                fill="none"
                stroke={isWhite ? '#141518' : '#FFFFFF'}
                strokeWidth="0.5"
                strokeOpacity={isWhite ? '0.08' : '0.2'}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaGrid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span
          className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#FF5500] mb-4 border ${
            isWhite ? 'bg-white border-zinc-200 shadow-sm' : 'bg-white/10 border-white/10'
          }`}
        >
          Asesoramiento sin cargo
        </span>

        <h2
          className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight ${
            isWhite ? 'text-[#141518]' : 'text-white'
          }`}
        >
          ¿Tenés un proyecto en mente?
        </h2>

        <p
          className={`mt-4 text-base sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed ${
            isWhite ? 'text-zinc-600' : 'text-zinc-300'
          }`}
        >
          Contanos qué espacio querés renovar y te ayudamos a encontrar la mejor opción.
        </p>

        {/* Botón Naranja Grande */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getBudgetWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FF5500] hover:bg-[#e64d00] text-white px-8 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-bold tracking-wide transition-all shadow-xl shadow-[#FF5500]/25 hover:shadow-2xl hover:shadow-[#FF5500]/40 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            id="budget-cta-large-btn"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
            <span>Solicitar presupuesto por WhatsApp</span>
            <ArrowRight className="w-5 h-5 hidden sm:inline-block" />
          </a>
        </div>

        {/* Puntos de confianza rápidos */}
        <div
          className={`mt-10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm ${
            isWhite ? 'text-zinc-600' : 'text-zinc-400'
          }`}
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
            <span>Presupuestos rápidos por WhatsApp</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
            <span>Atención en {CONTACT_INFO.serviceArea}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
            <span>Sin compromiso de compra</span>
          </div>
        </div>
      </div>
    </section>
  );
};

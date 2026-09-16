import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl, CONTACT_INFO } from '../utils/whatsapp';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip flotante amigable */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#141518] text-white px-3.5 py-2 rounded-xl text-xs font-semibold shadow-xl border border-white/10 animate-in fade-in slide-in-from-right-2 duration-300">
          <span>¿Tenés dudas? Escribinos</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-zinc-400 hover:text-white transition-colors cursor-pointer p-0.5"
            aria-label="Ocultar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Botón flotante WhatsApp */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl shadow-black/25 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer relative"
        title="Consultar por WhatsApp con Click Revestimientos"
        id="floating-whatsapp-btn"
        aria-label="Abrir chat de WhatsApp con Click Revestimientos"
      >
        <span className="sr-only">Consultar por WhatsApp ({CONTACT_INFO.phoneFormatted})</span>
        <MessageCircle className="w-7 h-7 fill-current" />
        {/* Indicador de activo */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#FF5500] border-2 border-white rounded-full" />
      </a>
    </div>
  );
};

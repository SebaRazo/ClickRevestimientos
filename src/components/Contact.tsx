import React from 'react';
import { MessageCircle, Instagram, Facebook, MapPin, ExternalLink, Phone } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/whatsapp';

export const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-16 sm:py-24 bg-zinc-50 border-b border-zinc-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF5500]">
            Estamos cerca
          </span>
          <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-[#141518] tracking-tight">
            Canales de contacto
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 font-normal">
            Escribinos directamente para consultar stock, modelos y cotizaciones para tu proyecto.
          </p>
        </div>

        {/* Canales de Contacto Directos */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card WhatsApp (Principal) */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#FF5500] shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#FF5500] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
              Canal Principal
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-[#141518] text-[#FF5500] flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-xl font-bold text-[#141518]">WhatsApp</h3>
              <p className="text-xs text-zinc-500 mt-1">
                Atención rápida y envío de fotos/medidas
              </p>
              <div className="mt-4 flex items-center gap-2 text-lg font-bold text-zinc-900">
                <Phone className="w-4 h-4 text-[#FF5500]" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#FF5500] hover:bg-[#e64d00] text-white py-3 px-4 rounded-xl text-sm font-bold tracking-wide transition-all shadow-sm cursor-pointer"
                id="contact-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Escribir por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card Instagram */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 transition-all hover:shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center mb-4">
                <Instagram className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#141518]">Instagram</h3>
              <p className="text-xs text-zinc-500 mt-1">
                Nuevos ingresos, fotos de obras y novedades
              </p>
              <div className="mt-4 text-base font-semibold text-zinc-800">
                @{CONTACT_INFO.instagram}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-black text-white py-3 px-4 rounded-xl text-sm font-semibold transition-all cursor-pointer"
                id="contact-instagram-btn"
              >
                <span>Seguir en Instagram</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card Facebook */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 transition-all hover:shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1877F2] text-white flex items-center justify-center mb-4">
                <Facebook className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#141518]">Facebook</h3>
              <p className="text-xs text-zinc-500 mt-1">
                Página oficial de la comunidad y consultas
              </p>
              <div className="mt-4 text-base font-semibold text-zinc-800">
                {CONTACT_INFO.facebook}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100">
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-black text-white py-3 px-4 rounded-xl text-sm font-semibold transition-all cursor-pointer"
                id="contact-facebook-btn"
              >
                <span>Visitar Facebook</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Fila de Ubicación */}
        <div className="mt-10 max-w-2xl mx-auto p-5 rounded-xl bg-white border border-zinc-200 flex items-center justify-center gap-3 text-center">
          <MapPin className="w-5 h-5 text-[#FF5500] shrink-0" />
          <span className="text-sm font-semibold text-zinc-800">
            {CONTACT_INFO.locationFull} — Atención y envíos en {CONTACT_INFO.serviceArea}
          </span>
        </div>
      </div>
    </section>
  );
};

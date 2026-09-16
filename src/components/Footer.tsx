import React from 'react';
import { Logo } from './Logo';
import { Instagram, Facebook, MessageCircle, MapPin } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/whatsapp';
import { ThemeVariant } from '../types';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  themeVariant?: ThemeVariant;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, themeVariant = 'white' }) => {
  const currentYear = new Date().getFullYear();
  const isWhite = themeVariant === 'white';

  return (
    <footer
      className={`pt-16 pb-12 transition-colors duration-300 ${
        isWhite
          ? 'bg-zinc-100 text-[#141518] border-t border-zinc-200'
          : 'bg-[#141518] text-white border-t border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b ${
            isWhite ? 'border-zinc-200' : 'border-white/10'
          }`}
        >
          {/* Columna Marca */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Logo
              variant="full"
              theme={isWhite ? 'light' : 'dark'}
              size="lg"
              showTagline={true}
            />
            <p
              className={`mt-4 text-sm max-w-sm leading-relaxed ${
                isWhite ? 'text-zinc-600' : 'text-zinc-400'
              }`}
            >
              Venta y asesoramiento en revestimientos en seco. Soluciones prácticas y duraderas para renovar paredes y cielorrasos.
            </p>
            <div
              className={`mt-4 flex items-center gap-2 text-xs font-semibold ${
                isWhite ? 'text-zinc-700' : 'text-zinc-300'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>{CONTACT_INFO.locationFull}</span>
            </div>
          </div>

          {/* Columna Enlaces Rápidos */}
          <div className="md:col-span-4 flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF5500] mb-4">
              Navegación
            </h4>
            <ul
              className={`space-y-2.5 text-sm ${
                isWhite ? 'text-zinc-600' : 'text-zinc-300'
              }`}
            >
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className={`transition-colors cursor-pointer ${
                    isWhite ? 'hover:text-[#FF5500]' : 'hover:text-white'
                  }`}
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('productos')}
                  className={`transition-colors cursor-pointer ${
                    isWhite ? 'hover:text-[#FF5500]' : 'hover:text-white'
                  }`}
                >
                  Productos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('trabajos')}
                  className={`transition-colors cursor-pointer ${
                    isWhite ? 'hover:text-[#FF5500]' : 'hover:text-white'
                  }`}
                >
                  Trabajos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('nosotros')}
                  className={`transition-colors cursor-pointer ${
                    isWhite ? 'hover:text-[#FF5500]' : 'hover:text-white'
                  }`}
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacto')}
                  className={`transition-colors cursor-pointer ${
                    isWhite ? 'hover:text-[#FF5500]' : 'hover:text-white'
                  }`}
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Columna Redes & Contacto */}
          <div className="md:col-span-3 flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF5500] mb-4">
              Redes y Contacto
            </h4>
            <div
              className={`flex flex-col gap-3 text-sm ${
                isWhite ? 'text-zinc-700' : 'text-zinc-300'
              }`}
            >
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2.5 transition-colors ${
                  isWhite ? 'hover:text-[#FF5500]' : 'hover:text-white'
                }`}
              >
                <Instagram className="w-4 h-4 text-[#FF5500]" />
                <span>Instagram</span>
              </a>
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2.5 transition-colors ${
                  isWhite ? 'hover:text-[#FF5500]' : 'hover:text-white'
                }`}
              >
                <Facebook className="w-4 h-4 text-[#FF5500]" />
                <span>Facebook</span>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2.5 transition-colors ${
                  isWhite ? 'hover:text-[#FF5500]' : 'hover:text-white'
                }`}
              >
                <MessageCircle className="w-4 h-4 text-[#FF5500]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} Click Revestimientos. Todos los derechos reservados.</p>
          <p>{CONTACT_INFO.tagline}</p>
        </div>
      </div>
    </footer>
  );
};

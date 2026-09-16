import React from 'react';
import { MapPin, Shield, ThumbsUp, Truck } from 'lucide-react';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../utils/whatsapp';
import { ThemeVariant } from '../types';

interface AboutProps {
  themeVariant?: ThemeVariant;
}

export const About: React.FC<AboutProps> = ({ themeVariant = 'white' }) => {
  const isWhite = themeVariant === 'white';

  return (
    <section id="nosotros" className="py-16 sm:py-24 bg-white border-b border-zinc-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna Izquierda: Identidad de Marca */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div
              className={`p-6 sm:p-8 rounded-2xl shadow-xl border w-full max-w-sm transition-all ${
                isWhite
                  ? 'bg-zinc-50 border-zinc-200 text-zinc-900 shadow-zinc-200/50'
                  : 'bg-[#141518] text-white border-white/10'
              }`}
            >
              <Logo
                variant="full"
                theme={isWhite ? 'light' : 'dark'}
                size="lg"
                showTagline={true}
              />
              
              <div
                className={`mt-8 pt-6 border-t space-y-3.5 text-left ${
                  isWhite ? 'border-zinc-200 text-zinc-700' : 'border-white/10 text-zinc-300'
                }`}
              >
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <MapPin className="w-4 h-4 text-[#FF5500] shrink-0" />
                  <span><strong>Ubicación:</strong> {CONTACT_INFO.locationFull}</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <Truck className="w-4 h-4 text-[#FF5500] shrink-0" />
                  <span><strong>Cobertura:</strong> {CONTACT_INFO.serviceArea}</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <ThumbsUp className="w-4 h-4 text-[#FF5500] shrink-0" />
                  <span><strong>Atención:</strong> Asesoramiento personalizado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Texto Sobre Click */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF5500]">
              Identidad & Compromiso
            </span>
            <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-[#141518] tracking-tight">
              Sobre Click
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              <p>
                Somos un emprendimiento de Reconquista dedicado a ofrecer soluciones en revestimientos en seco para hogares, comercios y diferentes tipos de espacios.
              </p>
              <p>
                Nuestro objetivo es brindar alternativas prácticas, modernas y duraderas, acompañando a cada cliente para encontrar la mejor opción para su proyecto.
              </p>
              <p>
                Entendemos el valor de tu tiempo y la tranquilidad de renovar sin complicaciones. Por eso seleccionamos materiales de probada resistencia que resuelven problemas habituales como humedad de cimientos, cielorrasos deteriorados o paredes que necesitan una estética de vanguardia.
              </p>
            </div>

            {/* Badges de Compromiso */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#141518]">Calidad Garantizada</h4>
                  <p className="text-xs text-zinc-600 mt-0.5">
                    Materiales de primera calidad preparados para el clima de nuestra región.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#141518]">Cercanía y Confianza</h4>
                  <p className="text-xs text-zinc-600 mt-0.5">
                    Trato directo y atención personalizada en Reconquista y localidades vecinas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

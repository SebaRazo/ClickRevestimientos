import React from 'react';
import { Clock, Award, Palette, ShieldCheck } from 'lucide-react';

export const Presentation: React.FC = () => {
  const highlights = [
    {
      icon: Clock,
      title: 'Instalación práctica',
      description: 'Montaje rápido sin escombros ni obras interminables.',
    },
    {
      icon: Award,
      title: 'Excelente terminación',
      description: 'Acabados continuos, prolijos y de máxima calidad visual.',
    },
    {
      icon: Palette,
      title: 'Diferentes diseños',
      description: 'Variedad de texturas madera, mármol, acanalados y lisos.',
    },
    {
      icon: ShieldCheck,
      title: 'Fácil mantenimiento',
      description: 'Inmunes a la humedad, hongos y lavables en segundos.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest text-[#FF5500] uppercase">
            Soluciones en seco
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-[#141518] tracking-tight">
            Una nueva forma de renovar tus espacios
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            En Click Revestimientos ofrecemos soluciones prácticas y modernas para transformar ambientes interiores y exteriores. Trabajamos con diferentes opciones de revestimientos en seco adaptadas a cada proyecto.
          </p>
        </div>

        {/* 4 Beneficios visuales introductorios */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-zinc-50 border border-zinc-200/80 rounded-xl p-6 flex flex-col items-start transition-all duration-200 hover:border-zinc-300 hover:shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-[#141518] text-[#FF5500] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#141518] tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-zinc-600 leading-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Zap, Sparkles, SlidersHorizontal, CheckCircle } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefitsList = [
    {
      icon: Zap,
      title: 'Rápida instalación',
      description: 'Renová tus ambientes sin obras interminables.',
      detail: 'La colocación en seco reduce drásticamente los tiempos de trabajo y evita la suciedad de mezclas húmedas.',
    },
    {
      icon: Sparkles,
      title: 'Fácil mantenimiento',
      description: 'Materiales prácticos y fáciles de conservar.',
      detail: 'Superficies lavables e impermeables que no necesitan pintura constante ni se deterioran con la humedad.',
    },
    {
      icon: SlidersHorizontal,
      title: 'Variedad de diseños',
      description: 'Alternativas para diferentes estilos y ambientes.',
      detail: 'Formatos listonados, simil madera, mármol pulido, cielorrasos modulares y tonos contemporáneos.',
    },
    {
      icon: CheckCircle,
      title: 'Excelente terminación',
      description: 'Una solución moderna para renovar tus espacios.',
      detail: 'Encastres precisos y perfiles perimetrales que logran una estética arquitectónica prolija y duradera.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-zinc-100 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF5500]">
            Ventajas competitivas
          </span>
          <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-[#141518] tracking-tight">
            ¿Por qué elegir revestimientos en seco?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 font-normal">
            Una alternativa inteligente para actualizar hogares, quinchos y comercios en tiempo récord.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-zinc-200 flex flex-col justify-between transition-all duration-200 hover:border-zinc-300 hover:shadow-sm"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#141518] text-[#FF5500] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#141518] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[#FF5500]">
                    {item.description}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-1.5 text-xs font-bold text-zinc-400">
                  <span className="text-[#FF5500]">0{index + 1}</span>
                  <span>· Beneficio Click</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

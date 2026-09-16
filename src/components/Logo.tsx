import React from 'react';

interface LogoProps {
  variant?: 'full' | 'isotype' | 'horizontal' | 'compact';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  customSrc?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'dark',
  size = 'md',
  showTagline = true,
  className = '',
  customSrc,
}) => {
  // Si el usuario proporciona un archivo de imagen en el futuro
  if (customSrc) {
    return (
      <img
        src={customSrc}
        alt="Click Revestimientos"
        className={`object-contain ${className}`}
      />
    );
  }

  // Isotipo compacto "C!" (como el avatar de WhatsApp/Instagram en 1000482103.jpg)
  if (variant === 'isotype') {
    const sizeMap = {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-14 h-14',
      xl: 'w-20 h-20',
    };

    return (
      <div
        className={`relative inline-flex items-center justify-center rounded-xl bg-[#141518] shadow-sm select-none border border-white/10 ${sizeMap[size]} ${className}`}
        title="Click Revestimientos"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full p-1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Letra C en blanco */}
          <path
            d="M 52 28 C 47.5 26.5 43.5 26 38.5 26 C 25.5 26 16.5 35.5 16.5 50 C 16.5 64.5 25.5 74 38.5 74 C 44 74 48.5 73.2 53 71.8 L 54.5 60.2 C 50.5 61.6 46.8 62.4 42 62.4 C 32.5 62.4 27.5 56.5 27.5 50 C 27.5 43.5 32.5 37.6 42 37.6 C 46.2 37.6 49.5 38.4 53.5 39.8 Z"
            fill="#FFFFFF"
          />
          {/* Signo de exclamación ! en naranja */}
          <polygon
            points="62,26 75,26 71.5,55 64.5,55"
            fill="#FF5500"
          />
          <circle cx="68" cy="67" r="5.8" fill="#FF5500" />
        </svg>
      </div>
    );
  }

  // Logo horizontal o completo (Header y Footer)
  const isDarkTheme = theme === 'dark';
  const textColor = isDarkTheme ? 'text-white' : 'text-[#141518]';
  const subtextColor = isDarkTheme ? 'text-zinc-300' : 'text-zinc-700';
  const dotColor = isDarkTheme ? 'text-zinc-400' : 'text-zinc-500';

  const scaleClasses = {
    sm: 'scale-90 origin-left',
    md: 'scale-100',
    lg: 'scale-110 origin-left',
    xl: 'scale-125 origin-left',
  };

  return (
    <div
      className={`inline-flex items-center gap-3 select-none ${scaleClasses[size]} ${className}`}
    >
      {/* Isotipo C! como escudo icónico */}
      <div
        className={`w-10 h-10 rounded-xl bg-[#141518] flex items-center justify-center p-1 shadow-sm shrink-0 ${
          isDarkTheme ? 'border border-white/10' : 'border border-zinc-300 shadow-md'
        }`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 52 28 C 47.5 26.5 43.5 26 38.5 26 C 25.5 26 16.5 35.5 16.5 50 C 16.5 64.5 25.5 74 38.5 74 C 44 74 48.5 73.2 53 71.8 L 54.5 60.2 C 50.5 61.6 46.8 62.4 42 62.4 C 32.5 62.4 27.5 56.5 27.5 50 C 27.5 43.5 32.5 37.6 42 37.6 C 46.2 37.6 49.5 38.4 53.5 39.8 Z"
            fill="#FFFFFF"
          />
          <polygon
            points="62,26 75,26 71.5,55 64.5,55"
            fill="#FF5500"
          />
          <circle cx="68" cy="67" r="5.8" fill="#FF5500" />
        </svg>
      </div>

      {/* Tipografía de Marca */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline font-black tracking-tight text-2xl">
          <span className={`${textColor} italic tracking-tighter`}>Click</span>
          <span className="text-[#FF5500] text-3xl font-black italic ml-0.5">!</span>
        </div>
        <span
          className={`text-[10px] font-bold tracking-[0.22em] uppercase mt-1 ${subtextColor}`}
        >
          REVESTIMIENTOS EN SECO
        </span>
        {showTagline && (
          <span
            className={`text-[8.5px] font-medium tracking-wider mt-0.5 ${dotColor}`}
          >
            Rápido · Práctico · Duradero
          </span>
        )}
      </div>
    </div>
  );
};

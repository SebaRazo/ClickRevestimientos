import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { X, MessageCircle, Check, Ruler, Palette, Layers } from 'lucide-react';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (product) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [product, onClose]);

  if (!product) return null;

  const currentImage = product.imagenes[selectedImageIndex] || product.imagenes[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      id="product-modal-backdrop"
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[90vh] border border-zinc-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header con título y botón de cierre */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-zinc-50">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-[#141518] text-white rounded-md">
              {product.categoria}
            </span>
            <span className="text-xs text-zinc-500 font-medium">Click Revestimientos</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-[#141518] hover:bg-zinc-200 transition-colors focus:outline-none cursor-pointer"
            aria-label="Cerrar ventana"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cuerpo del Modal con Scroll */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Galería de imágenes (5 columnas) */}
            <div className="lg:col-span-6 flex flex-col gap-3">
              {/* Imagen Principal */}
              <div className="aspect-[4/3] w-full rounded-xl bg-zinc-100 overflow-hidden border border-zinc-200 flex items-center justify-center relative shadow-inner">
                <img
                  src={currentImage}
                  alt={product.nombre}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Selector de Miniaturas */}
              {product.imagenes.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {product.imagenes.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-20 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                        selectedImageIndex === idx
                          ? 'border-[#FF5500] ring-2 ring-[#FF5500]/20'
                          : 'border-zinc-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Vista ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Información del Producto (7 columnas) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141518] tracking-tight">
                  {product.nombre}
                </h2>

                <p className="mt-4 text-base text-zinc-600 leading-relaxed font-normal">
                  {product.descripcionCompleta || product.descripcion}
                </p>

                {/* Características destacadas */}
                {product.caracteristicas && product.caracteristicas.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-2.5 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#FF5500]" />
                      Características
                    </h4>
                    <ul className="space-y-2">
                      {product.caracteristicas.map((caract, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-700">
                          <Check className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                          <span>{caract}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Medidas */}
                {product.medidas && (
                  <div className="mt-5 p-3.5 rounded-lg bg-zinc-50 border border-zinc-200 flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                    <Ruler className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-zinc-900 block">Medidas y formatos:</span>
                      <span>{product.medidas}</span>
                    </div>
                  </div>
                )}

                {/* Colores / Modelos */}
                {product.colores && product.colores.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-2 flex items-center gap-1.5">
                      <Palette className="w-3.5 h-3.5 text-[#FF5500]" />
                      Colores y acabados disponibles
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {product.colores.map((color, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 text-zinc-800 border border-zinc-200"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Aplicaciones */}
                {product.aplicaciones && product.aplicaciones.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-1.5">
                      Ideal para:
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-600">
                      {product.aplicaciones.join(' · ')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer del Modal: Botón Destacado WhatsApp */}
        <div className="p-4 sm:p-5 bg-zinc-50 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-zinc-500 text-center sm:text-left">
            <span>¿Querés saber disponibilidad o asesoramiento para tu obra?</span>
          </div>

          <a
            href={getProductWhatsAppUrl(product.nombre)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF5500] hover:bg-[#e64d00] text-white px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg cursor-pointer"
            id="modal-whatsapp-btn"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

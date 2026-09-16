import React from 'react';
import { Product } from '../types';
import { MessageCircle, Eye } from 'lucide-react';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const mainImage = product.imagenes[0] || '';

  return (
    <div
      className="group bg-white rounded-xl border border-zinc-200 overflow-hidden flex flex-col transition-all duration-200 hover:shadow-md hover:border-zinc-300 relative"
      id={`product-card-${product.id}`}
    >
      {/* Contenedor de Imagen */}
      <div
        className="relative aspect-[4/3] bg-zinc-100 overflow-hidden cursor-pointer"
        onClick={() => onSelect(product)}
      >
        <img
          src={mainImage}
          alt={product.nombre}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Badge de Categoría */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-[#141518]/90 text-white rounded-md backdrop-blur-xs">
            {product.categoria}
          </span>
        </div>

        {/* Badge Destacado */}
        {product.destacado && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 text-[11px] font-bold bg-[#FF5500] text-white rounded-md shadow-xs">
              Destacado
            </span>
          </div>
        )}

        {/* Overlay sutil al hover con botón rápido */}
        <div className="absolute inset-0 bg-[#141518]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="inline-flex items-center gap-1.5 bg-white text-[#141518] px-4 py-2 rounded-lg text-xs font-bold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5" />
            Ver detalles
          </span>
        </div>
      </div>

      {/* Contenido de la Card */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3
            onClick={() => onSelect(product)}
            className="text-lg font-bold text-[#141518] hover:text-[#FF5500] transition-colors cursor-pointer line-clamp-1"
          >
            {product.nombre}
          </h3>
          <p className="mt-2 text-sm text-zinc-600 line-clamp-2 leading-relaxed">
            {product.descripcion}
          </p>
        </div>

        {/* Acciones */}
        <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center gap-2">
          {/* Botón Ver Producto */}
          <button
            onClick={() => onSelect(product)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-zinc-300 hover:bg-zinc-100 text-[#141518] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            <Eye className="w-4 h-4 text-zinc-500" />
            <span>Ver producto</span>
          </button>

          {/* Botón Consultar por WhatsApp */}
          <a
            href={getProductWhatsAppUrl(product.nombre)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-lg bg-[#FF5500] hover:bg-[#e64d00] text-white text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer"
            title="Consultar por WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar</span>
          </a>
        </div>
      </div>
    </div>
  );
};

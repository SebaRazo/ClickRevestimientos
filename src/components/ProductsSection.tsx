import React, { useState } from 'react';
import { Product, ProductCategory } from '../types';
import { PRODUCTOS, PRODUCT_CATEGORIES } from '../data/productos';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { Sparkles, LayoutGrid } from 'lucide-react';

interface ProductsSectionProps {
  initialFilter?: ProductCategory;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ initialFilter = 'Todos' }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(initialFilter);
  const [showOnlyFeatured, setShowOnlyFeatured] = useState<boolean>(false);
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  // Filtrado de productos
  const filteredProducts = PRODUCTOS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'Todos' || product.categoria === selectedCategory;
    const matchesFeatured = !showOnlyFeatured || product.destacado;
    return matchesCategory && matchesFeatured;
  });

  return (
    <section id="productos" className="py-16 sm:py-24 bg-zinc-50 border-b border-zinc-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la Sección */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF5500]">
            <span>Catálogo Click</span>
          </div>
          <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-[#141518] tracking-tight">
            Nuestros productos
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 font-normal">
            Encontrá la opción ideal para transformar tu espacio.
          </p>
        </div>

        {/* Filtros de Categorías & Toggle de Destacados */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-200 pb-6">
          {/* Pills de categorías */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {PRODUCT_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat && !showOnlyFeatured;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setShowOnlyFeatured(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-[#141518] text-white shadow-xs'
                      : 'bg-white text-zinc-700 hover:bg-zinc-200/80 border border-zinc-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Toggle de Destacados */}
          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <button
              onClick={() => {
                setShowOnlyFeatured(!showOnlyFeatured);
                if (!showOnlyFeatured) {
                  setSelectedCategory('Todos');
                }
              }}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors border cursor-pointer ${
                showOnlyFeatured
                  ? 'bg-[#FF5500] text-white border-[#FF5500]'
                  : 'bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-100'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Solo destacados</span>
            </button>

            {showOnlyFeatured && (
              <button
                onClick={() => setShowOnlyFeatured(false)}
                className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold text-zinc-600 hover:text-zinc-900 cursor-pointer"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Ver todos</span>
              </button>
            )}
          </div>
        </div>

        {/* Grid de Productos */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={(p) => setActiveModalProduct(p)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-zinc-200 mt-6">
            <p className="text-zinc-500 font-medium">
              No se encontraron productos en esta categoría.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Todos');
                setShowOnlyFeatured(false);
              }}
              className="mt-4 px-4 py-2 bg-[#141518] text-white rounded-lg text-sm font-bold cursor-pointer"
            >
              Restablecer filtros
            </button>
          </div>
        )}
      </div>

      {/* Modal de Detalle de Producto */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </section>
  );
};

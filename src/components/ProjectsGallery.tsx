import React, { useState } from 'react';
import { Project } from '../types';
import { TRABAJOS_DEMO } from '../data/trabajos';
import { MapPin, Layers, X, MessageCircle, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { getProjectWhatsAppUrl } from '../utils/whatsapp';

export const ProjectsGallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [filterCategory, setFilterCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'viviendas', label: 'Viviendas' },
    { id: 'comercios', label: 'Comercios' },
    { id: 'cielorrasos', label: 'Cielorrasos' },
    { id: 'exteriores', label: 'Exteriores' },
    { id: 'paredes', label: 'Paredes' },
  ];

  const filteredProjects = TRABAJOS_DEMO.filter((proj) => {
    if (filterCategory === 'todos') return true;
    return proj.categoria === filterCategory;
  });

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.imagenes.length);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.imagenes.length) % selectedProject.imagenes.length);
  };

  return (
    <section id="trabajos" className="py-16 sm:py-24 bg-white border-b border-zinc-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF5500]">
              Galería de Obras
            </span>
            <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-[#141518] tracking-tight">
              Nuestros trabajos
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-600 font-normal">
              Mirá cómo Click puede transformar un espacio.
            </p>
          </div>

          {/* Filtros de proyectos */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  filterCategory === cat.id
                    ? 'bg-[#141518] text-white'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Trabajos */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const coverImage = project.imagenes[0];
            return (
              <div
                key={project.id}
                onClick={() => openProjectModal(project)}
                className="group bg-zinc-50 rounded-xl border border-zinc-200 overflow-hidden flex flex-col cursor-pointer transition-all duration-200 hover:shadow-md hover:border-zinc-300"
                id={`project-${project.id}`}
              >
                {/* Imagen del trabajo con zoom hover */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                  <img
                    src={coverImage}
                    alt={project.titulo}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Badge Tipo Revestimiento */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-xs font-semibold bg-[#141518]/90 text-white rounded-md backdrop-blur-xs flex items-center gap-1">
                      <Layers className="w-3 h-3 text-[#FF5500]" />
                      <span>{project.tipoRevestimiento}</span>
                    </span>
                  </div>

                  {/* Icono de Ver en Grande */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 text-[#141518] flex items-center justify-center shadow-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Info del trabajo */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#141518] group-hover:text-[#FF5500] transition-colors">
                      {project.titulo}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-600 line-clamp-2 leading-relaxed">
                      {project.descripcion}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-500 font-medium">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
                      <span>{project.ubicacion}</span>
                    </div>
                    {project.imagenes.length > 1 && (
                      <span className="text-zinc-400">
                        {project.imagenes.length} fotos
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Lightbox de Trabajo Realizado */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeProjectModal();
          }}
        >
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col border border-zinc-200">
            {/* Header del Lightbox */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-zinc-50">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5500]">
                  {selectedProject.tipoRevestimiento}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#141518]">
                  {selectedProject.titulo}
                </h3>
              </div>
              <button
                onClick={closeProjectModal}
                className="p-2 rounded-lg text-zinc-400 hover:text-[#141518] hover:bg-zinc-200 transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Visor de Fotos */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-zinc-950 flex items-center justify-center overflow-hidden">
              <img
                src={selectedProject.imagenes[currentImageIndex]}
                alt={selectedProject.titulo}
                className="w-full h-full object-contain"
              />

              {/* Controles anterior / siguiente */}
              {selectedProject.imagenes.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
                    aria-label="Foto siguiente"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/70 text-white text-xs font-semibold">
                    {currentImageIndex + 1} / {selectedProject.imagenes.length}
                  </div>
                </>
              )}
            </div>

            {/* Footer con Descripción y CTA de WhatsApp */}
            <div className="p-6 bg-zinc-50 border-t border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-600 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>{selectedProject.ubicacion}</span>
                </div>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  {selectedProject.descripcion}
                </p>
              </div>

              <a
                href={getProjectWhatsAppUrl(selectedProject.titulo)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF5500] hover:bg-[#e64d00] text-white px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-all shadow-md shrink-0 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Consultar por obra similar</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

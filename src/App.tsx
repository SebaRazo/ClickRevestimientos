import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Presentation } from './components/Presentation';
import { ProductsSection } from './components/ProductsSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { Benefits } from './components/Benefits';
import { About } from './components/About';
import { BudgetCTA } from './components/BudgetCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { VariantSwitcher } from './components/VariantSwitcher';
import { ThemeVariant } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  // Variante inicial en color blanco, según solicitado por el usuario
  const [themeVariant, setThemeVariant] = useState<ThemeVariant>('white');

  // Navegación suave entre secciones
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Observador para detectar la sección activa en pantalla
  useEffect(() => {
    const sections = ['inicio', 'productos', 'trabajos', 'nosotros', 'contacto'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#141518] flex flex-col font-sans selection:bg-[#FF5500] selection:text-white">
      {/* 1. Header con logo y navegación + selector de variante */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        themeVariant={themeVariant}
        onToggleVariant={setThemeVariant}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero / Inicio */}
        <Hero
          onExploreProducts={() => handleNavigate('productos')}
          themeVariant={themeVariant}
        />

        {/* 2. Presentación */}
        <Presentation />

        {/* 3 & 4. Productos y Productos Destacados */}
        <ProductsSection />

        {/* 5. Trabajos Realizados */}
        <ProjectsGallery />

        {/* 6. Beneficios de Revestimientos en Seco */}
        <Benefits />

        {/* 7. Sobre Click */}
        <About themeVariant={themeVariant} />

        {/* 8. CTA de Presupuesto (Pre-footer) */}
        <BudgetCTA themeVariant={themeVariant} />

        {/* 9. Contacto */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer onNavigate={handleNavigate} themeVariant={themeVariant} />

      {/* Selector Flotante de Variante (Blanco / Oscuro) para comparar fácilmente */}
      <VariantSwitcher
        themeVariant={themeVariant}
        onToggleVariant={setThemeVariant}
      />

      {/* 10. Botón Flotante de WhatsApp */}
      <WhatsAppFloatingButton />
    </div>
  );
}

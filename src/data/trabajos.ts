import { Project } from '../types';

/**
 * Generador de imágenes de demostración para proyectos realizados.
 * Permite previsualizar trabajos de forma autónoma hasta que el usuario cargue sus fotos reales en src/assets/trabajos/
 */
function createProjectSvg(title: string, tag: string, color1: string, color2: string): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
      <defs>
        <linearGradient id="grad-${title.replace(/[^a-zA-Z]/g, '')}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${color1}" />
          <stop offset="100%" stop-color="${color2}" />
        </linearGradient>
        <pattern id="lines-${title.replace(/[^a-zA-Z]/g, '')}" width="30" height="30" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="30" stroke="rgba(255,255,255,0.08)" stroke-width="2" />
        </pattern>
      </defs>
      <rect width="800" height="600" fill="url(#grad-${title.replace(/[^a-zA-Z]/g, '')})" />
      <rect width="800" height="600" fill="url(#lines-${title.replace(/[^a-zA-Z]/g, '')})" />
      
      <!-- Simulación de ambiente con luz cenital -->
      <polygon points="100,50 700,50 640,480 160,480" fill="rgba(0,0,0,0.25)" />
      
      <!-- Overlay inferior -->
      <rect y="420" width="800" height="180" fill="rgba(20, 21, 24, 0.92)" />
      <rect x="50" y="450" width="6" height="52" fill="#FF5500" rx="3" />

      <text x="75" y="478" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="700">${title}</text>
      <text x="75" y="510" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="16">${tag}</text>
    </svg>
  `.trim();

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const TRABAJOS_DEMO: Project[] = [
  {
    id: 'trabajo-1',
    titulo: 'Living & Comedor con Wall Panel Nogal',
    ubicacion: 'Reconquista (Zona Centro)',
    tipoRevestimiento: 'Wall Panel WPC Ranurado',
    categoria: 'viviendas',
    descripcion: 'Renovación integral de pared principal de living con colocación de Wall Panel WPC tono nogal con retroiluminación LED perimetral. Se ocultaron cañerías y cables de TV sin necesidad de picar revoques.',
    imagenes: [
      createProjectSvg('Living Wall Panel Nogal', 'Reconquista Centro · Wall Panel WPC', '#2c221a', '#14100c'),
      createProjectSvg('Detalle Encastre Listonado', 'Efecto madera continuo', '#3d2e22', '#1b140f'),
      createProjectSvg('Vista Nocturna con LED', 'Ambiente cálido y acogedor', '#261b14', '#0d0906')
    ],
    fechaAprox: '2024'
  },
  {
    id: 'trabajo-2',
    titulo: 'Galería Quincho con Cielorraso de PVC Blanco',
    ubicacion: 'Avellaneda, Santa Fe',
    tipoRevestimiento: 'Revestimiento PVC Machimbrado',
    categoria: 'exteriores',
    descripcion: 'Instalación de cielorraso suspendido de PVC blanco de 10 mm en quincho semicubierto. Totalmente resistente al rocío, humedad y temperatura, sin necesidad de mantenimiento ni pintura.',
    imagenes: [
      createProjectSvg('Quincho Semicubierto PVC', 'Avellaneda · Cielorraso PVC 10mm', '#1e293b', '#0f172a'),
      createProjectSvg('Encuentro con Molduras', 'Terminación perimetral prolija', '#334155', '#1e293b')
    ],
    fechaAprox: '2024'
  },
  {
    id: 'trabajo-3',
    titulo: 'Recepción Comercial & Mostrador en Mármol UV',
    ubicacion: 'Reconquista, Santa Fe',
    tipoRevestimiento: 'Placas Simil Mármol UV Calacatta',
    categoria: 'comercios',
    descripcion: 'Transformación de local comercial y recepción con placas simil mármol UV pulido de gran formato combinadas con perfilería en negro mate. Obra finalizada en tan solo un día de trabajo.',
    imagenes: [
      createProjectSvg('Recepción Comercial Calacatta', 'Reconquista · Placas Simil Mármol UV', '#475569', '#1e293b'),
      createProjectSvg('Detalle Brillo Espejo', 'Alto impacto visual y fácil limpieza', '#64748b', '#334155')
    ],
    fechaAprox: '2024'
  },
  {
    id: 'trabajo-4',
    titulo: 'Cielorraso Desmontable en Oficinas Profesionales',
    ubicacion: 'Reconquista (Barrio Parque)',
    tipoRevestimiento: 'Cielorraso Desmontable Acústico 60x60',
    categoria: 'cielorrasos',
    descripcion: 'Montaje de 120 m² de cielorraso acústico desmontable con estructura prepintada blanca y luminarias LED embutidas. Acceso permanente a canalizaciones de red y climatización.',
    imagenes: [
      createProjectSvg('Oficinas Cielorraso Acústico', 'Reconquista · Módulos 60x60 cm', '#334155', '#0f172a'),
      createProjectSvg('Luminarias LED Integradas', 'Distribución uniforme de luz', '#1e293b', '#090d16')
    ],
    fechaAprox: '2023'
  },
  {
    id: 'trabajo-5',
    titulo: 'Baño Principal sin Humedad con PVC Texturado',
    ubicacion: 'Reconquista (Zona Sur)',
    tipoRevestimiento: 'Revestimiento PVC Simil Madera Ceniza',
    categoria: 'paredes',
    descripcion: 'Solución definitiva para problema crónico de humedad en paredes de baño. Se colocó estructura ligera y revestimiento de PVC texturado gris ceniza de fácil limpieza y sin condensación.',
    imagenes: [
      createProjectSvg('Baño Libre de Humedad', 'Reconquista · PVC Texturado Ceniza', '#3f3f46', '#18181b'),
      createProjectSvg('Remate Sanitario', 'Sellado hermético y estético', '#27272a', '#09090b')
    ],
    fechaAprox: '2023'
  },
  {
    id: 'trabajo-6',
    titulo: 'División de Ambientes con Placas de Yeso',
    ubicacion: 'Malabrigo, Santa Fe',
    tipoRevestimiento: 'Construcción en Seco / Yeso Estándar',
    categoria: 'interiores',
    descripcion: 'Creación de dormitorio adicional y espacio de estudio en vivienda unifamiliar mediante tabiquería en seco con lana de vidrio para aislación acústica y cielorraso junta tomada.',
    imagenes: [
      createProjectSvg('Tabiques Divisorios en Seco', 'Malabrigo · Tabiques con aislación', '#262626', '#0a0a0a'),
      createProjectSvg('Terminación de Juntas', 'Superficie lisa lista para pintura', '#404040', '#171717')
    ],
    fechaAprox: '2023'
  }
];

import { Product, ProductCategory } from '../types';

/**
 * Generador de imágenes vectoriales SVG para texturas de revestimientos.
 * Esto asegura que la web funcione de forma 100% autónoma sin depender de servidores externos,
 * y permite reemplazarlas simplemente colocando archivos en src/assets/productos/
 */
function createSvgTexture(title: string, subtitle: string, type: 'wood' | 'marble' | 'pvc' | 'ceiling' | 'wpc' | 'profiles'): string {
  let pattern = '';
  let bgColor = '#1e2126';
  let accentBar = '#ff5500';

  if (type === 'wood' || type === 'wpc') {
    bgColor = '#2b221a';
    pattern = `
      <defs>
        <pattern id="slats" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="32" height="40" fill="#423429" />
          <rect x="32" width="8" height="40" fill="#1f1813" />
          <line x1="16" y1="0" x2="16" y2="40" stroke="#4d3e33" stroke-width="2" opacity="0.4"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#slats)" />
    `;
  } else if (type === 'marble') {
    bgColor = '#e8ecf1';
    accentBar = '#141518';
    pattern = `
      <rect width="100%" height="100%" fill="#f3f4f6" />
      <path d="M-20,40 Q150,180 320,80 T650,220" stroke="#cbd5e1" stroke-width="8" fill="none" opacity="0.7"/>
      <path d="M100,-20 Q240,160 480,260" stroke="#94a3b8" stroke-width="4" fill="none" opacity="0.6"/>
      <path d="M300,0 Q400,200 620,380" stroke="#e2e8f0" stroke-width="12" fill="none"/>
    `;
  } else if (type === 'ceiling') {
    bgColor = '#242830';
    pattern = `
      <defs>
        <pattern id="grid" width="80" height="60" patternUnits="userSpaceOnUse">
          <rect width="76" height="56" fill="#f8fafc" rx="2" />
          <rect width="80" height="60" fill="none" stroke="#64748b" stroke-width="4" />
          <circle cx="40" cy="30" r="1.5" fill="#cbd5e1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#334155" />
      <rect width="100%" height="100%" fill="url(#grid)" opacity="0.9" />
    `;
  } else if (type === 'profiles') {
    bgColor = '#1e242d';
    pattern = `
      <rect width="100%" height="100%" fill="#181d24" />
      <rect x="50" y="30" width="20" height="340" fill="#94a3b8" />
      <rect x="120" y="30" width="30" height="340" fill="#cbd5e1" />
      <rect x="200" y="30" width="25" height="340" fill="#64748b" />
      <rect x="280" y="30" width="40" height="340" fill="#94a3b8" />
      <rect x="380" y="30" width="20" height="340" fill="#e2e8f0" />
    `;
  } else {
    // PVC blanco o gris
    bgColor = '#252932';
    pattern = `
      <defs>
        <pattern id="pvcPlanks" width="60" height="40" patternUnits="userSpaceOnUse">
          <rect width="56" height="40" fill="#e2e8f0" />
          <rect x="56" width="4" height="40" fill="#94a3b8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pvcPlanks)" />
    `;
  }

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
      <rect width="600" height="400" fill="${bgColor}" />
      ${pattern}
      <rect y="270" width="600" height="130" fill="rgba(18, 20, 24, 0.88)" />
      <rect x="40" y="295" width="6" height="42" fill="${accentBar}" rx="2" />
      <text x="60" y="318" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700">${title}</text>
      <text x="60" y="342" fill="#cbd5e1" font-family="system-ui, -apple-system, sans-serif" font-size="14">${subtitle}</text>
    </svg>
  `.trim();

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'Todos',
  'Revestimientos',
  'Paneles',
  'Placas',
  'Cielorrasos',
  'Accesorios',
];

export const PRODUCTOS: Product[] = [
  {
    id: 'prod-1',
    nombre: 'Revestimiento PVC Machimbrado',
    slug: 'revestimiento-pvc-machimbrado',
    categoria: 'Revestimientos',
    descripcion: 'Una alternativa práctica y moderna para renovar paredes y cielorrasos.',
    descripcionCompleta: 'El revestimiento de PVC machimbrado es la solución ideal para transformar paredes y techos con una colocación rápida y limpia. Es 100% impermeable, antihumedad, autoextinguible y no requiere pintura ni mantenimiento posterior. Ideal tanto para renovar cocinas, baños, pasillos y quinchos como para locales comerciales.',
    imagenes: [
      createSvgTexture('Revestimiento PVC', 'Acabado liso y vetas simil madera', 'pvc'),
      createSvgTexture('Revestimiento PVC Blanco', 'Ideal para cielorrasos luminosos', 'ceiling'),
      createSvgTexture('Revestimiento PVC Madera', 'Calidez sin humedad', 'wood')
    ],
    caracteristicas: [
      '100% resistente a la humedad y hongos',
      'No propaga llama (autoextinguible)',
      'Aislante térmico y acústico',
      'Limpieza rápida con agua y detergente neutro',
      'Fácil colocación sobre estructura existente o clavaderas'
    ],
    aplicaciones: [
      'Cielorrasos interiores y exteriores en galerías',
      'Paredes de baños y antebaños',
      'Quinchos, garajes y salas de estar',
      'Comercios, oficinas y depósitos'
    ],
    medidas: 'Tablas de 200 mm de ancho x 6.00 m / 7.00 m de largo. Espesor: 7 mm a 10 mm.',
    colores: ['Blanco Brillante', 'Blanco Mate', 'Cerejeira / Roble Claro', 'Nogal Oscuro', 'Gris Ceniza Texturado'],
    destacado: true
  },
  {
    id: 'prod-2',
    nombre: 'Wall Panel WPC Ranurado / Acanalado',
    slug: 'wall-panel-wpc-ranurado',
    categoria: 'Paneles',
    descripcion: 'Listonado de alta gama que aporta calidez, textura y elegancia a cualquier ambiente.',
    descripcionCompleta: 'Los Wall Panels de WPC (Wood Plastic Composite) representan la última tendencia en arquitectura de interiores. Su diseño acanalado crea juegos de sombras y volúmenes sofisticados en livings, dormitorios y recepciones comerciales, combinando la belleza natural de la madera con la durabilidad y resistencia del polímero.',
    imagenes: [
      createSvgTexture('Wall Panel WPC', 'Listones ranurados de diseño', 'wpc'),
      createSvgTexture('Wall Panel Nogal', 'Textura premium para interiores', 'wood'),
      createSvgTexture('Wall Panel Carbón', 'Ambientes modernos y sobrios', 'profiles')
    ],
    caracteristicas: [
      'Aspecto visual idéntico a la madera natural listonada',
      'Inmune a termitas, polillas y carcoma',
      'No se decolora ni requiere barniz',
      'Sistema de encastre macho-hembra invisible',
      'Apto para instalar tiras de iluminación LED oculta'
    ],
    aplicaciones: [
      'Paredes principales de livings y respaldo de cama',
      'Frentes de recepción en locales y oficinas',
      'Revestimiento de barras, islas y columnas',
      'Divisiones estéticas de ambientes'
    ],
    medidas: 'Módulos de 16 cm de ancho útil x 2.90 m de alto. Espesor de listón: 22 mm.',
    colores: ['Teca Natural', 'Nogal Americano', 'Roble Claro', 'Negro Charcoal', 'Gris Industrial'],
    destacado: true
  },
  {
    id: 'prod-3',
    nombre: 'Placas Simil Mármol UV (PVC Marble Sheet)',
    slug: 'placas-simil-marmol-uv',
    categoria: 'Placas',
    descripcion: 'Láminas de gran formato con acabado espejado y vetas marmoladas de alto impacto.',
    descripcionCompleta: 'Placas decorativas de gran dimensión fabricadas en composite de PVC y polvo de piedra con recubrimiento curado UV. Brindan la presencia y distinción del mármol natural a una fracción de su costo y peso, permitiendo una instalación limpia sin escombros en tan solo horas.',
    imagenes: [
      createSvgTexture('Placa Simil Mármol', 'Acabado pulido brillante UV', 'marble'),
      createSvgTexture('Mármol Calacatta', 'Vetas grises y doradas', 'marble'),
      createSvgTexture('Mármol Negro Marquina', 'Contraste contemporáneo', 'profiles')
    ],
    caracteristicas: [
      'Acabado espejo de altísimo brillo con protección UV',
      'Resistente al agua, grasa y manchas habituales',
      'Bajo peso que no sobrecarga paredes ni tabiques',
      'Corte sencillo con cutter o sierra de mano',
      'Instalación directa con adhesivo de poliuretano'
    ],
    aplicaciones: [
      'Paredes de living y panel para Smart TV',
      'Muros de baños, toilettes y vanitorys',
      'Salas de espera y mostradores comerciales',
      'Hall de acceso a edificios y comercios'
    ],
    medidas: 'Placas de 1.22 m x 2.44 m. Espesor: 3 mm.',
    colores: ['Blanco Calacatta Gold', 'Carrara Clásico', 'Negro Marquina', 'Gris Sahara Pietra'],
    destacado: true
  },
  {
    id: 'prod-4',
    nombre: 'Cielorraso Desmontable Acústico',
    slug: 'cielorraso-desmontable-acustico',
    categoria: 'Cielorrasos',
    descripcion: 'Sistema modular para oficinas, comercios y hogares con acceso fácil a instalaciones.',
    descripcionCompleta: 'Solución práctica y funcional basada en perfilería de acero prepintado (vigas principales, secundarias y perimetrales) y placas modulares que permiten inspeccionar cañerías, aires acondicionados y cableados en cualquier momento sin romper el techo.',
    imagenes: [
      createSvgTexture('Cielorraso Desmontable', 'Módulos de 60x60 cm con perfil vista', 'ceiling'),
      createSvgTexture('Perfilería Metálica', 'Estructura prepintada blanca o negra', 'profiles'),
      createSvgTexture('Placas Acústicas', 'Control de sonido y reverberación', 'ceiling')
    ],
    caracteristicas: [
      '100% registrable: placas fácilmente removibles',
      'Excelente absorción acústica y aislamiento térmico',
      'Compatibilidad total con artefactos de iluminación embutidos',
      'Montaje rápido sin suciedad ni tiempo de secado',
      'Estructura de alta estabilidad dimensional'
    ],
    aplicaciones: [
      'Locales comerciales, farmacias y consultorios',
      'Oficinas corporativas y estudios profesionales',
      'Instituciones educativas y salas de conferencias',
      'Sótanos, quinchos y áreas de servicios'
    ],
    medidas: 'Placas de 0.60 m x 0.60 m y 0.60 m x 1.20 m. Espesor: 9 mm a 14 mm.',
    colores: ['Blanco Fisurado', 'Blanco Liso Vinílico', 'Negro Mate Acústico'],
    destacado: true
  },
  {
    id: 'prod-5',
    nombre: 'Placas de Yeso para Construcción en Seco',
    slug: 'placas-yeso-construccion-en-seco',
    categoria: 'Placas',
    descripcion: 'Base estándar y resistente a la humedad para tabiques, cielorrasos y revestimientos.',
    descripcionCompleta: 'Placas formadas por un núcleo de yeso bihidratado revestido en ambas caras con papel celulosa de alta resistencia. Disponibles en versiones Estándar (ST), Resistente a la Humedad (RH verde) y Resistente al Fuego (RF rosa). Ofrecen una superficie lisa y perfecta lista para pintar o revestir.',
    imagenes: [
      createSvgTexture('Placas de Yeso', 'Solución versátil para tabiques y cielorrasos', 'ceiling'),
      createSvgTexture('Placa Verde Antihumedad', 'Para baños y zonas de vapor', 'profiles'),
      createSvgTexture('Montaje de Estructura', 'Perfilería de chapa galvanizada', 'profiles')
    ],
    caracteristicas: [
      'Superficie perfectamente plana lista para acabado final',
      'Excelente confort térmico y acústico en combinación con lana de vidrio',
      'Versión verde especialmente tratada contra la absorción de agua',
      'Rápida ejecución y mínimo desperdicio en obra'
    ],
    aplicaciones: [
      'Tabiques divisorios de ambientes interiores',
      'Cielorrasos junta tomada sin uniones visibles',
      'Revestimiento de paredes con humedad de cimientos mediante cámara de aire',
      'Muebles embutidos, nichos y gargantas de luz difusa'
    ],
    medidas: '1.20 m de ancho x 2.40 m / 2.60 m de largo. Espesores: 9.5 mm y 12.5 mm.',
    colores: ['Estándar Gris', 'Resistente a Humedad Verde', 'Ignífuga Rosa'],
    destacado: false
  },
  {
    id: 'prod-6',
    nombre: 'Perfilería, Molduras y Terminaciones',
    slug: 'perfileria-molduras-terminaciones',
    categoria: 'Accesorios',
    descripcion: 'Perfiles perimetrales, esquineros y accesorios indispensables para una terminación prolija.',
    descripcionCompleta: 'Línea completa de accesorios necesarios para una colocación impecable: molduras perimetrales estilo pecho paloma, perfiles "U" de inicio, esquineros internos y externos, zócalos combinables y fijaciones especiales que garantizan una instalación duradera y estéticamente perfecta.',
    imagenes: [
      createSvgTexture('Perfilería y Molduras', 'Zócalos, esquineros y perfiles de inicio', 'profiles'),
      createSvgTexture('Molduras PVC', 'Terminación perimetral estilo pecho de paloma', 'ceiling'),
      createSvgTexture('Accesorios de Fijación', 'Tornillería y clips de montaje', 'profiles')
    ],
    caracteristicas: [
      'Garantizan uniones limpias en esquinas y encuentros con aberturas',
      'Colores a tono con la gama de revestimientos disponibles',
      'Fabricados en PVC de alto impacto o aluminio anodizado',
      'Disimulan cortes y pequeñas imperfecciones de la obra'
    ],
    aplicaciones: [
      'Encuentro entre pared y cielorraso',
      'Remates contra marcos de puertas y ventanas',
      'Esquinas exteriores vulnerables a golpes',
      'Zócalos en contacto con piso'
    ],
    medidas: 'Tiras de 3.00 m y 2.60 m según modelo.',
    colores: ['Blanco', 'Madera Clara', 'Madera Oscura', 'Gris Plata', 'Negro'],
    destacado: false
  }
];

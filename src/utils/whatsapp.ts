/**
 * Configuración centralizada de WhatsApp y redes para Click Revestimientos
 */

export const CONTACT_INFO = {
  // Número comercial de Click Revestimientos (Reconquista, Santa Fe)
  phoneRaw: '3483442237',
  phoneFormatted: '+54 9 3483 442237',
  phoneDisplay: '3483 442237',
  // Número internacional normalizado para la API de WhatsApp
  waPhone: '5493483442237',
  
  // Redes sociales
  instagram: 'clickrevestimientos',
  instagramUrl: 'https://instagram.com/clickrevestimientos',
  facebook: 'Click Revestimientos',
  facebookUrl: 'https://www.facebook.com/profile.php?id=clickrevestimientos',
  
  // Ubicación
  locationCity: 'Reconquista',
  locationProvince: 'Santa Fe',
  locationZip: 'S3560',
  locationFull: 'Reconquista, Santa Fe, Argentina',
  serviceArea: 'Reconquista y zona',
  
  // Frase de marca
  tagline: 'Rápido · Práctico · Duradero',
  concept: 'Revestimientos en seco'
};

/**
 * Genera un enlace directo a WhatsApp con texto predeterminado
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || 'Hola Click! Vi su página web y quería hacer una consulta sobre revestimientos.';
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONTACT_INFO.waPhone}?text=${encoded}`;
}

/**
 * Genera el enlace de consulta para un producto específico
 * Ejemplo solicitado: "Hola Click! Quería consultar por el producto Revestimiento PVC que vi en la página."
 */
export function getProductWhatsAppUrl(productName: string): string {
  const message = `Hola Click! Quería consultar por el producto ${productName} que vi en la página.`;
  return getWhatsAppUrl(message);
}

/**
 * Genera el enlace de consulta para un trabajo realizado
 */
export function getProjectWhatsAppUrl(projectTitle: string): string {
  const message = `Hola Click! Vi en su web el trabajo "${projectTitle}" y me gustaría consultar por una colocación similar para mi proyecto.`;
  return getWhatsAppUrl(message);
}

/**
 * Genera el enlace para solicitud directa de presupuesto
 */
export function getBudgetWhatsAppUrl(spaceType?: string): string {
  const message = spaceType 
    ? `Hola Click! Quisiera solicitar un presupuesto para revestir un espacio (${spaceType}).`
    : `Hola Click! Quisiera solicitar un presupuesto para renovar mis ambientes con revestimientos en seco.`;
  return getWhatsAppUrl(message);
}

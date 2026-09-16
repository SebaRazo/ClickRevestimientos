/**
 * Definiciones de tipos para Click Revestimientos
 */

export interface Product {
  id: string;
  nombre: string;
  slug: string;
  categoria: string;
  descripcion: string;
  descripcionCompleta: string;
  imagenes: string[];
  caracteristicas: string[];
  aplicaciones: string[];
  medidas?: string;
  colores?: string[];
  destacado: boolean;
}

export interface Project {
  id: string;
  titulo: string;
  ubicacion: string;
  tipoRevestimiento: string;
  categoria: 'paredes' | 'cielorrasos' | 'interiores' | 'exteriores' | 'comercios' | 'viviendas' | string;
  descripcion: string;
  imagenes: string[];
  fechaAprox?: string;
}

export type ProductCategory = 
  | 'Todos'
  | 'Revestimientos'
  | 'Paneles'
  | 'Placas'
  | 'Cielorrasos'
  | 'Accesorios';

export type ThemeVariant = 'white' | 'dark';

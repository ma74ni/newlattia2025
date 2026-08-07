// Menú temporal para el stand de Heladería Lattia en la Hueca Fest 2026.
// Contenido tomado del diseño de menú_huecafest (frontal.png / trasera.png).
// No hay integración con backend: es un listado estático, igual que src/data/carta.ts.

export interface HuecafestItem {
  nombre: string;
  precio: number;
  /** Texto de una insignia opcional, ej. "Más vendido". */
  destacado?: string;
}

export interface HuecafestCategoria {
  nombre: string;
  items: HuecafestItem[];
}

export const menuHuecafest: HuecafestCategoria[] = [
  {
    nombre: 'Chocobananas',
    items: [
      { nombre: 'Clásica', precio: 1.5 },
      { nombre: '+ Crema', precio: 2.25, destacado: 'Más vendido' },
      { nombre: 'Para Compartir', precio: 1.5 },
    ],
  },
  {
    nombre: 'Helados',
    items: [
      { nombre: 'Mango-Maracuyá', precio: 1.5 },
      { nombre: 'Come-y-Bebe', precio: 1.5 },
    ],
  },
  {
    nombre: 'Postres',
    items: [
      { nombre: 'Flan', precio: 1.5 },
      { nombre: 'Flan + Crema', precio: 2.25 },
      { nombre: 'Gelatina', precio: 1.0 },
      { nombre: 'Gelatina + Crema', precio: 1.75 },
      { nombre: 'Gelaflan', precio: 1.5 },
      { nombre: 'Gelaflan + Crema', precio: 2.25 },
    ],
  },
  {
    nombre: 'Frescos',
    items: [
      { nombre: 'Guanábana Pequeña', precio: 1.0 },
      { nombre: 'Guanábana Grande', precio: 2.0 },
    ],
  },
  {
    nombre: 'Extras',
    items: [{ nombre: 'Porción Crema', precio: 1.0 }],
  },
];

/** Aderezos para bañar la chocobanana artesanal. */
export const aderezosChocobanana: string[] = [
  'Maracuyá',
  'Leche Condensada',
  'Guayaba',
  'Mora',
  'Limón-Miel',
];

/** Coberturas para decorar la chocobanana artesanal. */
export const coberturasChocobanana: string[] = [
  'Oreo',
  'Coco',
  'ChocoKrispi',
  'Galak',
  'Maní',
  'Bastones de Chocolate',
  'Chifle',
  'Grageas',
  'Quinua',
  'Bastones de Colores',
  'Arroz Crocante',
];

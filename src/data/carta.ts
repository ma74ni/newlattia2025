export type LocalId = "quito" | "sangolqui";

export interface Local {
  id: LocalId;
  nombre: string;
}

export const locales: Local[] = [
  { id: "quito", nombre: "Quito" },
  { id: "sangolqui", nombre: "Sangolquí" },
];

export interface CartaItem {
  nombre: string;
  /** Precio en Quito (carta base). */
  precio: number;
  /** Override para Sangolquí. Si no se define, usa el precio de Quito. */
  precioSangolqui?: number;
  /**
   * Locales donde se ofrece el producto. Si no se define, está en todos.
   * Ej: `locales: ['quito']` => solo en Quito.
   */
  locales?: LocalId[];
}

export interface CartaCategoria {
  nombre: string;
  nota?: string;
  items: CartaItem[];
}

/** Devuelve el precio del producto para el local indicado. */
export const precioPara = (item: CartaItem, local: LocalId): number =>
  local === "sangolqui" ? (item.precioSangolqui ?? item.precio) : item.precio;

/** Indica si el producto se ofrece en el local dado. */
export const itemDisponible = (item: CartaItem, local: LocalId): boolean =>
  !item.locales || item.locales.includes(local);

/**
 * Carta filtrada para un local: solo los productos disponibles ahí,
 * descartando las categorías que queden vacías.
 */
export const cartaParaLocal = (local: LocalId): CartaCategoria[] =>
  carta
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((item) => itemDisponible(item, local)),
    }))
    .filter((cat) => cat.items.length > 0);
/**
 * Tres formas de expresar diferencias entre locales

  1. Producto solo en un local → locales: ['quito'] (o ['sangolqui']).
  2. Precio distinto → precioSangolqui: 3.2.
  3. Igual en ambos → no agregas nada.
  { nombre: 'Especial', precio: 0, precioSangolqui: 3.5, locales: ['sangolqui'] }
 */
export const carta: CartaCategoria[] = [
  {
    nombre: "Conos",
    items: [
      { nombre: "Tía", precio: 2.6 },
      { nombre: "Mega", precio: 2.25 },
      { nombre: "Doble", precio: 1.8 },
      { nombre: "Simple", precio: 1.25 },
      { nombre: "Mini", precio: 0.6, locales: ["quito"] },
    ],
  },
  {
    nombre: "Tulipanes",
    items: [
      { nombre: "Doble", precio: 2.8 },
      { nombre: "Simple", precio: 2.25 },
    ],
  },
  {
    nombre: "Soft",
    items: [
      { nombre: "Grande", precio: 2.0, locales: ["quito"] },
      { nombre: "Pequeño", precio: 1.5, locales: ["quito"] },
    ],
  },
  {
    nombre: "Cono Soft",
    items: [{ nombre: "Simple", precio: 1.0, locales: ["quito"] }],
  },
  {
    nombre: "Con Queso",
    items: [
      { nombre: "Soft", precio: 3.5 },
      { nombre: "Tres Sabores", precio: 3.5 },
    ],
  },
  {
    nombre: "Salpicón",
    items: [{ nombre: "Grande", precio: 3.0 }],
  },
  {
    nombre: "Milkshake",
    items: [{ nombre: "Grande", precio: 3.0 }],
  },
  {
    nombre: "Bananasplit",
    items: [{ nombre: "Grande", precio: 3.5 }],
  },
  {
    nombre: "Waffle",
    items: [{ nombre: "Grande", precio: 4.0, locales: ["quito"] }],
  },
  {
    nombre: "Palitos",
    items: [{ nombre: "Grande", precio: 1.0 }],
  },
  {
    nombre: "Chocobanana",
    items: [{ nombre: "Grande", precio: 1.25 }],
  },
  {
    nombre: "Granizado",
    nota: "Lunes a viernes",
    items: [
      { nombre: "Pequeño", precio: 0.5, locales: ["quito"] },
      { nombre: "Grande", precio: 1.0, locales: ["quito"] },
    ],
  },
  {
    nombre: "Por Litros",
    items: [
      { nombre: "1 Litro", precio: 6.0 },
      { nombre: "½ Litro", precio: 3.5 },
    ],
  },
  {
    nombre: "Espumilla",
    items: [
      { nombre: "Pequeña", precio: 0.5 },
      { nombre: "Grande", precio: 1.0 },
    ],
  },
  {
    nombre: "Gelatina",
    items: [
      { nombre: "Simple", precio: 0.5 },
      { nombre: "Crema", precio: 1.75 },
      { nombre: "Espumilla", precio: 1.0 },
    ],
  },
  {
    nombre: "Flan",
    items: [
      { nombre: "Simple", precio: 1.0 },
      { nombre: "Crema", precio: 2.0 },
      { nombre: "Espumilla", precio: 1.5 },
    ],
  },
  {
    nombre: "Ensalada de Frutas",
    items: [
      { nombre: "Simple", precio: 1.25, locales: ["quito"] },
      { nombre: "Espumilla", precio: 1.75, locales: ["quito"] },
      { nombre: "Crema", precio: 2.0, locales: ["quito"] },
      { nombre: "Helado", precio: 2.25, locales: ["quito"] },
      { nombre: "Helado + Crema", precio: 2.75, locales: ["quito"] },
    ],
  },
  {
    nombre: "Fresas",
    items: [
      { nombre: "Chocolate", precio: 2.0, locales: ["quito"] },
      { nombre: "Espumilla", precio: 2.0, locales: ["quito"] },
      { nombre: "Crema", precio: 2.5, locales: ["quito"] },
      { nombre: "Choco + Crema", precio: 2.5, locales: ["quito"] },
    ],
  },
];

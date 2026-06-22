export interface CartaItem {
  nombre: string;
  precio: number;
}

export interface CartaCategoria {
  nombre: string;
  nota?: string;
  items: CartaItem[];
}

export const carta: CartaCategoria[] = [
  {
    nombre: 'Conos',
    items: [
      { nombre: 'Tía', precio: 2.6 },
      { nombre: 'Mega', precio: 2.25 },
      { nombre: 'Doble', precio: 1.8 },
      { nombre: 'Simple', precio: 1.25 },
      { nombre: 'Mini', precio: 0.6 },
    ],
  },
  {
    nombre: 'Tulipanes',
    items: [
      { nombre: 'Doble', precio: 2.8 },
      { nombre: 'Simple', precio: 2.25 },
    ],
  },
  {
    nombre: 'Soft',
    items: [
      { nombre: 'Grande', precio: 2.0 },
      { nombre: 'Pequeño', precio: 1.5 },
    ],
  },
  {
    nombre: 'Cono Soft',
    items: [{ nombre: 'Simple', precio: 1.0 }],
  },
  {
    nombre: 'Con Queso',
    items: [
      { nombre: 'Soft', precio: 3.5 },
      { nombre: 'Tres Sabores', precio: 3.5 },
    ],
  },
  {
    nombre: 'Salpicón',
    items: [{ nombre: 'Grande', precio: 3.0 }],
  },
  {
    nombre: 'Milkshake',
    items: [{ nombre: 'Grande', precio: 3.0 }],
  },
  {
    nombre: 'Bananasplit',
    items: [{ nombre: 'Grande', precio: 3.5 }],
  },
  {
    nombre: 'Waffle',
    items: [{ nombre: 'Grande', precio: 4.0 }],
  },
  {
    nombre: 'Palitos',
    items: [{ nombre: 'Grande', precio: 1.0 }],
  },
  {
    nombre: 'Chocobanana',
    items: [
      { nombre: 'Simple', precio: 1.0 },
      { nombre: 'Toppings', precio: 1.0 },
    ],
  },
  {
    nombre: 'Granizado',
    nota: 'Lunes a viernes',
    items: [
      { nombre: 'Pequeño', precio: 0.5 },
      { nombre: 'Grande', precio: 1.0 },
    ],
  },
  {
    nombre: 'Por Litros',
    items: [
      { nombre: '1 Litro', precio: 6.0 },
      { nombre: '½ Litro', precio: 3.5 },
    ],
  },
  {
    nombre: 'Espumilla',
    items: [
      { nombre: 'Pequeña', precio: 0.5 },
      { nombre: 'Grande', precio: 1.0 },
    ],
  },
  {
    nombre: 'Gelatina',
    items: [
      { nombre: 'Simple', precio: 0.5 },
      { nombre: 'Crema', precio: 1.75 },
      { nombre: 'Espumilla', precio: 1.0 },
    ],
  },
  {
    nombre: 'Flan',
    items: [
      { nombre: 'Simple', precio: 1.0 },
      { nombre: 'Crema', precio: 2.0 },
      { nombre: 'Espumilla', precio: 1.5 },
    ],
  },
  {
    nombre: 'Ensalada de Frutas',
    items: [
      { nombre: 'Simple', precio: 1.25 },
      { nombre: 'Espumilla', precio: 1.75 },
      { nombre: 'Crema', precio: 2.0 },
      { nombre: 'Helado', precio: 2.25 },
      { nombre: 'Helado + Crema', precio: 2.75 },
    ],
  },
  {
    nombre: 'Fresas',
    items: [
      { nombre: 'Chocolate', precio: 2.0 },
      { nombre: 'Espumilla', precio: 2.0 },
      { nombre: 'Crema', precio: 2.5 },
      { nombre: 'Choco + Crema', precio: 2.5 },
    ],
  },
];

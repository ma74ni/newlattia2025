export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    image: string;
    destacado: boolean;
    preciosPorLocal?: PrecioPorLocal;
  }
export interface PrecioPorLocal {
    [key: string]: number | undefined;
  }
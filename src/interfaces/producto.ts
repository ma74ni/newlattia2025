export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    image: string;
    destacado: boolean;
    preciosPorLocal?: PrecioPorLocal;
    categorias: string[];
  }
export interface PrecioPorLocal {
    [key: string]: number | undefined;
  }
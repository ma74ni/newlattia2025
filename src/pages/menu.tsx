"use client";

import { useState } from 'react';
import productos from '@/data/mockProducts.json';
import { Producto } from '@/interfaces/producto';
import Image from 'next/image';

export default function MenuPage() {
  const productosTyped: Producto[] = productos as Producto[];

  const [filtro, setFiltro] = useState<string>('todos');

  const productosFiltrados = productosTyped.filter((producto) => {
    if (filtro === 'todos') return true;
    return producto.categorias?.includes(filtro);
  });

  const filtrosDisponibles = ['todos', 'base leche', 'base agua', 'fruta natural', 'combos'];

  return (
    <div className="w-[90%] mx-auto py-12">
      <h1 className="text-3xl font-nerko text-lila mb-6 text-center">Nuestro Menú</h1>

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {filtrosDisponibles.map((cat) => (
          <button
            key={cat}
            onClick={() => setFiltro(cat)}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              filtro === cat ? 'bg-lila text-white' : 'border-lila text-lila hover:bg-lila/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productosFiltrados.map((item) => (
            <>
            <Image
              src={item.image}
              alt={item.nombre}
              width={400}
              height={192}
              className="w-full h-48 object-contain mx-auto"
            />
            <h4 className="text-xl font-semibold mt-4">{item.nombre}</h4>
            <p className="text-sm mt-1">{item.descripcion}</p>
            <p className="text-lg font-bold text-lila mt-2">
              $ {item.preciosPorLocal?.local1?.toFixed(2)}
            </p>
            </>
        ))}
      </div>

      {/* PDF */}
      <div className="text-center mt-12">
        <a
          href="/assets/pdf/menu_lattia.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purpleMain text-white px-6 py-3 rounded-md text-lg hover:bg-orangeMain transition"
        >
          Descargar menú en PDF
        </a>
      </div>
    </div>
  );
}

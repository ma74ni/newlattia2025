"use client";

import Image from 'next/image';

export default function MenuPage() {


  return (
    <div className="w-[90%] mx-auto py-12">
      <h1 className="text-3xl font-nerko text-lila mb-6 text-center">Nuestro Menú</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="w-full rounded-lg overflow-hidden shadow">
          <Image
            src="/assets/images/products/menu_1.jpg"
            alt="Menú página 1"
            width={800}
            height={1000}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full rounded-lg overflow-hidden shadow">
          <Image
            src="/assets/images/products/menu_2.jpg"
            alt="Menú página 2"
            width={800}
            height={1000}
            className="w-full h-auto object-cover"
          />
        </div>
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

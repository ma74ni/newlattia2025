import { useState } from 'react';
import { NextSeo } from 'next-seo';
import { cartaParaLocal, locales, precioPara, LocalId } from '@/data/carta';
import { generateCartaPdf } from '@/utils/generateCartaPdf';

const formatPrecio = (precio: number) =>
  `$${precio.toFixed(2).replace('.', ',')}`;

export default function CartaPage() {
  const [local, setLocal] = useState<LocalId>('quito');
  const localActual = locales.find((l) => l.id === local)!;
  const categorias = cartaParaLocal(local);

  return (
    <>
      <NextSeo
        title="Carta"
        description="Conos, tulipanes, waffles, milkshakes, fresas y mucho más. Descubre toda la carta de Heladería Lattia."
      />
      <div className="w-[90%] max-w-6xl mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-nerko text-purpleMain mb-2 text-center">
          Nuestra Carta
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Helados artesanales y postres, con cariño desde 1997.
        </p>

        {/* Selector de local */}
        <div className="flex justify-center mb-10">
          <div
            role="tablist"
            aria-label="Selecciona un local"
            className="inline-flex rounded-full border border-purpleMain/20 p-1 bg-purpleMain/5"
          >
            {locales.map((l) => {
              const activo = l.id === local;
              return (
                <button
                  key={l.id}
                  role="tab"
                  aria-selected={activo}
                  type="button"
                  onClick={() => setLocal(l.id)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition cursor-pointer ${
                    activo
                      ? 'bg-purpleMain text-white shadow'
                      : 'text-purpleMain hover:bg-purpleMain/10'
                  }`}
                >
                  {l.nombre}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias.map((categoria) => (
            <section
              key={categoria.nombre}
              className="rounded-xl border border-purpleMain/15 shadow-sm p-6 flex flex-col"
            >
              <div className="border-b border-orangeMain/40 pb-3 mb-4">
                <h2 className="text-2xl font-nerko text-purpleMain leading-none">
                  {categoria.nombre}
                </h2>
                {categoria.nota && (
                  <p className="text-xs text-orangeMain font-semibold mt-1">
                    {categoria.nota}
                  </p>
                )}
              </div>

              <ul className="flex flex-col gap-2">
                {categoria.items.map((item) => (
                  <li
                    key={item.nombre}
                    className="flex items-baseline justify-between gap-2"
                  >
                    <span className="text-gray-700">{item.nombre}</span>
                    <span className="flex-1 border-b border-dotted border-gray-300 mx-1 translate-y-[-3px]" />
                    <span className="font-bold text-purpleMain whitespace-nowrap">
                      {formatPrecio(precioPara(item, local))}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            type="button"
            onClick={() => generateCartaPdf(local)}
            className="inline-block bg-purpleMain text-white px-6 py-3 rounded-md text-lg hover:bg-orangeMain transition cursor-pointer"
          >
            Descargar carta de {localActual.nombre} en PDF
          </button>
        </div>
      </div>
    </>
  );
}

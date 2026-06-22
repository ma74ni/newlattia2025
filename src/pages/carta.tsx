import { NextSeo } from 'next-seo';
import { carta } from '@/data/carta';
import { generateCartaPdf } from '@/utils/generateCartaPdf';

const formatPrecio = (precio: number) =>
  `$${precio.toFixed(2).replace('.', ',')}`;

export default function CartaPage() {
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
        <p className="text-center text-gray-600 mb-10">
          Helados artesanales y postres, con cariño desde 1997.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {carta.map((categoria) => (
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
                      {formatPrecio(item.precio)}
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
            onClick={() => generateCartaPdf()}
            className="inline-block bg-purpleMain text-white px-6 py-3 rounded-md text-lg hover:bg-orangeMain transition cursor-pointer"
          >
            Descargar carta en PDF
          </button>
        </div>
      </div>
    </>
  );
}

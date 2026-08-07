"use client";

import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  Banana,
  IceCream,
  PartyPopper,
  MessageCircle,
  ArrowLeft,
  Sparkles,
  GlassWater,
  Plus,
} from 'lucide-react';
import {
  menuHuecafest,
  aderezosChocobanana,
  coberturasChocobanana,
} from '@/data/huecafest';

const WHATSAPP = '593983766954';

const formatPrecio = (precio: number) => `$${precio.toFixed(2).replace('.', ',')}`;

const categoriaIcono: Record<string, typeof IceCream> = {
  Chocobananas: Banana,
  Helados: IceCream,
  Postres: Sparkles,
  Frescos: GlassWater,
  Extras: Plus,
};

/** Genera el borde inferior "de goteo" del encabezado, en coordenadas de un viewBox de 1200x80. */
function buildDripPath(
  width: number,
  dripCount: number,
  baseHeight: number,
  dripDepth: number,
) {
  const period = width / dripCount;
  let d = `M0,0 L${width},0 L${width},${baseHeight} `;
  for (let i = 0; i < dripCount; i++) {
    const xStart = width - i * period;
    const xEnd = width - (i + 1) * period;
    const xMid = xStart - period / 2;
    d += `C${xStart - period * 0.12},${baseHeight} ${xMid},${baseHeight + dripDepth * 0.25} ${xMid},${baseHeight + dripDepth} `;
    d += `C${xMid},${baseHeight + dripDepth * 0.25} ${xEnd + period * 0.12},${baseHeight} ${xEnd},${baseHeight} `;
  }
  d += `L0,0 Z`;
  return d;
}

const DRIP_PATH = buildDripPath(1200, 16, 46, 30);

export default function HuecafestPage() {
  return (
    <>
      <NextSeo
        title="Menú Hueca Fest · Heladería Lattia"
        description="Chocobananas artesanales, helados, postres y frescos. El menú de Heladería Lattia en la Hueca Fest 2026, Quito."
      />

      <main className="min-h-screen w-full bg-white">
        {/* Encabezado con goteo de la marca */}
        <div className="relative">
          <svg
            viewBox="0 0 1200 80"
            preserveAspectRatio="none"
            className="w-full h-20 md:h-24 block"
          >
            <defs>
              <linearGradient id="dripGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffd400" />
                <stop offset="100%" stopColor="#f18700" />
              </linearGradient>
            </defs>
            <path d={DRIP_PATH} fill="url(#dripGradient)" />
          </svg>

          <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 md:-bottom-12 rounded-full bg-white p-2 shadow-lg ring-1 ring-purpleMain/10">
            <Image
              src="/assets/images/logos/logo_lattia.svg"
              alt="Heladería Lattia"
              width={90}
              height={74}
              priority
              className="w-[70px] md:w-[90px] h-auto"
            />
          </div>
        </div>

        <div className="w-[92%] max-w-3xl mx-auto pt-14 md:pt-16 pb-16">
          {/* Título */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 text-orangeMain font-semibold text-sm mb-1">
              <PartyPopper size={16} />
              Hueca Fest 2026
            </span>
            <h1 className="text-4xl md:text-5xl font-nerko text-purpleMain leading-none">
              Nuestro Menú
            </h1>
            <p className="text-gray-500 mt-2">
              Heladería artesanal · Desde 1997
            </p>
          </div>

          {/* Chocobananas artesanales, producto estrella */}
          <section className="rounded-2xl border-2 border-orangeMain/30 bg-orangeMain/5 p-6 mb-10">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
              <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-nerko text-purpleMain leading-none">
                <Banana className="text-orangeMain" size={28} />
                Chocobananas Artesanales
              </h2>
              <span className="inline-flex items-center gap-1 bg-purpleMain text-white text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap">
                <Star size={13} className="fill-yellowMain text-yellowMain" />
                Más de 10 coberturas
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                  Aderezos
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {aderezosChocobanana.map((aderezo) => (
                    <li
                      key={aderezo}
                      className="text-sm bg-white text-purpleMain border border-purpleMain/20 rounded-full px-3 py-1"
                    >
                      {aderezo}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                  Coberturas
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {coberturasChocobanana.map((cobertura) => (
                    <li
                      key={cobertura}
                      className="text-sm bg-white text-purpleMain border border-purpleMain/20 rounded-full px-3 py-1"
                    >
                      {cobertura}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Categorías del menú */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {menuHuecafest.map((categoria) => {
              const Icono = categoriaIcono[categoria.nombre] ?? IceCream;
              return (
                <section
                  key={categoria.nombre}
                  className="rounded-xl border border-purpleMain/15 shadow-sm p-6 flex flex-col"
                >
                  <div className="flex items-center gap-2 border-b border-orangeMain/40 pb-3 mb-4">
                    <Icono className="text-orangeMain" size={22} />
                    <h2 className="text-2xl font-nerko text-purpleMain leading-none">
                      {categoria.nombre}
                    </h2>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {categoria.items.map((item) => (
                      <li key={item.nombre} className="flex flex-col gap-1">
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-gray-700">{item.nombre}</span>
                          <span className="flex-1 border-b border-dotted border-gray-300 mx-1 translate-y-[-3px]" />
                          <span className="font-bold text-purpleMain whitespace-nowrap">
                            {formatPrecio(item.precio)}
                          </span>
                        </div>
                        {item.destacado && (
                          <span className="self-start text-[11px] font-semibold text-white bg-orangeMain px-2 py-0.5 rounded-full">
                            {item.destacado}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>

          {/* Llamado a la acción */}
          <div className="text-center mt-12 flex flex-col items-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purpleMain text-white px-6 py-3 rounded-md text-lg hover:bg-orangeMain transition"
            >
              <MessageCircle size={20} />
              Escríbenos por WhatsApp
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-purpleMain transition"
            >
              <ArrowLeft size={14} />
              Volver a heladerialattia.com
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

HuecafestPage.noChrome = true;

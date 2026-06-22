import Link from 'next/link';
import { NextSeo } from 'next-seo';

export default function NotFoundPage() {
  return (
    <>
      <NextSeo title="Página no encontrada" noindex />
      <div className="w-[90%] max-w-xl mx-auto py-20 text-center">
        <p className="text-7xl md:text-8xl font-nerko text-purpleMain">404</p>
        <h1 className="text-2xl md:text-3xl font-nerko text-purpleMain mt-4">
          ¡Ups! Se nos derritió esta página 🍦
        </h1>
        <p className="text-gray-600 mt-4">
          No pudimos encontrar lo que buscabas. Quizá el enlace cambió o ya no existe.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <Link
            href="/"
            className="inline-block bg-purpleMain text-white px-6 py-3 rounded-md text-lg hover:bg-orangeMain transition"
          >
            Volver al inicio
          </Link>
          <Link
            href="/carta"
            className="inline-block border border-purpleMain text-purpleMain px-6 py-3 rounded-md text-lg hover:bg-purpleMain hover:text-white transition"
          >
            Ver la carta
          </Link>
        </div>
      </div>
    </>
  );
}

import { Articulo } from '@/interfaces/articulo';
import articulos from '@/data/mockBlog.json';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogIndexPage() {
  const articulosTyped: Articulo[] = articulos as Articulo[];

  return (
    <div className="w-[90%] max-w-7xl mx-auto py-12">
      <h1 className="text-3xl md:text-5xl font-nerko text-lila mb-10 text-center">Nuestro Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articulosTyped.map((articulo) => (
          <Link
            key={articulo.slug}
            href={`/blog/${articulo.slug}`}
            className="block bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative h-52">
              <Image
                src={articulo.image}
                alt={articulo.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-lila">{articulo.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{articulo.summary}</p>
              <span className="inline-block mt-4 text-sm text-lila font-semibold hover:underline">
                Leer más →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

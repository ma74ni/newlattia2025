import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Articulo } from '@/interfaces/articulo';
import articulos from '@/data/mockBlog.json';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  articulo: Articulo | null;
}

export default function BlogDetallePage({ articulo }: Props) {
  const router = useRouter();

  if (router.isFallback || !articulo) {
    return <div className="text-center py-20 text-lila">Cargando artículo...</div>;
  }

  return (
    <div className="w-[90%] max-w-4xl mx-auto py-12">
      <Link href="/blog" className="text-lila text-sm hover:underline">← Volver al blog</Link>

      <h1 className="text-3xl md:text-5xl font-nerko text-lila my-6">{articulo.title}</h1>

      <div className="relative w-full h-64 md:h-96 mb-8 rounded overflow-hidden shadow">
        <Image
          src={articulo.image}
          alt={articulo.title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="prose max-w-none">
        <p className="text-lg leading-relaxed text-gray-700">
          Este es un artículo de ejemplo. En el futuro puedes cargar aquí contenido largo desde Firebase o un CMS.
        </p>
        <p className="mt-4 italic text-lila">{articulo.summary}</p>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (articulos as Articulo[]).map((art) => ({
    params: { slug: art.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const articulo = (articulos as Articulo[]).find((art) => art.slug === slug) || null;

  return {
    props: { articulo },
    revalidate: 60,
  };
};

//import { Articulo } from '@/interfaces/articulo';
import { Producto } from '@/interfaces/producto';
import Head from 'next/head';
import Image from 'next/image';
import productos from '@/data/mockProducts.json';
import articulo from '@/data/mockArticle.json';
import Banner from '@/components/Home/Banner';
import Featured from '@/components/Home/Featured';
import ArticleBlog from '@/components/Home/ArticleBlog';

const SOCIAL_LINKS = [
  'https://facebook.com/heladoslattia.ec',
  'https://instagram.com/heladoslattia.ec',
  'https://tiktok.com/@heladoslattia.ec',
];

const businessJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'IceCreamShop',
      '@id': 'https://heladerialattia.com/#quito',
      name: 'Heladería Lattia - Quito',
      image: 'https://heladerialattia.com/assets/images/og-image.jpg',
      url: 'https://heladerialattia.com',
      telephone: '+593983766954',
      priceRange: '$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Hoppe Norton y Rother, esquina',
        addressLocality: 'Quito',
        addressCountry: 'EC',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -0.25455479999999997,
        longitude: -78.51785009999999,
      },
      hasMap: 'https://maps.app.goo.gl/tgiy3sUL7oD7vRRF7',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '11:00',
          closes: '19:00',
        },
      ],
      sameAs: SOCIAL_LINKS,
    },
    {
      '@type': 'IceCreamShop',
      '@id': 'https://heladerialattia.com/#sangolqui',
      name: 'Heladería Lattia - Sangolquí',
      image: 'https://heladerialattia.com/assets/images/og-image.jpg',
      url: 'https://heladerialattia.com',
      telephone: '+593983766954',
      priceRange: '$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Subsuelo 1, River Mall',
        addressLocality: 'Sangolquí',
        addressCountry: 'EC',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -0.3239585105549343,
        longitude: -78.45006587864584,
      },
      hasMap: 'https://maps.app.goo.gl/GnaMphpjLKGd28e59',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          opens: '10:00',
          closes: '20:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday'],
          opens: '10:00',
          closes: '19:00',
        },
      ],
      sameAs: SOCIAL_LINKS,
    },
  ],
};

export default function Home() {

  const showFeatured = true;
  const showBlog = false;

  /*   const mostrarSabiasQue = false;
  const mostrarLinea = false; */


  const productosTyped: Producto[] = productos as Producto[];
  //const articuloTyped: Articulo = articulo as Articulo;

  const destacados: Producto[] = productosTyped.filter((p) => p.destacado);

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </Head>
      <section className="bg-gradient-to-b from-orangeMain to-yellowMain rounded-t-lg">
        <Banner />
      </section>
      {showFeatured && (
        <section className="w-[90%] mx-auto py-12">
          <Featured featured={destacados} />
        </section>
      )}

      {showBlog && (
        <section className="w-[90%] mx-auto pb-12">
          <ArticleBlog titleSection='DEL BLOG' article={articulo}/>
      </section>
    )}
      <section>
      <div className="flex flex-col md:flex-row w-full">
        <div className="bg-[#F7C482] flex-1 flex flex-col items-center justify-center text-center pt-6 md:pt-10">
          <h2 className=" font-nerko text-purpleMain text-xl md:text-[35px] font-bold mb-4">SABÍAS QUÉ...</h2>
          <div className="flex flex-col items-center md:items-start md:flex-row gap-4">
            <Image
              src="/assets/images/banners/lattia-2.svg"
              alt="Lattia chart 2"
            width={257}
            height={263}
              className="w-[257px] md:w-[257px]"
            />
            <p className="text-purpleMain text-base md:text-[20px] max-w-xs text-left">
              Todos nuestros productos<br />
              son elaborados de forma<br />
              artesanal.
            </p>
          </div>
        </div>
        <div className="patron flex-1 bg-[#AC69AB] p-6 md:p-10"></div>
      </div>
    </section>
    <section>
      <div className="linea flex-1 p-6 md:py-[100px]"></div>
    </section>
    </>
  );
}

//import { Articulo } from '@/interfaces/articulo';
import { Producto } from '@/interfaces/producto';
import Image from 'next/image';
import productos from '@/data/mockProducts.json';
import articulo from '@/data/mockArticle.json';

export default function Home() {


  const productosTyped: Producto[] = productos as Producto[];
  //const articuloTyped: Articulo = articulo as Articulo;

  const destacados: Producto[] = productosTyped.filter((p) => p.destacado);

  return (
    <>
      <section className="bg-gradient-to-b from-naranja to-crema rounded-t-lg">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center pt-12 gap-8">
          <Image
            src="/assets/images/lattia_1.png"
            alt="Lattia chart 1"
            width={286}
            height={346}
            className="w-56 md:w-[286px] h-auto object-contain"
          />
          <div className="text-center text-lila max-w-xl">
            <h2 className="font-nerko text-4xl md:text-[70px] leading-tight">HOLA! SOY LATTIA</h2>
            <p className="mt-4 text-base md:text-lg">
              Te doy la bienvenida con una gran sonrisa y mucho cariño. <br />
              Aquí cada producto se prepara de forma artesanal, con amor y pensado para compartir momentos especiales en familia.<br />
              ¡Ven, recorre el menú y déjate sorprender por nuestros sabores más queridos!
            </p>
          </div>
        </div>
      </section>

      <section className="w-[90%] mx-auto py-12">
        <h2 className="font-nerko text-3xl md:text-[36px] text-lila text-center md:text-left mb-6">LOS MIMADOS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destacados.map((item) => (
            <div key={item.id} className="text-center p-4 bg-white rounded-lg shadow">
              <div className="h-64 flex items-center justify-center">
                <Image src={item.image} alt={item.nombre} width={200} height={200} className="object-contain max-h-full" />
              </div>
              <h4 className="text-xl font-semibold mt-4">{item.nombre}</h4>
              <p className="text-sm mt-1">{item.descripcion}</p>
              <p className="text-lg font-bold text-lila mt-2">$ {item.preciosPorLocal?.local1?.toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/menu" className="rounded-md bg-lila px-5 py-3 text-white text-lg hover:bg-lattia">Ver todo el menú</a>
        </div>
      </section>

      <section className="w-[90%] mx-auto pb-12">
        <h2 className="font-nerko text-3xl text-lila mb-6 text-center md:text-left">DEL BLOG</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center bg-white rounded-lg shadow p-4">
          <Image
            src={articulo.image}
            alt={articulo.title}
            width={300}
            height={200}
            className="rounded-md"
          />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-lila mb-2">{articulo.title}</h3>
            <p className="text-sm text-gray-700 mb-3">{articulo.summary}</p>
            <a href={articulo.link} className="text-lila underline hover:text-naranja">Leer artículo completo</a>
          </div>
        </div>
      </section>
    </>
  );
}

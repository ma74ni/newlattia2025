//import { Articulo } from '@/interfaces/articulo';
import { Producto } from '@/interfaces/producto';
import Image from 'next/image';
import productos from '@/data/mockProducts.json';
import articulo from '@/data/mockArticle.json';
import Banner from '@/components/Home/Banner';
import Featured from '@/components/Home/Featured';
import ArticleBlog from '@/components/Home/ArticleBlog';

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

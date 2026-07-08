import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Hand, ShieldCheck } from 'lucide-react';

interface TimelineItem {
  id: string;
  etiqueta: string;
  titulo: string;
  copy: string;
  imageSrc: string;
}

const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'comienzo',
    etiqueta: 'El comienzo',
    titulo: 'Un recuerdo que se convirtió en oficio',
    copy: 'Alicia Carrillo tenía su trabajo fijo, su rutina y sus recuerdos. Y entre esos recuerdos vivían las hermanas de un convento donde ella pasó parte de su juventud — preparando helados con sus propias manos para venderlos. Algo en ella nunca olvidó ese sabor, ni esa forma de hacer las cosas. Así que un día decidió intentarlo. Nacieron las primeras paletas: de coco, de come y bebe, de los sabores que recuerdan a Salcedo. Y Quito empezó a conocerlas — en el mercado de Cotocollao, por el sector del Hospital Militar, en la Ajaví. Sin local, sin marca, sin nada más que convicción y mucho trabajo.',
    imageSrc: '/assets/images/historia/el_comienzo.jpg',
  },
  {
    id: 'sabores',
    etiqueta: 'Los primeros sabores',
    titulo: 'La fruta natural entró a la paila',
    copy: 'Con el negocio creciendo, llegó la siguiente evolución: los helados de paila con fruta natural. El proceso seguía siendo completamente artesanal — como siempre lo sería — pero el sabor se fue complejizando. Cada nueva receta era una apuesta, un aprendizaje, un paso más hacia lo que Lattia terminaría siendo.',
    imageSrc: '/assets/images/historia/primeros_sabores.jpg',
  },
  {
    id: 'maquinas',
    etiqueta: 'Crecer con las manos',
    titulo: 'Capacitación, deuda y nuevas máquinas',
    copy: 'Alicia no se quedó quieta. Se capacitó. Se endeudó. Y con esas dos cosas — conocimiento y valentía — fue adquiriendo los equipos necesarios para dar el siguiente salto: los helados soft y los helados duros de cono, con base de leche y de agua. La tecnología llegó, pero el alma del proceso siempre siguió siendo manual. Eso nunca cambió.',
    imageSrc: '/assets/images/historia/crecer_con_manos.jpg',
  },
  {
    id: 'matriz',
    etiqueta: 'La esquina que lo cambió todo',
    titulo: 'La Matriz: pequeña, histórica, nuestra',
    copy: 'En la esquina de la Hoppe Norton y Rother, al sur de Quito, abrió el primer local de Lattia. Un espacio pequeño, cargado de ilusión, que se convirtió desde el primer día en el corazón de la marca. Ese local sigue abierto hoy. Lo llamamos cariñosamente la Matriz — porque de ahí nacimos y ahí seguimos.',
    imageSrc: '/assets/images/historia/la_esquina.jpg',
  },
  {
    id: 'ferias',
    etiqueta: 'De barrio en barrio',
    titulo: 'Quito nos conoció helado a helado',
    copy: 'Con local propio, llegó el momento de salir a la ciudad. Lattia comenzó a estar presente en kermeses de colegios, en ferias organizadas por el Municipio de Quito y en los rincones más distintos de la capital: el Parque Bicentenario, La Ecuatoriana, la Plaza Cívica Eloy Alfaro. Y más allá de Pichincha también: en la provincia de Santo Domingo de los Tsáchilas, en la feria Mi tierrita, Lattia llegó con sus helados y se ganó nuevos corazones. La marca crecía. La familia también.',
    imageSrc: '/assets/images/historia/de_barrio_en_barrio.jpg',
  },
  {
    id: 'pandemia',
    etiqueta: 'La prueba más dura',
    titulo: 'Cuando todo se tambalea, la raíz aguanta',
    copy: 'La pandemia llegó y lo detuvo todo. Pero el local siguió abierto en lo que pudo, el arriendo siguió pagándose — reducido, pero pagándose — y la voluntad de no rendirse también. Fue entonces cuando los hijos tomaron el mando. Se abrió una segunda ubicación: una isla en el centro comercial RiverMall, en Sangolquí. Pero la buena intención no siempre es suficiente: una mala administración puso a Lattia al borde del abismo. Deudas, maquinaria dañada, personal afectado, clientes perdidos. El gerente fue despedido y la heladería quedó en cuidados intensivos. Fue el momento más oscuro. Y también el punto de partida de algo nuevo.',
    imageSrc: '/assets/images/historia/prueba_mas_dura.jpg',
  },
  {
    id: 'familia',
    etiqueta: 'La familia responde',
    titulo: 'Lucía, Pablo y Diego — los tres que dijeron que sí',
    copy: 'Diego fue el primero en no rendirse. Hizo lo imposible por mantener todo funcionando y fue a buscar a su hermana Lucía. La convenció. Juntos fueron a buscar a Pablo. Y los tres — sin títulos gerenciales, sin manual de crisis, pero con el apellido Carrillo y el amor por lo que su madre había construido — se pusieron a trabajar. Más de un año después, la historia cambió de capítulo: las deudas se saldaron, llegó nueva maquinaria, se sumó nuevo personal y Lattia volvió a respirar. La familia había respondido, como siempre lo hace la gente que de verdad quiere algo.',
    imageSrc: '/assets/images/historia/familia_responde.jpg',
  },
  {
    id: 'hoy',
    etiqueta: 'Hoy y mañana',
    titulo: 'Dos locales. Una sola esencia. Muchos sueños por delante.',
    copy: 'Hoy Lattia tiene dos locales — la Matriz en Quito y la isla de RiverMall en Sangolquí — y un equipo que lleva la marca con orgullo. Cada helado sigue siendo artesanal. Cada sabor sigue siendo honesto. Y los ojos siguen mirando hacia adelante: nuevos locales, nuevas historias, nuevas razones para que alguien pruebe un Lattia y ya no pueda olvidarlo. La historia de Alicia Carrillo no terminó. Apenas está en su mejor capítulo.',
    imageSrc: '/assets/images/historia/hoy_manana.jpg',
  },
];

const PILARES = [
  { Icon: Leaf, label: 'Ingredientes naturales' },
  { Icon: Hand, label: '100% artesanal' },
  { Icon: ShieldCheck, label: 'Sin conservantes' },
];

export default function NosotrosPage() {
  return (
    <>
      <NextSeo
        title="Nuestra Historia"
        description="Conoce la historia de Alicia Carrillo y cómo desde 1997 construyó Lattia, la heladería artesanal de Quito y Sangolquí, con manos, familia y mucho cariño."
      />

      {/* Hero */}
      <section className="relative w-full h-[320px] md:h-[420px]">
        <Image
          src="/assets/images/historia/hero.jpg"
          alt="Heladería Lattia"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-nerko text-white mb-3">
            Nuestra historia
          </h1>
          <p className="text-white/90 max-w-xl">
            Desde 1997 endulzando vidas — con las manos, el corazón y un sombrero inconfundible
          </p>
        </div>
      </section>

      <section className="w-[90%] max-w-5xl mx-auto py-12">
        {/* Intro */}
        <p className="text-center italic text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-16">
          No todas las marcas nacen de un plan de negocios. Algunas nacen de un recuerdo guardado
          durante años, de unas manos que saben hacer las cosas bien y de una mujer que nunca salía
          sin su sombrero. Esta es la historia de Lattia — y es, sobre todo, la historia de una
          familia.
        </p>

        {/* Timeline */}
        <div className="flex flex-col gap-10 mb-20">
          {TIMELINE_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-center gap-6 rounded-xl border border-purpleMain/15 shadow-sm p-6 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="relative w-full md:w-1/2 h-56 md:h-64 shrink-0">
                <Image
                  src={item.imageSrc}
                  alt={item.titulo}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <span className="inline-block text-sm font-semibold text-orangeMain mb-2">
                  {item.etiqueta}
                </span>
                <h2 className="text-2xl font-nerko text-purpleMain mb-3">{item.titulo}</h2>
                <p className="text-gray-700 leading-relaxed">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Fundadora */}
        <div className="flex flex-col md:flex-row items-center gap-8 rounded-xl border border-purpleMain/15 shadow-sm p-6 mb-20">
          <div className="relative w-48 h-48 shrink-0">
            <Image
              src="/assets/images/historia/alicia.jpg"
              alt="Alicia Carrillo"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-nerko text-purpleMain mb-3 text-center md:text-left">
              Alicia Carrillo — la mujer detrás del sombrero
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Si alguna vez has visto el logo de Lattia, ya la conoces. Esa silueta con sombrero de
              ala ancha no es un dibujo cualquiera — es ella. Alicia siempre salía con su sombrero.
              Era parte de ella tanto como su sonrisa, su generosidad y esa costumbre de llamar
              «cariño» a todos los que quería. Todos en su entorno la buscaban preguntando lo mismo:
              «¿Dónde está la tía?» Y de ese apodo de familia, con el toque italiano que le dio el
              maestro heladero que la formó, nació el nombre: <strong>Lattia</strong>. La tía. Con
              acento italiano. Con sabor propio. Con sombrero y todo.
            </p>
          </div>
        </div>

        {/* Filosofía */}
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-3xl font-nerko text-purpleMain mb-4">
            Lo artesanal no es un slogan. Es nuestra forma de trabajar.
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
            En Lattia no usamos conservantes artificiales. Nunca los hemos usado. Nuestros helados
            se elaboran con ingredientes naturales, en un proceso donde las manos hacen lo que
            ninguna máquina puede reemplazar. Tenemos una batidora y nuestras mantecadoras — el
            resto es trabajo humano, tiempo y cuidado. Así empezamos en 1997 y así seguimos hoy.
            Porque cuando algo sale bien hecho desde el principio, no hay razón para cambiarlo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {PILARES.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 rounded-lg bg-purpleMain/5 p-6 flex-1 max-w-xs mx-auto"
              >
                <Icon className="text-orangeMain" size={32} />
                <span className="font-semibold text-purpleMain">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-nerko text-purpleMain mb-2">
            Ahora que ya nos conoces, ven a visitarnos
          </h2>
          <p className="text-gray-600 mb-6">
            Te esperamos con el helado listo — y con mucho cariño.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-purpleMain text-white px-6 py-3 rounded-md hover:bg-orangeMain transition"
          >
            Ver nuestros locales
          </Link>
        </div>
      </section>
    </>
  );
}

import Image from 'next/image';

export default function NosotrosPage() {
  return (
    <section className="w-[90%] max-w-5xl mx-auto py-12">
      <h1 className="text-4xl md:text-5xl font-nerko text-lila text-center mb-10">Nuestra historia</h1>

      <div className="space-y-8 text-gray-700 text-lg leading-relaxed mb-16">
        <p>
          En Lattia, creemos que los helados no son solo postres, sino una forma de crear recuerdos.
          Desde 1997, hemos trabajado con cariño para ofrecer sabores que conectan con las familias,
          los niños, y con todos quienes buscan un momento dulce y auténtico.
        </p>
        <p>
          Nuestros productos se preparan de forma artesanal, utilizando ingredientes naturales y recetas
          tradicionales combinadas con innovación. Cada sabor es una experiencia diseñada para compartir.
        </p>
        <p>
          Empezamos en un pequeño garaje, y gracias a ustedes, nos hemos convertido en un referente de
          helados naturales en el sur de Quito y en Sangolquí. Pero lo más importante nunca ha cambiado:
          hacer las cosas con amor.
        </p>
        <p>
          Hoy seguimos creciendo con el mismo espíritu familiar, soñando con llevar Lattia a más hogares.
          Gracias por ser parte de esta historia. 💜
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-nerko text-lila text-center mb-10">Nuestro equipo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <Image
              src="/assets/images/equipo_mama.jpg"
              alt="Mamá fundadora"
              width={180}
              height={180}
              className="mx-auto rounded-full object-cover"
            />
            <h4 className="text-lg font-semibold mt-4 text-lila">Mamá Fundadora</h4>
            <p className="text-sm text-gray-600">Corazón y receta original de Lattia</p>
          </div>
          <div>
            <Image
              src="/assets/images/equipo_hijo.jpg"
              alt="Hijo"
              width={180}
              height={180}
              className="mx-auto rounded-full object-cover"
            />
            <h4 className="text-lg font-semibold mt-4 text-lila">Diego Paredes</h4>
            <p className="text-sm text-gray-600">Innovación, tecnología y visión</p>
          </div>
          <div>
            <Image
              src="/assets/images/equipo_colaborador.jpg"
              alt="Colaboradora"
              width={180}
              height={180}
              className="mx-auto rounded-full object-cover"
            />
            <h4 className="text-lg font-semibold mt-4 text-lila">Ana</h4>
            <p className="text-sm text-gray-600">Producción y calidad diaria</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { NextSeo } from 'next-seo';
import {
  Ticket,
  Users,
  ShieldCheck,
  Calendar,
  Gift,
  MessageCircle,
} from 'lucide-react';

function Seccion({
  icono: Icono,
  titulo,
  children,
}: {
  icono: typeof Ticket;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-purpleMain/15 shadow-sm p-6">
      <div className="flex items-center gap-2 border-b border-orangeMain/40 pb-3 mb-4">
        <Icono className="text-orangeMain shrink-0" size={22} />
        <h2 className="text-2xl font-nerko text-purpleMain leading-none">
          {titulo}
        </h2>
      </div>
      <div className="flex flex-col gap-3 text-gray-700">{children}</div>
    </section>
  );
}

export default function RifaPage() {
  return (
    <>
      <NextSeo
        title="Bases legales · Rifa de Aniversario Lattia 2026"
        description="Bases legales completas de la Rifa de Aniversario Lattia 2026, válida en nuestro local de Quito (El Recreo)."
      />

      <div className="w-[90%] max-w-3xl mx-auto py-12">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-orangeMain font-semibold text-sm mb-1">
            <Ticket size={16} />
            Bases legales
          </span>
          <h1 className="text-4xl md:text-5xl font-nerko text-purpleMain leading-none">
            Rifa de Aniversario Lattia 2026
          </h1>
          <p className="text-gray-500 mt-2">
            Promoción válida únicamente en nuestro local de Quito (El Recreo).
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <Seccion icono={Ticket} titulo="Mecánica">
            <p>
              Por cada $5 de compra, presencial en nuestro local de Quito o
              por pedido de WhatsApp (solo pedidos del local de Quito), el
              cliente recibe 1 boleto para participar en el sorteo.
            </p>
            <p>
              El cliente debe llenar sus datos en el boleto y depositarlo en
              el ánfora del local de Quito para participar en el sorteo.
            </p>
            <p>
              Vigencia de acumulación de boletos: desde el 17 de septiembre
              hasta el domingo 27 de septiembre de 2026 (hasta el momento de
              la rifa).
            </p>
          </Seccion>

          <Seccion icono={Users} titulo="Elegibilidad">
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>
                Pueden participar menores de edad. Si un menor resulta
                ganador, el premio se reclama junto con un adulto responsable.
              </li>
              <li>
                No participan colaboradores del local de Quito ni familiares
                directos de los socios de Lattia.
              </li>
            </ul>
          </Seccion>

          <Seccion icono={ShieldCheck} titulo="Uso de datos personales">
            <p>
              Al llenar el boleto (nombre, cédula de ciudadanía y teléfono),
              el participante autoriza el uso de esos datos únicamente para
              fines de este sorteo: contacto y verificación de identidad en
              caso de resultar ganador.
            </p>
          </Seccion>

          <Seccion icono={Calendar} titulo="Del sorteo">
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>Fecha y hora: domingo 27 de septiembre de 2026, 16h00.</li>
              <li>Lugar: local de Quito (El Recreo).</li>
              <li>
                El boleto ganador lo extrae una persona presente en el
                evento.
              </li>
              <li>
                Si el ganador no se encuentra presente, se anuncia igualmente
                y se le contacta después con los datos registrados en su
                boleto.
              </li>
            </ul>
          </Seccion>

          <Seccion icono={Gift} titulo="El premio">
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>
                El ganador recibe 1 litro de helado mensual durante 12 meses
                consecutivos, a partir de octubre de 2026.
              </li>
              <li>
                El sabor es libre: puede combinar hasta 6 sabores dentro del
                litro.
              </li>
              <li>
                Para reclamar el premio cada mes, el ganador o ganadora
                deberá presentar la cartilla para sellarla. No se entregará
                si no presenta la cartilla. Para la entrega de la cartilla,
                la primera vez, sí debe presentar la cédula y el boleto.
              </li>
              <li>
                Si el ganador no reclama el litro correspondiente a un mes,
                ese mes se pierde (no acumula ni tiene plazo de gracia).
              </li>
              <li>El premio es personal e intransferible.</li>
            </ul>
          </Seccion>

          <Seccion icono={MessageCircle} titulo="Contacto">
            <p>
              Para dudas sobre esta promoción, escríbenos a 0961128233
              (Diego Paredes).
            </p>
          </Seccion>
        </div>
      </div>
    </>
  );
}

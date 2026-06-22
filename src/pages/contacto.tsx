import { NextSeo } from 'next-seo';
import {
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Music,
} from 'lucide-react';

const WHATSAPP = '593983766954';

const locales = [
  {
    ciudad: 'Quito',
    direccion: 'Hoppe Norton y Rother. Esquina.',
    mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.778943605988!2d-78.51785009999999!3d-0.25455479999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5bdf10a441c11%3A0x4f4334b38b079dfd!2sHelader%C3%ADa%20Lattia!5e0!3m2!1ses!2sec!4v1749163141791!5m2!1ses!2sec',
  },
  {
    ciudad: 'Sangolquí',
    direccion: 'Subsuelo 1 del River Mall',
    mapa: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d838.7425735752657!2d-78.45006587864584!3d-0.3239585105549343!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d599aa55609947%3A0x3af84cce2461ff18!2sHelader%C3%ADa%20Lattia!5e0!3m2!1ses!2sec!4v1749188648142!5m2!1ses!2sec',
  },
];

const redes = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/heladoslattia.ec',
    Icon: Facebook,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/heladoslattia.ec',
    Icon: Instagram,
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com/@heladoslattia.ec',
    Icon: Music,
  },
];

export default function ContactoPage() {
  return (
    <>
      <NextSeo
        title="Contacto"
        description="Visítanos en Quito y Sangolquí, escríbenos por WhatsApp o síguenos en redes. Heladería Lattia."
      />
      <section className="w-[90%] max-w-6xl mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-nerko text-purpleMain text-center mb-2">
          Contáctanos
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Estamos para servirte. ¡Escríbenos o visítanos!
        </p>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Datos de contacto */}
          <div className="rounded-xl border border-purpleMain/15 shadow-sm p-6 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-nerko text-purpleMain mb-3">
                Escríbenos
              </h2>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-purpleMain text-white px-5 py-3 rounded-md hover:bg-orangeMain transition w-full"
              >
                <MessageCircle size={20} />
                Pedir por WhatsApp
              </a>
              <a
                href="mailto:hola@heladerialattia.ec"
                className="flex items-center gap-2 text-gray-700 hover:text-purpleMain transition mt-4"
              >
                <Mail size={18} className="text-orangeMain shrink-0" />
                hola@heladerialattia.ec
              </a>
            </div>

            <div>
              <h2 className="text-2xl font-nerko text-purpleMain mb-3">
                Síguenos
              </h2>
              <div className="flex gap-3">
                {redes.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center w-11 h-11 rounded-full bg-purpleMain/10 text-purpleMain hover:bg-purpleMain hover:text-white transition"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Direcciones */}
          <div className="lg:col-span-2 rounded-xl border border-purpleMain/15 shadow-sm p-6">
            <h2 className="text-2xl font-nerko text-purpleMain mb-4">
              Nuestros locales
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {locales.map((local) => (
                <div
                  key={local.ciudad}
                  className="flex items-start gap-3 rounded-lg bg-purpleMain/5 p-4"
                >
                  <MapPin className="text-orangeMain shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-purpleMain">
                      {local.ciudad}
                    </p>
                    <p className="text-gray-700 text-sm">{local.direccion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mapas */}
        <div className="grid md:grid-cols-2 gap-6">
          {locales.map((local) => (
            <div key={local.ciudad}>
              <h3 className="text-xl font-nerko text-purpleMain mb-2">
                Ubicación {local.ciudad}
              </h3>
              <iframe
                title={`Mapa de Heladería Lattia en ${local.ciudad}`}
                src={local.mapa}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl shadow"
              ></iframe>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

"use client";

import { NextSeo } from 'next-seo';
import Image from 'next/image';
import {
  MessageCircle,
  Mail,
  MapPin,
  Globe,
  Download,
  Share2,
  Facebook,
  Instagram,
  Music,
  IceCream,
  Banana,
  PartyPopper,
  Truck,
} from 'lucide-react';

const WHATSAPP = '593983766954';
const WHATSAPP_DISPLAY = '+593 98 376 6954';
const EMAIL = 'hola@heladerialattia.ec';
const WEB = 'https://heladerialattia.com';

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

const servicios = [
  {
    Icon: IceCream,
    titulo: 'Helados artesanales',
    detalle: 'Sabores únicos elaborados con ingredientes naturales.',
  },
  {
    Icon: Banana,
    titulo: 'Chocobananas',
    detalle: 'Banano bañado en chocolate con tus toppings favoritos.',
  },
  {
    Icon: PartyPopper,
    titulo: 'Eventos empresariales y privados',
    detalle: 'Llevamos Lattia a tu empresa, evento o celebración.',
  },
  {
    Icon: Truck,
    titulo: 'Servicio a domicilio',
    detalle: 'Pedidos directo a tu puerta por WhatsApp.',
  },
];

const locales = [
  { ciudad: 'Quito', direccion: 'Hoppe Norton y Rother. Esquina.' },
  { ciudad: 'Sangolquí', direccion: 'Subsuelo 1 del River Mall.' },
];

const buildVCard = () =>
  [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:;Heladería Lattia;;;',
    'FN:Heladería Lattia',
    'ORG:Heladería Lattia',
    'TITLE:Heladería artesanal',
    `TEL;TYPE=CELL,VOICE:+${WHATSAPP}`,
    `EMAIL;TYPE=INTERNET:${EMAIL}`,
    `URL:${WEB}`,
    'ADR;TYPE=WORK:;;Hoppe Norton y Rother;Quito;;;Ecuador',
    'X-SOCIALPROFILE;TYPE=facebook:https://facebook.com/heladoslattia.ec',
    'X-SOCIALPROFILE;TYPE=instagram:https://instagram.com/heladoslattia.ec',
    'X-SOCIALPROFILE;TYPE=tiktok:https://tiktok.com/@heladoslattia.ec',
    'NOTE:Helados artesanales, chocobananas, eventos empresariales y privados y servicio a domicilio.',
    'END:VCARD',
  ].join('\n');

export default function InfoPage() {
  const descargarVCard = () => {
    const blob = new Blob([buildVCard()], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'heladeria-lattia.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const compartir = async () => {
    const shareData = {
      title: 'Heladería Lattia',
      text: 'Helados artesanales en Quito y Sangolquí 🍦',
      url: `${WEB}/info`,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert('¡Enlace copiado!');
      }
    } catch {
      /* usuario canceló o no soportado */
    }
  };

  return (
    <>
      <NextSeo
        title="Heladería Lattia · Tarjeta de contacto"
        description="Helados artesanales, chocobananas, eventos y servicio a domicilio en Quito y Sangolquí. Escríbenos por WhatsApp o guarda nuestro contacto."
        noindex
        nofollow
      />

      <main className="min-h-screen w-full bg-gradient-to-b from-purpleMain via-purpleMain to-orangeMain px-4 py-8 flex items-center justify-center">
        <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden">
          {/* Encabezado */}
          <div className="flex flex-col items-center px-6 pt-8 pb-6">
            <div className="rounded-2xl bg-white p-3 shadow-md ring-1 ring-purpleMain/10">
              <Image
                src="/assets/images/logos/logo_lattia.svg"
                alt="Heladería Lattia"
                width={150}
                height={124}
                priority
                className="w-[150px] h-auto"
              />
            </div>
            <h1 className="mt-4 text-3xl font-nerko text-purpleMain text-center">
              Heladería Lattia
            </h1>
            <p className="text-center text-gray-500 text-sm">
              Helados artesanales · Quito y Sangolquí
            </p>
          </div>

          {/* Acciones principales */}
          <div className="px-6 flex flex-col gap-3">
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-purpleMain text-white px-5 py-3 rounded-xl font-semibold hover:bg-orangeMain transition"
            >
              <MessageCircle size={20} />
              Escríbenos por WhatsApp
            </a>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={descargarVCard}
                className="flex items-center justify-center gap-2 border border-purpleMain/25 text-purpleMain px-4 py-3 rounded-xl font-semibold hover:bg-purpleMain/5 transition"
              >
                <Download size={18} />
                Guardar
              </button>
              <button
                onClick={compartir}
                className="flex items-center justify-center gap-2 border border-purpleMain/25 text-purpleMain px-4 py-3 rounded-xl font-semibold hover:bg-purpleMain/5 transition"
              >
                <Share2 size={18} />
                Compartir
              </button>
            </div>
          </div>

          {/* Servicios */}
          <div className="px-6 pt-8">
            <h2 className="text-2xl font-nerko text-purpleMain mb-3">
              Nuestros servicios
            </h2>
            <ul className="flex flex-col gap-3">
              {servicios.map(({ Icon, titulo, detalle }) => (
                <li key={titulo} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-orangeMain/10 text-orangeMain">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="font-semibold text-primary leading-tight">
                      {titulo}
                    </p>
                    <p className="text-sm text-gray-500">{detalle}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Locales */}
          <div className="px-6 pt-8">
            <h2 className="text-2xl font-nerko text-purpleMain mb-3">
              Encuéntranos
            </h2>
            <ul className="flex flex-col gap-3">
              {locales.map(({ ciudad, direccion }) => (
                <li
                  key={ciudad}
                  className="flex items-start gap-3 rounded-xl bg-purpleMain/5 p-3"
                >
                  <MapPin className="text-orangeMain shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-semibold text-purpleMain leading-tight">
                      {ciudad}
                    </p>
                    <p className="text-sm text-gray-600">{direccion}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto directo */}
          <div className="px-6 pt-8 flex flex-col gap-3">
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-purpleMain transition"
            >
              <MessageCircle size={18} className="text-orangeMain shrink-0" />
              {WHATSAPP_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 text-gray-700 hover:text-purpleMain transition"
            >
              <Mail size={18} className="text-orangeMain shrink-0" />
              {EMAIL}
            </a>
            <a
              href={WEB}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-purpleMain transition"
            >
              <Globe size={18} className="text-orangeMain shrink-0" />
              heladerialattia.com
            </a>
          </div>

          {/* Redes */}
          <div className="px-6 py-8 flex justify-center gap-3">
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
      </main>
    </>
  );
}

InfoPage.noChrome = true;

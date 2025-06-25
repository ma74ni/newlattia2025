import { Mail, Facebook, Instagram, Music } from 'lucide-react';

export default function ContactoPage() {
  return (
    <section className="w-[90%] max-w-7xl mx-auto py-12">
      <h1 className="text-4xl md:text-5xl font-nerko text-lila text-center mb-10">Contáctanos</h1>

      {/* Info */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        {/* Detalles */}
        <div className="space-y-5 text-gray-700 text-lg">
          <div>
            <h2 className="text-xl font-semibold text-lila">Direcciones</h2>
            <p><strong>Quito:</strong> Hoppe Norton y Rother. Esquina.</p>
            <p><strong>Sangolquí:</strong> Subsuelo 1 del River Mall</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-lila">Correo</h2>
            <p className="flex items-center gap-2">
              <Mail size={18} className="text-lila" />
              <a href="mailto:hola@heladerialattia.ec" className="underline text-lila">
                hola@heladerialattia.ec
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-lila">Redes Sociales</h2>
            <div className="flex gap-4 mt-2 text-lila">
              <a href="https://facebook.com/heladoslattia.ec" target="_blank" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="https://instagram.com/heladoslattia.ec" target="_blank" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="https://tiktok.com/@heladoslattia.ec" target="_blank" aria-label="TikTok">
                <Music />
              </a>
            </div>
          </div>
        </div>

        {/* Mapa Quito */}
        <div>
          <h3 className="text-lg font-semibold text-lila mb-2">Ubicación Quito</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.778943605988!2d-78.51785009999999!3d-0.25455479999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5bdf10a441c11%3A0x4f4334b38b079dfd!2sHelader%C3%ADa%20Lattia!5e0!3m2!1ses!2sec!4v1749163141791!5m2!1ses!2sec"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded shadow"
          ></iframe>
        </div>
      </div>

      {/* Mapa Sangolquí */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-lila mb-2">Ubicación Sangolquí</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d838.7425735752657!2d-78.45006587864584!3d-0.3239585105549343!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d599aa55609947%3A0x3af84cce2461ff18!2sHelader%C3%ADa%20Lattia!5e0!3m2!1ses!2sec!4v1749188648142!5m2!1ses!2sec"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded shadow"
        ></iframe>
      </div>
    </section>
  );
}

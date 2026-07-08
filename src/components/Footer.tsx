import { Facebook, Instagram, Music } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blueMain text-white px-6 py-8 md:py-10 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-10 text-center md:text-left divide-y divide-white/10 md:divide-y-0">
        <div className="flex flex-col md:w-1/3 items-center md:items-start pb-8 md:pb-0">
          <Image
            src="/assets/images/logos/logo_v2.svg"
            alt="Logo Lattia"
            width={128}
            height={60}
            className="mb-4 w-24 md:w-32 h-auto"
          />
          <p className="text-sm leading-snug">Lattia con ❤️ desde 1997.</p>
        </div>

        <div className="md:w-1/3 pt-8 md:pt-0 pb-8 md:pb-0">
          <h4 className="text-lg font-semibold mb-2">Ubicaciones</h4>
          <p className="text-sm">Quito: Hoppe Norton y Rother. Esquina.</p>
          <p className="text-sm">Sangolquí: Subsuelo 1 del River Mall</p>
        </div>

        <div className="md:w-1/3 pt-8 md:pt-0">
          <h4 className="text-lg font-semibold mb-2">Contáctanos</h4>
          <p className="text-sm">
            Correo: <a href="mailto:hola@heladerialattia.ec" className="underline">hola@heladerialattia.ec</a>
          </p>
          <div className="flex justify-center md:justify-start gap-2 mt-3">
            <a
              href="https://www.facebook.com/heladoslattia.ec"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/heladoslattia.ec"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@heladoslattia.ec"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Music className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-white/80">
        © 2025 Heladería Lattia. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
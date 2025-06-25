import { Facebook, Instagram, Music } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-azul text-white px-6 py-10 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Logo e info */}
        <div className="flex flex-col md:w-1/3 items-center md:items-start text-center md:text-left">
          <Image
            src="/assets/images/logo_v2.svg"
            alt="Logo Lattia"
            width={128}
            height={60}
            className="mb-4"
          />
          <p className="text-sm leading-snug">Lattia con ❤️ desde 1997.</p>
        </div>

        {/* Ubicaciones */}
        <div className="md:w-1/3 text-center md:text-left">
          <h4 className="text-lg font-semibold mb-2">Ubicaciones</h4>
          <p className="text-sm">Quito: Hoppe Norton y Rother. Esquina.</p>
          <p className="text-sm">Sangolquí: Subsuelo 1 del River Mall</p>
        </div>

        {/* Contacto y redes */}
        <div className="md:w-1/3 text-center md:text-left">
          <h4 className="text-lg font-semibold mb-2">Contáctanos</h4>
          <p className="text-sm">
            Correo: <a href="mailto:hola@heladerialattia.ec" className="underline">hola@heladerialattia.ec</a>
          </p>
          <div className="flex justify-center md:justify-start gap-3 mt-2">
            <a href="https://www.facebook.com/heladoslattia.ec" target="_blank" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/heladoslattia.ec" target="_blank" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com/@heladoslattia.ec" target="_blank" aria-label="TikTok">
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
import Link from 'next/link'
import Image from 'next/image'

const AniversarioBanner = () => {
  return (
    <Link
      href="/rifa"
      aria-label="Conoce la Rifa de Aniversario Lattia 2026"
      className="block w-[90%] mx-auto py-6"
    >
      <div className="relative w-full aspect-[8/3] rounded-2xl shadow-lg">
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <Image
            src="/assets/images/banners/aniversario-rifa.jpg"
            alt="Estamos de Aniversario - Rifa de Aniversario Lattia 2026"
            fill
            priority
            sizes="(min-width: 1024px) 1152px, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </Link>
  )
}

export default AniversarioBanner

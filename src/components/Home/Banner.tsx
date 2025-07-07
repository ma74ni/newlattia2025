import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <>
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center pt-12 gap-8">
        <Image
          src="/assets/images/banners/lattia-1.svg"
          alt="Lattia chart 1"
          width={286}
          height={364}
          className="w-[286px] md:w-[286px] h-auto object-contain"
        />
        <div className="text-center text-purpleMain max-w-xl">
          <h2 className="font-nerko text-4xl md:text-[70px] leading-tight">HOLA! SOY LATTIA</h2>
          <p className="mt-4 text-base md:text-lg">
            Te doy la bienvenida con una gran sonrisa y mucho cariño. <br />
            Aquí cada producto se prepara de forma artesanal, con amor y pensado para compartir momentos especiales en familia.<br />
            ¡Ven, recorre el menú y déjate sorprender por nuestros sabores más queridos!
          </p>
        </div>
      </div>
    </>
  )
}

export default Banner
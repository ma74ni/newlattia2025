import { Producto } from '@/interfaces/producto';
import Link from 'next/link';
import Image from 'next/image';

interface FeaturedProps {
    featured: Producto[]
}

const Featured = ({featured}: FeaturedProps) => {
  return (
    <>
    <h2 className="text-center md:text-left mb-6">LOS MIMADOS</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {featured.map((item) => (
        <div key={item.id} className="text-center p-4 bg-white rounded-lg shadow">
        <div className="h-64 flex items-center justify-center">
            <Image src={item.image} alt={item.nombre} width={200} height={200} className="object-contain max-h-full" />
        </div>
        <h4 className="text-xl font-semibold mt-4">{item.nombre}</h4>
        <p className="text-sm mt-1">{item.descripcion}</p>
        <p className="text-lg font-bold text-lila mt-2">$ {item.preciosPorLocal?.local1?.toFixed(2)}</p>
        </div>
    ))}
    </div>
    <div className="text-center mt-12">
    <Link href="/menu" className="rounded-md bg-purpleMain px-5 py-3 text-white text-lg hover:opacity-95">
        Ver todo el menú
    </Link>
    </div>
    </>
  )
}

export default Featured
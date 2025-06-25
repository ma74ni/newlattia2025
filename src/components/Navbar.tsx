"use client";

import Link from 'next/link';
import { useContext, useState, useEffect } from 'react';

import { Menu, X, ShoppingBasket } from 'lucide-react';
import { CartContext } from '@/context/CartContext';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const cartContext = useContext(CartContext);
  const carrito = cartContext?.carrito ?? [];
  const [showMenu, setShowMenu] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);


  const isActive = (path: string) =>
  pathname === path ? 'border-yellowMain' : 'border-transparent';

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-white px-4 pb-4 pt-2">
      <div className="max-w-7xl mx-auto">
        <p className="text-center md:text-right text-sm text-white">
          Pedidos a domicilio: <a href="https://wa.me/+593999293638" target="_blank" className="font-semibold">+593 99 929 3638</a>
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4 mt-2">
          <Image
            src="/assets/images/logos/logo_lattia.svg"
            alt="Logo Lattia"
            width={194}
            height={160}
            className="w-[194px] h-auto"
            />

          {/* Botón hamburguesa */}
          <div className="md:hidden flex justify-end mb-2 text-primary">
            <button onClick={() => setShowMenu(!showMenu)} className="text-lila">
              {showMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <div className="flex flex-col md:flex-row text-primary justify-end items-center font-semibold gap-4 w-full md:w-auto text-center">
            {(showMenu || isDesktop) && (
              <nav className="flex flex-col md:flex-row">
                <Link href="/" className={`px-2 border-b-2 ${isActive('/')} hover:border-yellowMain`}>Inicio</Link>
                <Link href="/menu" className={`px-2 border-b-2 ${isActive('/menu')} hover:border-yellowMain`}>Menú</Link>
                <Link href="/nosotros" className={`px-2 border-b-2 ${isActive('/nosotros')} hover:border-yellowMain`}>Nosotros</Link>
                <Link href="/blog" className={`px-2 border-b-2 ${isActive('/blog')} hover:border-yellowMain`}>Blog</Link>
                <Link href="/contacto" className={`px-2 border-b-2 ${isActive('/contacto')} hover:border-yellowMain`}>Contacto</Link>
              </nav>
            )}

            <div className="relative cursor-pointer">
              <ShoppingBasket className="w-5 h-5 text-lila" />
              <span className="absolute top-[-5px] right-[-10px] bg-lila text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                {carrito.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navbar
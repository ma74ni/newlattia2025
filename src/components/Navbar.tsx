"use client";

import Link from 'next/link';
import { useContext, useState } from 'react';

import { Menu, X, ShoppingBasket } from 'lucide-react';
import { CartContext } from '@/context/CartContext';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navbarItems } from '@/data';

const Navbar = () => {
  const pathname = usePathname();
  const cartContext = useContext(CartContext);
  const carrito = cartContext?.carrito ?? [];
  const [showMenu, setShowMenu] = useState(false);
  const showShoppingBag = false

  const isActive = (path: string) =>
  pathname === path ? 'border-yellowMain' : 'border-transparent';

  const visibleItems = navbarItems.filter(item => item.visible !== false);

  return (
    <header className="bg-white px-4 pb-4 pt-2 dark:bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <p className="text-center md:text-right text-xs md:text-sm text-white">
          Pedidos a domicilio: <a href="https://wa.me/593983766954" target="_blank" className="font-semibold">+593 98 376 6954</a>
        </p>

        <div className="flex items-center justify-between md:items-end gap-4 mt-2">
          <Link href={'/'} className="shrink-0" onClick={() => setShowMenu(false)}>
            <Image
              src="/assets/images/logos/logo_lattia.svg"
              alt="Logo Lattia"
              width={194}
              height={160}
              className="w-24 md:w-[194px] h-auto image-logo"
              />
          </Link>

          {/* Botón hamburguesa */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden text-purpleMain p-1 -mr-1"
            aria-label={showMenu ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={showMenu}
          >
            {showMenu ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>

          <div className="hidden md:flex text-primary justify-end items-end font-semibold gap-4">
            <nav className="flex flex-row">
              {visibleItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-2 border-b-2 ${isActive(item.href)} hover:border-yellowMain`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {showShoppingBag && (
              <div className="relative cursor-pointer">
                <ShoppingBasket className="w-5 h-5 text-purpleMain" />
                <span className="absolute top-[-5px] right-[-10px] bg-purpleMain text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                  {carrito.length}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Menú móvil */}
        {showMenu && (
          <nav className="md:hidden flex flex-col items-center gap-1 text-primary font-semibold text-center pt-4 pb-1">
            {visibleItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setShowMenu(false)}
                className={`w-full py-2 border-b-2 ${isActive(item.href)} hover:border-yellowMain`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
export default Navbar
"use client";

import { createContext, useState, useEffect, useMemo } from 'react';

import { ReactNode } from 'react';

interface Producto {
  nombre: string;
  precio: number;
  detalle?: Record<string, string>;
}

interface QuitarDelCarrito {
    (index: number): void;
}

interface CartContextType {
  carrito: Producto[];
  agregarAlCarrito: (item: Producto) => void;
  quitarDelCarrito: (index: number) => void;
  totalCarrito: number;
  nombreCliente: string;
  setNombreCliente: (val: string) => void;
  telefonoCliente: string;
  setTelefonoCliente: (val: string) => void;
  direccionCliente: string;
  setDireccionCliente: (val: string) => void;
  tipoEntrega: string;
  setTipoEntrega: (val: string) => void;
  enviarPorWhatsapp: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [carrito, setCarrito] = useState<Producto[]>([]);
  const [nombreCliente, setNombreCliente] = useState('');
  const [telefonoCliente, setTelefonoCliente] = useState('');
  const [direccionCliente, setDireccionCliente] = useState('');
  const [tipoEntrega, setTipoEntrega] = useState('Domicilio');

  useEffect(() => {
    const stored = localStorage.getItem('carrito');
    if (stored) setCarrito(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

const agregarAlCarrito = (item: Producto) => {
    setCarrito((prev: Producto[]) => [...prev, item]);
};



const quitarDelCarrito: QuitarDelCarrito = (index) => {
    setCarrito((prev: Producto[]) => prev.filter((_, i) => i !== index));
};

  const totalCarrito = useMemo(
    () => carrito.reduce((acc, p) => acc + (p.precio || 0), 0),
    [carrito]
  );

  const enviarPorWhatsapp = () => {
    if (!carrito.length || !nombreCliente || !telefonoCliente) return;

    const mensaje = carrito
      .map((item, i) => {
        let linea = `🍦 *${i + 1}. ${item.nombre}* - $${item.precio.toFixed(2)}`;
        if (item.detalle) {
          const detalles = Object.entries(item.detalle)
            .filter(([, v]) => v)
            .map(([k, v]) => `• ${k}: ${v}`)
            .join('\n');
          linea += `\n${detalles}`;
        }
        return linea;
      })
      .join('\n\n');

    const total = totalCarrito.toFixed(2);
    const cliente = `👤 *Cliente:* ${nombreCliente}\n📞 *Teléfono:* ${telefonoCliente}\n🚚 *Entrega:* ${tipoEntrega}`;
    const direccion = tipoEntrega === 'Domicilio' && direccionCliente
      ? `\n🏠 *Dirección:* ${direccionCliente}`
      : '';

    const texto = encodeURIComponent(
      `👋 ¡Hola! Quiero hacer un pedido:\n\n${mensaje}\n\n💰 *Total:* $${total}\n\n${cliente}${direccion}`
    );

    const telefono = '593XXXXXXXXX'; // Reemplazar con tu número
    const url = `https://wa.me/${telefono}?text=${texto}`;
    window.open(url, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        quitarDelCarrito,
        totalCarrito,
        nombreCliente,
        setNombreCliente,
        telefonoCliente,
        setTelefonoCliente,
        direccionCliente,
        setDireccionCliente,
        tipoEntrega,
        setTipoEntrega,
        enviarPorWhatsapp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
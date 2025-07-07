import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import { CartProvider } from '@/context/CartContext';
import type { AppProps } from 'next/app';
import Footer from '@/components/Footer';

import { DefaultSeo } from 'next-seo'; // ajusta el path si está en otro lugar
import SEO from '../../next-seo.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <DefaultSeo {...SEO} />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import { CartProvider } from '@/context/CartContext';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import Footer from '@/components/Footer';

import { DefaultSeo } from 'next-seo'; // ajusta el path si está en otro lugar
import SEO from '../../next-seo.config';
import ThemeProvider from '@/theme/theme-provider';

// Páginas standalone (p.ej. /info) pueden marcar `noChrome` para renderizarse
// sin Navbar ni Footer, como una tarjeta independiente.
type NextPageWithChrome = NextPage & { noChrome?: boolean };
type AppPropsWithChrome = AppProps & { Component: NextPageWithChrome };

export default function App({ Component, pageProps }: AppPropsWithChrome) {
  const page = <Component {...pageProps} />;

  return (
    <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
      <CartProvider>
        <DefaultSeo {...SEO} />
        {Component.noChrome ? (
          page
        ) : (
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{page}</main>
            <Footer />
          </div>
        )}
      </CartProvider>
    </ThemeProvider>
  );
}

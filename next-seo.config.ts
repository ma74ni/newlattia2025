/** @type {import('next-seo').DefaultSeoProps} */
const SEO = {
  title: 'Heladería Lattia',
  titleTemplate: '%s | Heladería Lattia',
  defaultTitle: 'Heladería Lattia',
  description: 'Disfruta de los mejores helados artesanales en Quito. Con cariño desde 1997 .',
  canonical: 'https://heladerialattia.com',
  openGraph: {
    type: 'website',
    locale: 'es_EC',
    url: 'https://heladerialattia.com',
    siteName: 'Heladería Lattia',
    title: 'Heladería Lattia',
    description: 'Helados artesanales, postres únicos y momentos inolvidables.',
    images: [
      {
        url: 'https://heladerialattia.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heladería Lattia - Helados artesanales',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@heladerialattia',
    site: '@heladerialattia',
    cardType: 'summary_large_image',
  },
};

export default SEO;

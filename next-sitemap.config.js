/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://heladerialattia.com',
  generateRobotsTxt: true, // genera también robots.txt
  // /info es una tarjeta de presentación pública pero no forma parte del sitio:
  // se excluye del sitemap y se bloquea en robots.txt (además de noindex en la página).
  exclude: ['/info'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: '/info' },
    ],
  },
};

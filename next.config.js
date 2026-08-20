/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages project site: <user>.github.io/Harish-portfolio/
  basePath: '/Harish-portfolio',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;

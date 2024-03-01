/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    trailingSlash: true,
      async rewrites() {
        return [
          {
            source: '',
            destination: 'https://lasotras.dk/recursero/'
          },
        ];
      },
    };

export default nextConfig;

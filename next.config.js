/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.datocms-assets.com'],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig

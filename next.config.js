/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['skylandvietnam.vn', 'res.cloudinary.com', 'toprealty.vn'],
  },
}


module.exports = nextConfig

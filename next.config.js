/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      enabled: true
    }
  }
}

module.exports = {
  ...nextConfig,
  images: {
    domains: ['media.licdn.com','img.freepik.com'],
  },
}
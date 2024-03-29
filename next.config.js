/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "loremflickr.com",
      "cloudflare-ipfs.com",
      "a0.muscache.com"
    ]
  }
}

module.exports = nextConfig

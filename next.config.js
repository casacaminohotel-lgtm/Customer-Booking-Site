/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Useful for static exports and Vercel
  },
};

module.exports = nextConfig;

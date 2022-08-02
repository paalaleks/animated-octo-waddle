/** @type {import('next').NextConfig} */
const nextConfig = {
  darkMode: false,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "default",
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    loader: "default",
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;

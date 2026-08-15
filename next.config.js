/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // for GitHub Pages
  },
};

module.exports = nextConfig;

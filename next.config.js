/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //this configuration is necessary to use sanity with next/Image with props
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        // pathname: '/account123/**',
      },
    ],
  },
};

module.exports = nextConfig;

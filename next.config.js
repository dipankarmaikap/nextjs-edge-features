/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    runtime: "experimental-edge",
    images: {
      allowFutureImage: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "dipankarmaikap.com",
        },
        {
          protocol: "https",
          hostname: "**.gmweb.pl",
        },
      ],
    },
  },
};

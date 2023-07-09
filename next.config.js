/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/bio:r*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/indiwtf",
        destination: "https://indiwtf.upset.dev",
        permanent: true,
      },
      {
        source: "/l/digitalocean",
        destination: "https://m.do.co/c/c57487ec51ca",
        permanent: false,
      },
      {
        source: "/l/vultr",
        destination: "https://www.vultr.com/?ref=9228062-8H",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

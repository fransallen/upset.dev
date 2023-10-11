/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.giphy.com",
        pathname: "/media/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/bio:r*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/statically",
        destination: "https://statically.io",
        permanent: true,
      },
      {
        source: "/puredns",
        destination: "https://puredns.org",
        permanent: true,
      },
      {
        source: "/favicone",
        destination: "https://favicone.com",
        permanent: true,
      },
      {
        source: "/blobcdn",
        destination: "https://blobcdn.com",
        permanent: true,
      },
      {
        source: "/indiwtf",
        destination: "https://indiwtf.upset.dev",
        permanent: true,
      },
      {
        source: "/fonts",
        destination: "https://fonts.upset.dev",
        permanent: true,
      },
      {
        source: "/httpcheck",
        destination: "https://httpcheck.upset.dev",
        permanent: true,
      },
      {
        source: "/thedevid",
        destination: "https://thedev.id",
        permanent: true,
      },
      {
        source: "/facemash",
        destination: "https://facemash.upset.dev",
        permanent: true,
      },
      {
        source: "/indiwtf-cli",
        destination: "https://github.com/fransallen/indiwtf-cli",
        permanent: true,
      },
      {
        source: "/indiwtf-api",
        destination: "https://indiwtf.upset.dev/api",
        permanent: true,
      },
      {
        source: "/easyrpz",
        destination: "https://github.com/pure-dns/easyrpz",
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
      {
        source: "/l/dewaweb",
        destination: "https://www.dewaweb.com/aff.php?aff=26349",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

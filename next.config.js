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
  async headers() {
    return [
      {
        source: "/:slug",
        headers: [
          {
            key: "Onion-Location",
            value:
              "http://upsetdevfm5twuhgwr2tmj6uy3h5byj3jagil4qqt73v5eis5fdgqbid.onion/:slug",
          },
        ],
      },
      {
        source: "/",
        headers: [
          {
            key: "Onion-Location",
            value:
              "http://upsetdevfm5twuhgwr2tmj6uy3h5byj3jagil4qqt73v5eis5fdgqbid.onion",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/bio:r*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/",
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
        source: "/thedevid",
        destination: "https://thedev.id",
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
    ];
  },
  async rewrites() {
    return [
      {
        source: "/facemash/:path*",
        destination: "https://facemash-clone.fly.dev/:path*",
      },
    ];
  },
};

module.exports = nextConfig;

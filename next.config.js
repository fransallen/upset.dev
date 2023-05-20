/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/css2:url*",
        destination: "https://fonts-upset-dev.vercel.app/css2:url*",
      },
      {
        source: "/css:url*",
        destination:
          "https://fonts-upset-dev-worker.statically.workers.dev/css:url*",
      },
      {
        source: "/f/:path*",
        destination: "https://fonts.gstatic.com/s/:path*",
      },
    ];
  },
};

module.exports = nextConfig;

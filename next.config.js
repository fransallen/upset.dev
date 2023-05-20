/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "cache-control",
            value: "public, max-age=300, must-revalidate",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

import Link from "next/link";

const otherProjects = [
  {
    name: "HTTP Check",
    info: "A tool for verifying whether a website has HTTP/2 & HTTP/3 enabled.",
    href: "https://httpcheck.upset.dev",
  },
  {
    name: "thedev.id",
    info: "A free identity for developers on the web.",
    href: "https://thedev.id",
  },
  {
    name: "Facemash Clone",
    info: "A clone of Facemash website from The Social Network movie.",
    href: "https://facemash.upset.dev",
  },
  {
    name: "Kominfu",
    info: "In July, 2022, the Indonesian government plans to ban online service providers including Google, Meta, Twitter, and many others. This is the countdown.",
    href: "https://kominfu.com",
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto p-6 lg:pt-10 lg:px-8">
      <h2 className="text-2xl font-bold text-center text-black/90">Projects</h2>
      <div className="grid grid-flow-row-dense grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 mt-8">
        <a
          href="https://statically.io"
          target="_blank"
          className="rounded-lg shadow bg-white cursor-pointer overflow-hidden transition-all duration-200 group hover:shadow-md"
        >
          <div
            className="h-32 w-full flex justify-center items-center transition-all duration-200"
            style={{ backgroundColor: "#ffcbcb" }}
          >
            <img className="w-14" src="/img/logo-statically.svg" />
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-black/90">
                Statically
              </h3>
            </div>
            <div className="mt-3 text-sm">
              Statically is a CDN for static files on GitHub, GitLab, and
              Bitbucket.
            </div>
            <div className="mt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-gray-100 mr-2">
                C++
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-green-100 text-green-800 mr-2">
                Node.js
              </span>
            </div>
          </div>
        </a>

        <a
          href="https://puredns.org"
          target="_blank"
          className="rounded-lg shadow bg-white cursor-pointer overflow-hidden transition-all duration-200 group hover:shadow-md"
        >
          <div
            className="h-32 w-full flex justify-center items-center transition-all duration-200"
            style={{ backgroundColor: "#ffeebf" }}
          >
            <img className="w-14" src="/img/logo-puredns.svg" />
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-black/90">PureDNS</h3>
            </div>
            <div className="mt-3 text-sm">
              Public DNS service that supports DNS over HTTPS, TLS, QUIC, Tor.
            </div>
            <div className="mt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-gray-100 mr-2">
                C++
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-100 text-blue-800 mr-2">
                Go
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-indigo-100 text-indigo-800 mr-2">
                Lua
              </span>
            </div>
          </div>
        </a>

        <a
          href="https://favicone.com"
          target="_blank"
          className="rounded-lg shadow bg-white cursor-pointer overflow-hidden transition-all duration-200 group hover:shadow-md relative"
        >
          <div className="absolute bg-red-500 rounded px-2 py-1 text-white text-xs right-0">
            New
          </div>
          <div
            className="h-32 w-full flex justify-center items-center transition-all duration-200"
            style={{ backgroundColor: "#bffff9" }}
          >
            <img className="w-12" src="/img/logo-favicone.svg" />
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-black/90">Favicone</h3>
            </div>
            <div className="mt-3 text-sm">
              A user-friendly API to get favicons from any website.
            </div>
            <div className="mt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-100 text-blue-800 mr-2">
                Go
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-gray-100 mr-2">
                JavaScript
              </span>
            </div>
          </div>
        </a>

        <a
          href="https://blobcdn.com"
          target="_blank"
          className="rounded-lg shadow bg-white cursor-pointer overflow-hidden transition-all duration-200 group hover:shadow-md"
        >
          <div
            className="h-32 w-full flex justify-center items-center transition-all duration-200"
            style={{ backgroundColor: "#ffcbe8" }}
          >
            <img className="w-14" src="/img/logo-blobcdn.svg" />
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-black/90">BlobCDN</h3>
            </div>
            <div className="mt-3 text-sm">
              A service for generating SVG shapes via URL.
            </div>
            <div className="mt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-green-100 text-green-800 mr-2">
                Node.js
              </span>
            </div>
          </div>
        </a>

        <a
          href="https://indiwtf.upset.dev"
          target="_blank"
          className="rounded-lg shadow bg-white cursor-pointer overflow-hidden transition-all duration-200 group hover:shadow-md"
        >
          <div
            className="h-32 w-full flex justify-center items-center transition-all duration-200"
            style={{ backgroundColor: "#bfdcff" }}
          >
            <img className="w-14" src="/img/logo-indiwtf.svg" />
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-black/90">Indiwtf</h3>
            </div>
            <div className="mt-3 text-sm">
              Online tool to check if your website is blocked in Indonesia.
            </div>
            <div className="mt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-100 text-blue-800 mr-2">
                Go
              </span>
            </div>
          </div>
        </a>

        <a
          href="https://fonts.upset.dev"
          target="_blank"
          className="rounded-lg shadow bg-white cursor-pointer overflow-hidden transition-all duration-200 group hover:shadow-md"
        >
          <div
            className="h-32 w-full flex justify-center items-center transition-all duration-200"
            style={{ backgroundColor: "#f2bfff" }}
          >
            <img className="w-12" src="/img/logo-fonts.svg" />
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-black/90">Fonts</h3>
            </div>
            <div className="mt-3 text-sm">
              Simple and privacy-friendly Google Fonts proxy.
            </div>
            <div className="mt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-gray-100 mr-2">
                JavaScript
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-yellow-100 text-yellow-800 mr-2">
                Cloudflare Workers
              </span>
            </div>
          </div>
        </a>
      </div>

      <div
        id="other-projects"
        className="mt-4 max-w-xl mx-auto rounded-lg border"
      >
        {otherProjects.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            data-umami-event={"project-" + item.name}
            className="block hover:bg-gray-100 py-4 px-6 transition-all duration-200"
          >
            <h3 className="font-semibold text-black/90">{item.name}</h3>
            <p className="text-sm mt-1">{item.info}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

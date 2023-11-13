import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Statically",
    info: "Statically is a CDN for static files on GitHub, GitLab, and Bitbucket.",
    href: "https://statically.io",
    bg: "#ffcbcb",
    new: false,
    builtWith: [
      {
        name: "Go",
        class: "bg-blue-100 text-blue-800",
      },
      { name: "Node.js", class: "bg-green-100 text-green-800" },
      {
        name: "libvips",
        class: "bg-gray-100",
      },
    ],
  },
  {
    name: "PureDNS",
    info: "Public DNS service that supports DNS over HTTPS, TLS, QUIC, Tor.",
    href: "https://puredns.org",
    bg: "#ffeebf",
    new: false,
    builtWith: [
      {
        name: "Go",
        class: "bg-blue-100 text-blue-800",
      },
      { name: "C++", class: "bg-gray-100" },
      {
        name: "Lua",
        class: "bg-indigo-100 text-indigo-800",
      },
    ],
  },
  {
    name: "Favicone",
    info: "A user-friendly API to get favicons from any website.",
    href: "https://favicone.com",
    bg: "#bffff9",
    new: true,
    builtWith: [
      {
        name: "Go",
        class: "bg-blue-100 text-blue-800",
      },
      { name: "JavaScript", class: "bg-gray-100" },
      {
        name: "Workers",
        class: "bg-yellow-100 text-yellow-800",
      },
    ],
  },
  {
    name: "BlobCDN",
    info: "A service for generating SVG shapes via URL.",
    href: "https://blobcdn.com",
    bg: "#ffcbe8",
    new: false,
    builtWith: [{ name: "Node.js", class: "bg-green-100 text-green-800" }],
  },
  {
    name: "Indiwtf",
    info: "Online tool to check if your website is blocked in Indonesia.",
    href: "https://indiwtf.com",
    bg: "#bfdcff",
    new: false,
    builtWith: [
      {
        name: "Go",
        class: "bg-blue-100 text-blue-800",
      },
      {
        name: "Redis",
        class: "bg-rose-100 text-rose-800",
      },
      {
        name: "Postgres",
        class: "bg-sky-100 text-sky-800",
      },
    ],
  },
  {
    name: "Fonts",
    info: "Simple and privacy-friendly Google Fonts proxy.",
    href: "https://fonts.upset.dev",
    bg: "#f2bfff",
    new: false,
    builtWith: [
      { name: "JavaScript", class: "bg-gray-100" },
      {
        name: "Workers",
        class: "bg-yellow-100 text-yellow-800",
      },
    ],
  },
];

const otherProjects = [
  {
    name: "HTTP Check",
    info: "A tool for verifying whether a website has HTTP/2 & HTTP/3 enabled.",
    href: "https://httpcheck.upset.dev",
    blank: true,
  },
  {
    name: "thedev.id",
    info: "A free identity for developers on the web.",
    href: "https://thedev.id",
    blank: true,
  },
  {
    name: "Facemash Clone",
    info: "A clone of Facemash website from The Social Network movie.",
    href: "https://facemash-clone.fly.dev",
    blank: true,
  },
  {
    name: "Kominfu",
    info: "In July, 2022, the Indonesian government plans to ban online service providers including Google, Meta, Twitter, and many others. This is the countdown.",
    href: "/kominfu",
    blank: false,
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto p-6 lg:pt-10 lg:px-8">
      <h2 className="text-2xl font-bold text-center text-black/90">Projects</h2>
      <div className="grid grid-flow-row-dense grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 mt-8">
        {projects.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            data-umami-event={"featured-project-" + item.name}
            className="rounded-lg shadow bg-white cursor-pointer overflow-hidden transition-all duration-200 group hover:shadow-md relative"
          >
            {item.new ? (
              <div className="absolute bg-red-500 rounded px-2 py-1 text-white text-xs right-0">
                New
              </div>
            ) : (
              ""
            )}
            <div
              className="h-32 w-full flex justify-center items-center transition-all duration-200"
              style={{ backgroundColor: item.bg }}
            >
              <Image
                src={`/img/icon-${item.name.toLocaleLowerCase()}.svg`}
                width={56}
                height={56}
                alt={item.name + "Logo"}
              />
            </div>
            <div className="p-4">
              <div className="flex items-center">
                <h3 className="text-lg font-semibold text-black/90">
                  {item.name}
                </h3>
              </div>
              <div className="mt-3 text-sm">{item.info}</div>
              <div className="mt-2">
                {item.builtWith.map((tool) => (
                  <span
                    className={
                      tool.class +
                      " inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 mr-2"
                    }
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div
        id="other-projects"
        className="mt-4 max-w-xl mx-auto rounded-lg border"
      >
        {otherProjects.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target={item.blank ? "_blank" : "_self"}
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

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Statically",
    info: "Statically is a CDN for static files on GitHub, GitLab, and Bitbucket.",
    href: "https://statically.io",
    bg: "#fff",
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
    bg: "#fff",
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
    bg: "#fff",
    new: false,
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
    bg: "#fff",
    new: false,
    builtWith: [{ name: "Node.js", class: "bg-green-100 text-green-800" }],
  },
  {
    name: "Indiwtf",
    info: "Online tool to check if your website is blocked in Indonesia.",
    href: "https://indiwtf.com",
    bg: "#fff",
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
    info: "A privacy-friendly Google Fonts alternative.",
    href: "/fonts",
    bg: "#fff",
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
    name: "Have I Been MITMed?",
    info: "Internet connection checker to detect interception by the Indonesian government or ISP.",
    href: "/haveibeenmitmed",
    blank: false,
  },
  {
    name: "HTTP Check",
    info: "A tool for verifying whether a website has HTTP/2 & HTTP/3 enabled.",
    href: "https://upset.dev/httpcheck",
    blank: false,
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
    href: "/facemash",
    blank: false,
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
    <section id="projects" className="container py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Featured Projects
        </h2>
        <p className="mt-4 text-muted-foreground">
          A collection of tools and services I've built to solve various
          problems.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.name}
            href={project.href}
            data-umami-event={"featured-project-" + project.name}
            className="project-card group relative overflow-hidden"
          >
            {project.new && (
              <span className="absolute right-4 top-4 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                New
              </span>
            )}

            <div className="project-card-icon">
              <Image
                src={`/img/icon-${project.name.toLowerCase()}.svg`}
                width={24}
                height={24}
                alt={`${project.name} logo`}
              />
            </div>

            <h3 className="mb-2 text-lg font-medium text-foreground">
              {project.name}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">{project.info}</p>

            <div className="flex flex-wrap gap-2">
              {project.builtWith.map((tech) => (
                <span
                  key={tech.name}
                  className={`${tech.class} inline-flex items-center rounded-full px-2 py-1 text-xs font-medium`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="mb-6 text-center text-xl font-medium text-foreground">
          Other Projects
        </h3>
        <div className="mx-auto max-w-2xl overflow-hidden rounded-lg border">
          {otherProjects.map((project, index) => (
            <Link
              key={project.name}
              href={project.href}
              target={project.blank ? "_blank" : "_self"}
              data-umami-event={"project-" + project.name}
              className={`block border-b p-4 transition-colors hover:bg-accent ${
                index === otherProjects.length - 1 ? "border-b-0" : ""
              }`}
            >
              <h4 className="font-medium text-foreground">{project.name}</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                {project.info}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

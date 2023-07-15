import Link from "next/link";

import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

const projects = [
  { name: "Statically", href: "https://statically.io", blank: true },
  { name: "PureDNS", href: "https://puredns.org", blank: true },
  { name: "Favicone", href: "https://favicone.com", blank: true },
  { name: "BlobCDN", href: "https://blobcdn.com", blank: true },
  { name: "Fonts", href: "https://fonts.upset.dev", blank: true },
  { name: "HTTP Check", href: "https://httpcheck.upset.dev", blank: true },
  { name: "Indiwtf", href: "https://indiwtf.upset.dev", blank: true },
  { name: "thedev.id", href: "https://thedev.id", blank: true },
  { name: "Facemash Clone", href: "https://facemash.upset.dev", blank: true },
  { name: "Kominfu", href: "/kominfu", blank: false },
];

const oss = [
  { name: "Indiwtf CLI", href: "https://github.com/fransallen/indiwtf-cli" },
  { name: "EasyRPZ", href: "https://github.com/pure-dns/easyrpz" },
  { name: "Screenshot", href: "https://github.com/staticallyio/screenshot" },
  { name: "PureDNS Filters", href: "https://github.com/pure-dns/filters" },
  {
    name: "Awesome Indonesia",
    href: "https://github.com/fransallen/awesome-indonesia",
  },
];

const apis = [{ name: "Indiwtf API", href: "https://indiwtf.upset.dev/api" }];

const donate = [
  { name: "GitHub Sponsors", href: "https://github.com/sponsors/fransallen" },
  { name: "Ko-fi", href: "https://ko-fi.com/fransallen" },
  { name: "Patreon", href: "https://patreon.com/fransallen" },
  { name: "Saweria", href: "https://saweria.co/fransallen" },
];

const sitemap = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/#projects" },
  { name: "Press", href: "/#press" },
  { name: "Hardware", href: "/hardware" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer
      className="px-4 divide-y divide-slate-300 border-t"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="flex flex-col justify-between py-10 mx-auto space-y-16 lg:flex-row lg:space-y-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:w-2/6">
          <div className="text-sm text-center lg:text-left">
            <div className="font-bold text-2xl tracking-tighter text-black/90">
              Frans Allen
            </div>
            <p>Founder. Engineer. Speaker.</p>
            <div className="flex justify-center lg:justify-normal space-x-4 text-black/80 pt-6 text-xl">
              <a
                href="https://twitter.com/fransallen"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center hover:text-black/90"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/fransallen"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center hover:text-black/90"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/fransallen"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center hover:text-black/90"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com/fransallen"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center hover:text-black/90"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com/frxallen"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center hover:text-black/90"
              >
                <FaFacebookSquare />
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-5/6 sm:grid-cols-4">
          <div className="space-y-4">
            <h3 className="tracking-wide font-semibold">Projects</h3>
            <ul className="space-y-3">
              {projects.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    target={item.blank ? "_blank" : "_self"}
                    data-umami-event={"footer-project-" + item.name}
                    className="inline-flex space-x-1 hover:text-black/90 external-link"
                  >
                    <span>{item.name}</span>
                    {item.blank ? <HiArrowUpRight className="w-3 h-3" /> : ""}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="tracking-wide font-semibold">Open Source</h3>
            <ul className="space-y-3">
              {oss.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    data-umami-event={"footer-oss-" + item.name}
                    className="inline-flex space-x-1 hover:text-black/90 external-link"
                  >
                    <span>{item.name}</span>
                    <HiArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="tracking-wide font-semibold pt-2">APIs</h3>
            <ul className="space-y-3">
              {apis.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    target="_blank"
                    data-umami-event={"footer-api-" + item.name}
                    className="inline-flex space-x-1 hover:text-black/90 external-link"
                  >
                    <span>{item.name}</span>
                    <HiArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="tracking-wide font-semibold">Become A Sponsor</h3>
            <ul className="space-y-3">
              {donate.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-umami-event={"footer-donate-" + item.name}
                    className="inline-flex space-x-1 hover:text-black/90 external-link"
                  >
                    <span>{item.name}</span>
                    <HiArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="tracking-wide font-semibold">Sitemap</h3>
            <ul className="space-y-3">
              {sitemap.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    data-umami-event={"footer-sitemap-" + item.name}
                    className="hover:text-black/90"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/sitemap.xml"
                  data-umami-event="footer-sitemap-sitemap-xml"
                  className="hover:text-black/90"
                >
                  Sitemap.xml
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-black/70 space-y-2">
        <div>
          All rights reserved &copy; {new Date().getFullYear()}{" "}
          <Link href="/">Frans Allen</Link>
        </div>
        <div>
          <a
            className="inline-block text-xs"
            href="https://github.com/fransallen/upset.dev"
            target="_blank"
          >
            Source Code
          </a>
        </div>
      </div>
    </footer>
  );
}

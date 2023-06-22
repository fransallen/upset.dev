import Link from "next/link";

import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const projects = [
  { name: "Statically", href: "https://statically.io" },
  { name: "PureDNS", href: "https://puredns.org" },
  { name: "BlobCDN", href: "https://blobcdn.com" },
  { name: "Fonts", href: "https://fonts.upset.dev" },
  { name: "HTTP Check", href: "https://httpcheck.upset.dev" },
  { name: "Indiwtf", href: "https://indiwtf.upset.dev" },
  { name: "thedev.id", href: "https://thedev.id" },
  { name: "Facemash Clone", href: "https://facemash.upset.dev" },
  { name: "Kominfu", href: "https://kominfu.com" },
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
  { name: "Contact", href: "/contact" },
  { name: "Sitemap.xml", href: "/sitemap.xml" },
];

export function Footer() {
  return (
    <footer className="mt-16 md:mt-24 px-4 divide-y divide-slate-300 border-t border-t-slate-300">
      <div className="flex flex-col justify-between py-10 mx-auto space-y-16 lg:flex-row lg:space-y-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:w-2/6">
          <div className="text-sm text-center lg:text-left">
            <div className="font-bold text-2xl tracking-tighter text-black/90">
              Frans Allen
            </div>
            <p>Founder. Engineer. Speaker.</p>
            <div className="flex justify-center lg:justify-normal space-x-4 text-black/80 pt-6">
              <a
                href="https://twitter.com/fransallen"
                className="flex items-center hover:text-black/90"
              >
                <FaTwitter className="w-5 h-5 fill-current" />
              </a>
              <a
                href="https://github.com/fransallen"
                className="flex items-center hover:text-black/90"
              >
                <FaGithub className="w-5 h-5 fill-current" />
              </a>
              <a
                href="https://linkedin.com/in/fransallen"
                className="flex items-center hover:text-black/90"
              >
                <FaLinkedin className="w-5 h-5 fill-current" />
              </a>
              <a
                href="https://instagram.com/fransallen"
                className="flex items-center hover:text-black/90"
              >
                <FaInstagram className="w-5 h-5 fill-current" />
              </a>
              <a
                href="https://facebook.com/frxallen"
                className="flex items-center hover:text-black/90"
              >
                <FaFacebookSquare className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-5/6 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide font-semibold">Projects</h3>
            <ul className="space-y-2">
              {projects.map((item) => (
                <li>
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    data-umami-event={"footer-project-" + item.name}
                    className="hover:text-black/90"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide font-semibold">Open Source</h3>
            <ul className="space-y-2">
              {oss.map((item) => (
                <li>
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    data-umami-event={"footer-oss-" + item.name}
                    className="hover:text-black/90"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="tracking-wide font-semibold pt-2">APIs</h3>
            <ul className="space-y-2">
              {apis.map((item) => (
                <li>
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    data-umami-event={"footer-api-" + item.name}
                    className="hover:text-black/90"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide font-semibold">Become A Sponsor</h3>
            <ul className="space-y-2">
              {donate.map((item) => (
                <li>
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    data-umami-event={"footer-donate-" + item.name}
                    className="hover:text-black/90"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide font-semibold">Sitemap</h3>
            <ul className="space-y-2">
              {sitemap.map((item) => (
                <li>
                  <Link
                    key={item.name}
                    href={item.href}
                    data-umami-event={"footer-sitemap-" + item.name}
                    className="hover:text-black/90"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-slate-500">
        All rights reserved &copy; {new Date().getFullYear()}{" "}
        <Link href="/">Frans Allen</Link>
      </div>
    </footer>
  );
}

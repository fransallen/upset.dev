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
  { name: "Fonts", href: "/fonts", blank: false },
  { name: "HTTP Check", href: "/httpcheck", blank: false },
  { name: "Indiwtf", href: "https://indiwtf.com", blank: true },
  { name: "thedev.id", href: "https://thedev.id", blank: true },
  { name: "Facemash Clone", href: "/facemash", blank: false },
  { name: "Kominfu", href: "/kominfu", blank: false },
];

const oss = [
  { name: "Indiwtf CLI", href: "https://github.com/fransallen/indiwtf-cli" },
  {
    name: "Indiwtf Telegram Bot",
    href: "https://github.com/fransallen/indiwtf-telegram-bot",
  },
  { name: "EasyRPZ", href: "https://github.com/pure-dns/easyrpz" },
  { name: "Screenshot", href: "https://github.com/staticallyio/screenshot" },
  { name: "PureDNS Filters", href: "https://github.com/pure-dns/filters" },
  {
    name: "Awesome Indonesia",
    href: "https://github.com/fransallen/awesome-indonesia",
  },
];

const apis = [{ name: "Indiwtf API", href: "https://indiwtf.com/api" }];

const donate = [
  { name: "GitHub Sponsors", href: "https://github.com/sponsors/fransallen" },
  { name: "Ko-fi", href: "https://ko-fi.com/fransallen" },
  { name: "Patreon", href: "https://patreon.com/fransallen" },
  { name: "Saweria", href: "https://saweria.co/fransallen" },
];

const sitemap = [
  { name: "Projects", href: "/#projects" },
  { name: "Press", href: "/#press" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Frans Allen
              </h2>
              <p className="text-muted-foreground">
                Founder. Engineer. Speaker.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com/fransallen"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="social-icon"
                >
                  <FaTwitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="https://github.com/fransallen"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="social-icon"
                >
                  <FaGithub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/fransallen"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="social-icon"
                >
                  <FaLinkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://instagram.com/fransallen"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="social-icon"
                >
                  <FaInstagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://facebook.com/frxallen"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="social-icon"
                >
                  <FaFacebookSquare className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Projects</h3>
            <ul className="space-y-2">
              {projects.slice(0, 6).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    target={item.blank ? "_blank" : "_self"}
                    data-umami-event={"footer-project-" + item.name}
                    className="footer-link inline-flex items-center gap-1 external-link"
                  >
                    <span>{item.name}</span>
                    {item.blank && <HiArrowUpRight className="h-3 w-3" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Open Source</h3>
            <ul className="space-y-2">
              {oss.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    data-umami-event={"footer-oss-" + item.name}
                    className="footer-link inline-flex items-center gap-1 external-link"
                    rel="noreferrer"
                  >
                    <span>{item.name}</span>
                    <HiArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="footer-heading mt-6">Become A Sponsor</h3>
            <ul className="space-y-2">
              {donate.slice(0, 2).map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-umami-event={"footer-donate-" + item.name}
                    className="footer-link inline-flex items-center gap-1 external-link"
                  >
                    <span>{item.name}</span>
                    <HiArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Sitemap</h3>
            <ul className="space-y-2">
              {sitemap.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    data-umami-event={"footer-sitemap-" + item.name}
                    className="footer-link"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-0">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Frans Allen. All rights reserved.
          </p>
          <a
            className="text-xs text-muted-foreground hover:text-foreground"
            href="https://github.com/fransallen/upset.dev"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        </div>
      </div>
    </footer>
  );
}

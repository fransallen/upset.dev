"use client";

import Link from "next/link";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";
import { NavLink } from "./NavLink";

const navigation = [
  { name: "Projects", href: "/#projects" },
  { name: "Press", href: "/#press" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-10 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-x-8">
          <Link
            href="/"
            className="text-2xl font-semibold tracking-tight text-foreground"
          >
            Frans Allen
          </Link>
          <nav className="hidden gap-6 md:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                href={item.href}
                className="nav-link text-sm font-medium"
                activeClassName="active"
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-muted-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <HiOutlineBars3 className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden md:block">
          <Link
            href="https://indiwtf.com/?ref=upset.dev"
            className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Try Indiwtf
          </Link>
        </div>
      </div>

      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-foreground/10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-semibold tracking-tight text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Frans Allen
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-muted-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <HiXMark className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="https://indiwtf.com/?ref=upset.dev"
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Try Indiwtf
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

import { Dialog } from "@headlessui/react";
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";

import { Logo } from "./Logo";
import { NavLink } from "./NavLink";

const navigation = [
  { name: "Projects", href: "/#projects" },
  { name: "Press", href: "/#press" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-saturate-50 backdrop-blur border-b border-gray-200/80 fixed w-full z-10">
      <nav
        className="mx-auto flex items-center justify-between max-w-7xl p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center gap-x-12">
          <Link href="/">
            <div className="font-bold text-2xl tracking-tighter text-black/90">
              Frans Allen
            </div>
          </Link>
          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                href={item.href}
                className="text-sm leading-6 hover:text-black/90 active:text-black/90 transition"
                activeClassName="text-black/90"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black/90"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <HiOutlineBars3 className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex">
          <a
            className="border rounded-xl px-3 py-2 block text-sm leading-6 text-black/90 hover:bg-gray-50"
            href="https://indiwtf.com/?ref=upset.dev"
          >
            Try Indiwtf
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Logo />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-black/90"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <HiXMark className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black/90-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="https://indiwtf.com/?ref=upset.dev"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black/90-900 hover:bg-gray-50"
                >
                  Try Indiwtf
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

"use client";

import Link from "next/link";
import { Fragment } from "react";

import { useSession, signOut } from "next-auth/react";

import { Popover, Transition } from "@headlessui/react";
import { HiOutlineChevronDown } from "react-icons/hi";

const loggedInMenu = [
  {
    name: "Your profile",
    href: "/me",
  },
];

export function DashboardNav() {
  const { data: session, status } = useSession();
  const userAvatar = session?.user?.image;
  const userName = session?.user?.name;

  if (status === "authenticated") {
    return (
      <>
        <div className="hidden lg:flex items-center border px-2 py-0.5 rounded-xl gap-2 hover:bg-gray-50">
          <Popover.Group className="flex lg:gap-x-12">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 outline-0">
                    <img
                      src={`${userAvatar}`}
                      alt=""
                      width={32}
                      height={32}
                      className="rounded-full p-0.5"
                    />
                    <h5>{userName}</h5>
                    <HiOutlineChevronDown
                      className="h-4 w-4 text-black/40"
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute -ml-2 lg:-right-3 top-full z-10 mt-1.5 w-52 overflow-hidden rounded-xl bg-white shadow ring-1 ring-gray-900/5">
                      {({ close }) => (
                        <div>
                          {loggedInMenu.map((item) => (
                            <div
                              key={item.name}
                              className="group relative flex items-center gap-x-6 rounded-lg px-4 py-2 text-sm leading-6 hover:bg-gray-50"
                            >
                              <div className="flex-auto">
                                <Link
                                  href={item.href}
                                  className="block"
                                  onClick={() => close()}
                                >
                                  {item.name}
                                  <span className="absolute inset-0" />
                                </Link>
                              </div>
                            </div>
                          ))}
                          <div className="group relative flex items-center gap-x-6 rounded-lg px-4 py-2 text-sm leading-6 hover:bg-gray-50">
                            <div className="flex-auto">
                              <button
                                className="block"
                                onClick={() => signOut()}
                              >
                                Sign out
                                <span className="absolute inset-0" />
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
        </div>
      </>
    );
  } else {
    return (
      <Link
        href="/login"
        className="flex items-center border px-3 py-2 rounded-xl gap-2 hover:bg-gray-50 font-semibold text-sm"
      >
        Sign in
      </Link>
    );
  }
}

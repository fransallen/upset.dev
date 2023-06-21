"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

type ProviderProps = {
  children: ReactNode;
};

export default function Provider({ children }: ProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

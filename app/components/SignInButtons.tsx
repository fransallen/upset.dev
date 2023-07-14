"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export function SignInWithGoogleButton() {
  return (
    <button
      className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg hover:text-black/90 hover:shadow transition duration-150 mx-auto"
      onClick={() => signIn("google", { callbackUrl: process.env.SITE_URL })}
    >
      <Image
        src="/img/icon-google.svg"
        width={24}
        height={24}
        alt="Google logo"
      />
      <span>Sign in with Google</span>
    </button>
  );
}

export function SignInWithGithubButton() {
  return (
    <button
      className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg hover:text-black/90 hover:shadow transition duration-150 mx-auto"
      onClick={() => signIn("github", { callbackUrl: process.env.SITE_URL })}
    >
      <Image
        src="/img/icon-github.svg"
        width={24}
        height={24}
        alt="GitHub logo"
      />
      <span>Sign in with GitHub</span>
    </button>
  );
}

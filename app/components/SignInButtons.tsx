"use client";

import { signIn } from "next-auth/react";

export function SignInWithGoogleButton() {
  return (
    <button
      className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg hover:text-black/90 hover:shadow transition duration-150 mx-auto"
      onClick={() => signIn("google", { callbackUrl: process.env.SITE_URL })}
    >
      <img
        className="w-6 h-6"
        src="/img/logo-google.svg"
        loading="lazy"
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
      <img
        className="w-6 h-6"
        src="/img/logo-github.svg"
        loading="lazy"
        alt="GitHub logo"
      />
      <span>Sign in with GitHub</span>
    </button>
  );
}

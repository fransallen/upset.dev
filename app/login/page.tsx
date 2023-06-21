import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import {
  SignInWithGithubButton,
  SignInWithGoogleButton,
} from "../components/SignInButtons";

const title = "Sign in to upset.dev";
const description = "Sign in to upset.dev and access your account.";

export const metadata = {
  title: title,
  description: description,
  openGraph: {
    images: [
      {
        url: `/api/og?title=${title}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/me");
  }

  return (
    <section className="pt-8 p-6 lg:px-8">
      <h1 className="font-bold text-black/90 text-center text-4xl">Sign In</h1>

      <div className="mt-8 space-y-2">
        <SignInWithGoogleButton />
        <SignInWithGithubButton />
      </div>
    </section>
  );
}

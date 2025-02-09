export const runtime = "edge";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Your Profile",
};

export default async function Me() {
  const session = await getServerSession(authOptions);
  const userName = session?.user?.name;

  if (!session) {
    redirect("/login");
  }

  return (
    <article className="prose mx-auto pt-8 p-6 lg:px-8">
      <h1 className="font-bold text-center text-black/90">Your Profile</h1>
      <p>
        Hello <strong>{userName}</strong> 👋, I'm excited that you've decided to
        visit my personal website and explore what it has to offer. While this
        page may not have all the features and content ready just yet, please
        know that I am actively working to bring you an exceptional experience.
      </p>
      <p>
        Your presence here is greatly appreciated, and I want to assure you that
        I am committed to creating a space that is informative, engaging, and
        reflective of my passions. Thank you for your patience and support as I
        continue to build and refine this website. Together, let's embark on a
        journey of discovery and inspiration. Welcome to my personal corner of
        the internet!
      </p>
    </article>
  );
}

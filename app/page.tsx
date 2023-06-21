import Link from "next/link";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { Press } from "./components/Press";
import { Podcasts } from "./components/Podcasts";
import { Coupons } from "./components/Coupons";

export default function Index() {
  return (
    <>
      <article className="mt-0 md:mt-4 prose prose-a:no-underline mx-auto pt-8 p-6 lg:px-8">
        <h1 className="text-xl font-bold text-black/90">Hey, I'm Frans 👋</h1>
        <p className="mt-4 leading-8">
          I am an independent software developer who loves to build things that
          can improve people's lives. Most of my work is open source and
          publicly available on{" "}
          <a href="https://github.com/fransallen">GitHub</a>. Get to know me
          better by visiting my <Link href="/about">about</Link> page.
        </p>
      </article>

      <FeaturedProjects />
      <Press />
      <Podcasts />
      <Coupons />
    </>
  );
}

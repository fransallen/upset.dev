import Link from "next/link";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { Press } from "./components/Press";
import { Podcasts } from "./components/Podcasts";
import { Coupons } from "./components/Coupons";

export default function Index() {
  return (
    <>
      <article className="prose mx-auto pt-8 p-6 lg:px-8">
        <h1 className="text-xl font-bold text-black/90">Hey, I'm Frans 👋</h1>
        <p className="mt-4 leading-8">
          I am an independent software developer who loves to build things that
          can improve people's lives. Most of my work is open source and
          publicly available on{" "}
          <a
            href="https://github.com/fransallen"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          . Get to know me better by visiting my{" "}
          <Link href="/about">about</Link> page.
        </p>
      </article>

      <FeaturedProjects />

      <section id="stats" className="max-w-4xl mx-auto p-6 lg:pt-10 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-black/90">Stats</h2>
        <img
          src="https://ghchart.rshah.org/fransallen"
          alt="Frans Allen's GitHub Chart"
          width={600}
          height={100}
          className="mx-auto mt-8"
        />
      </section>

      <Press />
      <Podcasts />
      <Coupons />
    </>
  );
}

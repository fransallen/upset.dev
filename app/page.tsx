import Link from "next/link";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { Press } from "./components/Press";
import { Podcasts } from "./components/Podcasts";

export default function Index() {
  return (
    <>
      <FeaturedProjects />

      <section id="stats" className="max-w-4xl mx-auto p-6 lg:pt-10 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-black/90">Stats</h2>
        <img
          src="https://ghchart.rshah.org/fransallen"
          alt="Frans Allen's GitHub Chart"
          width={600}
          height={100}
          loading="lazy"
          className="mx-auto mt-8"
        />
      </section>

      <Press />
      <Podcasts />
    </>
  );
}

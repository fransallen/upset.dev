import { FeaturedProjects } from "./components/FeaturedProjects";
import { Press } from "./components/Press";
import { Podcasts } from "./components/Podcasts";

export default function Index() {
  return (
    <>
      <section className="container py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Frans Allen
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Founder. Software Engineer. Speaker.
          </p>
          <p className="mt-6 text-muted-foreground">
            I build open-source tools and services that solve real problems.
            Based in Yogyakarta, Indonesia.
          </p>
        </div>
      </section>

      <FeaturedProjects />

      <section id="stats" className="container py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            GitHub Contributions
          </h2>
          <p className="mt-4 text-muted-foreground">
            A visual representation of my open source contributions.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="overflow-hidden rounded-lg border p-4 bg-card">
            <img
              src="https://ghchart.rshah.org/fransallen"
              alt="Frans Allen's GitHub Chart"
              width={600}
              height={100}
              loading="lazy"
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      <Press />
      <Podcasts />
    </>
  );
}

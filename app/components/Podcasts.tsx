import Image from "next/image";

const podcasts = [
  {
    name: "Cara Ngeduitin Open Source Ala Frans Allen",
    logo: "deeptech",
    href: "https://www.youtube.com/watch?v=juR_NFTTERI",
  },
];

export function Podcasts() {
  return (
    <section id="podcasts" className="container py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Podcasts & Interviews
        </h2>
        <p className="mt-4 text-muted-foreground">
          Listen to discussions and interviews about my work and experiences.
        </p>
      </div>

      <div className="mt-12 mx-auto max-w-2xl space-y-4">
        {podcasts.map((item) => (
          <a
            key={item.name}
            href={item.href}
            rel="noopener noreferrer"
            target="_blank"
            data-umami-event={"podcast-" + item.name}
            className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-accent"
          >
            <div className="flex-shrink-0">
              <Image
                src={`/img/icon-${item.logo}.png`}
                quality={100}
                className="h-10 w-10 rounded-full object-cover"
                width={40}
                height={40}
                alt={`Logo ${item.name}`}
              />
            </div>
            <div>
              <h3 className="font-medium text-foreground">{item.name}</h3>
              <p className="text-xs text-muted-foreground">{item.logo}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

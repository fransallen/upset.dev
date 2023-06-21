import Link from "next/link";

const podcasts = [
  {
    name: "Cara Ngeduitin Open Source Ala Frans Allen",
    logo: "deeptech",
    href: "https://www.youtube.com/watch?v=juR_NFTTERI",
  },
];

export function Podcasts() {
  return (
    <section id="podcasts" className="pt-16 max-w-xl mx-auto px-6 lg:px-0">
      <h2 className="text-2xl font-bold text-black/90">Podcasts</h2>
      <div className="mt-4">
        {podcasts.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            rel="noopener noreferrer"
            target="_blank"
            data-umami-event={"podcast-" + item.name}
            className=" hover:bg-gray-100 py-4 px-6 -mx-6 transition-all duration-200 flex items-center space-x-4 rounded-lg"
          >
            <img
              src={`/img/logo-${item.logo}.png`}
              className="w-10 h-10"
              alt={`Logo ${item.logo}`}
            />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

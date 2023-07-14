import Image from "next/image";

const title = "Hardware Used By Frans Allen";
const description =
  "Discover the hardware utilized by Frans Allen in his software development journey.";

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

const hardwares = [
  { name: "Motherboard", description: "MSI H310M PRO-VH PLUS" },
  { name: "CPU", description: "Intel Core i3-8100 Processor" },
  { name: "PSU", description: "Infinity Striker Power 400W" },
  { name: "Keyboard", description: "Fantech MK871RGB" },
  { name: "Monitor", description: 'LG 24MP60G 60 cm / 24"' },
  { name: "UPS", description: "Prolink PRO700SFC" },
];

const hardwareImages = [
  {
    name: "Motherboard",
    src: "msi-h310m-pro-vh.png",
  },
  {
    name: "CPU",
    src: "intel-core-i3-8100.png",
  },
  {
    name: "PSU",
    src: "infinity-striker-power-400w.png",
  },
  {
    name: "Monitor",
    src: "lg-24mp60g.png",
  },
];

export default function Hardware() {
  return (
    <section className="pt-8 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 max-w-7xl mx-auto p-6 lg:px-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-black/90">
          Hardware Specifications
        </h1>
        <p className="mt-4">
          Presenting the hardware I utilize for software development.
        </p>

        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          {hardwares.map((hardware) => (
            <div key={hardware.name} className="border-t border-black/20 pt-4">
              <dt className="font-medium">{hardware.name}</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {hardware.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        {hardwareImages.map((image) => (
          <Image
            src={`/img/${image.src}`}
            width={500}
            height={500}
            alt={image.name}
            className="bg-black/5 rounded-lg"
          />
        ))}
      </div>
    </section>
  );
}

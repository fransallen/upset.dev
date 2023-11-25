import type { Font } from "satori";

export default async function getFonts(): Promise<Font[]> {
  const [
    interRegular,
    interBold,
    ubuntuRegular,
    ubuntuBold,
    robotoMonoRegular,
  ] = await Promise.all([
    fetch(
      `https://fonts.upset.dev/f/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZg.ttf`,
    ).then((res) => res.arrayBuffer()),
    fetch(
      `https://fonts.upset.dev/f/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZg.ttf`,
    ).then((res) => res.arrayBuffer()),
    fetch(`https://fonts.upset.dev/f/ubuntu/v20/4iCs6KVjbNBYlgo6eA.ttf`).then(
      (res) => res.arrayBuffer(),
    ),
    fetch(
      `https://fonts.upset.dev/f/ubuntu/v20/4iCv6KVjbNBYlgoCxCvTtw.ttf`,
    ).then((res) => res.arrayBuffer()),
    fetch(
      `https://fonts.upset.dev/f/robotomono/v23/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vqPQw.ttf`,
    ).then((res) => res.arrayBuffer()),
  ]);

  return [
    {
      name: "Inter",
      data: interRegular,
      style: "normal",
      weight: 400,
    },
    {
      name: "Inter",
      data: interBold,
      style: "normal",
      weight: 700,
    },
    {
      name: "Ubuntu",
      data: ubuntuRegular,
      style: "normal",
      weight: 400,
    },
    {
      name: "Ubuntu",
      data: ubuntuBold,
      style: "normal",
      weight: 700,
    },
    {
      name: "Roboto Mono",
      data: robotoMonoRegular,
      style: "normal",
      weight: 400,
    },
  ];
}

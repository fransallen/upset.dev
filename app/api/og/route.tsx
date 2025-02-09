export const runtime = "edge";

import type { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import getFonts from "@/app/utils/getFonts";

function templateIndiwtf(title: string | undefined, page: string) {
  const logo = "https://indiwtf.com/img/logo.svg";
  const titleText = title
    ? title
    : "Pantau Cepat Pemblokiran Website Di Indonesia";
  const url = page ? `https://indiwtf.com/${page}` : "https://indiwtf.com";

  return (
    <div
      tw="flex flex-col bg-white w-full h-full justify-center flex-nowrap"
      style={{
        backgroundImage:
          "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
        backgroundSize: "100px 100px",
        padding: "0 120px",
        fontFamily: "Ubuntu",
      }}
    >
      <div tw="flex">
        <img src={logo} width={200} height={46} />
      </div>
      <div
        tw="text-black/90 mt-8"
        style={{
          fontSize: 50,
          letterSpacing: "-0.025em",
          lineHeight: 1.2,
        }}
      >
        {titleText}
      </div>
      <div
        tw="flex text-black/80 mt-8"
        style={{
          fontFamily: "Roboto Mono",
          fontSize: 25,
        }}
      >
        <span tw="mr-2">🔗</span>
        <span>{url}</span>
      </div>
    </div>
  );
}

function templateDefault(title: string | undefined, logo: string) {
  const titleText = title ? title : "Generate OG image via URL";
  return (
    <div
      tw="flex flex-col bg-white w-full h-full text-center items-center justify-center flex-nowrap"
      style={{
        backgroundImage:
          "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
        backgroundSize: "100px 100px",
        fontFamily: "Inter",
      }}
    >
      <div
        tw="flex items-center justify-center"
        style={{ justifyItems: "center" }}
      >
        {logo ? (
          <img src={logo} width={128} height={128} />
        ) : (
          <h2 tw="flex justify-center items-center w-32 h-32 text-7xl font-bold bg-black text-white rounded-3xl m-0">
            FA
          </h2>
        )}
      </div>
      <div
        tw="text-black mt-8"
        style={{
          fontSize: 60,
          letterSpacing: "-0.025em",
          padding: "0 120px",
          lineHeight: 1.2,
        }}
      >
        {titleText}
      </div>
    </div>
  );
}

export async function GET(req: NextRequest) {
  try {
    const decodedURL = decodeURIComponent(req.url as string).replace(
      /&amp;/g,
      "&",
    );

    const { searchParams } = new URL(decodedURL);

    const title = searchParams.get("title")?.slice(0, 100);

    let logo = searchParams.get("logo")?.slice(0, 100) as string;

    switch (logo) {
      case "favicone":
        logo = "https://upset.dev/img/icon-favicone.svg";
        break;
      default:
        logo = !logo ? "" : logo;
        break;
    }

    let template = searchParams.get("template")?.slice(0, 100) as string;
    let templateHtml = "" as any;
    let page = searchParams.get("page")?.slice(0, 100) as string;

    switch (template) {
      case "indiwtf":
        templateHtml = templateIndiwtf(title, page);
        break;
      default:
        templateHtml = templateDefault(title, logo);
        break;
    }

    return new ImageResponse(templateHtml, {
      width: 1200,
      height: 630,
      emoji: "twemoji",
      fonts: await getFonts(),
    });
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

import { ImageResponse, NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url as string);

    const title = searchParams.has("title")
      ? searchParams.get("title")?.slice(0, 100)
      : "Generate OG image via URL";

    let logo = searchParams.get("logo")?.slice(0, 100) as string;

    switch (logo) {
      case "favicone":
        logo = "https://upset.dev/img/icon-favicone.svg";
        break;
      case "indiwtf":
        logo = "https://upset.dev/img/icon-indiwtf.svg";
        break;
      default:
        logo = !logo ? "" : logo;
        break;
    }

    return new ImageResponse(
      (
        <div
          tw="flex flex-col bg-white w-full h-full text-center items-center justify-center flex-nowrap"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
            backgroundSize: "100px 100px",
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
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

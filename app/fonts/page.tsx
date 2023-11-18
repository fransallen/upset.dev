import Image from "next/image";
import Link from "next/link";

const title = "fonts.upset.dev: A privacy-friendly Google Fonts alternative";
const description =
  "Learn about Frans Allen's background, expertise, and contributions, providing valuable insights and solutions.";

const cssGoogleFonts = `@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMw.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}`;

const cssUpset = `@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/f/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMw.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}`;

const tryItNowURL = "https://fonts.upset.dev/css2?family=Inter&display=swap";

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

export default function Fonts() {
  return (
    <div className="max-w-7xl mx-auto p-6 lg:px-8">
      <div className="text-center">
        <Link href="/fonts" className="inline-block">
          <h1 className="text-3xl md:text-4xl text-black font-extrabold leading-tighter tracking-tighter mb-4">
            <span className="sr-only">fonts.upset.dev</span>
            <Image
              src="/img/fonts.upset.dev-logo.svg"
              width={275}
              height={43}
              alt="fonts.upset.dev logo"
              className="w-[210px] sm:w-[275px]"
            />
          </h1>
        </Link>
        <div>
          <p>A privacy-friendly Google Fonts alternative.</p>
        </div>
      </div>

      <div className="pt-10 text-center space-y-8">
        <div>
          <h2 className="text-lg text-black/80">
            Change the Google Font API URL
          </h2>
          <pre className="bg-gray-900 text-gray-50 max-w-lg mx-auto mt-5 py-4 rounded-lg text-base sm:text-lg md:text-xl">
            <code>fonts.googleapis.com</code>
          </pre>
        </div>
        <div>
          <h2 className="text-lg text-black/80">
            With the fonts.upset.dev API URL
          </h2>
          <pre className="bg-gray-900 text-gray-50 max-w-lg mx-auto mt-5 py-4 rounded-lg text-base sm:text-lg md:text-xl">
            <code>fonts.upset.dev</code>
          </pre>
        </div>

        <div className="text-xs sm:text-sm space-x-1">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="inline w-6 h-6 text-blue-600 fill-current"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M13 9h8L11 24v-9H4l9-15v9zm-2 2V7.22L7.532 13H13v4.394L17.263 11H11z" />
            </svg>
          </span>
          <span>
            Try it now:{" "}
            <a
              href={tryItNowURL}
              className="border-b font-mono font-semibold text-blue-600 border-blue-600"
            >
              {tryItNowURL}
            </a>
          </span>
        </div>
      </div>

      <div className="pt-16 lg:pt-24 xl:flex justify-between xl:space-x-10 space-y-10 xl:space-y-0 max-w-lg xl:max-w-7xl mx-auto">
        <div className="xl:w-1/2 space-y-6 text-base md:text-lg">
          <h3 className="text-2xl font-bold text-black/80">Google Fonts</h3>
          <ul>
            <li className="flex space-x-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="inline w-6 h-6"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
                    fill="rgba(231,76,60,1)"
                  />
                </svg>
              </span>
              <span>
                2 endpoints (fonts.googleapis.com &amp; fonts.gstatic.com)
              </span>
            </li>
            <li className="flex space-x-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="inline w-6 h-6"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
                    fill="rgba(231,76,60,1)"
                  />
                </svg>
              </span>
              <span>CSS files are not minified</span>
            </li>
            <li className="flex space-x-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="inline w-6 h-6"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
                    fill="rgba(231,76,60,1)"
                  />
                </svg>
              </span>
              <span>Does not comply with many regulations in the EU</span>
            </li>
            <li className="flex space-x-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="inline w-6 h-6"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
                    fill="rgba(231,76,60,1)"
                  />
                </svg>
              </span>
              <span>Using gzip only for file compression</span>
            </li>
          </ul>
          <pre className="bg-gray-900 text-gray-50 mt-5 px-4 xl:px-8 py-3 xl:py-6 rounded whitespace-pre-wrap overflow-auto lg:overflow-hidden text-sm lg:text-base">
            <code>{cssGoogleFonts}</code>
          </pre>
        </div>

        <div className="xl:w-1/2 space-y-6 text-base md:text-lg">
          <h3 className="text-2xl font-bold text-black/80">fonts.upset.dev</h3>
          <ul>
            <li className="flex space-x-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="inline w-6 h-6"
                >
                  <path fill="none" d="M0 0H24V24H0z" />
                  <path
                    d="M12 1l8.217 1.826c.457.102.783.507.783.976v9.987c0 2.006-1.003 3.88-2.672 4.992L12 23l-6.328-4.219C4.002 17.668 3 15.795 3 13.79V3.802c0-.469.326-.874.783-.976L12 1zm0 2.049L5 4.604v9.185c0 1.337.668 2.586 1.781 3.328L12 20.597l5.219-3.48C18.332 16.375 19 15.127 19 13.79V4.604L12 3.05zm4.452 5.173l1.415 1.414L11.503 16 7.26 11.757l1.414-1.414 2.828 2.828 4.95-4.95z"
                    fill="rgba(47,204,113,1)"
                  />
                </svg>
              </span>
              <span>CSS &amp; font files are in the same endpoint</span>
            </li>
            <li className="flex space-x-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="inline w-6 h-6"
                >
                  <path fill="none" d="M0 0H24V24H0z" />
                  <path
                    d="M12 1l8.217 1.826c.457.102.783.507.783.976v9.987c0 2.006-1.003 3.88-2.672 4.992L12 23l-6.328-4.219C4.002 17.668 3 15.795 3 13.79V3.802c0-.469.326-.874.783-.976L12 1zm0 2.049L5 4.604v9.185c0 1.337.668 2.586 1.781 3.328L12 20.597l5.219-3.48C18.332 16.375 19 15.127 19 13.79V4.604L12 3.05zm4.452 5.173l1.415 1.414L11.503 16 7.26 11.757l1.414-1.414 2.828 2.828 4.95-4.95z"
                    fill="rgba(47,204,113,1)"
                  />
                </svg>
              </span>
              <span>
                CSS files are optimized and minified (smaller file size)
              </span>
            </li>
            <li className="flex space-x-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="inline w-6 h-6"
                >
                  <path fill="none" d="M0 0H24V24H0z" />
                  <path
                    d="M12 1l8.217 1.826c.457.102.783.507.783.976v9.987c0 2.006-1.003 3.88-2.672 4.992L12 23l-6.328-4.219C4.002 17.668 3 15.795 3 13.79V3.802c0-.469.326-.874.783-.976L12 1zm0 2.049L5 4.604v9.185c0 1.337.668 2.586 1.781 3.328L12 20.597l5.219-3.48C18.332 16.375 19 15.127 19 13.79V4.604L12 3.05zm4.452 5.173l1.415 1.414L11.503 16 7.26 11.757l1.414-1.414 2.828 2.828 4.95-4.95z"
                    fill="rgba(47,204,113,1)"
                  />
                </svg>
              </span>
              <span>Hides your IP addresses from Google</span>
            </li>
            <li className="flex space-x-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="inline w-6 h-6"
                >
                  <path fill="none" d="M0 0H24V24H0z" />
                  <path
                    d="M12 1l8.217 1.826c.457.102.783.507.783.976v9.987c0 2.006-1.003 3.88-2.672 4.992L12 23l-6.328-4.219C4.002 17.668 3 15.795 3 13.79V3.802c0-.469.326-.874.783-.976L12 1zm0 2.049L5 4.604v9.185c0 1.337.668 2.586 1.781 3.328L12 20.597l5.219-3.48C18.332 16.375 19 15.127 19 13.79V4.604L12 3.05zm4.452 5.173l1.415 1.414L11.503 16 7.26 11.757l1.414-1.414 2.828 2.828 4.95-4.95z"
                    fill="rgba(47,204,113,1)"
                  />
                </svg>
              </span>
              <span>Using brotli and gzip for file compression</span>
            </li>
          </ul>
          <pre className="bg-gray-900 text-gray-50 mt-5 px-4 xl:px-8 py-3 xl:py-6 rounded whitespace-pre-wrap overflow-auto lg:overflow-hidden text-sm lg:text-base">
            <code>{cssUpset}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

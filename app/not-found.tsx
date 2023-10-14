import Image from "next/image";
import Link from "next/link";

/* const title = "404 Not Found";
const description = "Error 404 Not Found";

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
}; */

export default function NotFound() {
  return (
    <>
      {/*
        No support for metadata in not-found.tsx yet
        https://github.com/vercel/next.js/issues/45620
      */}
      <title>404 Not Found</title>
      <article className="prose mx-auto pt-8 p-6 lg:px-8">
        <h1 className="font-bold text-center text-black/90 mb-0">
          404 Not Found
        </h1>
        <div className="text-center">
          <Image
            className="m-auto"
            src="/img/404.jpg"
            width={300}
            height={300}
            alt="A sad robot abducted by aliens"
            priority={true}
          />
          <Link
            href="/"
            className="px-4 py-1 border border-slate-300 rounded-lg hover:text-black/90 hover:shadow transition duration-150 inline-block no-underline mt-2"
          >
            Back to homepage
          </Link>
        </div>
      </article>
    </>
  );
}

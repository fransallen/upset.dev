import { HaveIBeenMITMChecker } from "../components/HaveIBeenMITMChecker";

const title = "Have I Been MITM?";
const description = "Check whether your internet is intercepted or not.";

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

export default function HaveIBeenMITM() {
  return (
    <article className="prose mx-auto pt-8 p-6 lg:px-8">
      <h1 className="font-bold text-center text-black/90">Have I Been MITM?</h1>

      <HaveIBeenMITMChecker />
    </article>
  );
}

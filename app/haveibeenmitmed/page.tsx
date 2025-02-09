import { HaveIBeenMITMChecker } from "../components/HaveIBeenMITMed";

const title = "Have I Been MITMed?";
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
      <div className="text-center">
        <h1 className="font-bold text-black/90">Have I Been MITMed?</h1>
        <p>Check whether your internet is intercepted or not.</p>
      </div>

      <div className="mt-16">
        <HaveIBeenMITMChecker />
      </div>
    </article>
  );
}

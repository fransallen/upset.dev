import { ContactForm } from "../components/ContactForm";

const title = "Contact Frans Allen";
const description =
  "Get in touch with Frans Allen and explore opportunities for collaboration, discussions, or inquiries.";

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

export default function Contact() {
  return (
    <article className="prose mx-auto pt-8 p-6 lg:px-8">
      <h1 className="font-bold text-center text-black/90">Contact</h1>
      <p>
        Welcome to my contact page! I'm thrilled that you're interested in
        getting in touch with me. Whether you have a question, a collaboration
        idea, or just want to connect, this page is designed to make it easy for
        you to reach out directly. I value every message I receive and will make
        sure to respond as soon as possible. Thank you for visiting, and I'm
        excited to hear from you!
      </p>

      <ContactForm />
    </article>
  );
}

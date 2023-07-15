import Image from "next/image";

import {
  FaTwitter,
  FaFacebookF,
  FaRedditAlien,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import DateInRealtime from "../components/DateInRealtime";
import { KominfuTweets } from "../components/KominfuTweets";

const title = "Kominfu: The Indonesian Internet Apocalypse Countdown";
const description =
  "In July, 2022, the Indonesian government plans to ban online service providers including Google, Meta, Twitter, and many others. This is the countdown.";

export const metadata = {
  title: title,
  url: "https://upset.dev/kominfu",
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

export default function Kominfu() {
  const targetDate = new Date("Jul 21, 2022 00:00:00 GMT+0700");
  const shareUrl = encodeURI(metadata.url);

  return (
    <article className="prose mx-auto pt-8 p-6 lg:px-8">
      <h1 className="font-bold text-center">{metadata.title}</h1>
      <p className="text-center">
        The Indonesian government plans to ban tech platforms including PayPal,
        Steam, Epic Games, and many others. This is the countdown.
      </p>

      <div className="space-x-4 sm:space-x-6 space-y-4 sm:space-y-0 block sm:flex justify-center items-center pt-4">
        <div className="text-center">Share this</div>
        <div className="space-x-6 text-lg flex justify-center items-center">
          <a
            href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${metadata.title}`}
            target="_blank"
            className="inline-block text-white rounded-full p-1.5 hover:opacity-90"
            style={{ backgroundColor: "#00aced" }}
          >
            <FaTwitter />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            className="inline-block text-white rounded-full p-1.5 hover:opacity-90"
            style={{ backgroundColor: "#0062E0" }}
          >
            <FaFacebookF />
          </a>
          <a
            href={`https://reddit.com/submit?url=${shareUrl}&title=${metadata.title}`}
            target="_blank"
            className="inline-block text-white rounded-full p-1.5 hover:opacity-90"
            style={{ backgroundColor: "#ff4500" }}
          >
            <FaRedditAlien />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?url=${shareUrl}&title=${metadata.title}&summary=${metadata.description}&source=${shareUrl}`}
            target="_blank"
            className="inline-block text-white rounded-full p-1.5 hover:opacity-90"
            style={{ backgroundColor: "#0077B5" }}
          >
            <FaLinkedinIn />
          </a>
          <a
            href={`mailto:?subject=${metadata.title}&body=${metadata.description}%20${shareUrl}`}
            target="_blank"
            className="inline-block text-white rounded-full p-1.5 hover:opacity-90 bg-black/80"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-5xl">Time is up!</h2>
        <p>
          It has been{" "}
          <strong>
            <DateInRealtime targetDate={targetDate} />
          </strong>{" "}
          since Kominfo announced the launch of their PSE system on{" "}
          <strong>Jul 21, 2022</strong>.
        </p>

        <Image
          src="https://i.giphy.com/media/XUFPGrX5Zis6Y/giphy.webp"
          width={500}
          height={281}
          priority={false}
          alt="Exploded nuclear GIF"
          className="mx-auto rounded-lg"
        />
      </div>

      <div className="py-4 text-center">
        <h4 className="text-black/70 uppercase font-bold">As seen in</h4>
        <div className="flex flex-row flex-wrap justify-center items-center gap-8 mt-4">
          <a
            href="https://www.liputan6.com/tekno/read/5017198/ramai-ancaman-kominfo-blokir-google-dkk-muncul-situs-hitung-mundur-kiamat-internet-indonesia"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/img/logo-liputan6.svg"
              width={150}
              height={30}
              alt=""
              className="my-0 hover:opacity-90"
            />
          </a>
          <a
            href="https://www.cnnindonesia.com/teknologi/20220718160451-192-822975/pse-kominfo-ancam-blokir-whatsapp-google-kiamat-internet-indonesia"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/img/logo-cnnindonesia.svg"
              width={50}
              height={50}
              alt=""
              className="my-0 hover:opacity-90 opacity-95"
            />
          </a>
          <a
            href="https://www.jawapos.com/aplikasi/01397575/ribut-blokir-medsos-muncul-situs-kiamat-internet-di-indonesia"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/img/logo-jawapos.png"
              width={160}
              height={30}
              alt=""
              className="my-0 hover:opacity-80"
            />
          </a>
          <a
            href="https://uzone.id/kominfo-blokir-pse-netizen-hitung-mundur-kiamat-internet-di-indonesia"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/img/logo-uzone.webp"
              width={120}
              height={30}
              alt=""
              className="my-0 hover:opacity-80"
            />
          </a>
          <a
            href="https://www.remotivi.or.id/headline/konsep-dan-isu/780"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/img/logo-remotivi.png"
              width={130}
              height={35}
              alt=""
              className="my-0 hover:opacity-80"
            />
          </a>
          <a
            href="https://www.pikiran-rakyat.com/teknologi/pr-015035045/link-kominfu-situs-hitung-mundur-kiamat-internet-di-indonesia-jelang-blokir-massal-aplikasi-oleh-kominfo"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/img/logo-pikiranrakyat.webp"
              width={150}
              height={30}
              alt=""
              className="my-0 hover:opacity-80"
            />
          </a>
        </div>
      </div>

      <h2>What is this?</h2>
      <p>
        In July 2022, the Indonesian government implemented a new licensing
        system that sparked controversy among the public. This is because tech
        platforms that do not register will be at risk of being blocked.
      </p>

      <p>
        Online service providers such as Google, Meta, Twitter, and many others
        will not be accessible on the internet in Indonesia unless they comply
        with the new regulations. The deadline for implementing the new
        licensing system is July 21, 2022.
      </p>

      <p>
        During that time, the government went ahead and blocked PayPal, Steam,
        and Epic Games. As a result, it stirred up even more protests from the
        public. This move even caught the attention of{" "}
        <a
          href="https://www.google.com/search?q=deddy+corbuzier+protes+paypal+diblokir"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          Deddy Corbuzier
        </a>
        , who decided to speak out about it.
      </p>

      <p>
        The registration requirement is part of a set of rules that were first
        released in November 2020. These rules grant authorities the power to
        order platforms to remove content that is deemed to violate the law or
        "disturb public order" within four hours if it is deemed urgent, and
        within 24 hours if it is considered necessary. These new rules pose a
        huge privacy risk and have the potential for human rights violations.
      </p>

      <p>
        Kominfu (a play on Kominfo) is a "Internet apocalypse" countdown
        machine, this was created as a form of protest against this new system.
      </p>

      <h2>My website is blocked in Indonesia, how do I unblock it?</h2>
      <p>
        First, check whether your site is really blocked in Indonesia using{" "}
        <a href="https://indiwtf.upset.dev" target="_blank">
          Indiwtf
        </a>
        . Indiwtf is a tool I developed specifically for checking whether a
        website is blocked in Indonesia or not.
      </p>

      <p>
        If you confirm that your site is blocked, unfortunately, the only way to
        unblock it from all internet networks in Indonesia, apart from using a
        VPN, is to register with Kominfo's PSE. You can register at{" "}
        <a
          href="https://pse.kominfo.go.id"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          pse.kominfo.go.id
        </a>
        .
      </p>

      <p>That's all I can say for now.</p>

      <h2>Additional References</h2>
      <ul>
        <li>
          <a
            href="https://www.reuters.com/technology/indonesia-urges-tech-platforms-sign-up-new-licensing-rules-or-risk-being-blocked-2022-07-18/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Indonesia urges tech platforms to sign up to new licensing rules or
            risk being blocked
          </a>{" "}
          - Reuters
        </li>
        <li>
          <a
            href="https://www.thejakartapost.com/indonesia/2022/07/30/govt-blocks-yahoo-steam-paypal-for-failing-to-comply-with-licensing-policy.html"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Govt blocks Yahoo, Steam, PayPal for failing to comply with
            licensing policy
          </a>{" "}
          - The Jakarta Post
        </li>
        <li>
          <a
            href="https://twitter.com/i/spaces/1MYxNngLPQQxw"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            #BlokirKominfo
          </a>{" "}
          - Twitter Spaces
        </li>
      </ul>

      <div className="text-center" id="kominfu-tweets">
        <h2 className="text-4xl">What People Say</h2>
        <KominfuTweets />
      </div>
    </article>
  );
}

import Link from "next/link";

export default function Index() {
  return (
    <div className="p-8 text-gray-700 max-w-sm md:max-w-xl mx-auto">
      <header className="pt-8 md:pt-16 text-center">
        <Link href="/" className="inline-block">
          <h1 className="text-3xl md:text-4xl text-black font-extrabold leading-tighter tracking-tighter mb-4">
            Frans Allen
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl">
              Founder, Software Engineer, Speaker
            </p>
          </div>
        </Link>
      </header>

      <main className="py-16 text-sm flex font-mono justify-between">
        <div className="md:order-last hidden md:block">
          <img
            width={213}
            height={213}
            src="https://blobcdn.com/blob.svg"
            alt="BlobCDN"
          />
        </div>
        <div>
          <h2 className="font-semibold">Projects</h2>
          <ul className="space-y-4 mt-4">
            <li>
              <a
                className="hover:border-b border-b-gray-700"
                href="https://statically.io"
              >
                Statically
              </a>
            </li>
            <li>
              <a
                className="hover:border-b border-b-gray-700"
                href="https://blobcdn.com"
              >
                BlobCDN
              </a>
            </li>
            <li>
              <a
                className="hover:border-b border-b-gray-700"
                href="https://puredns.org"
              >
                PureDNS
              </a>
            </li>
            <li>
              <a
                className="hover:border-b border-b-gray-700"
                href="https://fonts.upset.dev"
              >
                Fonts
              </a>
            </li>
            <li>
              <a
                className="hover:border-b border-b-gray-700"
                href="https://httpcheck.upset.dev"
              >
                HTTP Check
              </a>
            </li>
            <li>
              <a
                className="hover:border-b border-b-gray-700"
                href="https://indiwtf.upset.dev"
              >
                Indiwtf
              </a>
            </li>
            <li>
              <a
                className="hover:border-b border-b-gray-700"
                href="https://thedev.id"
              >
                thedev.id
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold">Social</h2>
          <ul className="font-mono space-y-4 mt-4">
            <li>
              <a
                className="hover:border-b border-b-gray-700"
                href="https://twitter.com/fransallen"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                className="hover:border-b border-b-gray-700"
                href="https://github.com/fransallen"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="hover:border-b border-b-gray-700"
                href="https://instagram.com/fransallen"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className="hover:border-b border-b-gray-700"
                href="https://linkedin.com/in/fransallen"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="hover:border-b border-b-gray-700"
                href="https://facebook.com/frxallen"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </main>

      <section className="text-sm font-mono">
        <h2 className="font-semibold">Press</h2>
        <div className="mt-4">
          <ul className="space-y-2">
            <li>
              <a
                className="hover:border-b border-b-gray-700"
                href="https://www.liputan6.com/tekno/read/4961424/pengembang-indie-lokal-tawarkan-secure-dns-gratis-untuk-koneksi-internet-aman"
              >
                Pengembang Indie Lokal Tawarkan Secure DNS Gratis untuk Koneksi
                Internet Aman
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="text-sm font-mono mt-16">
        <h2 className="font-semibold">Friends</h2>
        <div className="mt-4">
          <ul className="space-y-2">
            <li>
              <a
                className="hover:border-b border-b-gray-700"
                href="https://ljs.dev"
              >
                Leon Stafford
              </a>
            </li>
            <li>
              <a
                className="hover:border-b border-b-gray-700"
                href="https://sirilius.com"
              >
                Sirilius Kevin
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="text-sm font-mono mt-16">
        <h2 className="font-semibold">Other projects/tools you may like</h2>
        <div className="mt-4">
          <ul className="space-y-2">
            <li>
              <a
                className="hover:border-b border-b-gray-700"
                href="https://watermarkktp.com"
              >
                Watermark KTP
              </a>
            </li>
            <li>
              <a
                className="hover:border-b border-b-gray-700"
                href="https://facemash.upset.dev"
              >
                Facemash Clone
              </a>
            </li>
            <li>
              <a
                className="hover:border-b border-b-gray-700"
                href="https://kominfu.com"
              >
                Kominfu
              </a>
            </li>
          </ul>
        </div>
      </section>

      <footer className="py-16 text-center space-y-6 text-sm">
        <div className="flex justify-center items-center w-12 h-12 text-4xl font-bold rounded bg-black text-white mx-auto">
          F
        </div>
        <div className="font-mono">
          &copy; {new Date().getFullYear()}{" "}
          <a
            className="hover:border-b border-b-gray-700"
            href="https://upset.dev"
          >
            Frans Allen
          </a>
        </div>
      </footer>
    </div>
  );
}

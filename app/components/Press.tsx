import Image from "next/image";

const press = [
  {
    name: "PSE Kominfo Ancam Blokir WhatsApp-Google, Kiamat Internet Indonesia?",
    logo: "cnnindonesia",
    href: "https://www.cnnindonesia.com/teknologi/20220718160451-192-822975/pse-kominfo-ancam-blokir-whatsapp-google-kiamat-internet-indonesia",
  },
  {
    name: "Ramai Ancaman Kominfo Blokir Google dkk, Muncul Situs Hitung Mundur Kiamat Internet Indonesia",
    logo: "liputan6",
    href: "https://www.liputan6.com/tekno/read/5017198/ramai-ancaman-kominfo-blokir-google-dkk-muncul-situs-hitung-mundur-kiamat-internet-indonesia",
  },
  {
    name: "Ribut Blokir Medsos, Muncul Situs Kiamat Internet di Indonesia",
    logo: "jawapos",
    href: "https://www.jawapos.com/aplikasi/01397575/ribut-blokir-medsos-muncul-situs-kiamat-internet-di-indonesia",
  },
  {
    name: "Kepentingan Konsumen di tengah Hiruk-Pikuk Pemblokiran PSE",
    logo: "remotivi",
    href: "https://www.remotivi.or.id/headline/konsep-dan-isu/780",
  },
  {
    name: "Link Kominfu, Situs Hitung Mundur Kiamat Internet di Indonesia Jelang Blokir Massal Aplikasi oleh Kominfo",
    logo: "pikiranrakyat",
    href: "https://www.pikiran-rakyat.com/teknologi/pr-015035045/link-kominfu-situs-hitung-mundur-kiamat-internet-di-indonesia-jelang-blokir-massal-aplikasi-oleh-kominfo",
  },
  {
    name: "Kominfo Blokir PSE, Netizen Hitung Mundur 'Kiamat Internet' di Indonesia",
    logo: "uzone",
    href: "https://uzone.id/kominfo-blokir-pse-netizen-hitung-mundur-kiamat-internet-di-indonesia",
  },
  {
    name: "Pengembang Indie Lokal Tawarkan Secure DNS Gratis untuk Koneksi Internet Aman",
    logo: "liputan6",
    href: "https://www.liputan6.com/tekno/read/4961424/pengembang-indie-lokal-tawarkan-secure-dns-gratis-untuk-koneksi-internet-aman",
  },
];

export function Press() {
  return (
    <section id="press" className="pt-10 max-w-xl mx-auto px-6 lg:px-0">
      <h2 className="text-2xl font-bold text-black/90">Press</h2>
      <div className="mt-4">
        {press.map((item) => (
          <a
            key={item.name}
            href={item.href}
            rel="noopener noreferrer"
            target="_blank"
            data-umami-event={"press-" + item.name}
            className=" hover:bg-gray-100 py-4 px-6 -mx-6 transition-all duration-200 flex items-center space-x-4 rounded-lg"
          >
            <Image
              src={`/img/icon-${item.logo}.png`}
              quality={100}
              className="w-10 h-10"
              width={52}
              height={52}
              alt={`Logo ${item.name}`}
            />
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

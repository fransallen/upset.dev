import Link from "next/link";

const coupons = [
  {
    name: "DigitalOcean",
    logo: "digitalocean",
    href: "/l/digitalocean",
    info: "Referral link to sign up and get $200 DigitalOcean credit for free.",
  },
  {
    name: "Vultr",
    logo: "vultr",
    href: "/l/vultr",
    info: "Referral link to sign up and get $100 Vultr credit for free.",
  },
];

export function Coupons() {
  return (
    <section id="coupons" className="pt-16 max-w-xl mx-auto px-6 lg:px-0">
      <h2 className="text-2xl font-bold text-black/90">Coupons</h2>
      <div className="mt-4">
        {coupons.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            rel="noopener noreferrer"
            target="_blank"
            data-umami-event={"coupon-" + item.name}
            className=" hover:bg-gray-100 py-4 px-6 -mx-6 transition-all duration-200 flex items-center space-x-4 rounded-lg"
          >
            <img
              src={`/img/logo-${item.logo}.svg`}
              className="w-10 h-10"
              alt={`Logo ${item.logo}`}
            />
            <div>
              <h5 className="font-semibold">{item.name}</h5>
              <p>{item.info}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

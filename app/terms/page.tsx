import Link from "next/link";

const title = "Terms of Service";
const description = "Describes the rules you agree to when using our services.";

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

export default function Privacy() {
  return (
    <article className="prose mx-auto pt-8 p-6 lg:px-8">
      <h1 className="font-bold text-center text-black/90">Terms of Service</h1>
      <p className="text-center">
        Describes the rules you agree to when using our services.
      </p>

      <em>Effective date: October 11, 2023</em>

      <p>
        These Terms of Service ("Terms", "Terms of Service") govern your
        relationship with https://upset.dev website (the "Service") operated by
        Frans Allen. ("us", "we", or "our").
      </p>

      <p>
        Please read these Terms of Service carefully before using the Service.
      </p>

      <p>
        Your access to and use of the Service is conditioned on your acceptance
        of and compliance with these Terms. These Terms apply to all visitors,
        users and others who access or use the Service.
      </p>

      <p>
        By accessing or using the Service you agree to be bound by these Terms.
        If you disagree with any part of the terms then you may not access the
        Service.
      </p>

      <h3>Disclaimer</h3>

      <p>
        Your use of the Service is at your sole risk. The Service is provided on
        an "AS IS" and "AS AVAILABLE" basis. The Service is provided without
        warranties of any kind, whether express or implied, including, but not
        limited to, implied warranties of merchantability, fitness for a
        particular purpose, non-infringement or course of performance.
      </p>

      <p>
        upset.dev its subsidiaries, affiliates, and its licensors do not warrant
        that a) the Service will function uninterrupted, secure or available at
        any particular time or location; b) any errors or defects will be
        corrected; c) the Service is free of viruses or other harmful
        components; or d) the results of using the Service will meet your
        requirements.
      </p>

      <h3>Links To Other Web Sites</h3>

      <p>
        Our website may contain links to third-party web sites or services that
        are not owned or controlled by upset.dev.
      </p>

      <p>
        upset.dev has no control over, and assumes no responsibility for, the
        content, privacy policies, or practices of any third party web sites or
        services. You further acknowledge and agree that upset.dev shall not be
        responsible or liable, directly or indirectly, for any damage or loss
        caused or alleged to be caused by or in connection with use of or
        reliance on any such content, goods or services available on or through
        any such web sites or services.
      </p>

      <p>
        We strongly advise you to read the terms and conditions and privacy
        policies of any third-party web sites or services that you visit.
      </p>

      <h3>Termination</h3>

      <p>
        We may terminate or suspend access to our Service immediately, without
        prior notice or liability, for any reason whatsoever, including without
        limitation if you breach the Terms.
      </p>

      <p>
        All provisions of the Terms which by their nature should survive
        termination shall survive termination, including, without limitation,
        ownership provisions, warranty disclaimers, indemnity and limitations of
        liability.
      </p>

      <h3>Use of Site</h3>

      <p>
        Harassment in any manner or form on the site, including via e-mail,
        chat, or by use of obscene or abusive language, is strictly forbidden.
        Impersonation of others, including upset.dev or other licensed employee,
        host, or representative, as well as other members or visitors on the
        site is prohibited. You may not upload to, distribute, or otherwise
        publish through the site any content which is libelous, defamatory,
        obscene, threatening, invasive of privacy or publicity rights, abusive,
        illegal, or otherwise objectionable which may constitute or encourage a
        criminal offense, violate the rights of any party or which may otherwise
        give rise to liability or violate any law. You may not upload commercial
        content on the site or use the site to solicit others to join or become
        members of any other commercial online service or other organization.
      </p>

      <h3>Indemnification</h3>

      <p>
        You agree to indemnify, defend, and hold harmless upset.dev, its
        officers, directors, employees, agents, licensors and suppliers
        (collectively the "Service Providers") from and against all losses,
        expenses, damages and costs, including reasonable attorneys' fees,
        resulting from any violation of these terms and conditions or any
        activity related to your account (including negligent or wrongful
        conduct) by you or any other person accessing the site using your
        Internet account.
      </p>

      <h3>Changes</h3>

      <p>
        We reserve the right, at our sole discretion, to modify or replace these
        Terms at any time. If a revision is material we will try to provide at
        least 30 days notice prior to any new terms taking effect. What
        constitutes a material change will be determined at our sole discretion.
      </p>

      <h3>Contact Us</h3>

      <p>
        If you have any questions about this Terms of Service, please contact
        us:
      </p>

      <ul>
        <li>
          By sending an email via <Link href="/contact">contact page</Link>
        </li>
      </ul>
    </article>
  );
}

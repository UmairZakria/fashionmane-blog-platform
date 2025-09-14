import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-white  text-gray-900 py-12 px-4 sm:px-6 lg:px-8">

      <div className="container mx-auto font-poppins shadow-2xl bg-white  rounded-2xl p-20">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-600">Last updated: September 15, 2025</p>
        </header>

        <section className="prose space-y-4 prose-sm sm:prose lg:prose-lg">
          <p className="text-2xl mb-10">
            Welcome to <strong>Fashion Mane</strong> (the "Site") — a fashion & hairstyles blog dedicated to outfit
            inspiration, styling tips, and beauty content. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit <a href="https://fashionmane.com" className="text-indigo-600">fashionmane.com</a>.
          </p>

          <h2 className="text-4xl underline font-medium text-prime mb-10">Information We Collect</h2>
          <h3 className="text-2xl  font-medium text-prime mb-4" >Information you provide</h3>
          <p className="text-xl ">
            When you contact us, comment on a post, sign up for a newsletter, or otherwise interact with the Site, you
            may provide personal information such as your name, email address, and any content you submit.
          </p>

          <h3 className="text-2xl  font-medium text-prime mb-4" >Automatically collected information</h3>
          <p className="text-xl ">
            We automatically collect device and usage information when you visit the Site. This includes IP address,
            browser type, operating system, pages viewed, referring/exit pages, and timestamps. We use this data to help
            understand how visitors use the Site and to improve performance and content.
          </p>

          <h3 className="text-2xl  font-medium text-prime mb-4">Cookies & similar technologies</h3>
          <p className="text-xl ">
            We use cookies and similar technologies (like local storage and web beacons) to remember preferences,
            analyze site traffic, and deliver a better, personalized experience. You can control or disable cookies via
            your browser settings, but doing so may impact Site functionality.
          </p>

          <h2 className="text-4xl underline font-medium text-prime mb-10">How We Use Your Information</h2>
          <ul className="text-xl">
            <li>To provide, maintain, and improve the Site and our content.</li>
            <li>To respond to your inquiries or comments and send administrative messages.</li>
            <li>To send newsletters or updates if you opt-in.</li>
            <li>To analyze trends, track usage, and gather demographic information for internal analytics.</li>
            <li>To detect, prevent, and address technical issues or security breaches.</li>
          </ul>

          <h2 className="text-4xl underline font-medium text-prime mb-10">Sharing & Disclosure</h2>
          <p className="text-xl ">
            We may share aggregated or anonymized information that does not directly identify you. We may also disclose
            personal information when required by law, to enforce our policies, or to protect the rights, property, or
            safety of Fashion Mane, our users, or others.
          </p>

          <h3 className="text-2xl  font-medium text-prime mb-4">Third-party services</h3>
          <p className="text-xl ">
            We use third-party services to host the Site, process analytics, deliver newsletters, and provide advertising
            or social sharing features. These providers may collect information about your interactions with the Site. We
            recommend reviewing their privacy policies for details.
          </p>

          <h2 className="text-4xl underline font-medium text-prime mb-10">Analytics & Advertising</h2>
          <p className="text-xl ">
            We use analytics services (such as Google Analytics) to understand Site usage. Ads displayed may be served by
            third parties who may place cookies and collect information about your visits across websites. We do not
            control third-party tracking and recommend reviewing their opt-out options.
          </p>

          <h2 className="text-4xl underline font-medium text-prime mb-10">Your Choices & Rights</h2>
          <p className="text-xl ">
            You can opt out of marketing communications at any time by following the unsubscribe link in our emails or by
            contacting us. Depending on your jurisdiction, you may have rights to access, correct, or delete your
            personal data — for example under the GDPR or CCPA. To exercise these rights, contact us using the details
            below.
          </p>

          <h2 className="text-4xl underline font-medium text-prime mb-10">Data Retention & Security</h2>
          <p className="text-xl ">
            We retain personal information only as long as necessary to fulfill the purposes described in this policy or
            to comply with legal obligations. While we implement reasonable security measures to protect your data, no
            method of transmission or storage is 100% secure; we cannot guarantee absolute security.
          </p>

          <h2 className="text-4xl underline font-medium text-prime mb-10">Children’s Privacy</h2>
          <p className="text-xl ">
            The Site is not intended for children under 13. We do not knowingly collect personal information from
            children under 13. If you believe we have collected such information, please contact us so we can delete it.
          </p>

          <h2 className="text-4xl underline font-medium text-prime mb-10">International Transfers</h2>
          <p className="text-xl ">
            Fashion Mane operates globally. If we transfer personal information to other countries, we will protect it in
            accordance with this policy and applicable law.
          </p>

          <h2 className="text-4xl underline font-medium text-prime mb-10">Changes to This Policy</h2>
          <p className="text-xl ">
            We may update this Privacy Policy from time to time. When changes are material, we will post a prominent
            notice on the Site and update the "Last updated" date above.
          </p>

          <h2 className="text-4xl underline font-medium text-prime mb-10">Contact Us</h2>
          <p className="text-xl ">
            If you have questions, requests, or concerns about this policy, contact us at:
          </p>
          <ul className="text-xl">
            <li>
              Email: <a href="mailto:umairlab@fashionmane.com" className="text-indigo-600">umairlab@fashionmane.com</a>
            </li>
            <li>
              Alternative: <a href="mailto:umairzakria6@gmail.com" className="text-indigo-600">umairzakria6@gmail.com</a>
            </li>
            <li>
              Support: <a href="https://umairzakria.vercel.app/" className="text-indigo-600">umairlab.com</a>
            </li>

          </ul>

          <p className="mt-6 text-sm text-gray-600">
            By using Fashion Mane, you agree to the terms of this Privacy Policy. Thank you for trusting us with your
            information.
          </p>
        </section>
      </div>
    </div>
  );
}

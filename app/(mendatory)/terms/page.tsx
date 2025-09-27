import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | PromosCoupon",
  description:
    "Read PromosCoupon Terms & Conditions. Learn about user responsibilities, third-party links, and legal disclaimers.",
  openGraph: {
    title: "Terms & Conditions | PromosCoupon",
    description:
      "PromosCoupon Terms & Conditions — your rights and responsibilities while using our site.",
    url: "https://promoscoupon.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-slate-800">Terms & Conditions</h1>
        <p className="text-slate-600">Effective Date: {new Date().toLocaleDateString()}</p>
      </div>

      <section className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
        <h2 className="text-xl font-semibold text-slate-800">1. Acceptance</h2>
        <p className="text-slate-600">
          By using <strong>PromosCoupon</strong>, you agree to these terms. If you
          do not agree, please discontinue using the site.
        </p>

        <h2 className="text-xl font-semibold text-slate-800">2. Service</h2>
        <p className="text-slate-600">
          We provide promotional content including coupons, promo codes, and deals.
          While we strive for accuracy, we cannot guarantee every offer remains valid.
        </p>

        <h2 className="text-xl font-semibold text-slate-800">3. User Responsibilities</h2>
        <ul className="list-disc pl-6 text-slate-600 space-y-1">
          <li>Use our website lawfully</li>
          <li>Do not engage in fraudulent activities</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-800">4. Third-Party Links</h2>
        <p className="text-slate-600">
          Our site may include external links. PromosCoupon is not responsible for
          the content or policies of third-party websites.
        </p>

        <h2 className="text-xl font-semibold text-slate-800">5. Liability</h2>
        <p className="text-slate-600">
          We are not liable for losses or damages resulting from use of coupons or
          deals found on our site.
        </p>

        <h2 className="text-xl font-semibold text-slate-800">6. Changes</h2>
        <p className="text-slate-600">
          We reserve the right to update these terms at any time. Continued use of
          PromosCoupon means acceptance of the revised terms.
        </p>
      </section>
    </main>
  );
}

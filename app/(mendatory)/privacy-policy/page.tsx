import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | PromosCoupon",
  description:
    "Read the PromosCoupon Privacy Policy to understand how we collect, use, and protect your personal information while providing coupons and deals.",
  openGraph: {
    title: "Privacy Policy | PromosCoupon",
    description:
      "PromosCoupon values your privacy. Learn how we handle your personal data responsibly.",
    url: "https://promoscoupon.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-slate-800">Privacy Policy</h1>
        <p className="text-slate-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <section className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
        <p>
          At <strong>PromosCoupon</strong>, your privacy is our top priority. This
          policy explains how we collect, use, and safeguard your information.
        </p>

        <h2 className="text-xl font-semibold text-slate-800">Information We Collect</h2>
        <ul className="list-disc pl-6 text-slate-600 space-y-1">
          <li>Name & email if you contact us</li>
          <li>Usage data such as pages visited & device type</li>
          <li>Cookies for analytics and advertising</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-800">How We Use Data</h2>
        <ul className="list-disc pl-6 text-slate-600 space-y-1">
          <li>Improve website experience</li>
          <li>Respond to inquiries</li>
          <li>Send optional newsletters if subscribed</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-800">Your Rights</h2>
        <p className="text-slate-600">
          You can request data access, updates, or deletion by emailing us at{" "}
          <a
            href="mailto:support@promoscoupon.com"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            support@promoscoupon.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}

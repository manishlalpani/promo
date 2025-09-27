// app/about/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | PromosCoupon",
  description:
    "Learn about PromosCoupon – your trusted platform for verified coupons, promo codes, and exclusive deals across top categories. Save more every day!",
  openGraph: {
    title: "About Us | PromosCoupon",
    description:
      "PromosCoupon helps shoppers save money with verified coupons, promo codes and exclusive offers updated daily.",
    url: "https://promoscoupon.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-10">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-slate-800">About PromosCoupon</h1>
        <p className="text-lg text-slate-600">
          Your trusted destination for verified coupons, promo codes & exclusive deals.
        </p>
      </div>

      <section className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800">Our Mission</h2>
        <p className="text-slate-600">
          At <strong>PromosCoupon</strong>, we believe saving money should be
          simple. That’s why we bring you the latest, handpicked, and tested coupons
          daily — helping you enjoy the best deals without hassle.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-3">
          <h3 className="text-xl font-semibold text-slate-800">Why Choose Us?</h3>
          <ul className="list-disc pl-5 text-slate-600 space-y-2">
            <li>✅ Verified promo codes & coupons</li>
            <li>✅ Daily updated offers</li>
            <li>✅ Wide categories: fashion, electronics, travel & more</li>
            <li>✅ Trusted by thousands of smart shoppers</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-3">
          <h3 className="text-xl font-semibold text-slate-800">Our Values</h3>
          <p className="text-slate-600">
            We prioritize trust, transparency, and a smooth user experience. Expired or
            unreliable offers are removed quickly to keep your savings journey stress-free.
          </p>
        </div>
      </section>

      <section className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center space-y-3">
        <h3 className="text-xl font-semibold text-slate-800">Get in Touch</h3>
        <p className="text-slate-600">
          Have questions or partnership ideas? Reach us anytime via our{" "}
          <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
            Contact Page
          </a>
          .
        </p>
      </section>
    </main>
  );
}

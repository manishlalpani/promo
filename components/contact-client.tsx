"use client";
import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Contact Us | PromosCoupon",
  description:
    "Get in touch with PromosCoupon for support, feedback, or partnership opportunities. We're here to help you save more with verified coupons.",
  openGraph: {
    title: "Contact Us | PromosCoupon",
    description:
      "Reach PromosCoupon for customer support, suggestions, or collaborations.",
    url: "https://promoscoupon.com/contact",
  },
};

export default function ContactPage() {
  const [status, setStatus] = useState<null | "sent" | "error">(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      window.location.href =
        "mailto:support@promoscoupon.com?subject=Contact%20from%20PromosCoupon";
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-10">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-slate-800">Contact Us</h1>
        <p className="text-lg text-slate-600">
          Have questions, feedback, or business inquiries? We’d love to hear from you.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-sm p-6 space-y-5"
      >
        <div>
          <label className="block text-sm font-medium mb-2">Your Name</label>
          <input
            required
            className="w-full border rounded-lg px-3 py-2"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            required
            type="email"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            required
            className="w-full border rounded-lg px-3 py-2 min-h-[120px]"
            placeholder="How can we help?"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700"
        >
          Send Message
        </button>

        {status === "sent" && (
          <p className="text-green-600 text-sm mt-2">
            Mail client opened — please send your message.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm mt-2">
            Something went wrong. Please email us directly at support@promoscoupon.com
          </p>
        )}
      </form>

      <div className="text-center text-slate-600">
        <p>
          Or email us directly:{" "}
          <a
            href="mailto:support@promoscoupon.com"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            support@promoscoupon.com
          </a>
        </p>
      </div>
    </main>
  );
}

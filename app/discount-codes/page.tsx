// app/page.tsx
import { Metadata } from "next";
import SearchAndCoupons from "@/components/search-and-coupons"; // ✅ client wrapper
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "CouponDeals - Find the Best Discounts & Promo Codes",
  description:
    "Discover the latest coupon codes and discounts for top brands like Amazon, Noon, and more. Save money on your online shopping with our verified promo codes.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-950 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl text-gray-900 dark:text-gray-100">
        {/* ✅ Client-side search & coupons */}
        
        <SearchAndCoupons />

        {/* ✅ Article Section */}
        <article className="prose prose-lg dark:prose-invert max-w-none mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Summer Fashion Trends 2023
          </h2>

          <p className="lead text-gray-600 dark:text-gray-300 mb-6">
            This summer brings a refreshing take on fashion with lightweight
            fabrics, vibrant colors, and sustainable choices taking center stage.
            Discover how to make the most of your summer wardrobe.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4">
            Lightweight Fabrics for Hot Days
          </h3>
          <p className="mb-4">
            As temperatures rise, choosing the right fabric becomes essential.
            Linen, cotton, and bamboo blends are perfect for staying cool while
            maintaining style. These materials are breathable and
            moisture-wicking, making them ideal for summer activities.
          </p>
          <p className="mb-6">
            Many designers are incorporating these fabrics into their
            collections, offering everything from casual wear to formal attire
            suitable for warm weather occasions.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4">
            Vibrant Color Palettes
          </h3>
          <p className="mb-4">
            This season&apos;s color trends include sunny yellows, ocean blues,
            and coral tones that reflect the joyful spirit of summer. These hues
            not only brighten your wardrobe but also complement summer&apos;s
            natural lighting.
          </p>
          <p className="mb-6">
            Color blocking remains popular, with designers pairing complementary
            bright shades for a bold, modern look that stands out in any setting.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4">
            Sustainable Summer Fashion
          </h3>
          <p className="mb-4">
            Eco-conscious fashion continues to gain momentum, with more brands
            offering sustainable options for summer wear. From organic cotton to
            recycled materials, these choices allow you to look good while
            reducing environmental impact.
          </p>
          <p>
            Many consumers are seeking out brands with transparent supply chains
            and ethical manufacturing practices, making sustainability not just a
            trend but a movement within the fashion industry.
          </p>
        </article>

        {/* ✅ FAQ Section */}
        <section className="max-w-3xl mx-auto my-12 px-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
            Frequently Asked Questions
          </h2>

          {/* Accordion UI */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>What are discount codes?</AccordionTrigger>
              <AccordionContent>
                Discount codes are promotional vouchers that help you save money
                on purchases by applying them during checkout.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger>
                How often are new coupons updated?
              </AccordionTrigger>
              <AccordionContent>
                We update our coupons weekly to ensure you always get the latest
                deals and verified codes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger>Are these coupons valid in the UAE?</AccordionTrigger>
              <AccordionContent>
                Yes, all listed coupons are specifically curated for UAE users
                and partner stores.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* JSON-LD FAQ Schema for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What are discount codes?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Discount codes are promotional vouchers that help you save money on purchases by applying them during checkout.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How often are new coupons updated?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We update our coupons weekly to ensure you always get the latest deals and verified codes.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are these coupons valid in the UAE?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, all listed coupons are specifically curated for UAE users and partner stores.",
                    },
                  },
                ],
              }),
            }}
          />
        </section>
      </div>
    </main>
  );
}

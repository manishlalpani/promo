// app/noon/page.tsx  
import { Metadata } from 'next';
import CouponCard from '@/components/coupon-card';
import Image from 'next/image';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: "Noon Coupon Codes UAE 2025 | Noon Promo Codes & Discount Offers",
  description:
    "Save big with the latest Noon coupon codes, Noon promo codes, and Noon UAE discount offers. Get up to 80% off + extra bank card discounts. Updated daily for UAE shoppers.",
  keywords:
    "Noon coupon code, Noon UAE discount, Noon promo codes, Noon UAE offers, Noon first order discount, Noon shopping coupons, Noon app code, Noon bank offers UAE, Noon electronics sale, Noon fashion coupons",
  openGraph: {
    title: "Noon Coupon Codes UAE 2025 | Verified Noon Promo Codes",
    description:
      "Grab verified Noon UAE coupon codes and Noon promo codes to save on fashion, electronics, and groceries. Updated daily for the best deals.",
    type: "website",
    images: [
      {
        url: "https://promocoupon.ae/noon.png",
        width: 1200,
        height: 630,
        alt: "Noon UAE Coupon Codes and Discounts",
      },
    ],
    url: "https://promocoupon.ae/noon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noon UAE Coupon Codes & Promo Codes 2025",
    description:
      "Find the latest Noon coupon codes and Noon discount offers for UAE. Get free shipping & extra bank discounts.",
    images: ["https://promocoupon.ae/noon.png"],
  },
};

export default function NoonPage() {
  const couponData = [
    {
      id: '1',
      title: 'Noon First Order Coupon',
      description: 'Get Extra 10% Off Your First App Order on Noon',
      code: 'RYSA',
      discount: '10% Off (Up to AED 25)',
      expiryDate: 'December 31, 2025',
      terms: 'Valid on first purchase only. Minimum order AED 50 required.',
      affiliateUrl: 'https://s.noon.com/BQTcSRPYO1Y',
    },
    {
      id: '2',
      title: 'Noon Bank Offer',
      description: 'Get 25% Off With ADCB Mastercard Credit Cards',
      code: 'KEAY10',
      discount: '25% Off (No Minimum)',
      expiryDate: 'December 31, 2025',
      terms: 'Valid only on ADCB Mastercard credit card payments.',
      affiliateUrl: 'https://s.noon.com/BQTcSRPYO1Y',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-950 dark:to-gray-900 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            Noon Coupon Codes & Promo Codes UAE 2025
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Looking for the best Noon coupon codes and Noon promo codes in UAE?&nbsp; 
            Save more on fashion, electronics, groceries, and beauty products.&nbsp; 
            Updated daily to give you the top Noon offers and exclusive bank card discounts.
          </p>
        </section>

        {/* Coupon Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
            Latest Noon Discount Codes UAE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {couponData.map((coupon) => (
              <CouponCard key={coupon.id} coupon={coupon} />
            ))}
          </div>
        </section>

        {/* Hero Image */}
        <div className="mt-8 mx-auto max-w-md">
          <Image
            src="/noon.png"
            alt="Noon UAE Coupon Codes & Promo Offers"
            width={600}
            height={315}
            className="rounded-lg shadow-md mx-auto"
          />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Official Noon UAE coupon & discount offers 2025
          </p>
        </div>

        {/* Article Section */}
        <article className="prose prose-lg dark:prose-invert max-w-none mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            How to Save Money with Noon Coupon Codes in UAE
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Noon UAE is one of the largest online shopping platforms in the Middle East, 
            offering everything from electronics and fashion to groceries and home essentials.  
            By using verified Noon coupon codes and Noon promo codes, shoppers in UAE can save extra 
            on top of already discounted prices. Here’s how you can maximize your savings.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Noon First Order Discount
          </h3>
          <p>
            If you’re shopping on Noon for the first time, you can enjoy an extra discount with 
            Noon first order promo codes. These special coupons give new customers up to 10% off 
            across categories like electronics, clothing, beauty, and more.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Noon Bank Card Offers UAE
          </h3>
          <p>
            Noon partners with UAE banks like ADCB, FAB, and Emirates NBD to give exclusive 
            savings. Simply pay using your credit or debit card to unlock up to 25% off on 
            select orders.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Noon App Exclusive Deals
          </h3>
          <p>
            Download the Noon app and activate app-only promo codes to unlock additional 
            savings on top-selling items, flash sales, and daily deals.
          </p>
        </article>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto my-12 px-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-black dark:text-white">
            Frequently Asked Questions About Noon Coupons
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>How do I use Noon coupon codes in UAE?</AccordionTrigger>
              <AccordionContent>
                Copy your Noon promo code, shop at Noon.com or the Noon app, and paste the code 
                in the "Apply Coupon" box at checkout to get instant savings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger>Does Noon offer first order discounts?</AccordionTrigger>
              <AccordionContent>
                Yes, Noon gives extra discounts for new users on their first purchase using 
                exclusive first order coupon codes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger>Are Noon coupons valid for electronics?</AccordionTrigger>
              <AccordionContent>
                Absolutely! Many Noon discount codes apply to electronics, mobiles, laptops, and gadgets.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger>Can I use Noon coupons on the Noon app?</AccordionTrigger>
              <AccordionContent>
                Yes, Noon app users often get exclusive promo codes and app-only deals not 
                available on the website.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5">
              <AccordionTrigger>How often are Noon promo codes updated?</AccordionTrigger>
              <AccordionContent>
                Our Noon coupons are updated daily with verified and working discount codes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6">
              <AccordionTrigger>Does Noon UAE have free shipping?</AccordionTrigger>
              <AccordionContent>
                Yes, Noon provides free shipping on eligible orders, and some coupons also 
                include free delivery offers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7">
              <AccordionTrigger>Can I combine Noon promo codes with bank offers?</AccordionTrigger>
              <AccordionContent>
                In most cases, Noon allows you to apply coupon codes along with eligible bank card discounts for extra savings.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* JSON-LD FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'How do I use Noon coupon codes in UAE?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Copy your Noon promo code, shop at Noon.com or the Noon app, and paste the code in the Apply Coupon box at checkout to get instant savings.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Does Noon offer first order discounts?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, Noon gives extra discounts for new users on their first purchase using exclusive first order coupon codes.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Are Noon coupons valid for electronics?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Absolutely! Many Noon discount codes apply to electronics, mobiles, laptops, and gadgets.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I use Noon coupons on the Noon app?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, Noon app users often get exclusive promo codes and app-only deals not available on the website.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How often are Noon promo codes updated?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Our Noon coupons are updated daily with verified and working discount codes.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Does Noon UAE have free shipping?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, Noon provides free shipping on eligible orders, and some coupons also include free delivery offers.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I combine Noon promo codes with bank offers?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'In most cases, Noon allows you to apply coupon codes along with eligible bank card discounts for extra savings.',
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

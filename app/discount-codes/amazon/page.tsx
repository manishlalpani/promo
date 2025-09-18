// app/page.tsx  
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
  title: 'Exclusive Discounts & Offers - Summer Specials | PromoCoupon.ae',
  description:
    'Grab exclusive summer coupons and discounts on your favorite products. Limited-time offers with up to 25% off.',
  keywords:
    'summer sale, discounts, coupons, shopping, summer essentials, promo codes, deals, UAE',
  openGraph: {
    title: 'Exclusive Discounts & Offers - Summer Specials',
    description:
      'Get amazing discounts on summer essentials with our exclusive coupon codes.',
    type: 'website',
    images: [
      {
        url: 'https://yourwebsite.com/amazon.png',
        width: 1200,
        height: 630,
        alt: 'Summer Sale Discounts',
      },
    ],
    url: 'https://yourwebsite.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exclusive Discounts & Offers - Summer Specials',
    description:
      'Get amazing discounts on summer essentials with our exclusive coupon codes.',
    images: ['https://yourwebsite.com/amazon.png'],
  },
};

export default function AmazonPage() {
  const couponData = [
    {
      id: '1',
      title: 'First Order Only',
      description: 'Get Extra 10% Off Your First App Order',
      code: 'WELCOME10',
      discount: '10%',
      expiryDate: 'December 31, 2025',
      terms: 'Valid on select items only. Minimum purchase of $50 required.',
      affiliateUrl: 'https://s.noon.com/BQTcSRPYO1Y',  
    },
    {
      id: '2',
      title: 'ADCB Mastercard Offer',
      description: 'Get 25% Off Your Order With ADCB Mastercard Credit Cards',
      code: 'ADCB15',
      discount: '25%',
      expiryDate: 'December 31, 2025',
      terms: 'Valid on all beach collection items. No minimum purchase required.',
      affiliateUrl: 'https://s.noon.com/BQTcSRPYO1Y',   
    },
    {
      id: '3',
      title: 'CBD Visa Credit Cards',
      description: ' Take 15% Off with CBD Visa Credit Cards',
      code: 'CBD15',
      discount: '15%',
      expiryDate: 'December 31, 2025',
      terms: 'Valid only on weekends. Limited stock available.',
      affiliateUrl: 'https://s.noon.com/BQTcSRPYO1Y',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-950 dark:to-gray-900 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            Exclusive Summer Offers
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our limited-time summer promotions and save big on your
            favorite products.
          </p>

          

        {/* Coupon Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
            Available Coupons
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
              src="/amazon.png"
              alt="Summer Sale Discounts"
              width={600}
              height={315}
              className="rounded-lg shadow-md mx-auto"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Feature image showing our summer sale
            </p>
          </div>
        </section>

        {/* Article Section */}
        <article className="prose prose-lg dark:prose-invert max-w-none mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            Summer Fashion Trends 2023
          </h2>

          <p className="lead text-gray-700 dark:text-gray-300 mb-6">
            This summer brings a refreshing take on fashion with lightweight
            fabrics, vibrant colors, and sustainable choices taking center stage.
            Discover how to make the most of your summer wardrobe.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Lightweight Fabrics for Hot Days
          </h3>
          <p>
            Linen, cotton, and bamboo blends are perfect for staying cool while
            maintaining style. These materials are breathable and moisture-wicking.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Vibrant Color Palettes
          </h3>
          <p>
            Sunny yellows, ocean blues, and coral tones reflect the joyful spirit
            of summer, complementing your wardrobe naturally.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Sustainable Summer Fashion
          </h3>
          <p>
            Eco-conscious fashion with organic cotton and recycled materials lets
            you look good while reducing environmental impact.
          </p>
        </article>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto my-12 px-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-black dark:text-white">
            Frequently Asked Questions
          </h2>

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
              <AccordionTrigger>
                Are these coupons valid in the UAE?
              </AccordionTrigger>
              <AccordionContent>
                Yes, all listed coupons are specifically curated for UAE users
                and partner stores.
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
                    name: 'What are discount codes?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Discount codes are promotional vouchers that help you save money on purchases by applying them during checkout.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How often are new coupons updated?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We update our coupons weekly to ensure you always get the latest deals and verified codes.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Are these coupons valid in the UAE?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, all listed coupons are specifically curated for UAE users and partner stores.',
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

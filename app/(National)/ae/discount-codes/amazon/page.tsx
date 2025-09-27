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
  title: 'Amazon Coupons & Discount Codes UAE - Save on Summer 2025 | PromoCoupon.ae',
  description:
    'Get the best Amazon UAE coupons, promo codes, and summer offers. Save up to 25% on fashion, electronics, and essentials. Updated daily with verified deals.',
  keywords:
    'Amazon UAE coupons, Amazon promo codes, Amazon discount codes, Amazon deals UAE, Amazon offers 2025, summer sale UAE, shopping coupons',
  openGraph: {
    title: 'Amazon Coupons & Discount Codes UAE - Summer Offers 2025',
    description:
      'Find verified Amazon UAE coupons and promo codes. Save up to 25% on fashion, gadgets, and more. Limited-time summer deals available now.',
    type: 'website',
    images: [
      {
        url: 'https://promocoupon.ae/amazon.png',
        width: 1200,
        height: 630,
        alt: 'Amazon Summer Sale UAE - Promo Codes and Discounts',
      },
    ],
    url: 'https://promocoupon.ae',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Coupons & Discount Codes UAE - Summer Offers 2025',
    description:
      'Shop smarter with Amazon UAE coupons and verified promo codes. Get limited-time summer deals today.',
    images: ['https://promocoupon.ae/amazon.png'],
  },
};

export default function AmazonPage() {
  const couponData = [
    {
      id: '1',
      title: 'First Order Only',
      description: 'Get Extra 10% Off Your First Amazon App Order',
      code: 'WELCOME10',
      discount: '10%',
      expiryDate: 'December 31, 2025',
      terms: 'Valid on select items only. Minimum purchase of AED 50 required.',
      affiliateUrl: 'https://amzn.to/420AQav',
    },
    {
      id: '2',
      title: 'ADCB Mastercard Offer',
      description: 'Enjoy 25% Off Your Amazon Order With ADCB Mastercard',
      code: 'ADCB25',
      discount: '25%',
      expiryDate: 'December 31, 2025',
      terms: 'Valid on all summer collection items. No minimum purchase required.',
      affiliateUrl: 'https://amzn.to/420AQav',
    },
    {
      id: '3',
      title: 'CBD Visa Credit Cards',
      description: 'Save 15% When You Pay With CBD Visa Credit Cards',
      code: 'CBD15',
      discount: '15%',
      expiryDate: 'December 31, 2025',
      terms: 'Valid only on weekends. Limited stock available.',
      affiliateUrl: 'https://amzn.to/420AQav',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-950 dark:to-gray-900 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            Amazon Coupons & Summer Offers 2025
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Shop smarter in the UAE with our verified Amazon promo codes and discount deals. 
            Save money on fashion, electronics, and summer essentials today.
          </p>
        </section>

        {/* Coupon Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
            Latest Amazon UAE Coupons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {couponData.map((coupon) => (
              <CouponCard key={coupon.id} coupon={coupon} />
            ))}
          </div>
        </section>

        {/* Hero Image */}
        <div className="mt-8 mx-auto max-w-md text-center">
          <Image
            src="/amazon.png"
            alt="Amazon Summer Sale UAE Coupons"
            width={600}
            height={315}
            className="rounded-lg shadow-md mx-auto"
          />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Save big this summer with verified Amazon UAE discount codes
          </p>
        </div>

               {/* Article Section */}
        <article className="prose prose-lg dark:prose-invert max-w-none mb-16 mt-12">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            How to Save More With Amazon UAE Coupons
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Online shopping in the UAE has become easier with Amazon. But with rising 
            prices, finding ways to save money is more important than ever. That is 
            where Amazon UAE coupons and verified promo codes come in. They give you 
            instant discounts on fashion, electronics, home essentials, and even 
            groceries. Whether you are a first-time buyer or a regular customer, using 
            discount codes can help you cut down on costs and enjoy smarter shopping.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            1. Welcome Coupons for New Users
          </h3>
          <p>
            New to Amazon UAE? You can often grab <strong>welcome coupons</strong> that 
            give you extra savings on your first order. These codes are perfect for 
            students, young families, and first-time shoppers. Most welcome offers apply 
            to categories like clothing, shoes, and kitchen products, making it easier 
            to start your shopping journey.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            2. Bank and Card Partner Offers
          </h3>
          <p>
            Many banks in the UAE, such as <strong>ADCB</strong>, <strong>CBD</strong>, 
            and Emirates NBD, run deals with Amazon. When you pay using their credit 
            cards, you can unlock <strong>extra discounts</strong> on top of Amazon’s 
            own sales. These deals usually apply to fashion, electronics, beauty items, 
            and summer collections. So, if you are already a cardholder, it’s a smart 
            way to save.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            3. Seasonal & Summer Offers
          </h3>
          <p>
            Summer is one of the best times to shop online. Amazon UAE rolls out 
            <strong> summer sale discounts</strong> on beachwear, sunglasses, 
            travel bags, air conditioners, and outdoor gear. You can also find 
            savings on groceries, baby products, and daily essentials. These 
            promotions run for a limited time, so act fast before stocks run out.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            4. Amazon Electronics Discounts
          </h3>
          <p>
            If you are planning to upgrade your gadgets, look out for <strong>Amazon 
            UAE electronics coupons</strong>. Shoppers often save money on phones, 
            laptops, smartwatches, and headphones. During peak sale events like 
            White Friday, Prime Day, and Ramadan sales, discounts can go as high as 
            40% when combined with promo codes.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            5. Fashion, Beauty & Lifestyle Savings
          </h3>
          <p>
            Fashion lovers can enjoy extra discounts on dresses, shoes, handbags, 
            perfumes, and skincare. Many <strong>Amazon fashion coupons</strong> give 
            10–25% off, especially during the summer and Eid offers. Pairing these 
            with partner card promotions makes them even more valuable.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            6. Grocery & Daily Essentials
          </h3>
          <p>
            Did you know you can also save on groceries with <strong>Amazon UAE 
            coupon codes</strong>? Shoppers can apply discounts on pantry items, 
            household products, cleaning supplies, and baby essentials. Since these 
            are things you buy often, even small discounts can add up to big savings 
            every month.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            7. Tips for Using Amazon Coupons in UAE
          </h3>
          <ul>
            <li>Always check the expiry date of each coupon before applying.</li>
            <li>Look for “stackable” offers where you can use a bank discount 
            along with a seasonal deal.</li>
            <li>Sign up for Amazon newsletters to receive exclusive promo codes.</li>
            <li>Shop during major sales like Ramadan, White Friday, and Prime Day.</li>
          </ul>

          <p className="mt-6">
            By combining verified coupons with smart shopping habits, you can save 
            money every time you buy from Amazon. Whether it’s clothes, electronics, 
            home items, or food, there is almost always a code to help you pay less. 
            Bookmark this page to stay updated with the <strong>latest Amazon UAE 
            promo codes</strong> and enjoy stress-free shopping.
          </p>
        </article>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto my-12 px-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-black dark:text-white">
            FAQs About Amazon Coupons in UAE
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>What are Amazon coupon codes?</AccordionTrigger>
              <AccordionContent>
                Amazon coupon codes are special discounts you apply at checkout to lower
                your total price instantly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger>How often are Amazon UAE coupons updated?</AccordionTrigger>
              <AccordionContent>
                We update our Amazon UAE coupons every week so you always get fresh and
                working deals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger>Are Amazon coupons valid in the UAE?</AccordionTrigger>
              <AccordionContent>
                Yes, all our Amazon coupons are verified for UAE customers and selected
                partner offers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger>Can I use more than one Amazon coupon at the same time?</AccordionTrigger>
              <AccordionContent>
                Most Amazon UAE coupons cannot be combined. However, you can sometimes stack
                a bank card discount with a seasonal sale for extra savings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5">
              <AccordionTrigger>Do Amazon coupons work on electronics?</AccordionTrigger>
              <AccordionContent>
                Yes, many Amazon promo codes apply to electronics like phones, laptops,
                smartwatches, and headphones, especially during Prime Day or White Friday.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6">
              <AccordionTrigger>Are there coupons for Amazon grocery shopping?</AccordionTrigger>
              <AccordionContent>
                Absolutely. You can use Amazon UAE coupons on pantry items, cleaning
                supplies, baby products, and household goods to save on daily essentials.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7">
              <AccordionTrigger>Do Amazon UAE coupons expire?</AccordionTrigger>
              <AccordionContent>
                Yes, every coupon has an expiry date. Always check the validity before
                using it at checkout to make sure the discount applies.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q8">
              <AccordionTrigger>Do I need an Amazon Prime account to use coupons?</AccordionTrigger>
              <AccordionContent>
                No, anyone in the UAE can use Amazon coupon codes. But Prime members may
                get exclusive discounts and faster delivery options.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q9">
              <AccordionTrigger>Can I use Amazon UAE coupons on mobile app orders?</AccordionTrigger>
              <AccordionContent>
                Yes, most coupons work on both the Amazon website and the mobile app.
                Some welcome codes are app-only and give extra savings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q10">
              <AccordionTrigger>Which payment methods unlock the best discounts?</AccordionTrigger>
              <AccordionContent>
                Partner banks like ADCB, CBD, and Emirates NBD often have extra deals when
                you pay with their credit or debit cards on Amazon UAE.
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
                    name: 'What are Amazon coupon codes?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Amazon coupon codes are special discounts you apply at checkout to lower your total price instantly.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How often are Amazon UAE coupons updated?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We update our Amazon UAE coupons every week so you always get fresh and working deals.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Are Amazon coupons valid in the UAE?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, all our Amazon coupons are verified for UAE customers and selected partner offers.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I use more than one Amazon coupon at the same time?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Most Amazon UAE coupons cannot be combined. However, you can sometimes stack a bank card discount with a seasonal sale for extra savings.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do Amazon coupons work on electronics?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, many Amazon promo codes apply to electronics like phones, laptops, smartwatches, and headphones, especially during Prime Day or White Friday.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Are there coupons for Amazon grocery shopping?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Absolutely. You can use Amazon UAE coupons on pantry items, cleaning supplies, baby products, and household goods to save on daily essentials.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do Amazon UAE coupons expire?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, every coupon has an expiry date. Always check the validity before using it at checkout to make sure the discount applies.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do I need an Amazon Prime account to use coupons?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'No, anyone in the UAE can use Amazon coupon codes. But Prime members may get exclusive discounts and faster delivery options.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I use Amazon UAE coupons on mobile app orders?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, most coupons work on both the Amazon website and the mobile app. Some welcome codes are app-only and give extra savings.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Which payment methods unlock the best discounts?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Partner banks like ADCB, CBD, and Emirates NBD often have extra deals when you pay with their credit or debit cards on Amazon UAE.',
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

// app/page.tsx  
import next, { Metadata } from 'next';
import CouponCard from '@/components/coupon-card';
import Image from 'next/image';
import Link from "next/link";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'Adidas Coupons & Promo Codes 2025 - Verified Working Discounts | SaveDaily',
  description: 'Get the latest Adidas coupons, promo codes, and discount codes verified for 2025. Save on footwear, clothing, and sports gear with working offers. Student discounts and free shipping available.',
  keywords: 'Adidas coupons, Adidas promo codes, Adidas discount codes, Adidas voucher codes, Adidas deals, Adidas offers, latest Adidas coupons, working Adidas promo code, Adidas coupons 2025, Adidas student discount, Adidas footwear promo codes',
  openGraph: {
    title: 'Adidas Coupons & Promo Codes 2025 - Verified Working Discounts',
    description: 'Find verified Adidas coupons and promo codes that actually work. Save money on footwear, clothing, and sports gear with our updated discount codes and special offers.',
    type: 'website',
    images: [
      {
        url: 'https://promoscoupon.com/adidas.png',
        width: 1200,
        height: 630,
        alt: 'Adidas Coupons and Promo Codes - Verified Working Offers 2025',
      },
    ],
    url: 'https://promoscoupon.com/discount-codes/adidas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adidas Coupons & Promo Codes 2025 - Verified Working Discounts',
    description: 'Shop smarter with verified Adidas coupons and discount codes. Get limited-time offers and exclusive deals today.',
    images: ['https://promoscoupon.com/adidas.png'],
  },
};

export default function AdidasPage() {
  const couponData = [
    {
      id: '1',
      title: 'New Customer Welcome',
      description: "Get 15% Off Your First Adidas Order",
      code: 'WELCOME15',
      discount: '15% OFF',
      expiryDate: 'December 31, 2025',
      terms: 'Valid for new customers only. Excludes limited edition releases and collaborations.',
      affiliateUrl: 'https://adidas.com',
    },
    {
      id: '2',
      title: 'Free Shipping Offer',
      description: 'Free Standard Shipping on Orders Over $99',
      code: 'FREESHIP99',
      discount: 'Free Shipping',
      expiryDate: 'Ongoing',
      terms: 'Valid on all eligible items. Minimum order value of $99 required for free shipping.',
      affiliateUrl: 'https://adidas.com',
    },
    {
      id: '3',
      title: 'Student Discount',
      description: 'Exclusive 15% Off for Verified Students',
      code: 'STUDENT15',
      discount: '15% OFF',
      expiryDate: 'December 31, 2025',
      terms: 'Student verification required. Valid on full-price items. Cannot combine with other offers.',
      affiliateUrl: 'https://adidas.com',
    },
    {
      id: '4',
      title: 'Footwear Special',
      description: '25% Off Select Running and Training Shoes',
      code: 'RUN25',
      discount: '25% OFF',
      expiryDate: 'November 30, 2025',
      terms: 'Valid on participating footwear styles. Excludes Ultraboost and limited editions.',
      affiliateUrl: 'https://adidas.com',
    },
    {
      id: '5',
      title: 'App Exclusive Deal',
      description: 'Extra 10% Off When You Order via Adidas App',
      code: 'APP10',
      discount: '10% OFF',
      expiryDate: 'December 15, 2025',
      terms: 'Mobile app purchase required. Stackable with sale items.',
      affiliateUrl: 'https://adidas.com',
    },
    {
      id: '6',
      title: 'Clearance Sale',
      description: 'Up to 50% Off Outlet and Clearance Items',
      code: 'CLEARANCE50',
      discount: '50% OFF',
      expiryDate: 'January 15, 2025',
      terms: 'Valid on outlet and clearance items only. Additional discounts automatically applied at checkout.',
      affiliateUrl: 'https://adidas.com',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
      

            Adidas Coupons & Promo Codes 2025
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Discover verified 
             {" "}
     <Link 
    href="https://www.adidas.com/" 
    target="_blank" 
    rel="noopener noreferrer external" 
    className="text-blue-600 hover:underline"
  >
    Adidas
  </Link>{" "}
            coupons, promo codes, and discount vouchers that actually work. 
            Save on the latest footwear, clothing, and sports gear with our updated offers.
          </p>
        </section>

        {/* Coupon Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
            Latest Adidas Coupons & Promo Codes
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
            src="/adidas.png"
            alt="Adidas Coupons and Discount Offers 2025"
            width={600}
            height={315}
            className="rounded-lg shadow-md mx-auto"
          />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Verified Adidas promo codes updated daily for athletes and sports enthusiasts
          </p>
        </div>

        {/* Article Section */}
        <article className="prose prose-lg dark:prose-invert max-w-none mb-16 mt-12">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            Maximize Your Savings on Adidas Gear with Smart Coupon Strategies
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            As one of the world's leading sportswear brands, Adidas offers premium quality footwear 
            and apparel that athletes and casual wearers trust. While the quality comes at a price, 
            savvy shoppers know that <strong>Adidas coupons</strong> and <strong>promo codes</strong> 
            can make these premium products much more affordable. Whether you're looking for 
            <strong> Adidas footwear promo codes</strong> for the latest running shoes or 
            <strong> Adidas clothing discount codes</strong> for workout gear, understanding how 
            to effectively use these discounts can help you build your athletic wardrobe without 
            breaking the bank.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Understanding Adidas' Coupon Structure and Seasonal Promotions
          </h3>
          <p>
            Adidas operates a sophisticated discount system that rewards loyal customers and 
            attracts new ones. <strong>Adidas promo codes</strong> typically provide percentage-based 
            discounts on full-price items, while <strong>Adidas discount codes</strong> might work 
            on sale items or specific categories. The brand frequently runs <strong>Adidas flash sale deals</strong> 
            with limited-time offers on popular collections. What makes Adidas particularly 
            appealing are their <strong>Adidas verified coupons</strong> that are officially 
            sanctioned and reliably work when terms are met, unlike many third-party codes 
            that often disappoint shoppers.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Finding and Validating Current Adidas Promo Codes
          </h3>
          <p>
            The challenge for many Adidas shoppers is finding <strong>working Adidas promo code</strong> 
            options that haven't expired or reached their usage limits. Look for indicators 
            like "<strong>Adidas voucher codes working now</strong>" or "<strong>Adidas verified discount offers</strong>" 
            to ensure validity. <strong>Latest Adidas coupons</strong> are updated regularly, 
            especially around new collection launches and seasonal changes. Since Adidas 
            serves a global market, some <strong>Adidas global promo codes</strong> work 
            internationally, while others may be region-specific based on local promotions 
            and inventory availability.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Major Shopping Events: Black Friday, Cyber Monday, and Seasonal Sales
          </h3>
          <p>
            Adidas hosts significant sales events throughout the year that offer the best 
            opportunities for savings. <strong>Adidas Black Friday deals</strong> typically 
            feature discounts of 30-50% on footwear, apparel, and accessories. 
            <strong> Adidas Cyber Monday offers</strong> continue the savings with extended 
            promotions and sometimes even deeper discounts. During holiday seasons, 
            <strong> Adidas holiday sale coupons</strong> provide perfect opportunities for 
            gift shopping. Don't overlook <strong>Adidas clearance sale codes</strong> that 
            offer substantial savings on previous season items and overstock.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Category-Specific Savings and Membership Benefits
          </h3>
          <p>
            Different product categories at Adidas have distinct discount patterns. 
            Shoppers seeking <strong>Adidas footwear promo codes</strong> will find the 
            best deals during seasonal transitions when new models are released. Those 
            looking for <strong>Adidas clothing discount codes</strong> can save on 
            workout gear, casual wear, and sports-specific apparel. The 
            <strong> Adidas membership discount</strong> program offers exclusive benefits 
            to registered users, including early access to sales, special promotions, 
            and members-only pricing on select items.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Student Discounts and New Customer Advantages
          </h3>
          <p>
            Students can access one of the most valuable ongoing promotions through the 
            <strong> Adidas student discount</strong> program, which typically offers 
            15-20% off full-price items. First-time shoppers often qualify for special 
            <strong> Adidas first order discount</strong> promotions that make trying 
            the brand more accessible. These <strong>Adidas best coupons today</strong> 
            for new customers are perfect for athletes and students building their 
            sportswear collection from scratch.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Mobile App Exclusives and Outlet Savings
          </h3>
          <p>
            The Adidas mobile app is a gateway to exclusive savings opportunities. 
            <strong> Adidas app exclusive deals</strong> often include mobile-only 
            promotions not available on the website. These include 
            <strong> Adidas limited time promo codes</strong> with special discounts 
            on new releases. For even greater savings, <strong>Adidas outlet coupons</strong> 
            can be used at physical outlet stores or the online outlet section, offering 
            discounts of 30-70% on previous season merchandise.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Advanced Adidas Shopping Strategies for Maximum Savings
          </h3>
          <ul>
            <li>Combine <strong>Adidas coupons 2025</strong> with seasonal sales for stacked discounts</li>
            <li>Sign up for the Creators Club membership to access <strong>Adidas membership discount</strong> benefits</li>
            <li>Use the mobile app to receive push notifications for <strong>Adidas flash sale deals</strong></li>
            <li>Check the "New Markdowns" section weekly for freshly reduced items</li>
            <li>Time purchases around major sporting events when Adidas often releases special promotions</li>
            <li>Follow Adidas on social media for exclusive <strong>Adidas voucher codes working now</strong></li>
          </ul>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Understanding Exclusions and Fine Print
          </h3>
          <p>
            When using <strong>Adidas discount codes</strong>, it's important to understand 
            common exclusions. Most <strong>Adidas promo codes</strong> cannot be applied 
            to limited edition releases, collaborations, or already discounted items. 
            <strong> Adidas verified coupons</strong> typically specify whether they work 
            on sale items or are restricted to full-price merchandise. Reading the terms 
            carefully ensures you select the right code for your shopping cart and avoid 
            disappointment at checkout.
          </p>

          <p className="mt-6">
            By strategically using <strong>Adidas coupons</strong> and understanding the 
            brand's promotional calendar, you can enjoy significant savings on premium 
            sportswear. Whether you're shopping for performance <strong>Adidas footwear promo codes</strong>, 
            athletic apparel, or casual wear, consistent discounts are available throughout 
            the year. Bookmark this page for regularly updated <strong>Adidas coupons 2025</strong> 
            and step up your sportswear game without overspending!
          </p>
        </article>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto my-12 px-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-black dark:text-white">
            Frequently Asked Questions About Adidas Coupons
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>How do I apply Adidas promo codes during checkout?</AccordionTrigger>
              <AccordionContent>
                During checkout on Adidas.com or the app, look for the "Add Promo Code" or "Have a coupon?" field. Enter your code and click apply. The discount will calculate automatically if the code is valid and your order meets the terms.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger>Can I use Adidas coupons on sale items?</AccordionTrigger>
              <AccordionContent>
                It depends on the specific coupon. Some Adidas promo codes work only on full-price items, while others can be applied to sale merchandise. Always check the coupon terms for restrictions regarding sale items before using.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger>Do Adidas coupons work on limited edition releases?</AccordionTrigger>
              <AccordionContent>
                Most Adidas coupons cannot be applied to limited edition releases, collaborations, or highly sought-after items like Yeezy products. These exclusions are typically noted in the coupon terms and conditions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger>How often does Adidas release new coupon codes?</AccordionTrigger>
              <AccordionContent>
                Adidas releases new coupons regularly, with increased frequency around holidays, seasonal changes, and major sporting events. We update our listings weekly to ensure you have access to current valid codes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5">
              <AccordionTrigger>Can I combine multiple Adidas coupons on one order?</AccordionTrigger>
              <AccordionContent>
                Typically, only one coupon can be applied per order. However, Adidas sometimes allows stacking of a percentage-off coupon with free shipping or other special offers. The system will automatically apply the best available discount.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6">
              <AccordionTrigger>Are there Adidas coupons specifically for students?</AccordionTrigger>
              <AccordionContent>
                Yes, Adidas offers a permanent student discount program that provides 15-20% off full-price items. Students need to verify their status through SheerID or Unidays to access these savings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7">
              <AccordionTrigger>Do Adidas coupons expire?</AccordionTrigger>
              <AccordionContent>
                Yes, most Adidas coupons have expiration dates. Some are valid for limited periods (30-90 days), while others might be single-use codes. Always check the validity period before attempting to use any coupon.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q8">
              <AccordionTrigger>What's the difference between Adidas.com coupons and outlet coupons?</AccordionTrigger>
              <AccordionContent>
                Adidas.com coupons typically work on current season merchandise on the main website, while outlet coupons are designed for clearance items and previous season products available through Adidas outlets or the online outlet section.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q9">
              <AccordionTrigger>Can I use Adidas coupons in physical stores?</AccordionTrigger>
              <AccordionContent>
                Some Adidas coupons work both online and in physical stores, while others are online-only. Digital coupons that can be used in stores typically need to be presented through the Adidas app or as a barcode at checkout.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q10">
              <AccordionTrigger>How do I get the best Adidas deals?</AccordionTrigger>
              <AccordionContent>
                For the best deals, combine coupons with seasonal sales, sign up for the Creators Club membership, download the Adidas app for exclusive offers, and shop during major sale events like Black Friday and end-of-season clearances.
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
                    name: 'How do I apply Adidas promo codes during checkout?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'During checkout on Adidas.com or the app, look for the "Add Promo Code" or "Have a coupon?" field. Enter your code and click apply. The discount will calculate automatically if the code is valid and your order meets the terms.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I use Adidas coupons on sale items?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'It depends on the specific coupon. Some Adidas promo codes work only on full-price items, while others can be applied to sale merchandise. Always check the coupon terms for restrictions regarding sale items before using.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do Adidas coupons work on limited edition releases?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Most Adidas coupons cannot be applied to limited edition releases, collaborations, or highly sought-after items like Yeezy products. These exclusions are typically noted in the coupon terms and conditions.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How often does Adidas release new coupon codes?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Adidas releases new coupons regularly, with increased frequency around holidays, seasonal changes, and major sporting events. We update our listings weekly to ensure you have access to current valid codes.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I combine multiple Adidas coupons on one order?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Typically, only one coupon can be applied per order. However, Adidas sometimes allows stacking of a percentage-off coupon with free shipping or other special offers. The system will automatically apply the best available discount.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Are there Adidas coupons specifically for students?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, Adidas offers a permanent student discount program that provides 15-20% off full-price items. Students need to verify their status through SheerID or Unidays to access these savings.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do Adidas coupons expire?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, most Adidas coupons have expiration dates. Some are valid for limited periods (30-90 days), while others might be single-use codes. Always check the validity period before attempting to use any coupon.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Whats the difference between Adidas.com coupons and outlet coupons?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Adidas.com coupons typically work on current season merchandise on the main website, while outlet coupons are designed for clearance items and previous season products available through Adidas outlets or the online outlet section.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I use Adidas coupons in physical stores?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Some Adidas coupons work both online and in physical stores, while others are online-only. Digital coupons that can be used in stores typically need to be presented through the Adidas app or as a barcode at checkout.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How do I get the best Adidas deals?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'For the best deals, combine coupons with seasonal sales, sign up for the Creators Club membership, download the Adidas app for exclusive offers, and shop during major sale events like Black Friday and end-of-season clearances.',
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

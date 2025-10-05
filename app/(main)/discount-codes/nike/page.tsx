// app/page.tsx  
import { Metadata } from 'next';
import CouponCard from '@/components/coupon-card';
import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'Nike Coupons & Promo Codes 2025 - Verified Working Discounts | SaveDaily',
  description: 'Get the latest Nike coupons, promo codes, and discount codes verified for 2025. Save on footwear, athletic wear, and sports gear with working offers. Student discounts and membership benefits available.',
  keywords: 'Nike coupons, Nike promo codes, Nike discount codes, Nike voucher codes, Nike deals, Nike offers, latest Nike coupons, working Nike promo code, Nike coupons 2025, Nike student discount, Nike footwear promo codes',
  openGraph: {
    title: 'Nike Coupons & Promo Codes 2025 - Verified Working Discounts',
    description: 'Find verified Nike coupons and promo codes that actually work. Save money on footwear, athletic wear, and sports gear with our updated discount codes and special offers.',
    type: 'website',
    images: [
      {
        url: 'https://promoscoupon.com/nike.png',
        width: 1200,
        height: 630,
        alt: 'Nike Coupons and Promo Codes - Verified Working Offers 2025',
      },
    ],
    url: 'https://promoscoupon.com/discount-codes/nike',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nike Coupons & Promo Codes 2025 - Verified Working Discounts',
    description: 'Shop smarter with verified Nike coupons and discount codes. Get limited-time offers and exclusive deals today.',
    images: ['https://promoscoupon.com/nike.png'],
  },
};

export default function NikePage() {
  const couponData = [
    {
      id: '1',
      title: 'New Member Welcome',
      description: 'Get 10% Off Your First Nike Order',
      code: 'WELCOME10',
      discount: '10% OFF',
      expiryDate: 'December 31, 2025',
      terms: 'Valid for new Nike Members only. Excludes limited edition releases and collaborations.',
      affiliateUrl: 'https://nike.com',
    },
    {
      id: '2',
      title: 'Free Shipping Offer',
      description: 'Free Standard Shipping on Orders Over $50',
      code: 'FREESHIP50',
      discount: 'Free Shipping',
      expiryDate: 'Ongoing',
      terms: 'Valid for Nike Members. Minimum order value of $50 required for free shipping.',
      affiliateUrl: 'https://nike.com',
    },
    {
      id: '3',
      title: 'Student Discount',
      description: 'Exclusive 10% Off for Verified Students',
      code: 'STUDENT10',
      discount: '10% OFF',
      expiryDate: 'December 31, 2025',
      terms: 'Student verification required. Valid on full-price items. Cannot combine with other offers.',
      affiliateUrl: 'https://nike.com',
    },
    {
      id: '4',
      title: 'Running Shoes Special',
      description: '25% Off Select Running and Training Footwear',
      code: 'RUN25',
      discount: '25% OFF',
      expiryDate: 'November 30, 2025',
      terms: 'Valid on participating footwear styles. Excludes Air Max and limited editions.',
      affiliateUrl: 'https://nike.com',
    },
    {
      id: '5',
      title: 'Nike App Exclusive',
      description: 'Extra 15% Off When You Order via Nike App',
      code: 'APP15',
      discount: '15% OFF',
      expiryDate: 'December 15, 2025',
      terms: 'Nike App purchase required. Early access to sales and member-only products.',
      affiliateUrl: 'https://nike.com',
    },
    {
      id: '6',
      title: 'Clearance Event',
      description: 'Up to 60% Off Nike Clearance Items',
      code: 'CLEARANCE60',
      discount: '60% OFF',
      expiryDate: 'January 15, 2025',
      terms: 'Valid on clearance items only. Additional discounts automatically applied at checkout.',
      affiliateUrl: 'https://nike.com',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            Nike Coupons & Promo Codes 2025
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Discover verified 
             {" "}
     <Link 
    href="https://www.nike.com/" 
    target="_blank" 
    rel="noopener noreferrer external" 
    className="text-blue-600 hover:underline"
  >
    Nike
  </Link>{" "}
             coupons, promo codes, and discount vouchers that actually work. 
            Save on the latest footwear, athletic wear, and sports gear with our updated offers.
          </p>
        </section>

        {/* Coupon Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
            Latest Nike Coupons & Promo Codes
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
            src="/nike.png"
            alt="Nike Coupons and Discount Offers 2025"
            width={600}
            height={315}
            className="rounded-lg shadow-md mx-auto"
          />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Verified Nike promo codes updated daily for athletes and sports enthusiasts
          </p>
        </div>

        {/* Article Section */}
        <article className="prose prose-lg dark:prose-invert max-w-none mb-16 mt-12">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            Maximize Your Savings on Nike Gear with Smart Coupon Strategies
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            As a global leader in athletic footwear and apparel, Nike offers innovative products 
            that athletes and casual wearers trust for performance and style. While premium 
            quality comes at a price, informed shoppers know that <strong>Nike coupons</strong> 
            and <strong>promo codes</strong> can make these top-tier products more accessible. 
            Whether you're searching for <strong>Nike footwear promo codes</strong> for the 
            latest running shoes or <strong>Nike clothing discount codes</strong> for workout 
            gear, understanding how to effectively use these discounts can help you build 
            your athletic collection while staying within budget.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Understanding Nike's Membership-Based Discount System
          </h3>
          <p>
            Nike operates a sophisticated rewards system that prioritizes member benefits. 
            <strong> Nike promo codes</strong> often work in conjunction with the Nike Membership 
            program, providing additional savings on top of member pricing. <strong>Nike discount codes</strong> 
            might offer percentage-based reductions or free shipping benefits. The brand 
            frequently runs <strong>Nike flash sale deals</strong> with limited-time offers 
            on specific collections. What sets Nike apart are their <strong>Nike verified coupons</strong> 
            that are officially distributed through legitimate channels, ensuring they work 
            reliably when terms are met.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Finding and Validating Current Nike Promo Codes
          </h3>
          <p>
            The key to successful Nike savings is locating <strong>working Nike promo code</strong> 
            options that are currently active and legitimate. Look for designations like 
            "<strong>Nike voucher codes working now</strong>" or "<strong>Nike verified discount offers</strong>" 
            to ensure validity. <strong>Latest Nike coupons</strong> are updated regularly, 
            particularly around new product launches and seasonal transitions. Since Nike 
            operates globally, some <strong>Nike global promo codes</strong> work internationally, 
            while others may be region-specific based on local inventory and promotions.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Major Shopping Events: Black Friday, Cyber Monday, and Seasonal Sales
          </h3>
          <p>
            Nike hosts highly anticipated sales events throughout the year that offer 
            the best discount opportunities. <strong>Nike Black Friday deals</strong> 
            typically feature discounts of 25-40% on footwear, apparel, and equipment. 
            <strong> Nike Cyber Monday offers</strong> extend the savings with additional 
            online-exclusive promotions. During holiday seasons, <strong>Nike holiday sale coupons</strong> 
            provide perfect opportunities for gift shopping. For the deepest discounts, 
            watch for <strong>Nike clearance sale codes</strong> that offer substantial 
            savings on previous season items and overstock.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Category-Specific Savings and Membership Advantages
          </h3>
          <p>
            Different product categories at Nike follow distinct discount patterns. 
            Shoppers seeking <strong>Nike footwear promo codes</strong> will find the 
            best deals during product launch cycles when older models are discounted. 
            Those looking for <strong>Nike clothing discount codes</strong> can save 
            on performance wear, sportswear, and seasonal collections. The 
            <strong> Nike membership discount</strong> program offers exclusive benefits 
            including early access to sales, member-only products, and special pricing 
            that can be combined with additional promotional codes.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Student Discounts and New Member Benefits
          </h3>
          <p>
            Students can access valuable ongoing savings through the <strong>Nike student discount</strong> 
            program, which typically offers 10% off full-price items. New shoppers 
            can benefit from special <strong>Nike first order discount</strong> promotions 
            when they sign up for Nike Membership. These <strong>Nike best coupons today</strong> 
            for new members make trying premium Nike products more affordable for 
            students and first-time buyers building their athletic wardrobe.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Nike App Exclusives and Outlet Savings Opportunities
          </h3>
          <p>
            The Nike mobile app is essential for accessing the best deals and exclusive 
            products. <strong>Nike app exclusive deals</strong> often include mobile-only 
            promotions not available on the desktop site. These include 
            <strong> Nike limited time promo codes</strong> with special access to 
            limited edition releases. For even greater savings, <strong>Nike outlet coupons</strong> 
            can be used at physical Nike Factory Stores or the online clearance section, 
            offering discounts of 30-60% on previous season merchandise.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Advanced Nike Shopping Strategies for Maximum Savings
          </h3>
          <ul>
            <li>Sign up for free Nike Membership to access <strong>Nike membership discount</strong> benefits</li>
            <li>Combine <strong>Nike coupons 2025</strong> with seasonal sales for optimal savings</li>
            <li>Use the Nike app for early access to <strong>Nike flash sale deals</strong></li>
            <li>Check the "Sale" section regularly for new markdowns</li>
            <li>Time purchases around major sporting events when Nike often releases special promotions</li>
            <li>Follow Nike on social media for exclusive <strong>Nike voucher codes working now</strong></li>
          </ul>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Understanding Product Exclusions and Promotion Limitations
          </h3>
          <p>
            When using <strong>Nike discount codes</strong>, it's crucial to understand 
            common exclusions. Most <strong>Nike promo codes</strong> cannot be applied 
            to limited edition collaborations, Jordan Brand releases, or already 
            heavily discounted items. <strong>Nike verified coupons</strong> typically 
            specify whether they work on sale merchandise or are restricted to full-price 
            items. Reading the fine print ensures you select the appropriate code for 
            your shopping cart and avoid disappointment during checkout.
          </p>

          <p className="mt-6">
            By strategically using <strong>Nike coupons</strong> and understanding the 
            brand's promotional ecosystem, you can enjoy significant savings on premium 
            athletic wear and footwear. Whether you're shopping for performance 
            <strong> Nike footwear promo codes</strong>, athletic apparel, or casual 
            sportswear, consistent discounts are available throughout the year. 
            Bookmark this page for regularly updated <strong>Nike coupons 2025</strong> 
            and elevate your athletic gear without exceeding your budget!
          </p>
        </article>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto my-12 px-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-black dark:text-white">
            Frequently Asked Questions About Nike Coupons
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>How do I apply Nike promo codes during checkout?</AccordionTrigger>
              <AccordionContent>
                During checkout on Nike.com or the Nike app, look for the "Enter Promo Code" or "Add a coupon" field. Enter your code and click apply. The discount will calculate automatically if the code is valid and your order meets the terms.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger>Do Nike coupons work on Jordan products?</AccordionTrigger>
              <AccordionContent>
                Most Nike coupons cannot be applied to Jordan Brand products, especially limited edition releases and collaborations. Some general promotions may include select Jordan items, but exclusions are common for high-demand releases.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger>Can I use Nike coupons on already discounted items?</AccordionTrigger>
              <AccordionContent>
                It depends on the specific coupon. Some Nike promo codes work only on full-price items, while others can be applied to sale merchandise. Always check the coupon terms for restrictions regarding sale items before use.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger>How often does Nike release new coupon codes?</AccordionTrigger>
              <AccordionContent>
                Nike releases new coupons regularly, with increased frequency around holidays, seasonal changes, and major sporting events. Nike Members often receive early access to new promotions before they're publicly available.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5">
              <AccordionTrigger>Can I combine multiple Nike coupons on one order?</AccordionTrigger>
              <AccordionContent>
                Typically, only one coupon can be applied per order. However, Nike sometimes allows stacking of a percentage-off coupon with free shipping offers for members. The system will automatically apply the best available discount.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6">
              <AccordionTrigger>Are there Nike coupons specifically for students?</AccordionTrigger>
              <AccordionContent>
                Yes, Nike offers a permanent student discount program that provides 10% off full-price items. Students need to verify their status through SheerID or Unidays to access these savings. The discount can be used both online and in stores.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7">
              <AccordionTrigger>Do Nike coupons expire?</AccordionTrigger>
              <AccordionContent>
                Yes, most Nike coupons have expiration dates. Some are valid for limited periods (30-60 days), while others might be single-use codes. Nike Member offers often have shorter validity periods, so it's best to use them promptly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q8">
              <AccordionTrigger>What's the difference between Nike.com coupons and outlet coupons?</AccordionTrigger>
              <AccordionContent>
                Nike.com coupons typically work on current season merchandise on the main website, while outlet coupons are designed for clearance items and previous season products available at Nike Factory Stores or the online clearance section.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q9">
              <AccordionTrigger>Can I use Nike coupons in physical stores?</AccordionTrigger>
              <AccordionContent>
                Some Nike coupons work both online and in physical stores, while others are online-only. Digital coupons that can be used in stores typically need to be presented through the Nike app or as a barcode at checkout.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q10">
              <AccordionTrigger>How do I get the best Nike deals?</AccordionTrigger>
              <AccordionContent>
                For the best deals, become a Nike Member for early access to sales, download the Nike app for exclusive offers, combine coupons with seasonal sales, shop during major events like Black Friday, and check the clearance section regularly for new markdowns.
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
                    name: 'How do I apply Nike promo codes during checkout?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'During checkout on Nike.com or the Nike app, look for the "Enter Promo Code" or "Add a coupon" field. Enter your code and click apply. The discount will calculate automatically if the code is valid and your order meets the terms.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do Nike coupons work on Jordan products?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Most Nike coupons cannot be applied to Jordan Brand products, especially limited edition releases and collaborations. Some general promotions may include select Jordan items, but exclusions are common for high-demand releases.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I use Nike coupons on already discounted items?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'It depends on the specific coupon. Some Nike promo codes work only on full-price items, while others can be applied to sale merchandise. Always check the coupon terms for restrictions regarding sale items before use.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How often does Nike release new coupon codes?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Nike releases new coupons regularly, with increased frequency around holidays, seasonal changes, and major sporting events. Nike Members often receive early access to new promotions before theyre publicly available.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I combine multiple Nike coupons on one order?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Typically, only one coupon can be applied per order. However, Nike sometimes allows stacking of a percentage-off coupon with free shipping offers for members. The system will automatically apply the best available discount.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Are there Nike coupons specifically for students?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, Nike offers a permanent student discount program that provides 10% off full-price items. Students need to verify their status through SheerID or Unidays to access these savings. The discount can be used both online and in stores.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do Nike coupons expire?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, most Nike coupons have expiration dates. Some are valid for limited periods (30-60 days), while others might be single-use codes. Nike Member offers often have shorter validity periods, so its best to use them promptly.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Whats the difference between Nike.com coupons and outlet coupons?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Nike.com coupons typically work on current season merchandise on the main website, while outlet coupons are designed for clearance items and previous season products available at Nike Factory Stores or the online clearance section.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I use Nike coupons in physical stores?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Some Nike coupons work both online and in physical stores, while others are online-only. Digital coupons that can be used in stores typically need to be presented through the Nike app or as a barcode at checkout.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How do I get the best Nike deals?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'For the best deals, become a Nike Member for early access to sales, download the Nike app for exclusive offers, combine coupons with seasonal sales, shop during major events like Black Friday, and check the clearance section regularly for new markdowns.',
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
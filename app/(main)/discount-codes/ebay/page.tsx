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
  title: 'eBay Coupons & Promo Codes 2025 - Verified Working Discounts | SaveDaily',
  description: 'Get the latest eBay coupons, promo codes, and discount codes verified for 2025. Save on electronics, fashion, collectibles with working offers updated daily. Free shipping deals available.',
  keywords: 'eBay coupons, eBay promo codes, eBay discount codes, eBay voucher codes, eBay deals, eBay offers, latest eBay coupons, working eBay promo code, eBay coupons 2025, eBay flash sale deals, eBay free shipping codes',
  openGraph: {
    title: 'eBay Coupons & Promo Codes 2025 - Verified Working Discounts',
    description: 'Find verified eBay coupons and promo codes that actually work. Save money on electronics, fashion, collectibles with our updated discount codes and special offers.',
    type: 'website',
    images: [
      {
        url: 'https://promoscoupon.com/ebay.png',
        width: 1200,
        height: 630,
        alt: 'eBay Coupons and Promo Codes - Verified Working Offers 2025',
      },
    ],
    url: 'https://promoscoupon.com/ebay',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'eBay Coupons & Promo Codes 2025 - Verified Working Discounts',
    description: 'Shop smarter with verified eBay coupons and discount codes. Get limited-time offers and exclusive deals today.',
    images: ['https://promoscoupon.com/ebay.png'],
  },
};

export default function EBayPage() {
  const couponData = [
    {
      id: '1',
      title: 'New User Welcome Offer',
      description: 'Get 15% Off Your First eBay Purchase Over $25',
      code: 'WELCOME15',
      discount: '15% OFF',
      expiryDate: 'December 31, 2025',
      terms: 'Valid for new customers only. Minimum purchase of $25 required. Limited to one use per account.',
      affiliateUrl: 'https://ebay.com',
    },
    {
      id: '2',
      title: 'Free Shipping Select Items',
      description: 'Free Standard Shipping on Eligible Purchases',
      code: 'FREESHIP',
      discount: 'Free Shipping',
      expiryDate: 'Ongoing',
      terms: 'Valid on items marked with free shipping. Seller-specific terms may apply.',
      affiliateUrl: 'https://ebay.com',
    },
    {
      id: '3',
      title: 'Electronics Special',
      description: 'Save $100 on Electronics Over $500',
      code: 'TECH100',
      discount: '$100 OFF',
      expiryDate: 'November 30, 2025',
      terms: 'Valid on smartphones, laptops, cameras, and gaming consoles. Minimum $500 purchase required.',
      affiliateUrl: 'https://ebay.com',
    },
    {
      id: '4',
      title: 'Fashion & Apparel',
      description: '20% Off Clothing, Shoes and Accessories',
      code: 'STYLE20',
      discount: '20% OFF',
      expiryDate: 'December 15, 2025',
      terms: 'Valid on fashion items from top-rated sellers. Excludes luxury brands.',
      affiliateUrl: 'https://ebay.com',
    },
    {
      id: '5',
      title: 'Home & Kitchen Sale',
      description: '25% Off Home Goods and Kitchen Essentials',
      code: 'HOME25',
      discount: '25% OFF',
      expiryDate: 'January 15, 2025',
      terms: 'Valid on furniture, decor, and kitchenware. Maximum discount $200.',
      affiliateUrl: 'https://ebay.com',
    },
    {
      id: '6',
      title: 'Daily Deals Exclusive',
      description: 'Extra 10% Off eBay Daily Deals Items',
      code: 'DAILY10',
      discount: '10% OFF',
      expiryDate: 'December 31, 2025',
      terms: 'Valid only on items featured in eBay Daily Deals. Limited quantity available.',
      affiliateUrl: 'https://ebay.com',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-950 dark:to-gray-900 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            eBay Coupons & Promo Codes 2025
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Discover verified 
             {" "}
     <Link 
    href="https://www.ebay.com/" 
    target="_blank" 
    rel="noopener noreferrer external" 
    className="text-blue-600 hover:underline"
  >
    Ebay
  </Link>{" "}
             coupons, promo codes, and discount vouchers that actually work. 
            Save money on electronics, fashion, collectibles, and rare finds with our updated offers.
          </p>
        </section>

        {/* Coupon Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
            Latest eBay Coupons & Promo Codes
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
            src="/ebay.png"
            alt="eBay Coupons and Discount Offers 2025"
            width={600}
            height={315}
            className="rounded-lg shadow-md mx-auto"
          />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Verified eBay promo codes updated daily for auction and buy-it-now purchases
          </p>
        </div>

        {/* Article Section */}
        <article className="prose prose-lg dark:prose-invert max-w-none mb-16 mt-12">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            Smart Shopping Strategies: Maximize Savings with eBay Coupons
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            eBay has evolved from a simple auction site to a comprehensive marketplace offering everything 
            from vintage collectibles to brand-new electronics. While competitive pricing is already a hallmark 
            of the platform, savvy shoppers know that <strong>eBay coupons</strong> and <strong>promo codes</strong> can unlock 
            even greater savings. Whether you're searching for <strong>eBay discount electronics</strong> or 
            <strong> eBay discount fashion</strong> items, understanding how to effectively use these discounts 
            can significantly reduce your costs on both auction and buy-it-now purchases.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Understanding eBay's Coupon System and Discount Types
          </h3>
          <p>
            eBay offers various discount mechanisms that savvy shoppers should understand. <strong>eBay promo codes</strong> 
            are typically site-wide discounts applied at checkout, while <strong>eBay voucher codes</strong> might be 
            seller-specific or category-limited. The platform frequently runs <strong>eBay flash sale deals</strong> 
            with time-sensitive discounts, and <strong>eBay daily deals coupons</strong> offer savings on featured 
            items. Unlike some retailers, eBay also provides <strong>eBay verified coupons</strong> that are 
            officially sanctioned and guaranteed to work when terms are met.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Finding and Verifying Working eBay Promo Codes
          </h3>
          <p>
            The challenge for many shoppers is locating <strong>working eBay promo code</strong> options that 
            haven't expired or reached usage limits. Look for designations like "<strong>eBay verified discount offers</strong>" 
            or "<strong>eBay voucher codes working now</strong>" to ensure validity. <strong>Latest eBay coupons</strong> 
            are updated frequently, especially around major shopping events. Since eBay operates globally, 
            some <strong>eBay global promo codes</strong> work internationally, while others may be region-specific.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Major Shopping Events: Black Friday, Cyber Monday, and Holiday Sales
          </h3>
          <p>
            eBay hosts significant sales events throughout the year that offer prime opportunities for savings. 
            <strong> eBay Black Friday deals</strong> typically feature deep discounts on electronics, home goods, 
            and collectibles. <strong>eBay Cyber Monday offers</strong> continue the savings with tech-focused 
            promotions. During the holiday season, <strong>eBay holiday sale coupons</strong> provide extended 
            savings opportunities. Additionally, <strong>eBay clearance sale codes</strong> help move inventory 
            with substantial discounts on overstocked items.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Category-Specific Savings Strategies
          </h3>
          <p>
            Different product categories on eBay have distinct discount patterns. Shoppers seeking 
            <strong> eBay discount electronics</strong> will find codes particularly abundant during 
            product launch periods and seasonal sales. Fashion enthusiasts can capitalize on 
            <strong> eBay discount fashion</strong> coupons that often coincide with seasonal changes. 
            Home improvement shoppers should watch for <strong>eBay home & kitchen deals</strong> 
            that typically peak during spring and fall home improvement seasons.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            New User Advantages and Shipping Savings
          </h3>
          <p>
            First-time eBay buyers often qualify for special <strong>eBay first order discount</strong> 
            promotions designed to welcome new customers. These <strong>eBay best coupons today</strong> 
            for newcomers make exploring the platform more affordable. Additionally, 
            <strong> eBay free shipping codes</strong> can significantly reduce overall costs, 
            especially for heavier items or international purchases where shipping expenses 
            might otherwise deter buyers.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Mobile App Exclusives and Limited-Time Opportunities
          </h3>
          <p>
            The eBay mobile app frequently features <strong>eBay app exclusive deals</strong> not 
            available on the desktop site. These mobile-only promotions include 
            <strong> eBay limited time promo codes</strong> with shorter expiration windows 
            but often better discount rates. For business buyers, <strong>eBay wholesale deals</strong> 
            offer volume pricing on lots and bulk purchases, while <strong>eBay exclusive voucher codes</strong> 
            provide special access to high-demand items.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Student Discounts and Educational Benefits
          </h3>
          <p>
            Students can often access special <strong>eBay student discount</strong> programs 
            with verified educational status. These programs may include exclusive 
            <strong> eBay coupons 2025</strong> for textbooks, electronics, and dorm 
            essentials. Student verification typically provides access to additional 
            savings throughout the academic year, particularly during back-to-school 
            seasons.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Advanced eBay Shopping Strategies for Maximum Savings
          </h3>
          <ul>
            <li>Combine <strong>eBay coupons 2025</strong> with auction wins for stacked savings on collectibles</li>
            <li>Time purchases around <strong>eBay flash sale deals</strong> for the deepest discounts</li>
            <li>Use the mobile app to access <strong>eBay app exclusive deals</strong> with push notification alerts</li>
            <li>Monitor seller-specific coupons in addition to site-wide <strong>eBay promo codes</strong></li>
            <li>Check multiple sources for <strong>latest eBay coupons</strong> to ensure you're getting the best current offers</li>
            <li>Read terms carefully regarding minimum purchases, category restrictions, and seller ratings</li>
          </ul>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Auction vs. Buy-It-Now: Coupon Application Differences
          </h3>
          <p>
            Understanding how <strong>eBay discount codes</strong> apply to different purchase types 
            is crucial. While <strong>eBay promo codes</strong> typically work on buy-it-now purchases, 
            auction wins may have different eligibility. Some <strong>eBay voucher codes</strong> 
            work across both formats, but terms vary. <strong>eBay verified coupons</strong> 
            usually specify whether they apply to auctions, fixed-price listings, or both.
          </p>

          <p className="mt-6">
            By strategically using <strong>eBay coupons</strong> and understanding the platform's 
            unique marketplace dynamics, you can achieve significant savings on everything 
            from everyday essentials to rare collectibles. Whether you're hunting for 
            <strong> eBay discount electronics</strong>, fashion items, or home goods, consistent 
            discounts are available throughout the year. Bookmark this page for regularly 
            updated <strong>eBay coupons 2025</strong> and happy bidding!
          </p>
        </article>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto my-12 px-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-black dark:text-white">
            Frequently Asked Questions About eBay Coupons
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>How do I apply eBay promo codes during checkout?</AccordionTrigger>
              <AccordionContent>
                During checkout, look for the "Apply coupon code" or "Enter promo code" field. Enter your code and click apply. The discount will calculate automatically if the code is valid and your purchase meets the terms.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger>Can I use eBay coupons on auction items?</AccordionTrigger>
              <AccordionContent>
                It depends on the specific coupon terms. Some eBay promo codes work on both auction wins and buy-it-now purchases, while others are restricted to fixed-price items. Always check the coupon details before bidding.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger>Are eBay coupons valid for international purchases?</AccordionTrigger>
              <AccordionContent>
                Many eBay coupons work internationally, but some may be region-specific. Global promo codes typically work across countries, while others might be limited to specific eBay sites (eBay.com, eBay.co.uk, etc.).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger>How often does eBay release new coupon codes?</AccordionTrigger>
              <AccordionContent>
                eBay releases new coupons regularly, with increased frequency during major shopping events like holidays, Black Friday, and Cyber Monday. We update our listings daily to ensure you have access to current valid codes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5">
              <AccordionTrigger>Can I combine multiple eBay coupons on one purchase?</AccordionTrigger>
              <AccordionContent>
                Typically, only one coupon can be applied per transaction. However, some seller-specific discounts might stack with site-wide promotions during special events. The system will automatically apply the best available discount.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6">
              <AccordionTrigger>Do eBay coupons work with Best Offer purchases?</AccordionTrigger>
              <AccordionContent>
                Most coupons do not apply to Best Offer purchases since these involve negotiated pricing. Coupons typically work on fixed-price items or auction wins where the price is determined without negotiation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7">
              <AccordionTrigger>Are there eBay coupons specifically for new users?</AccordionTrigger>
              <AccordionContent>
                Yes, eBay often offers special welcome discounts for first-time buyers. These may include percentage-off coupons, free shipping, or special cashback offers designed to introduce new customers to the platform.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q8">
              <AccordionTrigger>How can I verify if an eBay coupon is still valid?</AccordionTrigger>
              <AccordionContent>
                Check the expiration date and terms listed with the coupon. You can also test it during checkout before completing your purchase. We mark our coupons as "verified" only after confirming they're currently active.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q9">
              <AccordionTrigger>Do eBay coupons expire if I don't use them?</AccordionTrigger>
              <AccordionContent>
                Yes, most eBay coupons have expiration dates. Some are valid for limited periods (e.g., 30 days), while others might be single-use codes that expire after first use. Always check the validity period before planning your purchase.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q10">
              <AccordionTrigger>Can I use eBay coupons on the mobile app?</AccordionTrigger>
              <AccordionContent>
                Yes, coupons can be used on both the eBay website and mobile app. In fact, the app sometimes offers exclusive coupons and early access to deals not available on the desktop version.
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
                    name: 'How do I apply eBay promo codes during checkout?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'During checkout, look for the "Apply coupon code" or "Enter promo code" field. Enter your code and click apply. The discount will calculate automatically if the code is valid and your purchase meets the terms.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I use eBay coupons on auction items?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'It depends on the specific coupon terms. Some eBay promo codes work on both auction wins and buy-it-now purchases, while others are restricted to fixed-price items. Always check the coupon details before bidding.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Are eBay coupons valid for international purchases?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Many eBay coupons work internationally, but some may be region-specific. Global promo codes typically work across countries, while others might be limited to specific eBay sites (eBay.com, eBay.co.uk, etc.).',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How often does eBay release new coupon codes?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'eBay releases new coupons regularly, with increased frequency during major shopping events like holidays, Black Friday, and Cyber Monday. We update our listings daily to ensure you have access to current valid codes.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I combine multiple eBay coupons on one purchase?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Typically, only one coupon can be applied per transaction. However, some seller-specific discounts might stack with site-wide promotions during special events. The system will automatically apply the best available discount.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do eBay coupons work with Best Offer purchases?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Most coupons do not apply to Best Offer purchases since these involve negotiated pricing. Coupons typically work on fixed-price items or auction wins where the price is determined without negotiation.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Are there eBay coupons specifically for new users?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, eBay often offers special welcome discounts for first-time buyers. These may include percentage-off coupons, free shipping, or special cashback offers designed to introduce new customers to the platform.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How can I verify if an eBay coupon is still valid?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Check the expiration date and terms listed with the coupon. You can also test it during checkout before completing your purchase. We mark our coupons as "verified" only after confirming theyre currently active.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do eBay coupons expire if I dont use them?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, most eBay coupons have expiration dates. Some are valid for limited periods (e.g., 30 days), while others might be single-use codes that expire after first use. Always check the validity period before planning your purchase.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I use eBay coupons on the mobile app?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, coupons can be used on both the eBay website and mobile app. In fact, the app sometimes offers exclusive coupons and early access to deals not available on the desktop version.',
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
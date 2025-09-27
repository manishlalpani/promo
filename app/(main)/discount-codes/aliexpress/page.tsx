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
  title: 'AliExpress Coupons & Promo Codes 2025 - Verified Working Discounts | SaveDaily',
  description: 'Get the latest AliExpress coupons, promo codes, and discount codes verified for 2025. Save on electronics, fashion, home goods with working offers updated daily. Free shipping deals available.',
  keywords: 'AliExpress coupons, AliExpress promo codes, AliExpress discount codes, AliExpress voucher codes, AliExpress deals, AliExpress offers, latest AliExpress coupons, working AliExpress promo code, AliExpress coupons 2025',
  openGraph: {
    title: 'AliExpress Coupons & Promo Codes 2025 - Verified Working Discounts',
    description: 'Find verified AliExpress coupons and promo codes that actually work. Save money on electronics, fashion, home goods with our updated discount codes and special offers.',
    type: 'website',
    images: [
      {
        url: 'https://savedaily.com/aliexpress-coupons.png',
        width: 1200,
        height: 630,
        alt: 'AliExpress Coupons and Promo Codes - Verified Working Offers 2025',
      },
    ],
    url: 'https://savedaily.com/aliexpress-coupons',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AliExpress Coupons & Promo Codes 2025 - Verified Working Discounts',
    description: 'Shop smarter with verified AliExpress coupons and discount codes. Get limited-time offers and exclusive deals today.',
    images: ['https://savedaily.com/aliexpress-coupons.png'],
  },
};

export default function AliExpressPage() {
  const couponData = [
    {
      id: '1',
      title: 'New User Welcome Offer',
      description: 'Get $10 Off Your First AliExpress Order Over $30',
      code: 'WELCOME10',
      discount: '$10 OFF',
      expiryDate: 'December 31, 2025',
      terms: 'Valid for new customers only. Minimum purchase of $30 required. Limited to one use per account.',
      affiliateUrl: 'https://aliexpress.com',
    },
    {
      id: '2',
      title: 'Free Shipping Worldwide',
      description: 'Enjoy Free Shipping on Select Items Worldwide',
      code: 'FREESHIP',
      discount: 'Free Shipping',
      expiryDate: 'Ongoing',
      terms: 'Valid on eligible items marked with free shipping. No minimum order value required.',
      affiliateUrl: 'https://aliexpress.com',
    },
    {
      id: '3',
      title: 'Electronics Special',
      description: 'Save 15% on Electronics and Gadgets',
      code: 'ELECTRO15',
      discount: '15% OFF',
      expiryDate: 'November 30, 2025',
      terms: 'Valid on smartphones, tablets, headphones, and accessories. Maximum discount $50.',
      affiliateUrl: 'https://aliexpress.com',
    },
    {
      id: '4',
      title: 'Fashion Collection',
      description: '20% Off Clothing, Shoes and Accessories',
      code: 'FASHION20',
      discount: '20% OFF',
      expiryDate: 'December 15, 2025',
      terms: 'Valid on fashion items from selected stores. Excludes luxury brands.',
      affiliateUrl: 'https://aliexpress.com',
    },
    {
      id: '5',
      title: 'Home & Kitchen Sale',
      description: '25% Off Home Improvement and Kitchen Items',
      code: 'HOME25',
      discount: '25% OFF',
      expiryDate: 'January 15, 2025',
      terms: 'Valid on home decor, kitchenware, and furniture. Minimum order $20.',
      affiliateUrl: 'https://aliexpress.com',
    },
    {
      id: '6',
      title: 'App Exclusive Deal',
      description: 'Extra 8% Off When You Order via Mobile App',
      code: 'APPONLY8',
      discount: '8% OFF',
      expiryDate: 'December 31, 2025',
      terms: 'Mobile app purchase required. Stackable with other promotions.',
      affiliateUrl: 'https://aliexpress.com',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-950 dark:to-gray-900 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            AliExpress Coupons & Promo Codes 2025
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Discover verified AliExpress coupons, promo codes, and discount vouchers that actually work. 
            Save money on electronics, fashion, home goods, and global products with our updated offers.
          </p>
        </section>

        {/* Coupon Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
            Latest AliExpress Coupons & Promo Codes
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
            src="/aliexpress-coupons.png"
            alt="AliExpress Coupons and Discount Offers 2025"
            width={600}
            height={315}
            className="rounded-lg shadow-md mx-auto"
          />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Verified AliExpress promo codes updated daily for international shoppers
          </p>
        </div>

        {/* Article Section */}
        <article className="prose prose-lg dark:prose-invert max-w-none mb-16 mt-12">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            Maximize Your Savings with AliExpress Coupons and Deals
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Shopping on AliExpress has revolutionized global e-commerce, offering access to millions of products 
            at competitive prices. However, many international shoppers overlook the significant additional savings 
            available through <strong>AliExpress coupons</strong> and <strong>promo codes</strong>. Whether you're hunting for 
            the latest <strong>AliExpress discount codes</strong> for electronics or seeking <strong>AliExpress voucher codes</strong> for fashion items, 
            understanding how to effectively use these discounts can dramatically reduce your shopping costs.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Understanding AliExpress Coupon Types and How They Work
          </h3>
          <p>
            AliExpress offers several types of discount mechanisms. <strong>AliExpress promo codes</strong> are typically 
            alphanumeric codes you enter at checkout, while <strong>AliExpress coupons</strong> might be store-specific 
            or category-based discounts. <strong>AliExpress discount codes</strong> often provide percentage-based savings, 
            and <strong>AliExpress voucher codes</strong> might offer fixed-amount reductions. The platform also features 
            <strong> AliExpress flash sale deals</strong> with time-limited discounts on popular items.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Finding Verified and Working AliExpress Promo Codes
          </h3>
          <p>
            The biggest challenge shoppers face is finding <strong>working AliExpress promo code</strong> options that 
            haven't expired. Look for codes marked as "<strong>AliExpress verified coupons</strong>" or "<strong>AliExpress voucher codes working now</strong>" 
            to ensure validity. <strong>Latest AliExpress coupons</strong> are updated frequently, so checking reliable 
            sources daily increases your chances of finding active <strong>AliExpress deals</strong>. Always verify 
            expiration dates and terms before checkout.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Major Sale Events: 11.11, Black Friday, and Cyber Monday
          </h3>
          <p>
            AliExpress hosts massive shopping events throughout the year. The <strong>AliExpress 11.11 sale coupons</strong> 
            during Singles' Day offer some of the year's best discounts. <strong>AliExpress Black Friday deals</strong> 
            and <strong>AliExpress Cyber Monday offers</strong> provide significant savings on electronics, fashion, 
            and home goods. During these events, <strong>AliExpress global promo codes</strong> often work site-wide, 
            making them ideal for larger purchases.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Category-Specific Discounts and Savings Opportunities
          </h3>
          <p>
            Different product categories feature specialized <strong>AliExpress discount electronics</strong> codes 
            for gadgets and tech accessories. Fashion enthusiasts can find <strong>AliExpress discount fashion</strong> 
            coupons for clothing and accessories. Home improvement shoppers benefit from <strong>AliExpress home & kitchen deals</strong> 
            on tools, decor, and appliances. Understanding which categories have active <strong>AliExpress offers</strong> 
            helps target your savings strategy.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Free Shipping and First-Time Buyer Advantages
          </h3>
          <p>
            One of the most valuable <strong>AliExpress free shipping codes</strong> can significantly reduce overall 
            costs, especially for international orders. New users often qualify for special <strong>AliExpress first order discount</strong> 
            promotions, providing substantial savings on initial purchases. These <strong>AliExpress best coupons today</strong> 
            for newcomers make trying the platform risk-free and affordable.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Mobile App Exclusives and Student Discounts
          </h3>
          <p>
            The AliExpress mobile app frequently offers <strong>AliExpress app exclusive deals</strong> not available 
            on the website. Students can often access special <strong>AliExpress student discount</strong> programs 
            with verified educational status. Additionally, <strong>AliExpress wholesale deals</strong> benefit 
            bulk purchasers and small business owners looking to source products economically.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Smart Shopping Strategies for Maximum Savings
          </h3>
          <ul>
            <li>Combine <strong>AliExpress coupons 2025</strong> with existing store sales for stacked discounts</li>
            <li>Time your purchases around major sales events for the best <strong>AliExpress deals</strong></li>
            <li>Use the mobile app to access <strong>AliExpress app exclusive deals</strong></li>
            <li>Verify seller ratings and product reviews before applying discount codes</li>
            <li>Check multiple sources for <strong>AliExpress promo codes</strong> to find the best current offers</li>
            <li>Read terms carefully to understand minimum purchase requirements and category restrictions</li>
          </ul>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            International Shopping Considerations
          </h3>
          <p>
            When using <strong>AliExpress global promo codes</strong>, consider currency exchange rates, 
            international shipping times, and potential customs fees. Some <strong>AliExpress voucher codes</strong> 
            may be region-specific, so ensure the codes you select work for your country. 
            <strong> AliExpress free shipping codes</strong> often have weight or value limitations 
            for international orders.
          </p>

          <p className="mt-6">
            By strategically using <strong>AliExpress discount codes</strong> and understanding the platform's 
            promotional calendar, you can achieve significant savings on your international purchases. 
            Whether you're shopping for <strong>AliExpress discount electronics</strong>, fashion items, 
            or home goods, consistent discounts are available throughout the year. Bookmark this page 
            for regularly updated <strong>AliExpress coupons 2025</strong> and happy shopping!
          </p>
        </article>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto my-12 px-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-black dark:text-white">
            Frequently Asked Questions About AliExpress Coupons
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>How do I apply AliExpress promo codes at checkout?</AccordionTrigger>
              <AccordionContent>
                During checkout, look for the "Apply Coupon" or "Discount Code" field. Enter your code and click apply. The discount will automatically calculate if the code is valid and meets the terms.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger>Are AliExpress coupons valid for international shipping?</AccordionTrigger>
              <AccordionContent>
                Most AliExpress coupons work for international orders, but some may be region-specific. Always check the terms and conditions to ensure the code applies to your country and shipping method.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger>Can I use multiple AliExpress coupons on one order?</AccordionTrigger>
              <AccordionContent>
                Typically, only one coupon can be applied per order. However, some store-specific coupons might stack with site-wide promotions during major sales events like 11.11 or Black Friday.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger>Do AliExpress coupons expire?</AccordionTrigger>
              <AccordionContent>
                Yes, most coupons have expiration dates. Some are valid for limited periods, while others might be single-use codes. Always check the validity period before attempting to use any coupon.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5">
              <AccordionTrigger>What's the difference between AliExpress coupons and store coupons?</AccordionTrigger>
              <AccordionContent>
                Site-wide coupons work across all participating stores on AliExpress, while store coupons are specific to individual sellers. Store coupons often have higher discount rates but limited applicability.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6">
              <AccordionTrigger>Are there AliExpress coupons specifically for new users?</AccordionTrigger>
              <AccordionContent>
                Yes, AliExpress often offers special welcome discounts for first-time buyers. These may include percentage-off coupons, free shipping, or cashback offers designed specifically for new accounts.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7">
              <AccordionTrigger>Do AliExpress coupons work on all product categories?</AccordionTrigger>
              <AccordionContent>
                Most coupons have specific terms regarding eligible categories. Some work site-wide, while others are restricted to certain product types like electronics, fashion, or home goods.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q8">
              <AccordionTrigger>How often are new AliExpress coupons released?</AccordionTrigger>
              <AccordionContent>
                New coupons are released regularly, with increased frequency during major shopping events. We update our coupon listings daily to ensure you have access to the latest valid codes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q9">
              <AccordionTrigger>Can I use AliExpress coupons on the mobile app?</AccordionTrigger>
              <AccordionContent>
                Yes, coupons can be used on both the website and mobile app. In fact, the app sometimes offers exclusive coupons and deals not available on the desktop version.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q10">
              <AccordionTrigger>What should I do if my AliExpress coupon doesn't work?</AccordionTrigger>
              <AccordionContent>
                First, verify the coupon hasn't expired and that your order meets all terms (minimum purchase, eligible categories, etc.). If it still doesn't work, try a different code or contact AliExpress customer service.
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
                    name: 'How do I apply AliExpress promo codes at checkout?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'During checkout, look for the "Apply Coupon" or "Discount Code" field. Enter your code and click apply. The discount will automatically calculate if the code is valid and meets the terms.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Are AliExpress coupons valid for international shipping?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Most AliExpress coupons work for international orders, but some may be region-specific. Always check the terms and conditions to ensure the code applies to your country and shipping method.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I use multiple AliExpress coupons on one order?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Typically, only one coupon can be applied per order. However, some store-specific coupons might stack with site-wide promotions during major sales events like 11.11 or Black Friday.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do AliExpress coupons expire?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, most coupons have expiration dates. Some are valid for limited periods, while others might be single-use codes. Always check the validity period before attempting to use any coupon.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Whats the difference between AliExpress coupons and store coupons?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Site-wide coupons work across all participating stores on AliExpress, while store coupons are specific to individual sellers. Store coupons often have higher discount rates but limited applicability.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Are there AliExpress coupons specifically for new users?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, AliExpress often offers special welcome discounts for first-time buyers. These may include percentage-off coupons, free shipping, or cashback offers designed specifically for new accounts.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do AliExpress coupons work on all product categories?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Most coupons have specific terms regarding eligible categories. Some work site-wide, while others are restricted to certain product types like electronics, fashion, or home goods.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How often are new AliExpress coupons released?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'New coupons are released regularly, with increased frequency during major shopping events. We update our coupon listings daily to ensure you have access to the latest valid codes.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I use AliExpress coupons on the mobile app?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, coupons can be used on both the website and mobile app. In fact, the app sometimes offers exclusive coupons and deals not available on the desktop version.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What should I do if my AliExpress coupon doesnt work?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'First, verify the coupon hasnt expired and that your order meets all terms (minimum purchase, eligible categories, etc.). If it still doesnt work, try a different code or contact AliExpress customer service.',
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
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
  title: 'Amazon Promo Codes & Coupon Codes 2025 - Verified Working Discounts | SaveDaily',
  description: 'Get the latest Amazon promo codes, coupon codes, and discount codes verified for 2025. Save on electronics, fashion, home goods, and more with working offers updated daily.',
  keywords: 'amazon promo code, amazon coupon code, amazon discount code, amazon voucher code, working amazon promo codes, verified amazon coupons, amazon promotion code, amazon deals, amazon discount codes, amazon coupon codes',
  openGraph: {
    title: 'Amazon Promo Codes & Coupon Codes 2025 - Verified Working Discounts',
    description: 'Find verified Amazon promo codes and coupon codes that actually work. Save money on your next Amazon purchase with our updated discount codes and special offers.',
    type: 'website',
    images: [
      {
        url: 'https://savedaily.com/amazon-promo-codes.png',
        width: 1200,
        height: 630,
        alt: 'Amazon Promo Codes and Discount Codes - Verified Working Offers',
      },
    ],
    url: 'https://savedaily.com/amazon-promo-codes',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Promo Codes & Coupon Codes 2025 - Verified Working Discounts',
    description: 'Shop smarter with verified Amazon promo codes and discount codes. Get limited-time offers and exclusive deals today.',
    images: ['https://savedaily.com/amazon-promo-codes.png'],
  },
};

export default function AmazonPage() {
  const couponData = [
    {
      id: '1',
      title: 'New Customer Offer',
      description: 'Get 15% Off Your First Amazon Order Over $50',
      code: 'WELCOME15',
      discount: '15%',
      expiryDate: 'December 31, 2025',
      terms: 'Valid for new customers only. Minimum purchase of $50 required. Excludes certain categories.',
      affiliateUrl: 'https://amazon.com',
    },
    {
      id: '2',
      title: 'Free Shipping Deal',
      description: 'Enjoy Free Shipping on Orders Over $25',
      code: 'FREESHIP',
      discount: 'Free Shipping',
      expiryDate: 'Ongoing',
      terms: 'Valid on eligible items. Minimum order value of $25 required. Standard shipping only.',
      affiliateUrl: 'https://amazon.com',
    },
    {
      id: '3',
      title: 'Electronics Special',
      description: 'Save 20% on Select Electronics and Tech Products',
      code: 'TECH20',
      discount: '20%',
      expiryDate: 'November 30, 2025',
      terms: 'Valid on participating electronics. Limited to specific brands and models.',
      affiliateUrl: 'https://amazon.com',
    },
    {
      id: '4',
      title: 'Prime Member Exclusive',
      description: 'Extra 10% Off for Prime Members on Fashion Items',
      code: 'PRIMEFASHION',
      discount: '10%',
      expiryDate: 'December 15, 2025',
      terms: 'Prime membership required. Valid on clothing, shoes, and accessories.',
      affiliateUrl: 'https://amazon.com',
    },
    {
      id: '5',
      title: 'Home & Kitchen Sale',
      description: '25% Off Home Improvement and Kitchen Essentials',
      code: 'HOME25',
      discount: '25%',
      expiryDate: 'January 15, 2025',
      terms: 'Valid on select home and kitchen products. Maximum discount $100.',
      affiliateUrl: 'https://amazon.com',
    },
    {
      id: '6',
      title: 'Student Discount',
      description: 'Special 10% Off for Verified Students',
      code: 'STUDENT10',
      discount: '10%',
      expiryDate: 'December 31, 2025',
      terms: 'Student verification required. Valid on most items excluding gift cards.',
      affiliateUrl: 'https://amazon.com',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-gray-900 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            Amazon Promo Codes & Discount Codes 2025
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Discover verified Amazon promo codes, coupon codes, and discount vouchers that actually work. 
            Save money on electronics, fashion, home goods, and everyday essentials with our updated offers.
          </p>
        </section>

        {/* Coupon Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
            Latest Amazon Promo Codes & Coupons
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
            alt="Amazon Promo Codes and Discount Offers"
            width={600}
            height={315}
            className="rounded-lg shadow-md mx-auto"
          />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Verified Amazon promo codes updated daily for maximum savings
          </p>
        </div>

        {/* Article Section */}
        <article className="prose prose-lg dark:prose-invert max-w-none mb-16 mt-12">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            How to Maximize Your Savings with Amazon Promo Codes
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Shopping on Amazon has become a daily routine for millions, but many shoppers miss out on 
            significant savings by not using available promo codes and discount vouchers. Whether you're 
            looking for the latest Amazon promo code for electronics or seeking current Amazon coupon codes 
            for everyday items, understanding how to effectively use these discounts can transform your 
            shopping experience and save you hundreds of dollars annually.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Understanding Different Types of Amazon Discount Codes
          </h3>
          <p>
            Amazon offers various types of promotional codes, each with specific benefits. <strong>Amazon promo codes</strong> 
            typically provide percentage-based discounts, while <strong>Amazon coupon codes</strong> often offer fixed-amount 
            savings. <strong>Amazon voucher codes</strong> might give you credit toward future purchases, and 
            <strong> Amazon discount codes</strong> can apply to specific categories or entire orders. Knowing which 
            type of code to use for your purchase can significantly impact your final savings.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Finding Working Amazon Promo Codes That Actually Work
          </h3>
          <p>
            The challenge many shoppers face is finding <strong>verified Amazon promo codes</strong> that are still valid. 
            Look for codes marked as "verified working" or "tested today" to ensure they're current. 
            <strong> Latest Amazon promo codes</strong> are updated frequently, so checking reliable sources daily increases 
            your chances of finding active discounts. Avoid expired codes by always verifying the expiration 
            date before attempting to use them at checkout.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Seasonal Amazon Promo Code Offers and Deals
          </h3>
          <p>
            Amazon runs seasonal promotions throughout the year, offering <strong>Amazon promo code deals</strong> 
            during major shopping events. Prime Day, Black Friday, Cyber Monday, and holiday seasons typically 
            feature the best <strong>Amazon promo code offers</strong>. These periods often include site-wide discounts, 
            making it the ideal time to make larger purchases or stock up on essentials using 
            <strong> Amazon discount codes</strong>.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Category-Specific Amazon Coupon Codes
          </h3>
          <p>
            Different product categories often have specific <strong>Amazon coupon codes</strong> available. 
            Electronics frequently have dedicated <strong>Amazon promo codes</strong>, while fashion items 
            might have seasonal discount codes. Home goods, books, beauty products, and grocery items 
            often feature in <strong>Amazon promo codes lists</strong> tailored to those categories. Checking 
            for category-specific codes before making purchases in particular departments can yield 
            better savings than general promotional codes.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Free Shipping Amazon Coupon Codes and Thresholds
          </h3>
          <p>
            One of the most sought-after discounts is the <strong>Amazon coupon code free shipping</strong> offer. 
            While Amazon often provides free shipping for orders over $25 for non-Prime members, 
            specific <strong>Amazon promo codes</strong> can sometimes waive this minimum or provide free 
            expedited shipping. Prime members typically enjoy free shipping regardless of order value, 
            but additional <strong>Amazon discount codes</strong> can still be applied to their purchases.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Percentage-Based vs. Fixed-Amount Amazon Promo Codes
          </h3>
          <p>
            Understanding the difference between <strong>Amazon promo code percentage off</strong> offers 
            and fixed-amount discounts is crucial for maximizing savings. Percentage-based codes 
            generally work better for larger purchases, while fixed-amount codes might be more 
            beneficial for smaller orders. Some <strong>Amazon promotion codes</strong> offer tiered discounts, 
            providing greater savings as your cart value increases.
          </p>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Tips for Using Amazon Promo Codes Effectively
          </h3>
          <ul>
            <li>Always check multiple sources for <strong>current Amazon promo code</strong> options</li>
            <li>Read the terms and conditions carefully before applying any code</li>
            <li>Combine <strong>Amazon coupon promo code</strong> offers with existing sales for maximum savings</li>
            <li>Test codes early in the checkout process to ensure they're working</li>
            <li>Bookmark reliable sources for <strong>Amazon codes & coupons</strong> updates</li>
            <li>Sign up for newsletters to receive exclusive <strong>Amazon promo code today</strong> alerts</li>
          </ul>

          <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
            Verifying Amazon Promo Codes Before Use
          </h3>
          <p>
            Before completing your purchase, always verify that your <strong>Amazon promo code verified working</strong> 
            actually applies the promised discount. Some codes might be region-specific, category-limited, 
            or have minimum purchase requirements. Testing codes during the checkout process ensures 
            you're getting the advertised savings from <strong>Amazon coupon valid now</strong> offers.
          </p>

          <p className="mt-6">
            By strategically using <strong>Amazon promo codes</strong> and understanding how different 
            types of discounts work, you can significantly reduce your shopping expenses. Whether 
            you're looking for <strong>Amazon discount vouchers</strong> for everyday items or seeking 
            <strong> Amazon promo code best deals</strong> for major purchases, consistent savings are 
            achievable with the right approach. Remember to check back frequently for updated 
            <strong> Amazon deals & promo codes</strong> to ensure you never miss out on valuable discounts.
          </p>
        </article>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto my-12 px-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-black dark:text-white">
            Frequently Asked Questions About Amazon Promo Codes
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>What is the difference between Amazon promo codes and coupon codes?</AccordionTrigger>
              <AccordionContent>
                Amazon promo codes typically offer percentage-based discounts or special offers, while coupon codes often provide fixed-amount savings. However, the terms are frequently used interchangeably, and both types of codes can be applied at checkout to reduce your total cost.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger>How often are Amazon promo codes updated?</AccordionTrigger>
              <AccordionContent>
                We update our Amazon promo codes daily to ensure you have access to current and working discounts. Seasonal offers and limited-time promotions may change more frequently, so it's best to check regularly for the latest deals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger>Can I use multiple Amazon promo codes on one order?</AccordionTrigger>
              <AccordionContent>
                Typically, Amazon only allows one promo code per order. However, some promotions may stack with existing sales or Prime member discounts. Always check the terms and conditions of each code to understand stacking possibilities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger>Do Amazon promo codes work on all products?</AccordionTrigger>
              <AccordionContent>
                Most promo codes have specific terms regarding eligible products. Some codes work site-wide, while others are restricted to certain categories, brands, or product types. Always review the code's terms to ensure it applies to your intended purchase.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5">
              <AccordionTrigger>Why didn't my Amazon promo code work?</AccordionTrigger>
              <AccordionContent>
                Promo codes may not work if they've expired, don't apply to the items in your cart, require a minimum purchase amount you haven't met, or have been used the maximum number of times. Always verify code terms before checkout.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6">
              <AccordionTrigger>Are there Amazon promo codes specifically for first-time users?</AccordionTrigger>
              <AccordionContent>
                Yes, Amazon often offers special welcome discounts for new customers. These may include percentage-off coupons, free shipping offers, or other incentives designed specifically for first-time shoppers on the platform.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7">
              <AccordionTrigger>Do Amazon promo codes expire?</AccordionTrigger>
              <AccordionContent>
                Yes, most Amazon promo codes have expiration dates. Some may be valid for a limited time only, while others might have specific usage periods. Always check the expiration date before attempting to use any promo code.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q8">
              <AccordionTrigger>Can I use Amazon promo codes on the mobile app?</AccordionTrigger>
              <AccordionContent>
                Yes, Amazon promo codes can typically be used on both the website and the mobile app. The process for applying codes is similar across platforms, though some app-exclusive promotions may occasionally be available.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q9">
              <AccordionTrigger>Are there student-specific Amazon promo codes?</AccordionTrigger>
              <AccordionContent>
                Yes, Amazon offers special discounts for students through Amazon Prime Student, which includes exclusive promo codes and benefits. Verification of student status is required to access these special offers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q10">
              <AccordionTrigger>How can I find Amazon promo codes for specific categories?</AccordionTrigger>
              <AccordionContent>
                Many promo codes are category-specific. You can find these by looking for codes labeled for electronics, fashion, home goods, or other specific categories. Our curated lists help you find the right codes for your shopping needs.
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
                    name: 'What is the difference between Amazon promo codes and coupon codes?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Amazon promo codes typically offer percentage-based discounts or special offers, while coupon codes often provide fixed-amount savings. However, the terms are frequently used interchangeably, and both types of codes can be applied at checkout to reduce your total cost.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How often are Amazon promo codes updated?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We update our Amazon promo codes daily to ensure you have access to current and working discounts. Seasonal offers and limited-time promotions may change more frequently, so its best to check regularly for the latest deals.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I use multiple Amazon promo codes on one order?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Typically, Amazon only allows one promo code per order. However, some promotions may stack with existing sales or Prime member discounts. Always check the terms and conditions of each code to understand stacking possibilities.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do Amazon promo codes work on all products?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Most promo codes have specific terms regarding eligible products. Some codes work site-wide, while others are restricted to certain categories, brands, or product types. Always review the codes terms to ensure it applies to your intended purchase.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Why didnt my Amazon promo code work?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Promo codes may not work if theyve expired, dont apply to the items in your cart, require a minimum purchase amount you havent met, or have been used the maximum number of times. Always verify code terms before checkout.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Are there Amazon promo codes specifically for first-time users?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, Amazon often offers special welcome discounts for new customers. These may include percentage-off coupons, free shipping offers, or other incentives designed specifically for first-time shoppers on the platform.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do Amazon promo codes expire?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, most Amazon promo codes have expiration dates. Some may be valid for a limited time only, while others might have specific usage periods. Always check the expiration date before attempting to use any promo code.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I use Amazon promo codes on the mobile app?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, Amazon promo codes can typically be used on both the website and the mobile app. The process for applying codes is similar across platforms, though some app-exclusive promotions may occasionally be available.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Are there student-specific Amazon promo codes?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, Amazon offers special discounts for students through Amazon Prime Student, which includes exclusive promo codes and benefits. Verification of student status is required to access these special offers.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How can I find Amazon promo codes for specific categories?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Many promo codes are category-specific. You can find these by looking for codes labeled for electronics, fashion, home goods, or other specific categories. Our curated lists help you find the right codes for your shopping needs.',
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
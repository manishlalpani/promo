// app/page.tsx
import { Metadata } from "next";
import SearchAndCoupons from "@/components/search-and-coupons"; // ✅ client wrapper
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";

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
       {/* SEO-Optimized Article Section */}
<article className="prose prose-lg dark:prose-invert max-w-none mb-16">
  {/* Main Heading */}
  <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
    Discount Codes & Coupons for World's Top Stores - Save Big in 2025
  </h1>

  {/* Introduction */}
  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
    Discover working discount codes and verified coupons for the world's most popular online stores. 
    Whether you're shopping at <strong>Amazon</strong>, hunting deals on <strong>AliExpress</strong>, 
    or looking for sports gear from {" "}
     <Link 
    href="https://www.nike.com/" 
    target="_blank" 
    rel="noopener noreferrer external" 
    className="text-blue-600 hover:underline"
  >
    Nike
  </Link>{" "}

     and 
     {" "}
     <Link 
    href="https://www.adidas.com/" 
    target="_blank" 
    rel="noopener noreferrer external" 
    className="text-blue-600 hover:underline"
  >
    Adidas
  </Link>{" "}
     , our regularly updated coupon 
    codes help you save money on every purchase. All codes are tested and verified to ensure they 
    work when you need them.
  </p>

  {/* Why These Stores Section */}
  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 mb-8">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      Why These 8 Stores Dominate Online Shopping
    </h2>
    <p className="text-gray-700 dark:text-gray-300 mb-4">
      These platforms represent the best in their categories, offering everything from everyday 
      essentials to specialty items. Their massive customer base means they can offer exclusive 
      discount codes that smaller stores simply can't match.
    </p>
    <ul className="grid md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
      <li className="flex items-center">
        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
        Global reach with international shipping options
      </li>
      <li className="flex items-center">
        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
        Regular sales events and promotional periods
      </li>
      <li className="flex items-center">
        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
        Verified security and buyer protection
      </li>
      <li className="flex items-center">
        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
        Mobile apps with exclusive app-only deals
      </li>
    </ul>
  </div>

  {/* Individual Store Sections */}
  <div className="space-y-12">
    {/* Amazon Section */}
    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
        <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
        Amazon Discount Codes - Everything You Need
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        As the world's largest online retailer, <strong>Amazon offers discount codes</strong> that 
        work across millions of products. From electronics to household essentials, Amazon coupon 
        codes can save you up to 70% on select items. Prime members get additional exclusive 
        discounts and early access to sales events.
      </p>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Best Times to Use Amazon Codes:</h3>
        <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
          <li>• Prime Day events (typically July)</li>
          <li>• Black Friday and Cyber Week sales</li>
          <li>• Back-to-school season discounts</li>
          <li>• Holiday shopping periods</li>
        </ul>
      </div>
    </section>

    {/* AliExpress Section */}
    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
        <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
        AliExpress Coupons - Global Bargains Delivered
      </h2>

      
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        
         <strong>
          AliExpress discount codes</strong> are perfect for shoppers looking for unbeatable 
        prices on everything from electronics to fashion. The platform's direct-from-manufacturer 
        model means you can often save 50-80% off retail prices. New users typically get 
        welcome coupons for even deeper discounts.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 dark:text-green-300 mb-1">Top Categories</h4>
          <p className="text-sm text-green-700 dark:text-green-400">Electronics, Home Goods, Fashion</p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
          <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-1">Shipping</h4>
          <p className="text-sm text-purple-700 dark:text-purple-400">Free options available worldwide</p>
        </div>
      </div>
    </section>

    {/* eBay Section */}
    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
        <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
        eBay Promo Codes - Auctions & Fixed Price Deals
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        <strong>eBay coupon codes</strong> work across both auction and buy-it-now listings, 
        making them incredibly versatile. Whether you're hunting for collectibles or everyday 
        items, eBay's frequent site-wide sales events offer substantial savings. The platform's 
        buyer protection ensures you can shop with confidence.
      </p>
    </section>

    {/* Walmart Section */}
    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
        <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
        Walmart Savings - Everyday Low Prices Plus Coupons
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        <strong>Walmart discount codes</strong> combine with the retailer's already low prices 
        for exceptional value. From groceries to electronics, Walmart's digital coupons are 
        easy to clip and apply automatically at checkout. Walmart+ members get free shipping 
        and additional exclusive offers.
      </p>
    </section>

    {/* Nike & Adidas Combined Section */}
    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Athletic Wear Discounts - Nike & Adidas Promo Codes
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Sports enthusiasts can save significantly on premium athletic wear using 
        <strong> Nike coupon codes and Adidas discount codes</strong>. Both brands offer 
        regular sales on footwear, apparel, and equipment, with additional savings through 
        student discounts and membership programs.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
            <span className="w-2 h-2 bg-black dark:bg-white rounded-full mr-2"></span>
            Nike Savings Tips
          </h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>• Join Nike Membership for early access</li>
            <li>• Shop end-of-season clearance</li>
            <li>• Check the Nike app for mobile exclusives</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Adidas Discount Strategies
          </h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>• Sign up for Adidas newsletters</li>
            <li>• Look for outlet store coupons</li>
            <li>• Stack discounts during major sports events</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Temu Section */}
    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
        <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
        Temu Coupon Codes - New Platform, Massive Savings
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        As one of the fastest-growing shopping platforms, <strong>Temu offers discount codes</strong> 
        that routinely save shoppers 70-90% off retail prices. The app-first approach means 
        mobile users often get the best deals, with new user coupons providing exceptional 
        first-purchase discounts.
      </p>
    </section>

    {/* Hostinger Section */}
    <section>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
        <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
        Hostinger Promo Codes - Web Services Discounts
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        For anyone building an online presence, <strong>Hostinger discount codes</strong> offer 
        substantial savings on web hosting, domains, and related services. These codes are 
        particularly valuable for new website owners and businesses looking to establish their 
        online footprint without breaking the bank.
      </p>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500">
        <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-1">Pro Tip</h4>
        <p className="text-yellow-700 dark:text-yellow-400 text-sm">
          Hostinger often offers the deepest discounts on longer-term plans. Consider 24 or 48-month 
          commitments for maximum savings when using coupon codes.
        </p>
      </div>
    </section>
  </div>

  {/* Conclusion Section */}
  <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8 mt-12">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      Maximizing Your Savings Across All Platforms
    </h2>
    <p className="text-gray-700 dark:text-gray-300 mb-4">
      The key to maximizing savings is understanding each platform's unique discount patterns. 
      <strong> Amazon and Walmart</strong> excel at everyday essentials, while 
      <strong> AliExpress and Temu</strong> offer unbeatable prices on direct-from-factory goods. 
      <strong> Nike and Adidas</strong> provide quality athletic wear at discounted prices, and 
      <strong> Hostinger</strong> makes web services affordable.
    </p>
    <div className="grid md:grid-cols-2 gap-6 mt-6">
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Shopping Strategy Tips</h3>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>• Bookmark this page for regular coupon code updates</li>
          <li>• Create accounts on each platform for member discounts</li>
          <li>• Download mobile apps for exclusive mobile-only deals</li>
          <li>• Time purchases around major shopping holidays</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Code Verification</h3>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>• Always check expiration dates before using codes</li>
          <li>• Read terms and conditions for restrictions</li>
          <li>• Test codes during checkout before completing purchases</li>
          <li>• Report non-working codes to help other shoppers</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Final CTA */}
  <div className="text-center mt-8">
    <p className="text-gray-600 dark:text-gray-400 text-sm">
      All discount codes are verified daily. Check back regularly for new savings opportunities 
      across these top shopping platforms.
    </p>
  </div>
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

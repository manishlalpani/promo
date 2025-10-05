import { Metadata } from "next";
import Link from "next/link";
import FeatureItems from "@/components/(Home Items)/feature-items/page";


export const metadata: Metadata = {
  title: "Best Coupon Codes & Promo Codes 2025 - Save Up to 80% Off | PromosCoupon",
  description: "Get today's top verified coupon codes, promo codes, and discount offers for Amazon, Walmart, Target, eBay +5000 stores. Free savings verified daily. Last updated: 2025",
  keywords: "coupon codes, promo codes, discounts, save money, online coupons, shopping deals, Amazon coupons, Walmart promo codes, discount codes, verified coupons, best deals 2025",
  authors: [{ name: "PromosCoupon Team" }],
  creator: "PromosCoupon",
  publisher: "PromosCoupon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://promoscoupon.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: "Best Coupon Codes & Promo Codes 2025 - Save Up to 80% Off | PromosCoupon",
    description: "Daily verified coupons for Amazon, Walmart, Target. Free promo codes working today. Save big on shopping with our exclusive deals.",
    url: "https://promoscoupon.com",
    siteName: "PromosCoupon",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-coupons-2025.jpg",
        width: 1200,
        height: 630,
        alt: "Best Coupon Codes 2025 - PromosCoupon Savings Guide",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Best Coupon Codes & Promo Codes 2025 - Save Up to 80% Off",
    description: "Verified coupons working today for Amazon, Walmart, Target. Free promo codes updated daily.",
    creator: "@promoscoupon",
    images: ["/images/twitter-coupons-2025.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification",
  },
};


export default function HomePage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PromosCoupon",
    "url": "https://promoscoupon.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://promoscoupon.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en-US"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I use PromosCoupon promo codes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply find your store, click the coupon code to copy it, then paste it at checkout on the store's website. Most codes auto-apply when you click through our links."
        }
      },
      {
        "@type": "Question",
        "name": "Are PromosCoupon codes verified and tested?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our team verifies all coupon codes daily. We mark each code with verification status and last tested date to ensure you get working discounts."
        }
      },
      {
        "@type": "Question",
        "name": "What stores offer the best coupon codes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Amazon, Walmart, Target, Nike, and Best Buy consistently offer the best coupon codes with savings up to 80% off. We track over 5,000 stores for daily deals."
        }
      },
      {
        "@type": "Question",
        "name": "Do coupon codes expire? How often are they updated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, coupons have expiration dates. We update our database multiple times daily and remove expired codes to ensure you only see active, working promotions."
        }
      },
      {
        "@type": "Question",
        "name": "Is PromosCoupon completely free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! All our coupon codes, promo codes, and discount offers are 100% free. We never charge for access to savings."
        }
      }
    ]
  };

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Coupon Codes & Money Saving Tips 2025",
    "description": "Expert guide to finding and using the best coupon codes for maximum savings. Learn proven strategies for online shopping discounts.",
    "image": "/images/coupon-guide-2025.jpg",
    "author": {
      "@type": "Organization",
      "name": "PromosCoupon"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PromosCoupon",
      "logo": {
        "@type": "ImageObject",
        "url": "/images/logo-promoscoupon.jpg"
      }
    },
    "datePublished": "2025-01-01",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      
      <main className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-100/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
       {/* Compact Hero Section */}
<section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-5">
    <div className="text-center">
    

      {/* Main Heading - More Compact */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 leading-tight">
        Save Up to{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          80% Off
        </span>{" "}
        with Verified Codes
      </h1>

      {/* Subtitle - Shorter and More Impactful */}
      <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-2 md:mb-2 max-w-3xl mx-auto leading-relaxed">
        Daily updated coupon codes for <strong>Amazon, Walmart, Target</strong> & 1,000+ stores upcoming. 
        <span className="block sm:inline"> Free shipping deals & exclusive promotions.</span>
      </p>

  
              
              {/* Enhanced Search Bar */}
       
        
   
       



            </div>
          </div>
        </section>

        
        {/* Featured Stores with SEO-rich categories */}
       
       <FeatureItems />

       {/* Trust Badges & Stats - Authentic Version */}
<section className="py-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-y border-gray-200 dark:border-slate-700">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">Daily</div>
        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Code Updates</div>
      </div>
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">100%</div>
        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Verified Manually</div>
      </div>
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Monitoring</div>
      </div>
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-orange-600 dark:text-orange-400">Free</div>
        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Always Free Service</div>
      </div>
    </div>
  </div>
</section>



        {/* How It Works Section */}
        <section className="py-12 md:py-16 bg-gray-50 dark:bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-12">
              How to Use Coupon Codes: <span className="text-green-600 dark:text-green-400">3 Easy Steps</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                { 
                  step: "01", 
                  title: "Find & Copy Coupon Code", 
                  desc: "Search for your store and click the 'Copy Code' button. Our codes are verified daily to ensure they work.",
                  icon: "🔍",
                  keyword: "find coupon codes"
                },
                { 
                  step: "02", 
                  title: "Shop at Your Store", 
                  desc: "Visit the store website and add items to your cart. Proceed to checkout page when ready.",
                  icon: "🛒",
                  keyword: "online shopping discounts"
                },
                { 
                  step: "03", 
                  title: "Paste & Save Money", 
                  desc: "Paste the coupon code in the promo code field at checkout. Watch your total price drop instantly!",
                  icon: "💰",
                  keyword: "apply promo codes"
                },
              ].map((item: { step: string; title: string; desc: string; icon: string; keyword: string }) => (
                <div key={item.step} className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-xl sm:text-2xl mx-auto mb-4">
                    {item.icon}
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 font-bold text-sm mb-2">{item.step}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                  <div className="mt-3 text-xs text-blue-500 dark:text-blue-400 font-medium">#{item.keyword}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

       
       
       
       {/* SEO Articles Section - Enhanced UI */}
<section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900/20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Enhanced Header */}
    <div className="text-center mb-12 md:mb-16">
      <div className="inline-flex items-center justify-center mb-4">
        <span className="inline-block w-3 h-3 bg-purple-500 rounded-full animate-pulse mr-2"></span>
        <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
          Money Saving Guides
        </span>
        <span className="inline-block w-3 h-3 bg-purple-500 rounded-full animate-pulse ml-2"></span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
        Smart Coupon Strategies & 
        <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Savings Guides
        </span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Discover expert tips, seasonal strategies, and proven methods to maximize your savings with verified coupon codes
      </p>
    </div>

    {/* Interactive Category Filter */}
   <div className="flex flex-wrap justify-center gap-3 mb-12">
  {[
    { name: 'All Guides' },
    { name: 'Amazon', link: 'https://www.amazon.com/' },
    { name: 'Walmart', link: 'https://www.wallmart.com/' },
    { name: 'Seasonal' },
    { name: 'Verification' },
    { name: 'Mobile' },
    { name: 'Black Friday' },
  ].map((category) =>
    category.link ? (
      <a
        key={category.name}
        href={category.link}
        target="_blank"
        rel="noopener noreferrer external"
        className="px-4 py-2.5 text-sm font-semibold bg-white dark:bg-slate-700 rounded-full shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-slate-600 hover:border-purple-300 dark:hover:border-purple-500 hover:transform hover:-translate-y-0.5"
      >
        {category.name}
      </a>
    ) : (
      <button
        key={category.name}
        className="px-4 py-2.5 text-sm font-semibold bg-white dark:bg-slate-700 rounded-full shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-slate-600 hover:border-purple-300 dark:hover:border-purple-500 hover:transform hover:-translate-y-0.5"
      >
        {category.name}
      </button>
    )
  )}
</div>


    {/* Enhanced Articles Grid */}
    <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
      {[
        {
          id: "amazon-coupon-guide",
          title: "Ultimate Amazon Coupon Codes 2025 - Maximum Savings Guide",
          desc: "Master Amazon's coupon ecosystem with clip-to-save deals, Lightning offers, and Prime exclusives",
          readTime: "5 min read",
          keyword: "amazon coupon codes",
          icon: "🛍️",
          gradient: "from-orange-500 to-red-500",
          content: `
            <div class="space-y-4">
              <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                <h4 class="font-bold text-orange-800 dark:text-orange-300 mb-2">🎯 Pro Tip</h4>
                <p>Combine Lightning Deals with clip-to-save coupons for double discounts!</p>
              </div>
              <h3>Amazon's Coupon Ecosystem</h3>
              <p>Amazon revolutionizes savings with <strong>digital clip-to-save coupons</strong> that activate instantly. These aren't traditional codes but digital discounts applied directly at checkout.</p>
              
              <h3>Prime Member Advantages</h3>
              <ul class="checklist">
                <li>Early access to Prime Day deals</li>
                <li>Exclusive coupon codes via email</li>
                <li>Extra 10-15% off select categories</li>
                <li>Free shipping on all coupon purchases</li>
              </ul>
            </div>
          `
        },
        {
          id: "walmart-coupon-strategies",
          title: "Walmart Promo Codes: Advanced Stacking Techniques",
          desc: "Learn to combine digital coupons with Rollback prices for unprecedented savings",
          readTime: "4 min read",
          keyword: "walmart promo codes",
          icon: "🏪",
          gradient: "from-blue-500 to-cyan-500",
          content: `
            <div class="space-y-4">
              <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <h4 class="font-bold text-blue-800 dark:text-blue-300 mb-2">💡 Insider Knowledge</h4>
                <p>Walmart+ members get early access to coupon events!</p>
              </div>
              <h3>Digital Coupon Mastery</h3>
              <p>Walmart's <strong>digital coupon platform</strong> eliminates code entry. Simply clip coupons in the app and savings apply automatically.</p>
              
              <h3>Rollback Stacking Strategy</h3>
              <ul class="checklist">
                <li>Rollback prices are permanent reductions</li>
                <li>Digital coupons stack on already-reduced items</li>
                <li>Manufacturer coupons may triple your savings</li>
                <li>Use grocery pickup for additional convenience</li>
              </ul>
            </div>
          `
        },
        {
          id: "seasonal-sales-calendar",
          title: "2025 Seasonal Sales Calendar: Perfect Timing Guide",
          desc: "Master the retail calendar to maximize discounts throughout the year",
          readTime: "6 min read",
          keyword: "seasonal sales coupons",
          icon: "📅",
          gradient: "from-green-500 to-emerald-500",
          content: `
            <div class="space-y-4">
              <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <h4 class="font-bold text-green-800 dark:text-green-300 mb-2">📊 Data-Driven</h4>
                <p>January clearance offers up to 90% off holiday items!</p>
              </div>
              <h3>Quarterly Savings Strategy</h3>
              <p>Plan your major purchases around these key periods for maximum coupon availability and discount depth.</p>
              
              <h3>2025 Key Shopping Periods</h3>
              <ul class="checklist">
                <li><strong>Q1</strong>: Post-holiday clearance (Jan), President's Day</li>
                <li><strong>Q2</strong>: Spring sales, Easter, Mother's Day</li>
                <li><strong>Q3</strong>: Prime Day, back-to-school, summer clearance</li>
                <li><strong>Q4</strong>: Black Friday, Cyber Monday, holiday sales</li>
              </ul>
            </div>
          `
        },
        {
          id: "verified-coupon-guide",
          title: "Coupon Verification: Spot Fakes & Find Real Deals",
          desc: "Expert techniques to identify legitimate coupons and avoid scams",
          readTime: "3 min read",
          keyword: "verified coupons",
          icon: "✅",
          gradient: "from-teal-500 to-green-500",
          content: `
            <div class="space-y-4">
              <div class="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-xl">
                <h4 class="font-bold text-teal-800 dark:text-teal-300 mb-2">🛡️ Safety First</h4>
                <p>Always verify coupons before sharing personal information!</p>
              </div>
              <h3>Verification Checklist</h3>
              <p>Legitimate coupons share common characteristics that distinguish them from fakes and expired offers.</p>
              
              <h3>Green Flags vs Red Flags</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 class="font-bold text-green-700 dark:text-green-300">✅ Good Signs</h4>
                  <ul class="text-sm mt-2">
                    <li>Clear expiration dates</li>
                    <li>Specific terms outlined</li>
                    <li>Recent user verification</li>
                    <li>Professional formatting</li>
                  </ul>
                </div>
                <div class="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <h4 class="font-bold text-red-700 dark:text-red-300">❌ Warning Signs</h4>
                  <ul class="text-sm mt-2">
                    <li>No expiration date</li>
                    <li>Unrealistic discounts</li>
                    <li>Poor spelling/grammar</li>
                    <li>Personal info requests</li>
                  </ul>
                </div>
              </div>
            </div>
          `
        },
        {
          id: "mobile-coupon-apps",
          title: "Mobile Coupon Mastery: Apps & On-the-Go Savings",
          desc: "Transform your phone into a powerful savings tool with these expert strategies",
          readTime: "4 min read",
          keyword: "mobile coupon apps",
          icon: "📱",
          gradient: "from-purple-500 to-pink-500",
          content: `
            <div class="space-y-4">
              <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                <h4 class="font-bold text-purple-800 dark:text-purple-300 mb-2">🚀 Pro Tip</h4>
                <p>Enable push notifications for instant deal alerts!</p>
              </div>
              <h3>App-Based Savings Ecosystem</h3>
              <p>Mobile shopping has revolutionized couponing with instant access, location-based offers, and exclusive app-only deals.</p>
              
              <h3>Essential Mobile Strategies</h3>
              <ul class="checklist">
                <li><strong>Retailer Apps</strong>: Walmart, Target, Amazon for exclusive offers</li>
                <li><strong>Cashback Apps</strong>: Rakuten, Ibotta for additional savings</li>
                <li><strong>Browser Extensions</strong>: Honey for automatic code application</li>
                <li><strong>Mobile Wallets</strong>: Store loyalty cards digitally</li>
              </ul>
            </div>
          `
        },
        {
          id: "black-friday-2025",
          title: "Black Friday 2025: Ultimate Preparation Guide",
          desc: "Comprehensive strategy for maximizing savings during the biggest shopping event",
          readTime: "7 min read",
          keyword: "black friday coupons",
          icon: "⚫",
          gradient: "from-gray-700 to-black",
          content: `
            <div class="space-y-4">
              <div class="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl">
                <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-2">🎯 Early Bird Strategy</h4>
                <p>Start preparing your list and budget in October!</p>
              </div>
              <h3>Pre-Event Preparation Timeline</h3>
              <p>Successful Black Friday shopping requires strategic planning starting weeks before the actual event.</p>
              
              <h3>Preparation Timeline</h3>
              <ul class="checklist">
                <li><strong>October</strong>: Create wishlist, set budget, sign up for newsletters</li>
                <li><strong>Early November</strong>: Research prices, download retailer apps</li>
                <li><strong>Mid-November</strong>: Monitor early Black Friday deals</li>
                <li><strong>Thanksgiving Week</strong>: Finalize strategy, test coupon codes</li>
              </ul>
            </div>
          `
        },
      ].map((article) => (
        <article 
          key={article.id}
          className="group bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-slate-700 hover:border-purple-200 dark:hover:border-purple-500 hover:transform hover:-translate-y-2"
        >
          {/* Article Header with Icon */}
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${article.gradient} flex items-center justify-center text-white text-xl shadow-lg`}>
              {article.icon}
            </div>
            <span className="text-xs font-semibold px-3 py-1 bg-gray-100 dark:bg-slate-700 rounded-full text-gray-600 dark:text-gray-300">
              {article.readTime}
            </span>
          </div>

          {/* Article Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {article.title}
          </h3>

          {/* Article Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
            {article.desc}
          </p>

          {/* Enhanced Article Content */}
          <div 
            className="prose prose-sm dark:prose-invert max-w-none mb-6 text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Interactive Footer */}
          <div className="flex justify-between items-center border-t border-gray-100 dark:border-slate-700 pt-4">
            <span className="text-xs font-semibold px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
              #{article.keyword}
            </span>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="group-hover:text-purple-600 transition-colors">Save for later</span>
              <span className="group-hover:scale-110 transition-transform">💾</span>
            </div>
          </div>
        </article>
      ))}
    </div>

    {/* Call to Action */}
    <div className="text-center mt-12">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Saving?</h3>
        <p className="text-purple-100 text-lg mb-6 max-w-2xl mx-auto">
          Join thousands of smart shoppers who save hundreds each month using our verified coupon codes and expert strategies.
        </p>
         <Link href={"/discount-codes"}>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
          Explore All Coupon Codes 🚀
        </button>
          </Link>
      </div>
    </div>
  </div>
</section>



        {/* Comprehensive FAQ Section */}
        <section className="py-12 md:py-16 bg-gray-50 dark:bg-slate-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-12">
              Frequently Asked Questions About <span className="text-blue-600 dark:text-blue-400">Coupon Codes</span>
            </h2>
            <div className="space-y-4">
              {[
                {
                  question: "How do I use PromosCoupon promo codes?",
                  answer: "Simply find your store, click the coupon code to copy it automatically, then paste it at checkout on the store's website. Most codes will auto-apply when you click through our special affiliate links."
                },
                {
                  question: "Are PromosCoupon codes verified and tested daily?",
                  answer: "Yes, our dedicated team verifies all coupon codes multiple times daily. We mark each code with verification status, last tested date, and success rate to ensure you only see working, active discounts."
                },
                {
                  question: "What stores consistently offer the best coupon codes?",
                  answer: "Based on our 2025 data, Amazon, Walmart, Target, Nike, and Best Buy consistently offer the most reliable coupon codes with savings up to 80% off. We actively track over 5,000 stores for daily deal opportunities."
                },
                {
                  question: "Do coupon codes expire? How often is your database updated?",
                  answer: "Yes, most coupons have expiration dates ranging from 24 hours to 30 days. We update our database every 2-3 hours and immediately remove expired codes. Each coupon shows its expiration date clearly."
                },
                {
                  question: "Is PromosCoupon completely free to use? Any hidden costs?",
                  answer: "Absolutely! All our coupon codes, promo codes, discount offers, and shopping guides are 100% free. We never charge for access to savings. We earn commission when you make purchases through our links, at no extra cost to you."
                },
                {
                  question: "Why didn't a coupon code work for my purchase?",
                  answer: "Coupon codes may not work due to: expiration, specific product exclusions, minimum purchase requirements, or regional restrictions. Always check the terms and try our alternative codes for the same store."
                },
                {
                  question: "Can I use multiple coupon codes on one order?",
                  answer: "This varies by store. Some retailers allow code stacking, while others limit one code per order. We indicate stacking possibilities where available and provide guidance for each store's policy."
                },
                {
                  question: "Do you offer cashback or rewards in addition to coupons?",
                  answer: "Yes! Many stores offer additional cashback through our partners. Look for the cashback indicator next to coupon codes for extra savings on top of your discount."
                },
              ].map((faq: { question: string; answer: string }) => (
                <details key={faq.question} className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white text-lg marker:text-blue-500">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 md:py-16 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Saving Money Today?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join <strong>thousands + smart shoppers</strong> who save with PromosCoupon every day. 
              Get instant access to <strong>verified coupon codes</strong> for your favorite stores.
            </p>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
              ✅ Free access • ✅ No registration required • ✅ Verified daily • ✅ 5,000+ stores
            </p>
          </div>
        </section>

      </main>
    </>
  );
}

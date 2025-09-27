"use client"
import React from 'react'

export default function FeatureItems() {
  return (
    <div>
        <section className="py-2 md:py-5">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-12">
      Top Stores with <span className="text-blue-600 dark:text-blue-400">Working Coupon Codes</span>
    </h2>
    
    {/* Store Categories Navigation */}
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {['All Stores', 'Fashion', 'Electronics', 'Home & Garden', 'Beauty', 'Sports', 'Food'].map((category) => (
        <button key={category} className="px-3 py-2 text-xs sm:text-sm bg-gray-100 dark:bg-slate-700 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
          {category}
        </button>
      ))}
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
      {[
        { 
          name: "Amazon", 
          discount: "Up to 60% OFF", 
          code: "SAVE20", 
          verified: true,
          affiliateUrl: "/app/discount-codes/amazon"
        },
        { 
          name: "Walmart", 
          discount: "Up to 70% OFF", 
          code: "WELCOME15", 
          verified: true,
          affiliateUrl: "/discount-codes/walmart"
        },
        { 
          name: "Temu", 
          discount: "25% OFF Sitewide", 
          code: "TARGET25", 
          verified: true,
          affiliateUrl: "/discount-codes/temu"
        },
        { 
          name: "Nike", 
          discount: "30% OFF Clearance", 
          code: "JUSTDOIT", 
          verified: true,
          affiliateUrl: "/discount-codes/nike"
        },
        { 
          name: "Adidas", 
          discount: "20% OFF Electronics", 
          code: "TECH2024", 
          verified: true,
          affiliateUrl: "/discount-codes/adidas"
        },
        { 
          name: "eBay", 
          discount: "15% OFF Everything", 
          code: "EBAYDEAL", 
          verified: true,
          affiliateUrl: "/discount-codes/ebay"
        },
        { 
          name: "Ali Express", 
          discount: "40% OFF Fashion", 
          code: "MACYS40", 
          verified: true,
          affiliateUrl: "/discount-codes/aliexpress"
        },
        { 
          name: "Hostinger", 
          discount: "25% OFF Tools", 
          code: "HOMEDEPOT", 
          verified: true,
          affiliateUrl: "/discount-codes/hostinger"
        },
        { 
          name: "Sephora Upcoming..", 
          discount: "20% OFF Beauty", 
          code: "BEAUTY20", 
          verified: true,
          affiliateUrl: "https://sephora.com/beauty-deals"
        },
       
        { 
          name: "Kohl's Upcoming..", 
          discount: "35% OFF", 
          code: "KOHLS35", 
          verified: true,
          affiliateUrl: "https://kohls.com/offers"
        },
        { 
          name: "Old Navy Upcoming..", 
          discount: "50% OFF Sale", 
          code: "NAVY50", 
          verified: true,
          affiliateUrl: "https://oldnavy.com/specials"
        },
      ].map((store, index) => {
        // Function to handle code reveal and redirect
        const handleGetCode = () => {
          // You could add analytics tracking here
          console.log(`Code ${store.code} clicked for ${store.name}`);
          
          // Open affiliate link in new tab
          window.open(store.affiliateUrl, '_blank', 'noopener,noreferrer');
        };
        
        return (
          <div key={store.name} className="group bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700">
            <div className="text-center">
              <div className="font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-1">{store.name}</div>
              <div className="text-green-600 dark:text-green-400 font-semibold text-xs sm:text-sm mb-2">{store.discount}</div>
              
              {/* Code Display with Blur Effect */}
              <div className="bg-gray-100 dark:bg-slate-700 rounded-lg py-1 px-2 mb-2 relative">
                <code className="text-xs font-mono text-gray-800 dark:text-gray-200 blur-sm hover:blur-none transition-all duration-300">
                  {store.code}
                </code>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs text-gray-500">Click "Get Code" to reveal</span>
                </div>
              </div>
              
              <button 
                onClick={handleGetCode}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm py-2 rounded-lg transition-colors"
              >
                Get Code
              </button>
              
              {store.verified && (
                <div className="text-green-500 text-xs mt-2 flex items-center justify-center">
                  <span>✓ Verified Today</span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>
    </div>
  )
}

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          
          {/* Brand & Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                PromosCoupon
              </h2>
              <p className="mt-4 text-gray-300 text-lg leading-relaxed max-w-md">
                Your ultimate destination for verified coupon codes, promo deals, and exclusive discounts. 
                Save big on Upcoming 1,000+ stores with daily updated offers.
              </p>
            </div>

            {/* Enhanced Contact Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
              
              {/* Email Contact */}
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <a 
                    href="mailto:manish.locker@gmail.com" 
                    className="text-white font-medium hover:text-indigo-300 transition-colors break-all"
                  >
                    manish.locker@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp Contact */}
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <a 
                    href="https://wa.me/971554029554" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-green-300 transition-colors"
                  >
                    +971 55 402 9554
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Response Time</p>
                  <p className="text-white font-medium">Within 24 Hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <svg className="w-4 h-4 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/coupons", label: "All Coupons" },
                  { href: "/stores", label: "Stores Directory" },
                  { href: "/categories", label: "Categories" },
                  { href: "/deals", label: "Today's Deals" },
                  { href: "/blog", label: "Savings Blog" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-indigo-300 transition-colors text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full mr-3 group-hover:bg-indigo-400 transition-colors"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Stores */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Top Stores
              </h3>
              <ul className="space-y-3">
                {[
                  { href: "/store/amazon", label: "Amazon UAE" },
                  { href: "/store/noon", label: "Noon UAE" },
                  { href: "/store/flipkart", label: "Flipkart" },
                  { href: "/store/daraz", label: "Daraz" },
                  { href: "/store/souq", label: "Souq" },
                  { href: "/store/namshi", label: "Namshi" },
                ].map((store) => (
                  <li key={store.href}>
                    <Link 
                      href={store.href} 
                      className="text-gray-400 hover:text-green-300 transition-colors text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full mr-3 group-hover:bg-green-400 transition-colors"></span>
                      {store.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Company
              </h3>
              <ul className="space-y-3">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Contact" },
                  { href: "/partnership", label: "Partnership" },
                  { href: "/affiliate", label: "Affiliate Program" },
                  { href: "/press", label: "Press Kit" },
                  { href: "/careers", label: "Careers" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-blue-300 transition-colors text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            
            {/* Social Media */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-center lg:text-left">Follow Us for Daily Deals</h4>
              <div className="flex space-x-4">
                {[
                  { 
                    href: "#", 
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.25 4.25 0 001.88-2.34 8.48 8.48 0 01-2.7 1.04A4.24 4.24 0 0016.07 4c-2.34 0-4.24 1.9-4.24 4.24 0 .33.04.65.1.95a12.04 12.04 0 01-8.75-4.43 4.24 4.24 0 001.31 5.65 4.24 4.24 0 01-1.92-.53v.05c0 2.03 1.45 3.72 3.36 4.1a4.24 4.24 0 01-1.91.07 4.24 4.24 0 003.96 2.94A8.5 8.5 0 012 19.54a12.04 12.04 0 006.52 1.91c7.82 0 12.1-6.48 12.1-12.1 0-.18 0-.36-.01-.54A8.64 8.64 0 0024 5.5a8.46 8.46 0 01-2.54.7z"/>
                      </svg>
                    ), 
                    label: "Twitter",
                    color: "hover:text-blue-400"
                  },
                  { 
                    href: "#", 
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.42 3.59 8.07 8.23 8.93v-6.32H8.07V12h2.2V9.8c0-2.18 1.3-3.38 3.28-3.38.95 0 1.94.17 1.94.17v2.14h-1.09c-1.07 0-1.4.66-1.4 1.34V12h2.38l-.38 2.61h-2v6.32c4.64-.86 8.23-4.51 8.23-8.93 0-5.5-4.46-9.96-9.96-9.96z"/>
                      </svg>
                    ), 
                    label: "Facebook",
                    color: "hover:text-blue-500"
                  },
                  { 
                    href: "#", 
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.8 8.001s-.2-1.44-.82-2.07a2.9 2.9 0 00-2.07-.82C16.3 5 12 5 12 5s-4.3 0-6.91.11a2.9 2.9 0 00-2.07.82C2.4 6.561 2.2 8.001 2.2 8.001S2 9.44 2 10.88v2.24c0 1.44.2 2.88.2 2.88s.2 1.44.82 2.07a2.9 2.9 0 002.07.82c.62-.63.82-2.07.82-2.07s.2-1.44.2-2.88v-2.24c0-1.44-.2-2.88-.2-2.88zM10 14.65V8.35l5.5 3.15L10 14.65z"/>
                      </svg>
                    ), 
                    label: "YouTube",
                    color: "hover:text-red-400"
                  },
                  { 
                    href: "#", 
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    ), 
                    label: "LinkedIn",
                    color: "hover:text-blue-300"
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all hover:bg-gray-700`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-sm mb-2">Trusted by thousand Shoppers Worldwide</p>
              <div className="flex space-x-4 justify-center lg:justify-end">
                <div className="text-green-400 font-semibold">✓ Verified Daily</div>
                <div className="text-blue-400 font-semibold">🔒 Secure</div>
               
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <p>© {currentYear} PromosCoupon. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/privacy-policy" className="hover:text-indigo-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-indigo-300 transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-indigo-300 transition-colors">Cookie Policy</Link>
              <Link href="/sitemap.xml" className="hover:text-indigo-300 transition-colors">Sitemap</Link>
            </div>
          </div>
          
          {/* SEO Keywords */}
          <div className="mt-4 md:mt-0 text-xs text-gray-500 text-center md:text-right">
            <p>Coupon Codes • Promo Codes • Discount Offers • Online Shopping Deals • UAE Coupons • Money Saving Tips</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
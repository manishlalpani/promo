import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">CouponHive</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
              Find the best discount codes & exclusive coupons from top stores. 
              Save more every day with our curated deals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-indigo-500 transition">Home</Link></li>
              <li><Link href="/discount-codes" className="hover:text-indigo-500 transition">All Coupons</Link></li>
              <li><Link href="/about" className="hover:text-indigo-500 transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Popular Stores */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Popular Stores</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li><a href="/store/amazon" className="hover:text-indigo-500 transition">Amazon</a></li>
              <li><a href="/store/noon" className="hover:text-indigo-500 transition">Noon</a></li>
              <li><a href="/store/flipkart" className="hover:text-indigo-500 transition">Flipkart</a></li>
              <li><a href="/store/daraz" className="hover:text-indigo-500 transition">Daraz</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-indigo-500 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.25 4.25 0 001.88-2.34 8.48 8.48 0 01-2.7 1.04A4.24 4.24 0 0016.07 4c-2.34 0-4.24 1.9-4.24 4.24 0 .33.04.65.1.95a12.04 12.04 0 01-8.75-4.43 4.24 4.24 0 001.31 5.65 4.24 4.24 0 01-1.92-.53v.05c0 2.03 1.45 3.72 3.36 4.1a4.24 4.24 0 01-1.91.07 4.24 4.24 0 003.96 2.94A8.5 8.5 0 012 19.54a12.04 12.04 0 006.52 1.91c7.82 0 12.1-6.48 12.1-12.1 0-.18 0-.36-.01-.54A8.64 8.64 0 0024 5.5a8.46 8.46 0 01-2.54.7z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-500 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.42 3.59 8.07 8.23 8.93v-6.32H8.07V12h2.2V9.8c0-2.18 1.3-3.38 3.28-3.38.95 0 1.94.17 1.94.17v2.14h-1.09c-1.07 0-1.4.66-1.4 1.34V12h2.38l-.38 2.61h-2v6.32c4.64-.86 8.23-4.51 8.23-8.93 0-5.5-4.46-9.96-9.96-9.96z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-500 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.8 8.001s-.2-1.44-.82-2.07a2.9 2.9 0 00-2.07-.82C16.3 5 12 5 12 5s-4.3 0-6.91.11a2.9 2.9 0 00-2.07.82C2.4 6.561 2.2 8.001 2.2 8.001S2 9.44 2 10.88v2.24c0 1.44.2 2.88.2 2.88s.2 1.44.82 2.07a2.9 2.9 0 002.07.82c.62-.63.82-2.07.82-2.07s.2-1.44.2-2.88v-2.24c0-1.44-.2-2.88-.2-2.88zM10 14.65V8.35l5.5 3.15L10 14.65z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} CouponHive. All rights reserved.</p>
          <div className="space-x-4 mt-2 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-indigo-500 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-indigo-500 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

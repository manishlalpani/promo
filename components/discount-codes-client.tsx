'use client';

import { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface Coupon {
  id: string;
  brand: string;
  title: string;
  description: string;
  code: string;
  discount: string;
  expiryDate: string;
  terms: string;
  logo: string;
  category: string;
  affiliateLink?: string;
}

interface DiscountCodesClientProps {
  searchQuery: string;
  selectedCategory: string;
}

// Sample coupon data
const couponData: Coupon[] = [
  {
    id: '1',
    brand: 'Amazon',
    title: 'Summer Sale',
    description: 'Get amazing discounts on summer essentials',
    code: 'SUMMER25',
    discount: '25%',
    expiryDate: 'August 31, 2023',
    terms: 'Valid on select items only. Minimum purchase of $50 required.',
    logo: '/amma.png',
    category: 'Shopping',
    affiliateLink: '/discount-codes/amazon'
  },
  {
    id: '2',
    brand: 'Noon',
    title: 'Electronics Discount',
    description: 'Special offer on electronics and gadgets',
    code: 'NOONELECT15',
    discount: '15%',
    expiryDate: 'September 15, 2023',
    terms: 'Valid on electronics category. Maximum discount $100.',
    logo: '/daraz.png',
    category: 'Electronics',
    affiliateLink: '/discount-codes/noon'
  },
  // Add more coupons...
];

// Coupon Card Component
const CouponCard = ({ coupon }: { coupon: Coupon }) => {
  return (
    <Card
      onClick={() => {
        if (coupon.affiliateLink) window.location.href = coupon.affiliateLink;
      }}
      className="relative group w-full aspect-[16/11] rounded-xl overflow-hidden shadow-md hover:shadow-lg cursor-pointer"
    >
      {/* Coupon Image */}
      <Image
        src={coupon.logo}
        alt={coupon.brand}
        fill
        sizes="(max-width: 768px) 100vw, 400px"
        className="object-cover"
      />

      {/* Overlay Text */}
      {coupon.affiliateLink && (
        <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-sm p-3 flex flex-col gap-1 rounded-t-md transition-all duration-300">
          <h3 className="text-white text-lg sm:text-xl font-bold truncate">
            {coupon.brand}
          </h3>
          <p className="text-white text-sm sm:text-base truncate">
            {coupon.title}
          </p>
        </div>
      )}

      {/* Discount & Expiry */}
      <div className="absolute top-1 left-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
        {coupon.discount} OFF
      </div>
      <div className="absolute top-1 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
        Expires: {coupon.expiryDate}
      </div>
    </Card>
  );
};
// Main Component
export default function DiscountCodesClient({ searchQuery, selectedCategory }: DiscountCodesClientProps) {
  const filteredCoupons = useMemo(() => {
    const query = searchQuery?.toLowerCase() || '';
    return couponData.filter(coupon => {
      const matchesSearch =
        query === '' ||
        coupon.brand.toLowerCase().includes(query) ||
        coupon.title.toLowerCase().includes(query) ||
        coupon.description.toLowerCase().includes(query) ||
        coupon.category.toLowerCase().includes(query);
      const matchesCategory = selectedCategory === 'All' || coupon.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-8 flex-col sm:flex-row gap-4">
        <h2 className="text-3xl font-bold text-gray-800">Popular Coupons</h2>
        <div className="text-gray-500">
          {filteredCoupons.length} {filteredCoupons.length === 1 ? 'result' : 'results'} found
        </div>
      </div>

      {filteredCoupons.length === 0 ? (
        <div className="text-center py-12">
          <Search className="h-12 w-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-medium text-gray-600 mb-2">No coupons found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCoupons.map((coupon) => (
            <CouponCard
              key={coupon.id}
              coupon={coupon}
            />
          ))}
        </div>
      )}

      {filteredCoupons.length > 0 && (
        <div className="text-center mt-8">
          <Button variant="outline" className="rounded-full px-8">Load More Coupons</Button>
        </div>
      )}
    </section>
  );
}

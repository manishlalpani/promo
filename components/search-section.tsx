// components/search-section.tsx (Client Component)
'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, X } from 'lucide-react';

interface SearchSectionProps {
  onSearch: (query: string) => void;
  onCategoryFilter: (category: string) => void;
  activeCategory: string;
}

export default function SearchSection({
  onSearch,
  onCategoryFilter,
  activeCategory,
}: SearchSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Debounce search to improve performance
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, onSearch]);

  const categories = [
    'All',
    'Shopping',
    'Electronics',
    'Food & Beverage',
    'Fashion',
    'Travel',
    'Entertainment',
  ];

  const clearSearch = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <section className="mb-8 py-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold  text-black dark:text-white mb-3">
            Find the Best <span className="text-primary">Coupons</span> &{' '}
            <span className="text-gray-600 dark:text-white">Deals</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-white max-w-2xl mx-auto">
            Discover thousands of verified promo codes and discounts for your
            favorite brands
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-3xl mx-auto mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for brands, products, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 py-5 text-base md:text-lg rounded-xl border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          <Button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="py-5 px-5 rounded-xl bg-primary hover:bg-primary/90 flex items-center justify-center"
            aria-label="Filter options"
          >
            <Filter className="h-5 w-5" />
            <span className="hidden sm:inline ml-2">Filters</span>
          </Button>
        </div>

        {/* Category Chips */}
        <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block`}>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-white dark:text-black'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Popular Search Tags */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Popular:
          </span>
          {['Amazon', 'Noon', 'Electronics', 'Fashion', 'Food', 'Travel'].map(
            (tag) => (
              <button
                key={tag}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                onClick={() => setSearchQuery(tag)}
              >
                {tag}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}

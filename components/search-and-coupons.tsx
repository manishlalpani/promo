// components/search-and-coupons.tsx
"use client";

import { useState } from "react";
import SearchSection from "@/components/search-section";
import DiscountCodesClient from "@/components/discount-codes-client";

export default function SearchAndCoupons() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <>
      <SearchSection
        onSearch={handleSearch}
        onCategoryFilter={handleCategoryFilter}
        activeCategory={activeCategory}
      />

      <DiscountCodesClient
        searchQuery={searchQuery}
        selectedCategory={activeCategory}
      />
    </>
  );
}

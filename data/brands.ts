// Central data store for all brands
export interface Brand {
  id: string
  name: string
  slug: string
  image: string
  couponCount: number
  featured: boolean
  description?: string
}

// Add your brands here - this ensures consistency across all pages
export const allBrands: Brand[] = [
  {
    id: 'amazon',
    name: 'Amazon',
    slug: 'amazon',
    image: '/images/amazon-logo.svg', // Updated to use SVG
    couponCount: 3, // Should match the number of coupons in your Amazon page
    featured: true,
    description: 'Shop for electronics, books, apparel, and more at Amazon. Enjoy great deals with our exclusive coupon codes.'
  },
  // Add more brands as you create the folders
];

// Helper function to get featured brands
export function getFeaturedBrands(): Brand[] {
  return allBrands
    .filter(brand => brand.featured)
    .slice(0, 10) // Get top 10 featured brands
}

// Helper function to get all brands
export function getAllBrands(): Brand[] {
  return allBrands;
}

// Helper function to get a specific brand by slug
export function getBrandBySlug(slug: string): Brand | undefined {
  return allBrands.find(brand => brand.slug === slug);
}
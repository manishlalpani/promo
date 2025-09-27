// app/contact/structuredData.ts
export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us | PromosCoupon",
    "description": "Contact PromosCoupon for customer support, partnership opportunities, and coupon-related inquiries",
    "url": "https://promoscoupon.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "PromosCoupon",
      "email": "support@promoscoupon.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "support@promoscoupon.com",
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    }
  };
}
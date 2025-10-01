/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://promoscoupon.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://promoscoupon.com/sitemap.xml",
    ],
    policies: [
      { userAgent: "*", allow: "/" },
    ],
  },
};

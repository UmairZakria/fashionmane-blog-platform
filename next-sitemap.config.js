const fetch = require("node-fetch");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://fashionmane.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/Login", "/Panel"],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async () => {
    try {
      // Your existing API for all blogs
      const res = await fetch("https://fashionmane.com/api/findblogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ category: "all" }),
      });

      const result = await res.json();
      const posts = result.post || [];

      // Generate sitemap entries
      return posts.map((post) => {
        // Clean/encode the title to be safe for URLs
        const slug = encodeURIComponent(post.title.replace(/\s+/g, "-"));

        return {
          loc: `https://fashionmane.com/Blog/${slug}`,
          changefreq: "daily",
          priority: 0.9,
          lastmod: new Date().toISOString(),
        };
      });
    } catch (err) {
      console.error("❌ Error fetching blog posts for sitemap:", err);
      return [];
    }
  },
};

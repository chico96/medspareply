import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/toolkit", "/toolkit/", "/success", "/success/", "/downloads/"],
    },
    sitemap: "https://spareply.com/sitemap.xml",
  };
}

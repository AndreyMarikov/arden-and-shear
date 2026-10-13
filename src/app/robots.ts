import type { MetadataRoute } from "next";
import { ALLOW_INDEXING, SITE_URL } from "@/content/site";
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: ALLOW_INDEXING ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

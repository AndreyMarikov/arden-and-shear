import type { MetadataRoute } from "next";
import { ALLOW_INDEXING, SITE_URL } from "@/content/site";

const paths = ["/", "/services", "/team", "/gallery", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!ALLOW_INDEXING) return [];
  return paths.map((path, index) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : 0.7,
  }));
}

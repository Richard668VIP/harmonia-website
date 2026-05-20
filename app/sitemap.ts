import { MetadataRoute } from "next";
const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://harmoniawisdom.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`,           lastModified: now, changeFrequency: "daily",   priority: 1.0  },
    { url: `${BASE}/pillars`,    lastModified: now, changeFrequency: "weekly",  priority: 0.95 },
    { url: `${BASE}/courses`,    lastModified: now, changeFrequency: "weekly",  priority: 0.95 },
    { url: `${BASE}/shop`,       lastModified: now, changeFrequency: "weekly",  priority: 0.85 },
    { url: `${BASE}/blog`,       lastModified: now, changeFrequency: "daily",   priority: 0.80 },
    { url: `${BASE}/about`,      lastModified: now, changeFrequency: "monthly", priority: 0.70 },
    { url: `${BASE}/contact`,    lastModified: now, changeFrequency: "monthly", priority: 0.60 },
    // Pillar sub-pages
    ...["awareness-stillness","energy-vitality","mind-emotion","relationships-connection","meaning-purpose"].map(slug => ({
      url: `${BASE}/pillars/${slug}`,
      lastModified: now, changeFrequency: "weekly" as const, priority: 0.90,
    })),
    // Course sub-pages
    ...["free-starter-pack","awareness-foundations","energy-vitality-system","nlp-mind-emotions","the-integration-system"].map(slug => ({
      url: `${BASE}/courses/${slug}`,
      lastModified: now, changeFrequency: "weekly" as const, priority: 0.88,
    })),
  ];
}

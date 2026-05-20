import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://harmoniawisdom.com";
const SITE_NAME = "Harmonia 寰宇心流";
const DEFAULT_DESC = "End mental drain and inner anxiety. Harmonia fuses I Ching, TCM, Zen, NLP and neuroscience into one practice system for real transformation. Join 60,000+ practitioners.";

export function buildMetadata({
  title,
  description = DEFAULT_DESC,
  path = "/",
  ogImage = "/og-default.jpg",
  type = "website",
}: {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
  type?: "website" | "article";
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title:       { default: title, template: `%s | ${SITE_NAME}` },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: { "en": url, "zh": `${SITE_URL}/zh${path}` },
    },
    openGraph: {
      title, description, url, type,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 628, alt: title }],
    },
    twitter: {
      card:        "summary_large_image",
      title, description,
      images:      [ogImage],
      creator:     "@harmonia_wisdom",
    },
    robots: {
      index: true, follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export const SITE_URL_EXPORT = SITE_URL;

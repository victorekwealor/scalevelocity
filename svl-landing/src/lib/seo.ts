import type { Metadata } from "next";

export const siteConfig = {
  name: "Scale Velocity Labs",
  shortName: "SVL",
  description:
    "A 4-week GTM execution sprint for East Africa-focused startups with traction. Sharper positioning, faster shipping, smarter distribution. Cohort 01 — April 2026.",
  url: "https://scalevelocitylabs.com", // update when domain is live
  ogImage: "/og-image.png",
  keywords: [
    "startup accelerator East Africa",
    "GTM program Africa",
    "go-to-market sprint",
    "startup growth East Africa",
    "Scale Velocity Labs",
    "Clarus Norrsken",
    "African startup program",
    "B2B startup GTM",
    "positioning ICP clarity",
    "AI-native shipping",
    "startup cohort 2026",
  ],
  authors: [{ name: "Scale Velocity Labs" }],
  twitter: "@scalevelocitylabs", // update when handle is set
  locale: "en_US",
};

export function constructMetadata({
  title,
  description,
  image,
  noIndex = false,
  path = "",
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  path?: string;
} = {}): Metadata {
  const metaTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — 4-Week GTM Sprint for East African Startups`;

  const metaDescription = description ?? siteConfig.description;
  const metaImage = image ?? siteConfig.ogImage;
  const canonicalUrl = `${siteConfig.url}${path}`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: siteConfig.keywords,
    authors: siteConfig.authors,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonicalUrl,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: siteConfig.twitter,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

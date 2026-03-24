import { siteConfig } from "./seo";

/**
 * Organization schema — tells search engines and AI crawlers who SVL is.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    foundingDate: "2026",
    areaServed: {
      "@type": "Place",
      name: "East Africa",
    },
    sameAs: [
      // Add social profile URLs here when available
    ],
  };
}

/**
 * Event/Program schema — structured data for the cohort program.
 */
export function programSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    name: "Scale Velocity Labs — Cohort 01",
    description:
      "A 4-week GTM execution sprint for East Africa-focused startups with traction. Covering positioning, AI-native shipping, storytelling, and distribution.",
    url: siteConfig.url,
    organizer: [
      {
        "@type": "Organization",
        name: "Clarus",
      },
      {
        "@type": "Organization",
        name: "Norrsken",
      },
    ],
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    startDate: "2026-04-01",
    endDate: "2026-04-30",
    location: {
      "@type": "VirtualLocation",
      url: siteConfig.url,
    },
    audience: {
      "@type": "Audience",
      audienceType: "Startup founders in East Africa with traction",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/LimitedAvailability",
      validFrom: "2026-03-01",
    },
  };
}

/**
 * FAQ schema — boosts AI answer engines (Perplexity, ChatGPT, SGE).
 */
export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Scale Velocity Labs only for Norrsken portfolio companies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. It is open to all East Africa-focused startups with traction, regardless of investor backing.",
        },
      },
      {
        "@type": "Question",
        name: "Is there funding attached to Scale Velocity Labs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This is not a funding program. The value is in execution acceleration. Participants do gain visibility with investors at the Activation Showcase.",
        },
      },
      {
        "@type": "Question",
        name: "Is Scale Velocity Labs free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. There is no cost to participate. We ask only for your full commitment of 5–7 hours per week.",
        },
      },
      {
        "@type": "Question",
        name: "Is Scale Velocity Labs a traditional accelerator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We do not take equity. Scale Velocity Labs is a short, intensive 4-week GTM execution sprint, not a 6-month accelerator.",
        },
      },
      {
        "@type": "Question",
        name: "Who should apply to Scale Velocity Labs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Founders of East Africa-focused startups that already have traction — revenue, active users, or meaningful pipeline — and feel their GTM is unclear, slow, or noisy.",
        },
      },
      {
        "@type": "Question",
        name: "When does Cohort 01 begin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cohort 01 begins in April 2026. Applications open in March 2026 and close 7–10 days after opening.",
        },
      },
    ],
  };
}

/**
 * WebPage schema — general page-level structured data.
 */
export function webPageSchema({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${siteConfig.url}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

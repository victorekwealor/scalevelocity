"use client";

import Image from "next/image";
import content from "@/data/content.json";

const { partners } = content;
const LOGOS = partners.logos;

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="partners-rule" />

      <div className="partners-band">
        <p className="partners-title">{partners.sectionTitle}</p>

        <div className="partners-logos">
          {LOGOS.map(({ src, alt, width, height }) => (
            <Image
              key={alt}
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="partners-logo"
            />
          ))}
        </div>
      </div>

      <div className="partners-rule" />
    </section>
  );
}

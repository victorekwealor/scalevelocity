"use client";

import { Fragment } from "react";
import { motion } from "motion/react";
import content from "@/data/content.json";

const { footer } = content;

function ArrowRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer-section">
      {/* ── Logo ── */}
      <div className="footer-logo-row">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={footer.logoSrc} alt={footer.logoAlt} className="footer-logo" />
      </div>

      {/* ── Spacer ── */}
      <div className="footer-spacer" />

      {/* ── Apply Now button ── */}
      <div className="footer-cta-row">
        <motion.a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc1e3lm_LBy53y8S-PCz35o3fN53aAVMXHQ3BvdoP3JVUVyMw/viewform?usp=sharing&ouid=105223740173066561293"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-cta-btn"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <span className="footer-cta-btn-text">{footer.ctaButton}</span>
          <ArrowRight />
        </motion.a>
      </div>

      {/* ── Copyright + social links ── */}
      <div className="footer-bottom-row">
        <p className="footer-copyright">{footer.copyright}</p>

        <div className="footer-social-links">
          {footer.socialLinks.map((link, i) => (
            <Fragment key={link.label}>
              {i > 0 && <span className="footer-social-sep">|</span>}
              <a href={link.href} className="footer-social-link">
                {link.label}
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}

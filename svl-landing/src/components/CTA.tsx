"use client";

import { motion } from "motion/react";
import content from "@/data/content.json";

const { cta } = content;

function ArrowRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">

        {/* ── Left column ── */}
        <motion.div
          className="cta-left"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="cta-heading">{cta.heading}</p>
          <p className="cta-subheading">{cta.subheading}</p>
        </motion.div>

        {/* ── Spacer — hidden on mobile via CSS ── */}
        <div className="cta-spacer" />

        {/* ── Right column ── */}
        <motion.div
          className="cta-right"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
        >
          <p className="cta-body">{cta.body}</p>

          <div className="cta-button-wrapper">
            <motion.button
              className="cta-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <span className="cta-btn-text">{cta.ctaButton}</span>
              <ArrowRight />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

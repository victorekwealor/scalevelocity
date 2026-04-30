"use client";

import { motion } from "motion/react";
import AnimatedPattern from "./AnimatedPattern";
import content from "@/data/content.json";

const { hero } = content;

// Arrow right icon for the Apply Now button — fetched from Figma (replace when expired)
const imgArrowRight =
  "https://www.figma.com/api/mcp/asset/e0f9c4b2-e611-4a5f-8aa5-d9a56b1ac214";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-inner">

        {/* ── Title + info bar ─────────────────────────────────── */}
        <motion.div
          className="hero-title-block"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Nav row: logo left, links right */}
          <div className="hero-nav-row">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Dark-Logo-md.svg" alt="Scale Velocity Labs" className="hero-logo-md" />

            <nav className="hero-nav">
              <a href="#program-structure" className="hero-nav-link">Program structure</a>
              <a href="#program-details" className="hero-nav-link">Program details</a>
              <a href="#faq" className="hero-nav-link">Faq</a>
            </nav>
          </div>

          <div className="hero-divider" />

          <div className="hero-info-bar">
            <p className="hero-tagline">{hero.tagline}</p>
            <p className="hero-cohort">
              {hero.cohortLabel}<sup>o</sup> {hero.cohortNumber}
            </p>
          </div>

          <div className="hero-divider" />
        </motion.div>

        {/* ── Apply Now button ──────────────────────────────────── */}
        <motion.div
          className="hero-apply-wrapper"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
        >
          <motion.button
            className="hero-apply-btn"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <span className="hero-apply-btn-text">{hero.ctaButton}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgArrowRight} alt="" className="hero-apply-icon" />
          </motion.button>
        </motion.div>

        {/* ── Bottom: description text + pattern ────────── */}
        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
        >
          <div className="hero-desc">
            <p className="hero-collaboration">{hero.collaboration}</p>
            <p className="hero-summary">{hero.summary}</p>
          </div>

          <div className="hero-pattern">
            <AnimatedPattern />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

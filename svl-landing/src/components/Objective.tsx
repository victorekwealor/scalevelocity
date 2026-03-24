"use client";

import { motion } from "motion/react";
import content from "@/data/content.json";

const { objective } = content;

export default function Objective() {
  return (
    <section className="objective-section">

      {/* ── Left column: headline + subtitle ─────────────────────── */}
      <motion.div
        className="objective-left"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <p className="objective-heading">{objective.headline}</p>
        <p className="objective-subheading">{objective.subtitle}</p>
      </motion.div>

      {/* ── Spacer — hidden on mobile via CSS ── */}
      <div className="objective-spacer" />

      {/* ── Right column: intro + list ───────────────────────── */}
      <motion.div
        className="objective-right"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
      >
        <p className="objective-intro">{objective.velocityIntro}</p>

        <div className="objective-items">
          {objective.velocityItems.map((item, i) => (
            <motion.p
              key={item}
              className="objective-item"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 0.2 + i * 0.07 }}
            >
              {item}
            </motion.p>
          ))}
        </div>
      </motion.div>

    </section>
  );
}

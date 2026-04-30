"use client";

import { useState } from "react";
import { motion } from "motion/react";
import content from "@/data/content.json";

const { programDetails } = content;
const ITEMS = programDetails.items;

function PlusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="11" y="3" width="2" height="18" fill="#0c0c0c" />
      <rect x="3" y="11" width="18" height="2" fill="#0c0c0c" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="11" width="18" height="2" fill="#0c0c0c" />
    </svg>
  );
}

function ItemRow({
  label,
  title,
  subtitle,
  rows,
  open,
  onToggle,
}: Omit<(typeof ITEMS)[0], "defaultOpen"> & { open: boolean; onToggle: () => void }) {
  return (
    <div className="program-row">
      {/* ── Left tab ── */}
      <div className={`program-tab${open ? " program-tab--open" : ""}`}>
        <p className="program-tab-label">{label}</p>
      </div>

      {/* ── Right panel ── */}
      <div className={`program-panel${open ? " program-panel--open" : ""}`}>
        <button onClick={onToggle} className="program-panel-btn">
          <div className="program-panel-header">
            <p className="program-panel-title">{title}</p>
            <p className="program-panel-subtitle">{subtitle}</p>
          </div>
          <div className="program-panel-icon">
            {open ? <MinusIcon /> : <PlusIcon />}
          </div>
        </button>

        <div className={`program-expand${open ? " program-expand--open" : ""}`}>
          <div className="program-expand-inner">
            <div className="program-expand-content">
              <div className="program-divider" />
              <div className="program-content-rows">
                {rows.map((row) => (
                  <div key={row.label} className="program-content-row">
                    <div className="program-content-label">
                      <p className="program-content-label-text">{row.label}</p>
                    </div>
                    <div className="program-content-items">
                      {row.items.map((item) => (
                        <p key={item} className="program-content-item">{item}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProgramDetails() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="program-details" className="program-section">
      <div className="program-container">
        <motion.p
          className="program-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {programDetails.sectionTitle}
        </motion.p>

        <motion.div
          className="program-list"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
        >
          {ITEMS.map((item, i) => (
            <ItemRow
              key={item.label}
              {...item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "motion/react";
import content from "@/data/content.json";

const { lessons } = content;
const WEEKS = lessons.weeks;

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

function WeekRow({
  week,
  title,
  subtitle,
  expectations,
  open,
  onToggle,
}: Omit<(typeof WEEKS)[0], "defaultOpen"> & { open: boolean; onToggle: () => void }) {
  return (
    <div className="week-row">
      {/* ── Left tab ── */}
      <div className={`week-tab${open ? " week-tab--open" : ""}`}>
        <p className="week-tab-label">{week}</p>
      </div>

      {/* ── Right panel ── */}
      <div className={`week-panel${open ? " week-panel--open" : ""}`}>
        <button
          onClick={onToggle}
          className={`week-header-btn${open ? " week-header-btn--open" : ""}`}
        >
          <div className={`week-header-content${open ? " week-header-content--open" : ""}`}>
            <p className="week-header-title">{title}</p>
            <p className="week-header-subtitle">{subtitle}</p>
          </div>
          <div className={`week-icon${open ? " week-icon--open" : ""}`}>
            {open ? <MinusIcon /> : <PlusIcon />}
          </div>
        </button>

        <div className={`week-expand${open ? " week-expand--open" : ""}`}>
          <div className="week-expand-inner">
            <div className="week-expand-content">
              <div className="week-divider" />
              <div className="week-expectations">
                <p className="week-expectations-label">Expectations</p>
                <div className="week-expectations-items">
                  {expectations.map((item) => (
                    <p key={item} className="week-expectations-item">{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Lessons() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="lessons-section">
      <div className="lessons-container">
        <motion.p
          className="lessons-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {lessons.sectionTitle}
        </motion.p>

        <motion.div
          className="lessons-list"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
        >
          {WEEKS.map((w, i) => (
            <WeekRow
              key={w.week}
              {...w}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "motion/react";
import content from "@/data/content.json";

const { faq } = content;
const FAQS = faq.items;

function PlusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="11" y="3" width="2" height="18" fill="#0c0c0c" />
      <rect x="3" y="11" width="18" height="2" fill="#0c0c0c" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="11" width="18" height="2" fill="#0c0c0c" />
    </svg>
  );
}

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: Omit<(typeof FAQS)[0], "defaultOpen"> & { open: boolean; onToggle: () => void }) {
  return (
    <div className={`faq-item${open ? " faq-item--open" : ""}`}>
      <button onClick={onToggle} className="faq-question-btn">
        <p className="faq-question-text">{question}</p>
        <div className="faq-icon">
          {open ? <MinusIcon /> : <PlusIcon />}
        </div>
      </button>

      <div className={`faq-expand${open ? " faq-expand--open" : ""}`}>
        <div className="faq-expand-inner">
          <div className="faq-expand-content">
            <div className="faq-divider" />
            <p className="faq-answer">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <motion.p
          className="faq-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {faq.sectionTitle}
        </motion.p>

        <motion.div
          className="faq-list"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
        >
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.question}
              {...faq}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

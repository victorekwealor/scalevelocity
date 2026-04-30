import content from "@/data/content.json";

const { timeline } = content;

export default function Timeline() {
  return (
    <section id="program-structure" className="timeline-section">
      <div className="timeline-band">
        <div className="timeline-inner">
          <p className="timeline-heading">{timeline.heading}</p>
          <p className="timeline-date">{timeline.date}</p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function FoundersImage() {
  return (
    <section className="founders-section">
      <div className="founders-container">
        <Image
          src="/founders.png"
          alt="Founders"
          fill
          className="founders-image"
          priority
        />
      </div>
    </section>
  );
}

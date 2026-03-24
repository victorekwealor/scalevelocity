import Hero from "@/components/Hero";
import Objective from "@/components/Objective";
import FoundersImage from "@/components/FoundersImage";
import Lessons from "@/components/Lessons";
import Partners from "@/components/Partners";
import ProgramDetails from "@/components/ProgramDetails";
import Timeline from "@/components/Timeline";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Objective />
      <FoundersImage />
      <Lessons />
      <Partners />
      <ProgramDetails />
      <Timeline />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}

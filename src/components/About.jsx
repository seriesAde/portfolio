import { SectionHeading } from './Shared';
export default function About() {
  return (
    <section id="about" className="shell section-space">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          number="01"
          eyebrow="About"
          title="Thoughtful interfaces. Reliable foundations."
        />
        <div className="max-w-2xl space-y-5 text-slate-300">
          <p>
            I am a Full-Stack Developer based in Abuja, Nigeria, building
            responsive interfaces with React, Next.js and Tailwind CSS,
            alongside backend systems using Node.js, Express.js and MongoDB. I
            currently maintain backend functionality for a multi-module ERP
            platform and have independently designed APIs for inventory and
            school-management systems.
          </p>
          <p>
            I focus on maintainable code, accessible interfaces, REST API
            design, authentication and reliable data modelling. I enjoy solving
            problems across the complete application—from how the interface
            behaves to how the underlying data remains consistent and secure.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="badge">Accessible interfaces</span>
            <span className="badge">REST API design</span>
            <span className="badge">Data integrity</span>
          </div>
        </div>
      </div>
    </section>
  );
}

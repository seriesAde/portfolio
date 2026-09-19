import { CVLink, ExternalLink, SectionHeading } from './Shared';
import { profile } from '../lib/profile';
export default function Footer() {
  return (
    <section id="contact" className="shell section-space">
      <div className="contact-panel rounded-2xl border border-violet-300/25 p-7 sm:p-12">
        <SectionHeading
          number="05"
          eyebrow="Contact"
          title="Let’s Work Together"
        >
          I’m open to Full-Stack, JavaScript, React, Next.js and Node.js
          opportunities. Have a role or a project in mind? Let’s talk.
        </SectionHeading>
        <div className="flex flex-wrap gap-3">
          <ExternalLink href={profile.email} className="button-primary">
            Email Me
          </ExternalLink>
          <ExternalLink href={profile.linkedin} className="button-secondary">
            LinkedIn
          </ExternalLink>
          <ExternalLink href={profile.github} className="button-secondary">
            GitHub
          </ExternalLink>
          <CVLink />
        </div>
        <p className="mt-6 break-all text-sm text-slate-300">
          devadeshinaahmed@gmail.com
        </p>
      </div>
    </section>
  );
}

import { CVLink, ExternalLink } from './Shared';
import { profile } from '../lib/profile';
export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="hero-section border-b border-white/10"
    >
      <div className="shell grid items-center gap-12 py-14 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:py-20">
        <div>
          <p className="eyebrow flex items-center gap-2">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
            Abuja, Nigeria · Open to opportunities
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-5xl leading-[1.08] font-semibold tracking-tight sm:text-6xl xl:text-7xl"
          >
            Ahmed
            <br />
            Adeshina<span className="text-violet-400">.</span>
          </h1>
          <p className="mt-5 text-2xl font-medium text-violet-300 sm:text-3xl">
            Full-Stack Developer
          </p>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
            Full-Stack Developer building responsive React and Next.js
            applications alongside Node.js, Express.js and MongoDB backend
            systems. I currently maintain backend functionality for a
            multi-module ERP platform and have delivered more than five client
            applications.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">
              View Projects <span aria-hidden="true">↗</span>
            </a>
            <CVLink />
          </div>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-sm">
            <ExternalLink href={profile.email}>Email Me</ExternalLink>
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          </div>
        </div>
        <div>
          <div className="overflow-hidden rounded-2xl border border-violet-300/25 bg-[#101019] shadow-2xl shadow-violet-950/30">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <span className="h-2 w-2 rounded-full bg-violet-300" />
              <span className="h-2 w-2 rounded-full bg-slate-500" />
              <span className="h-2 w-2 rounded-full bg-slate-500" />
              <span className="ml-auto font-mono text-xs text-slate-300">
                inventory / architecture
              </span>
            </div>
            <img
              src="/images/inventory.svg"
              width="960"
              height="600"
              alt="Inventory API architecture: client requests pass through JWT permissions into Express services and MongoDB transactions, updating the stock ledger."
              fetchPriority="high"
            />
            <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4 text-xs">
              <span className="text-slate-300">
                One operation. Consistent inventory.
              </span>
              <span className="font-mono text-violet-300">REST API</span>
            </div>
          </div>
          <p className="mt-4 text-right text-xs text-slate-400">
            Architecture illustration · Featured project below
          </p>
        </div>
      </div>
      <div className="shell flex flex-wrap gap-x-8 gap-y-3 pb-7 font-mono text-xs text-slate-300">
        <span className="text-violet-300">BUILT ACROSS THE STACK</span>
        <span>React / Next.js</span>
        <span>Node.js / Express.js</span>
        <span>MongoDB</span>
      </div>
    </section>
  );
}

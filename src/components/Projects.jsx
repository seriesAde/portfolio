import { ExternalLink, SectionHeading } from './Shared';
const projects = [
  {
    name: 'School Management System API',
    category: 'Backend architecture',
    image: 'school.svg',
    alt: 'Conceptual school API diagram connecting academic, financial and operational domains to a 22-table relational model.',
    problem:
      'School operations need a coherent model for academic, financial and operational data.',
    contribution:
      'I designed the backend architecture, REST APIs and a 22-table relational data model with ERD planning.',
    tech: ['Node.js', 'Express.js', 'REST APIs', 'Relational modelling'],
    features: [
      'Authentication and role-based access',
      'Financial transaction logic',
    ],
    note: 'Repository and implementation preview pending.',
    detail:
      'The architecture connects academic, financial and operational domains through a planned relational model. Authentication and role-based access define who can perform operations. Financial transaction logic is part of the design. This is a conceptual cover, not the actual ERD; the repository and database implementation still need to be supplied.',
  },
  {
    name: 'RoyalMines Properties',
    category: 'Real estate · Frontend',
    image: 'royalmines.webp',
    alt: 'Live RoyalMines Properties website showing its real estate homepage.',
    problem:
      'A real estate brand needed a clear way to present its properties and services online.',
    contribution:
      'I built the responsive company website and property presentation interfaces.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    features: [
      'Property and service presentation',
      'Responsive company information',
    ],
    live: 'https://www.royalminesproperty.com',
    repo: 'https://github.com/seriesAde/royalMine',
  },
  {
    name: 'POS-DEV',
    category: 'Community & education · Frontend',
    image: 'pos-dev.webp',
    alt: 'Live Posteros Development Foundation website introducing its youth training programmes.',
    problem:
      'A youth development foundation needed to communicate its programmes and outreach.',
    contribution:
      'I built responsive pages presenting programme information, mentorship initiatives and contact details.',
    tech: ['Responsive Design', 'Web UI'],
    features: [
      'Training and mentorship information',
      'Programme and contact outreach',
    ],
    live: 'https://www.posterosdev.com/',
    note: 'Public repository link pending.',
  },
];
const study = [
  [
    'The problem',
    'Tracking stock across multiple warehouses needs more than an editable quantity. Purchases, sales and transfers must agree with stock balances, while retaining a traceable history of each change.',
  ],
  [
    'System architecture',
    'A Node.js and Express.js REST API connects authenticated requests to inventory operations backed by MongoDB and Mongoose. Products, suppliers, warehouses, purchases and sales form the main resources; stock movements provide the audit trail.',
  ],
  [
    'Data integrity',
    'MongoDB session-based transactions group related writes. Confirming a purchase or sale changes stock and records a movement together. Transfers pair outgoing and incoming movements so a partial failure does not leave warehouses out of sync.',
  ],
  [
    'Authentication and authorization',
    'JWT authentication identifies the caller, while role-based permissions restrict operations. The public implementation defines admin, manager and storekeeper roles. Passwords are hashed; user creation is restricted to administrators.',
  ],
  [
    'Technical decisions',
    'Draft-confirm-cancel workflows separate preparing a document from committing stock changes. Immutable stock-movement records preserve history. Low-stock monitoring identifies reorder needs, and inventory valuation reporting makes stock value visible.',
  ],
  [
    'Testing approach',
    'Postman is used for endpoint testing. Key validation scenarios include authorization failures, insufficient stock, document confirmation and cancellation, and warehouse transfers. The public repository does not currently provide an automated test suite or a published Postman collection.',
  ],
  [
    'What I learned',
    'The central lesson is to treat stock as the result of recorded business events, not a number to overwrite. Transaction boundaries and permission checks belong in the design of each operation. This keeps consistency and auditability connected.',
  ],
];
export default function Projects() {
  return (
    <section id="projects" className="shell section-space">
      <SectionHeading number="03" eyebrow="Projects" title="Selected Projects">
        From customer-facing websites to the systems that keep operations
        moving.
      </SectionHeading>
      <article className="mb-7 overflow-hidden rounded-2xl border border-violet-300/30 bg-[#11111b]">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center border-b border-white/10 bg-[#131020] lg:border-r lg:border-b-0">
            <p className="eyebrow px-7 pt-7">Featured / Backend engineering</p>
            <img
              src="/images/inventory.svg"
              alt="Inventory API conceptual architecture, showing authentication, services, transactions and an immutable stock ledger."
              width="960"
              height="600"
              loading="lazy"
              className="aspect-[8/5] w-full object-contain"
            />
            <p className="px-7 pb-7 text-xs text-slate-300">
              Architecture illustration · Node.js / Express.js / MongoDB
            </p>
          </div>
          <div className="p-6 sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Inventory Management System API
            </h3>
            <p className="mt-4 text-slate-300">
              Reliable stock tracking across multiple warehouses, without losing
              the history behind each change.
            </p>
            <p className="mt-3 text-slate-300">
              I designed and built the REST API for products, suppliers,
              purchases, sales and stock transfers.
            </p>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-slate-300 marker:text-violet-300">
              <li>
                Transactional stock updates and draft-confirm-cancel workflows
              </li>
              <li>JWT authentication and role-based permissions</li>
              <li>
                Immutable movements, low-stock monitoring and valuation reports
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Postman'].map(
                (tag) => (
                  <span className="badge" key={tag}>
                    {tag}
                  </span>
                ),
              )}
            </div>
            <div className="mt-6">
              <ExternalLink
                href="https://github.com/seriesAde/inventorySystem"
                className="button-primary"
              >
                View Repository
              </ExternalLink>
            </div>
          </div>
        </div>
        <details className="border-t border-white/15 px-6 sm:px-8">
          <summary className="min-h-14 py-4 font-semibold text-violet-200">
            Read Case Study{' '}
            <span className="ml-2 text-sm font-normal text-slate-300">
              — Inventory Management API
            </span>
          </summary>
          <div className="grid gap-6 pt-3 pb-8 md:grid-cols-2">
            {study.map(([title, body]) => (
              <div key={title}>
                <h4 className="font-semibold">{title}</h4>
                <p className="mt-2 text-sm leading-7 text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </details>
      </article>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col overflow-hidden rounded-xl border border-white/15 bg-[#11111b] transition-colors hover:border-violet-300/50"
          >
            <img
              src={`/images/${project.image}`}
              alt={project.alt}
              width="960"
              height="600"
              loading="lazy"
              decoding="async"
              className="aspect-[8/5] w-full border-b border-white/10 bg-[#161322] object-cover"
            />
            <div className="flex flex-1 flex-col p-6">
              <p className="eyebrow">{project.category}</p>
              <h3 className="mt-3 text-2xl font-semibold">{project.name}</h3>
              <p className="mt-4 text-sm text-slate-300">{project.problem}</p>
              <p className="mt-3 text-sm text-slate-300">
                {project.contribution}
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-300 marker:text-violet-300">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span className="badge" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-5">
                <div className="flex flex-wrap gap-x-6">
                  {project.live && (
                    <ExternalLink href={project.live}>
                      Visit Live Site
                    </ExternalLink>
                  )}
                  {project.repo && (
                    <ExternalLink href={project.repo}>
                      View Repository
                    </ExternalLink>
                  )}
                </div>
                {project.note && (
                  <p className="mt-2 text-xs text-slate-400">{project.note}</p>
                )}
                {project.detail && (
                  <details className="mt-3 border-t border-white/15">
                    <summary className="min-h-11 py-3 text-sm font-semibold text-violet-200">
                      View Details
                    </summary>
                    <p className="pb-3 text-sm text-slate-300">
                      {project.detail}
                    </p>
                  </details>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

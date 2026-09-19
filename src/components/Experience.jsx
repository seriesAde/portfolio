import { SectionHeading } from './Shared';
const jobs = [
  {
    title: 'Part-Time Full-Stack Developer',
    company: 'OAT (Brix and Towers)',
    location: 'Remote',
    dates: 'Nov 2025 – Present',
    points: [
      'Maintain backend functionality for a multi-module ERP platform, extending REST endpoints and server-side logic with Node.js and Express.js.',
      'Resolve bugs across authentication, data and business logic, using Postman to test and validate endpoints.',
      'Maintain role-based permissions for role-appropriate access across ERP modules.',
    ],
  },
  {
    title: 'Contract Front-End Developer',
    company: 'Techspare',
    location: 'Abuja, Nigeria',
    dates: 'Jan 2025 – Jun 2026',
    points: [
      'Built responsive interfaces with React.js, Next.js, HTML5 and CSS3.',
      'Implemented React Query and Redux Toolkit for data fetching and consistent application state.',
      'Translated client requirements into accessible interfaces with attention to cross-browser behaviour and user flows.',
    ],
  },
  {
    title: 'Intern and Contract Front-End Developer',
    company: 'NUHU Consult',
    location: 'Abuja, Nigeria',
    dates: 'Dec 2024 – Mar 2025',
    points: [
      'Built responsive interfaces and interactive features using React.js and Vite.',
      'Implemented client-specified layouts with Tailwind CSS and Bootstrap.',
      'Maintained reusable interface code and consistent layouts across screen sizes.',
    ],
  },
];
export default function Experience() {
  return (
    <section id="experience" className="border-y border-white/10 bg-[#0d0d15]">
      <div className="shell section-space">
        <SectionHeading
          number="02"
          eyebrow="Experience"
          title="Putting the work into practice."
        />
        <div className="space-y-5">
          {jobs.map((job, index) => (
            <article
              key={job.company}
              className="grid gap-5 rounded-xl border border-white/15 bg-[#11111b] p-6 sm:p-8 lg:grid-cols-[230px_1fr]"
            >
              <div>
                <p className="mb-3 font-mono text-xs text-violet-300">
                  0{index + 1} / {job.dates}
                </p>
                <p className="text-xl font-semibold">{job.company}</p>
                <p className="mt-1 text-sm text-slate-300">{job.location}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-300 marker:text-violet-300">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

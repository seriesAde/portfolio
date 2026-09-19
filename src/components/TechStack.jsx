import { SectionHeading } from './Shared';
const groups = {
  Frontend: [
    'React.js',
    'Next.js',
    'TypeScript',
    'JavaScript ES6+',
    'HTML5',
    'CSS3',
  ],
  Backend: [
    'Node.js',
    'Express.js',
    'REST API Design',
    'JWT Authentication',
    'Role-Based Access Control',
  ],
  Database: [
    'MongoDB',
    'Mongoose',
    'MySQL',
    'Relational and ERD Data Modeling',
  ],
  'State Management': ['Redux Toolkit', 'React Query'],
  Styling: ['Tailwind CSS', 'Bootstrap', 'Responsive Design'],
  'Cloud and Deployment': ['AWS', 'Vercel', 'Render'],
  Tools: ['Git', 'GitHub', 'Vite', 'Axios', 'Postman'],
};
export default function TechStack() {
  return (
    <section id="skills" className="border-y border-white/10 bg-[#0d0d15]">
      <div className="shell section-space">
        <SectionHeading
          number="04"
          eyebrow="Skills"
          title="The tools behind the work."
        >
          A practical toolkit for building across the application.
        </SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(groups).map(([name, skills]) => (
            <div
              key={name}
              className="rounded-xl border border-white/15 bg-[#11111b] p-6"
            >
              <h3 className="mb-4 text-lg font-semibold">{name}</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li key={skill} className="badge">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

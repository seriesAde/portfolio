import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../lib/motionVariants";

const jobs = [
    {
        title: "Part-Time Full-Stack Developer (OAT, Remote)",
        dates: "Nov 2025 – Present",
        points: [
            "Maintain backend functionality for a multi-module ERP system, building and extending REST API endpoints and server-side logic using Node.js and Express.js.",
            "Resolve backend bugs across authentication, data, and business-logic layers, using Postman for endpoint testing and validation.",
            "Implement and maintain role-based permissions to enforce secure, role-appropriate data access across ERP modules.",
        ],
    },
    {
        title: "Front-End Developer (Techspare, Abuja)",
        dates: "Jan 2025 – Present",
        points: [
            "Designed and developed responsive, immersive front-end interfaces using React.js, Next.js, HTML5, and CSS3, delivering seamless, high-performance user experiences across all devices.",
            "Implemented React Query and state management (Redux Toolkit) for efficient data fetching and consistent workflows.",
            "Collaborated closely with clients to translate requirements into pixel-perfect, intuitive UIs, prioritizing accessibility, performance, cross-browser compatibility, and optimal user flows.",
        ],
    },
    {
        title: "Front-End Developer (NUHU Consult, Abuja)",
        dates: "Dec 2024 – Mar 2025",
        points: [
            "Built and optimized responsive, dynamic front-end interfaces using React.js and Vite, delivering seamless and performant user experiences across devices.",
            "Implemented intuitive, client-specified UI/UX layouts and interactive features with Tailwind CSS and Bootstrap, ensuring pixel-perfect alignment with brand guidelines and mobile-first design principles.",
            "Accelerated UI development through utility-first workflows and clean, maintainable code, focusing on user-centric interactions and cross-device consistency.",
        ],
    },
];

function Experience() {
    return (
        <div className="bg-[#1a111a] text-white py-5">
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h1 className="text-3xl font-bold mb-5 text-center capitalize">Work history</h1>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="flex flex-col md:flex-row gap-5 w-[80%] mx-auto">
                {jobs.map((job) => (
                    <motion.div
                        key={job.title}
                        variants={itemVariants}
                        className="w-full rounded-lg border border-gray-300 p-5 bg-[#180a18]">
                        <h1 className="text-2xl font-bold">{job.title}</h1>
                        <p className="text-purple-400">{job.dates}</p>
                        <ul className="list-disc list-inside space-y-5 leading-6 text-pretty">
                            {job.points.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Experience;

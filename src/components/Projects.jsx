import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Inventory Management System API",
        tag: "Node/Express",
        description: "A multi-warehouse stock management API for wholesale and retail businesses, with role-based access, transactional stock updates, and auditable inventory tracking.",
        link: "https://github.com/seriesAde",
        linkLabel: "view repo",
    },
    {
        title: "Royalmines Properties",
        tag: "React",
        description: "A corporate website for a real estate brand, showcasing properties, services, and company credibility with a clean, responsive design.",
        link: "https://www.royalminesproperty.com",
        linkLabel: "visit website",
    },
    {
        title: "Chop-Express",
        tag: "web",
        description: "A responsive restaurant menu & ordering website with clean layout, menu categorization, testimonials, and mobile-friendly design to showcase food offerings effectively.",
        link: "https://chop-express.vercel.app/",
        linkLabel: "visit website",
    },
    {
        title: "POS-DEV",
        tag: "web",
        description: "Platform for a youth skills/employment foundation. Highlighted program details, impact stats, mentorship initiatives, and contact outreach with responsive, accessible design.",
        link: "https://www.posterosdev.com/",
        linkLabel: "visit website",
    },
];

function Projects() {
    return (
        <div className="bg-black">
            <div className="w-[80%] mx-auto py-10 text-white">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h1 className="capitalize text-3xl font-bold text-center">selected projects</h1>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-[#180a18d2] rounded-lg border border-gray-300 p-3 w-full">
                            <div className="flex justify-between items-center">
                                <h1 className="font-bold">{project.title}</h1>
                                <span className="flex items-center rounded-full py-[0.9px] h-fit px-3 bg-purple-300 text-[#180a18] text-xs font-bold">
                                    <p>{project.tag}</p>
                                </span>
                            </div>
                            <p className="my-5">{project.description}</p>
                            <div className="text-center mt-10">
                                <Link className="text-purple-400" to={project.link}>
                                    {project.linkLabel} <FontAwesomeIcon icon={faArrowRight} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;

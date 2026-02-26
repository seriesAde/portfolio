import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faAt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin, faTypescript } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5";
import { faCss3 } from "@fortawesome/free-brands-svg-icons/faCss3";
import { motion } from "framer-motion";
// import Timeline from "../components/Timeline";

function Home() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.4,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeOut",
            },
        },
    };
    return (
        <div>
            <div className="min-h-screen bg-linear-60    via-[#050005] from-[#160016] to-[#160016] flex items-center justify-center py-5 ">
                <div>
                    <div className="flex items-center justify-center ">
                        <motion.div
                            initial={{ opacity: 0, x: -400 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="text-[#ffffffa8] text-center w-[70%]">
                            <h1 className="text-7xl font-bold">Adeshina Ahmed</h1>
                            <h2 className="text-2xl font-bold my-5 text-purple-300">Front End Web Developer</h2>
                            <p className="text-pretty text-center">Results-driven Front-End Developer specializing in React and Next.js, with hands-on expertise crafting high-performance, responsive user interfaces using Tailwind CSS for rapid development and consistent design systems. Proven ability to translate Figma designs into pixel-perfect, accessible, and mobile-first experiences that boost user engagement and reduce development time.</p>
                        </motion.div>
                    </div>
                    <div className="">

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex flex-col md:flex-row justify-center items-center mt-10 mb-5 gap-5">
                            <Link to="mailto:adeshinaahmed60@gmail.com" className="text-center  shadow-purple-700/50 text-white font-bold py-2 px-5 rounded-full border border-purple-300 hover:bg-[#160016] transition-all duration-300 "><FontAwesomeIcon icon={faAt} className="text-purple-700 mr-2" />Email me</Link>
                            <Link to="https://github.com/seriesAde" className="text-center shadow-md shadow-purple-700/50 text-white font-bold py-2 px-5 rounded-full bg-purple-600 hover:bg-purple-400 transition-all duration-300 "><FontAwesomeIcon icon={faGithub} className="text-white mr-2" />GitHub</Link>
                            <Link to="http://linkedin.com/in/adeshina-ahmed-a00a3029a" className="text-center  shadow-purple-700/50 text-white font-bold py-2 px-5 rounded-full border border-purple-300  hover:bg-[#160016] transition-all duration-300 "><FontAwesomeIcon icon={faLinkedin} className="text-purple-700 mr-2" />LinkedIn</Link>
                        </motion.div>

                    </div>
                </div>
            </div>
            <div className="bg-[#0c000c] text-white border-t border-b border-gray-700">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                    className="w-[70%] mx-auto flex flex-col md:flex-row items-center justify-center gap-5 py-10 ">
                    <motion.div variants={itemVariants} className="flex items-center gap-2"><FontAwesomeIcon icon={faTypescript} className="text-purple-400" /> <p>TypeScript</p></motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-2"><FontAwesomeIcon icon={faReact} className="text-purple-400" /> <p>React/Next.js</p></motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-2"><FontAwesomeIcon icon={faHtml5} className="text-purple-400" /> <p>HTML</p></motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-2"><FontAwesomeIcon icon={faCss3} className="text-purple-400" /> <p>CSS</p></motion.div>
                </motion.div>
            </div>

            <div className=" bg-[black] text-white py-10  ">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="w-[80%] mx-auto">
                    <h1 className="text-3xl font-bold mb-5 text-purple-400">About Me</h1>
                    <div className="flex-col gap-10 md:gap-5 text-pretty md:flex-col lg:flex-row flex">
                        <div className="w-full">
                            <p>
                                I am a passionate Front-End Developer based in Abuja, Nigeria, dedicated to crafting intuitive and responsive web interfaces that bring designs to life. Specializing in React, Next.js, TypeScript, and Tailwind CSS, I focus on creating fast, accessible, and user-centered applications that improve engagement and deliver seamless experiences across devices </p>
                        </div>
                        <div className="w-full">
                            <p> I have hands-on experience crafting responsive, high-performance user interfaces and interactive web applications. I specialize in modern frontend technologies like React, Next.js, TypeScript, and Tailwind CSS, focusing on clean code, pixel-perfect design implementation, accessibility, and efficient, user-centered solutions that enhance engagement and deliver seamless experiences across devices.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="bg-[#1a111a] text-white py-5">
                <h1 className="text-3xl font-bold mb-5 text-center capitalize">Work history</h1>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                    className="flex flex-col md:flex-row gap-5 w-[80%] mx-auto">
                    <motion.div variants={itemVariants} className="w-full rounded-lg border border-gray-300 p-5 bg-[#180a18]">
                        <h1 className="text-2xl font-bold"> Front-End Developer (Techspare, Abuja) </h1>
                        <p className="text-purple-400">Jan 2025 – Present</p>
                        <ul className="list-disc list-inside space-y-5 leading-6 text-pretty">
                            <li>
                                Designed and developed responsive, immersive front-end interfaces using React.js, Next.js, HTML5, and CSS3, delivering seamless, high-performance user experiences across all devices.
                            </li>
                            <li>
                                Implemented TypeScript, React Query, and state management (Redux Toolkit) to ensure type-safe, maintainable code with efficient data fetching and consistent workflows.
                            </li>
                            <li>
                                Collaborated closely with clients to translate requirements into pixel-perfect, intuitive UIs, prioritizing accessibility, performance, cross-browser compatibility, and optimal user flows aligned with brand guidelines.
                            </li>

                        </ul>
                    </motion.div>
                    <motion.div variants={itemVariants} className="w-full rounded-lg border border-gray-300 p-5 bg-[#180a18]">
                        <h1 className="text-2xl font-bold"> Front-End Developer (NUHU Consult, Abuja ) </h1>
                        <p className="text-purple-400">Dec 2024 –  Mar 2025</p>
                        <ul className="list-disc list-inside space-y-5 leading-6 text-pretty">
                            <li>
                                Built and optimized responsive, dynamic front-end interfaces using React.js and Vite, delivering seamless and performant user experiences across devices.
                            </li>
                            <li>
                                Implemented intuitive, client-specified UI/UX layouts and interactive features with Tailwind CSS and Bootstrap, ensuring pixel-perfect alignment with brand guidelines and mobile-first design principles.
                            </li>
                            <li>
                                Accelerated UI development through utility-first workflows and clean, maintainable code, focusing on user-centric interactions and cross-device consistency.
                            </li>

                        </ul>
                    </motion.div>

                </motion.div>
            </div>
            <div className="bg-black">
                <div className="w-[80%] mx-auto py-10 text-white ">
                    <h1 className="capitalize text-3xl font-bold text-center">selected projects</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-[#180a18d2] rounded-lg border border-gray-300 p-3 w-full">
                            <div className=" flex justify-between  items-center"> <h1 className=" font-bold ">Royalmines properties</h1> <span className="flex items-center rounded-full py-[0.9px] h-fit px-3 bg-purple-300 text-[#180a18] text-xs font-bold "><p>React</p></span></div>
                            <p className="my-5">A corporate website for a real estate brand, showcasing properties, services, and company credibility with a clean, responsive design.</p>
                            <div className="text-center mt-10"><Link className="text-purple-400" to="https://www.royalminesproperty.com">visit website <FontAwesomeIcon icon={faArrowRight} /></Link></div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-[#180a18d2] rounded-lg border border-gray-300 p-3 w-full">
                            <div className=" flex justify-between items-center"> <h1 className=" font-bold">Chop-Express</h1> <span className="flex items-center rounded-full py-[0.9px] h-fit px-3 bg-purple-300 text-[#180a18] text-xs font-bold "><p>web</p></span></div>
                            <p className="my-5">A responsive restaurant menu & ordering website with clean layout, menu categorization, testimonials, and mobile-friendly design to showcase food offerings effectively.</p>
                            <div className="text-center"><Link className="text-purple-400" to="https://chop-express.vercel.app/">visit website <FontAwesomeIcon icon={faArrowRight} /></Link></div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-[#180a18d2] rounded-lg border border-gray-300 p-3 w-full">
                            <div className=" flex justify-between items-center"> <h1 className=" font-bold">POS-DEV</h1> <span className="flex items-center rounded-full py-[0.9px] h-fit px-3 bg-purple-300 text-[#180a18] text-xs font-bold "><p>web</p></span></div>
                            <p className="my-5">Platform for a youth skills/employment foundation. Highlighted program details, impact stats, mentorship initiatives, and contact outreach with responsive, accessible design.</p>
                            <div className="text-center w-full "><Link className="text-purple-400" to="https://www.posterosdev.com/">visit website <FontAwesomeIcon icon={faArrowRight} /></Link></div>
                        </motion.div>

                    </div>

                </div>
            </div>
            <div className="p-10 bg-[#0c000c] text-white text-center text-sm">
                <p>Let's build something great together.</p>
                <p className="mt-2">© 2026 Adeshina Ahmed · Abuja, Nigeria</p>
            </div>




            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
                className=""
            >

            </motion.div>


        </div >
    )

} export default Home;
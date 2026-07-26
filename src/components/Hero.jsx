import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

function Hero() {
    return (
        <div className="min-h-screen bg-linear-60 via-[#050005] from-[#160016] to-[#160016] flex items-center justify-center py-5">
            <div>
                <div className="flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -400 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-[#ffffffa8] text-center md:w-[70%] w-[90%] text-pretty mt-20 md:mt-0 mx-auto">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">Adeshina Ahmed</h1>
                        <h2 className="text-2xl font-bold my-5 text-purple-300">Full-Stack Developer</h2>
                        <p className="text-pretty text-center text-sm md:text-base">
                            Full-Stack Developer specializing in React, Next.js, and Node.js/Express,
                            with hands-on experience building responsive, high-performance interfaces
                            and backend REST APIs. Proven ability to translate designs into pixel-perfect,
                            accessible experiences while architecting scalable, well-structured backend systems.
                        </p>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex md:flex-row justify-center items-center mt-10 mb-5 gap-5 flex-wrap">
                    <Link to="mailto:adeshinaahmed60@gmail.com" className="text-center shadow-purple-700/50 text-white font-bold py-2 px-5 rounded-full border border-purple-300 hover:bg-[#160016] transition-all duration-300">
                        <FontAwesomeIcon icon={faAt} className="text-purple-700 mr-2" />Email me
                    </Link>
                    <Link to="https://github.com/seriesAde" className="text-center shadow-md shadow-purple-700/50 text-white font-bold py-2 px-5 rounded-full bg-purple-600 hover:bg-purple-400 transition-all duration-300">
                        <FontAwesomeIcon icon={faGithub} className="text-white mr-2" />GitHub
                    </Link>
                    <Link to="http://linkedin.com/in/adeshina-ahmed-a00a3029a" className="text-center shadow-purple-700/50 text-white font-bold py-2 px-5 rounded-full border border-purple-300 hover:bg-[#160016] transition-all duration-300">
                        <FontAwesomeIcon icon={faLinkedin} className="text-purple-700 mr-2" />LinkedIn
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;

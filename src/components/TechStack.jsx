import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faCss3, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../lib/motionVariants";

function TechStack() {
    return (
        <div className="bg-[#0c000c] text-white border-t border-b border-gray-700">
            <motion.div
                initial="hidden"
                whileInView="visible"
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="w-[70%] mx-auto flex flex-col md:flex-row items-center justify-center gap-5 py-10">
                <motion.div variants={itemVariants} className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faReact} className="text-purple-400" /> <p>React/Next.js</p>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faNodeJs} className="text-purple-400" /> <p>Node.js/Express</p>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faHtml5} className="text-purple-400" /> <p>HTML</p>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCss3} className="text-purple-400" /> <p>CSS</p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default TechStack;

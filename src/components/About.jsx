import { motion } from "framer-motion";

function About() {
    return (
        <div className="bg-[black] text-white py-10">
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
                            I am a Full-Stack Developer based in Abuja, Nigeria, building responsive
                            interfaces with React, Next.js, and Tailwind CSS, paired with backend systems
                            in Node.js, Express.js, and MongoDB. I currently maintain backend functionality
                            for a multi-module ERP system, and have independently designed REST APIs for
                            inventory and school management platforms.
                        </p>
                    </div>
                    <div className="w-full">
                        <p>
                            I focus on writing clean, maintainable code across the stack — from
                            pixel-perfect, accessible UI implementation to REST API design, authentication,
                            and data modeling. I enjoy solving problems end-to-end, from how an interface
                            feels to how the data behind it stays consistent and secure.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default About;

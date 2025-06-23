import React from "react";
import { motion } from "framer-motion";
import { Animation } from "./Animation";

const AboutMe = () => {
    return (
        <section className="flex items-center justify-center py-6" id="aboutme">
            <motion.div
                className="flex flex-col md:flex-row rounded-2xl shadow-lg overflow-hidden max-w-4xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >

                <div className="p-8 bg-white flex flex-col justify-center w-full md:w-2/3">
                    <motion.h2
                        className="text-3xl font-bold mb-4"
                        variants={Animation("up", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        About Me
                    </motion.h2>

                    <motion.p
                        className="text-lg mb-4"
                        variants={Animation("up", 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        When I first started programming, it felt overwhelming. But with
                        time, practice, and persistence, I became confident in solving
                        complex problems and building functional applications. Now, I love
                        crafting smooth user experiences and staying updated with the latest
                        web technologies.
                    </motion.p>

                    <motion.p
                        className="text-lg"
                        variants={Animation("up", 0.6)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        Outside of coding, I enjoy watching movies and exploring new cultures.
                        These interests help me stay creative and think outside the box. As a
                        developer, I’m always eager to learn, collaborate, and create impactful
                        digital experiences.
                    </motion.p>
                </div>

                <motion.div
                    className="w-full md:w-1/3 bg-[#FFEB3B] flex items-center justify-center p-4"
                    variants={Animation("up", 0.8)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                >
                    <img
                        // src={image}
                        alt="Imtiaz Ahmed"
                        className="w-48 h-48 rounded-full border-4 border-gray-700"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutMe;

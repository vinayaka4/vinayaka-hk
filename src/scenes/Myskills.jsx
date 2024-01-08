
import LineGradient from "../components/LineGardient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    return (
        <section id="skills" className="pt-10 pb-24 overflow-hidden">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-red">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />

                    {/* <LineGradient width="w-1/3" /> */}

                    <p className='mt-10 mb-7 flex flex-wrap'>
                        <span className="rounded-r-sm py-0.5 pr-0.5 mr-2 transition hover:text-yellow">React</span>
                        <span className="rounded-r-sm py-0.5 pr-0.5 mr-2 transition hover:text-yellow">Node</span>
                        <span className="rounded-r-sm py-0.5 pr-0.5 mr-2 transition hover:text-yellow">Express</span>
                        <span className="rounded-r-sm py-0.5 pr-0.5 mr-2 transition hover:text-yellow">TypeScript</span>
                        <span className="rounded-r-sm py-0.5 pr-0.5 mr-2 transition hover:text-yellow">JavaScript</span>
                        <span className="rounded-r-sm py-0.5 pr-0.5 mr-2 transition hover:text-yellow">HTML/CSS</span>
                        <span className="rounded-r-sm py-0.5 pr-0.5 mr-2 transition hover:text-yellow">AxureRp</span>
                        <span className="rounded-r-sm py-0.5 pr-0.5 mr-2 transition hover:text-yellow">TailWindCSS</span>
                        <span className="rounded-r-sm py-0.5 pr-0.5 mr-2 transition hover:text-yellow">Bootstrap</span>

                        <span className="rounded-r-sm py-0.5 pr-0.5 mr-2 transition hover:text-yellow">MongoDB</span>
                        <span className="rounded-r-sm py-0.5 pr-0.5 mr-2 transition hover:text-yellow">FirestoreDB</span>
                        <span className="rounded-r-sm py-0.5 pr-0.5 mr-2 transition hover:text-yellow">MySQL</span>

                        <span className="rounded-r-sm py-0.5 pr-0.5 mr-2 transition hover:text-yellow">R</span>
                        <span className="rounded-r-sm py-0.5 pr-0.5 mr-2 transition hover:text-yellow">Java</span>
                        <span className="rounded-r-sm py-0.5 pr-0.5 mr-2 transition hover:text-yellow">Python</span>

                        <span className="rounded-r-sm py-0.5 pr-0.5 mr-2 transition hover:text-yellow">Android</span>

                    </p>


                </motion.div>
                <div className="mt-16 md:mt-0">
                    {isAboveLarge ? (
                        <div
                            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                        >
                            <img
                                alt="skills"
                                className="z-10"
                                src="skills-image.png"
                            />
                        </div>
                    ) : (
                        <img alt="skills" className="z-10" src="skills-image.png" />
                    )}
                </div>
            </div>


            <div className="md:flex md:justify-between mt-0 gap-32">

                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-2xl">MS Computer Science</p>
                            <p className="font-playfair font-semibold text-xl mt-3 ">
                                Northeastern Univeristy Boston
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-rednortheastern absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        {[
                            "Program Design Paradigm",
                            "Algorithms",
                            "Human Computer Interaction",
                            "Web Development",
                            "Mobile Development",
                            "Database Management",
                            "Introduction to Data Management and Processing"
                        ].map((word, index, array) => (
                            <span key={index} className="mr-2 hover:text-yellow">
                                {word}
                                {index < array.length - 1 && ","}
                            </span>
                        ))}
                    </p>


                </motion.div>

                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-2xl">BE Information Science</p>
                            <p className="font-playfair font-semibold text-xl mt-3">
                                The National Instituite Of Engineering Mysore
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        {[
                            "C Programming",
                            "Algorithms",
                            "Data Structure",
                            "Object Oriented Programming",
                            "Operating Systems",
                            "Logical Deisgn",
                            "Networks",
                            "Computer System",
                            "Unix",
                            "DBMS"

                        ].map((word, index, array) => (
                            <span key={index} className="mr-2 hover:text-yellow">
                                {word}
                                {index < array.length - 1 && ","}
                            </span>
                        ))}
                    </p>
                </motion.div>

            </div >
        </section >
    );
};

export default MySkills;
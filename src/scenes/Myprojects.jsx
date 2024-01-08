import React from 'react';
import LineGradient from '../components/LineGardient';
import { motion } from 'framer-motion';

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildern: 0.2 },
    },
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, content }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex-col justify-center items-center p-16 text-deep-blue`;
    const projectTitle = title.replace(/\s+/g, '').toLowerCase();
    const imagePath = `${projectTitle}.jpg`;


    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">{content}</p>
            </div>
            <img src={imagePath} alt={projectTitle} />
        </motion.div>
    );
};

function Myprojects() {
    const projectData = [
        { title: 'Project 1', content: 'Content for Project 1' },
        { title: 'Project 2', content: 'Content for Project 2' },
        { title: 'Project 3', content: 'Content for Project 3' },
        { title: 'Project 4', content: 'Content for Project 4' },
        { title: 'Project 5', content: 'Content for Project 5' },
        { title: 'Project 6', content: 'Content for Project 6' },
        { title: 'Project 7', content: 'Content for Project 7' },
        { title: 'Project 8', content: 'Content for Project 8' },
        { title: 'Project 9', content: 'Content for Project 9' },
    ];

    return (
        <section id="projects" className="pt-48 pb-48">
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        MY <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3" />
                    </div>
                </div>

                <p className="mt-10 mb-10 flex">Heading</p>

                <div className="flex justify-center">
                    <motion.div
                        className="sm:grid sm:grid-cols-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={container}
                    >
                        {projectData.map((project) => (
                            <Project key={project.title} title={project.title} content={project.content} />
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

export default Myprojects;

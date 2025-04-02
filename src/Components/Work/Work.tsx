import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Work.css";
import { motion, LayoutGroup } from "framer-motion";
import Tilt from "react-parallax-tilt";
import ProjectModal from "../Shared/Modal/ProjectModal";

type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    liveLink: string;
    githubLink: string;
    active: boolean;
    gallery: string[];
    tech: string[];
};

const Work: React.FC = () => {
    const { t } = useTranslation();
    const allProjects = t("projects", { returnObjects: true }) as Project[];
    const activeProjects = allProjects.filter((project) => project.active);
    const [show, setShow] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <>
            <div id="projects">
                <LayoutGroup>
                    <div className='project-container-full'>
                        <div className='projects-title'>
                            <h2>{t("projects-title")}</h2>
                        </div>
                        <motion.div className='project-container' layout>
                            {activeProjects.length > 0 ? (
                                activeProjects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        layout
                                        className={`project ${index % 2 !== 0 ? "offset" : ""}`}
                                        onClick={() => setSelectedProject(project)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <Tilt
                                            tiltMaxAngleX={15}
                                            tiltMaxAngleY={15}
                                            scale={1}
                                            glareEnable={false}
                                        >
                                            <h3 className='project-title'>{project.title}</h3>
                                            <motion.div
                                                className='project-item-container'
                                                whileInView={{ scale: 0.9 }}
                                                whileHover={{ scale: 1 }}
                                                whileTap={{ scale: 0.95 }}
                                                transition={{ duration: 1.2 }}
                                            >
                                                <motion.div
                                                    className='project-item-container-img'
                                                    whileInView={{ scale: 1.3 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    transition={{ duration: 1 }}
                                                >
                                                    <img
                                                        src={`/assets/projects/${project.id}.jpg`}
                                                        alt={project.title}
                                                        className='project-image'
                                                    />
                                                </motion.div>
                                            </motion.div>
                                        </Tilt>
                                    </motion.div>
                                ))
                            ) : (
                                <p className='no-projects'>No active projects available.</p>
                            )}
                        </motion.div>
                    </div>
                    <div className='all-proyects'>
                        <button
                            className="button-all-proyects button-link button-contact-form"
                            onClick={() => setShow((prev) => !prev)}
                        >
                            {show ? t("hide-projects") : t("all-projects")}
                        </button>
                        {show && (
                            <div>
                                <motion.div className='all-proyects-container' layout>
                                    {allProjects.length > 0 ? (
                                        allProjects.map((project) => (
                                            <motion.div
                                                key={project.id}
                                                layout
                                                className={"project grid-item"}
                                                onClick={() => setSelectedProject(project)}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <Tilt
                                                    tiltMaxAngleX={15}
                                                    tiltMaxAngleY={15}
                                                    scale={1}
                                                    glareEnable={false}
                                                >
                                                    <h3 className='project-title'>{project.title}</h3>
                                                    <motion.div
                                                        className='project-item-container'
                                                        whileInView={{ scale: 0.9 }}
                                                        whileHover={{ scale: 1 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        transition={{ duration: 1.2 }}
                                                    >
                                                        <motion.div
                                                            className='project-item-container-img'
                                                            whileInView={{ scale: 1.3 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            transition={{ duration: 1 }}
                                                        >
                                                            <img
                                                                src={`/assets/projects/${project.id}.jpg`}
                                                                alt={project.title}
                                                                className='project-image'
                                                            />
                                                        </motion.div>
                                                    </motion.div>
                                                </Tilt>
                                            </motion.div>
                                        ))
                                    ) : (
                                        <p className='no-projects'>No active projects available.</p>
                                    )}
                                </motion.div>
                            </div>
                        )}
                    </div>
                    {/* Modal */}
                    <ProjectModal
                        project={selectedProject}
                        title={t("techtitle")}
                        onClose={() => setSelectedProject(null)}
                    />
                </LayoutGroup>
            </div>
        </>
    );
};

export default Work;

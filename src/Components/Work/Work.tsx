import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, LayoutGroup } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {Modal} from "../Shared";
import "./Work.css";
import { Project } from '../../types/types'


export const Work: React.FC = () => {
    const { t } = useTranslation();
    const allProjects = t("projects", { returnObjects: true }) as Project[];
    const activeProjects = allProjects.filter((project) => project.active);
    const [show, setShow] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <>
            <div id="projects">
                <LayoutGroup>
                    <div className='projects__container'>
                        <div className='projects__title-wrapper'>
                            <h2>{t("projects-title")}</h2>
                        </div>
                        <motion.div className='projects__grid' layout>
                            {activeProjects.length > 0 ? (
                                activeProjects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        layout
                                        className={`projects__item ${index % 2 !== 0 ? "projects__item--offset" : ""}`}
                                        onClick={() => setSelectedProject(project)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <Tilt
                                            tiltMaxAngleX={15}
                                            tiltMaxAngleY={15}
                                            scale={1}
                                            glareEnable={false}
                                        >
                                            <h3 className='projects__title'>{project.title}</h3>
                                            <motion.div
                                                className='projects__image-wrapper'
                                                whileInView={{ scale: 0.9 }}
                                                whileHover={{ scale: 1 }}
                                                whileTap={{ scale: 0.95 }}
                                                transition={{ duration: 1.2 }}
                                            >
                                                <motion.div
                                                    className='projects__image-wrapper-inner'
                                                    whileInView={{ scale: 1.3 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    transition={{ duration: 1 }}
                                                >
                                                    <img
                                                        src={`/assets/projects/${project.id}.jpg`}
                                                        alt={project.title}
                                                        className='projects__image'
                                                    />
                                                </motion.div>
                                            </motion.div>
                                        </Tilt>
                                    </motion.div>
                                ))
                            ) : (
                                <p className='projects__no-results'>No active projects available.</p>
                            )}
                        </motion.div>
                    </div>
                    <div className='all-projects'>
                        <button
                            className="all-projects__button button-contact-form"
                            onClick={() => setShow((prev) => !prev)}
                        >
                            {show ? t("hide-projects") : t("all-projects")}
                        </button>
                        {show && (
                            <div>
                                <motion.div className='all-projects__grid' layout>
                                    {allProjects.length > 0 ? (
                                        allProjects.map((project) => (
                                            <motion.div
                                                key={project.id}
                                                layout
                                                className={"projects__item"}
                                                onClick={() => setSelectedProject(project)}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <Tilt
                                                    tiltMaxAngleX={15}
                                                    tiltMaxAngleY={15}
                                                    scale={1}
                                                    glareEnable={false}
                                                >
                                                    <h3 className='projects__title'>{project.title}</h3>
                                                    <motion.div
                                                        className='projects__image-wrapper'
                                                        whileInView={{ scale: 0.9 }}
                                                        whileHover={{ scale: 1 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        transition={{ duration: 1.2 }}
                                                    >
                                                        <motion.div
                                                            className='projects__image-wrapper-inner'
                                                            whileInView={{ scale: 1.3 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            transition={{ duration: 1 }}
                                                        >
                                                            <img
                                                                src={`/assets/projects/${project.id}.jpg`}
                                                                alt={project.title}
                                                                className='projects__image'
                                                            />
                                                        </motion.div>
                                                    </motion.div>
                                                </Tilt>
                                            </motion.div>
                                        ))
                                    ) : (
                                        <p className='projects__no-results'>No active projects available.</p>
                                    )}
                                </motion.div>
                            </div>
                        )}
                    </div>
                    {/* Modal */}
                    <Modal
                        project={selectedProject}
                        title={t("techtitle")}
                        onClose={() => setSelectedProject(null)}
                    />
                </LayoutGroup>
            </div>
        </>
    );
};

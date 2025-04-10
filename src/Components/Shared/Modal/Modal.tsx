import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Autoplay } from "swiper/modules";
import { Tooltip } from "react-tooltip";
import anime from "animejs/lib/anime.es.js";
import "./Modal.css";
import "swiper/swiper-bundle.css";
import { Project } from "../../../types/types"



interface ModalProps {
    project: Project | null;
    title: string;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
    project,
    title,
    onClose,
}) => {
    useEffect(() => {
        anime({
            targets: ".modal-tech-img",
            translateX: [1200, 0],
            delay: anime.stagger(300, { start: 500 }),
        });
    }, [project]);

    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="project-modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="project-modal"
                    layoutId={`project-${project.id}`}
                >
                    <button type="button" onClick={onClose} aria-label="Close">
                        <i className="bi bi-x-lg"></i>
                    </button>
                    <h2 className="modal-project-title">{project.title}</h2>
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        navigation={true}
                        loop={false}
                        autoplay={{ delay: 3000, disableOnInteraction: true }}
                        modules={[EffectCards, Navigation, Autoplay]}
                    >
                        <SwiperSlide>
                            <img
                                src={`/assets/projects/${project.id}.jpg`}
                                alt={project.title}
                            />
                        </SwiperSlide>
                        {project.gallery.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={`/assets/projects/${item}.jpg`}
                                    alt={item}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <p className="modal-project-description">
                        {project.description}
                    </p>
                    <div className="modal-container-tech">
                        <p className="modal-tech-title">{title}:</p>
                        {project.tech.map((item, index) => (
                            <img
                                className="modal-tech-img"
                                key={index}
                                src={`/assets/tech/${item}.png`}
                                alt={item}
                                data-tooltip-id="tech-tooltip"
                                data-tooltip-content={item}
                            />
                        ))}
                    </div>
                    <Tooltip
                        id="tech-tooltip"
                        place="top"
                        style={{
                            backgroundColor: "var(--midnight-green)",
                            color: "var(--light-blue-2)",
                        }}
                    />
                    <div className="container-live-links">
                        {project.liveLink ? (
                            <a
                                className="live-links"
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Demo <i className="bi bi-display"></i>
                            </a>
                        ) : (
                            <a
                                className="live-links"
                                data-tooltip-id="tooltip-live"
                                data-tooltip-content="Link not available"
                            >
                                Live Demo <i className="bi bi-display"></i>
                            </a>
                        )}
                        {" | "}
                        {project.githubLink ? (
                            <a
                                className="live-links"
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub <i className="bi bi-github"></i>
                            </a>
                        ) : (
                            <a
                                className="live-links"
                                data-tooltip-id="tooltip-github"
                                data-tooltip-content="Link not available"
                            >
                                GitHub <i className="bi bi-github"></i>
                            </a>
                        )}
                    </div>
                    <Tooltip id="tooltip-live" place="top" />
                    <Tooltip id="tooltip-github" place="top" />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

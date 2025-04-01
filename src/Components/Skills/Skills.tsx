import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import "./Skills.css";


export default function Skills() {
    const { t } = useTranslation();
    const frontendTechs = (
        t("techs.frontend", { returnObjects: true }) as string[]
    ).map((name) => ({ name }));
    const backendTechs = (
        t("techs.backend", { returnObjects: true }) as string[]
    ).map((name) => ({ name }));
    const ToolTechs = (
        t("techs.tools", { returnObjects: true }) as string[]
    ).map((name) => ({ name }));

    return (
        <div className='container-skills' id="skills">
            <h3 className='title-skills'>Skills</h3>
            <div className='container-tech-skills'>
                <div className='container-front-skills'>
                    <h4 className='tech-title'>Frontend</h4>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        transition={{ staggerChildren: 0.2 }}
                        className='tech-skills'
                    >
                        {frontendTechs.map((tech) => (
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ type: "spring", stiffness: 100 }}
                                key={tech.name}
                                className='front-tech-item'
                            >
                                <img
                                    src={`./assets/tech/${tech.name}.png`}
                                    alt={tech.name}
                                />
                                <span className='tech-name'>{tech.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className='container-back-skills'>
                <h4 className='tech-title'>Backend</h4>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        transition={{ staggerChildren: 0.2 }}
                        className='tech-skills'
                    >
                        {backendTechs.map((tech) => (
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ type: "spring", stiffness: 100 }}
                                key={tech.name}
                                className='front-tech-item'
                            >
                                <img
                                    src={`./assets/tech/${tech.name}.png`}
                                    alt={tech.name}
                                />
                                <span className='tech-name'>{tech.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            <div className='container-tools-skills'>
            <h4 className='tech-title'>Tools</h4>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        transition={{ staggerChildren: 0.2 }}
                        className='tech-skills'
                    >
                        {ToolTechs.map((tech) => (
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ type: "spring", stiffness: 100 }}
                                key={tech.name}
                                className='front-tech-item'
                            >
                                <img
                                    src={`./assets/tech/${tech.name}.png`}
                                    alt={tech.name}
                                />
                                <span className='tech-name'>{tech.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
            </div>
            </div>
        </div>
    );
}

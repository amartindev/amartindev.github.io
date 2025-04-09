import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import "./Skills.css";


export const Skills = () => {
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
        <div className='skills' id="skills">
            <h3 className='skills__title'>Skills</h3>
            <div className='skills__sections'>
                <div className='container-front-skills'>
                    <h4 className='skills__section-title'>Frontend</h4>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        transition={{ staggerChildren: 0.2 }}
                        className='skills__tech-list'
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
                <h4 className='skills__section-title'>Backend</h4>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        transition={{ staggerChildren: 0.2 }}
                        className='skills__tech-list'
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
            <h4 className='skills__section-title'>Tools</h4>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        transition={{ staggerChildren: 0.2 }}
                        className='skills__tech-list'
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

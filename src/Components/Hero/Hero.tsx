import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { Download, TechHero, Sky, Magnet, RotatingText} from "../Shared"
import "./Hero.css";

type HeroProps = {
    changeLanguage: (lng: "en" | "es" | "fr") => void;
};

export const Hero = ({ changeLanguage }: HeroProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const handleLanguageChange = (lng: "en" | "es" | "fr") => {
        changeLanguage(lng);
        setIsOpen(false);
    };

    return (
        <>
            <div className='container-hero' id='about'>
                <div className='container-left-hero'>
                    <div className='container-profile-picture'>
                        <Magnet
                            className='github'
                            padding={200}
                            disabled={false}
                            magnetStrength={20}
                        >
                            <button
                                onClick={() =>
                                    window.open(
                                        "https://github.com/amartindev",
                                        "_blank"
                                    )
                                }
                                className='button-link'
                            >
                                <i className='bi bi-github'></i> GitHub
                            </button>
                        </Magnet>
                        <Magnet
                            className='linkedin'
                            padding={200}
                            disabled={false}
                            magnetStrength={20}
                        >
                            <button
                                onClick={() =>
                                    window.open(
                                        "https://www.linkedin.com/in/amartindev/",
                                        "_blank"
                                    )
                                }
                                className='button-link'
                            >
                                <i className='bi bi-linkedin'></i> LinkedIn
                            </button>
                        </Magnet>
                        <div className='circle-background'></div>
                        <img
                            className='profile-picture'
                            src='/assets/profile-animated2.png'
                            alt='Profile Pic'
                        />
                    </div>
                    <div className='container-left-hero-buttons'>
                        <div
                            className='language-selector'
                            onMouseEnter={() => setIsOpen(true)}
                            onMouseLeave={() => setIsOpen(false)}
                        >
                            <button className='button'>
                                {t("select-language")} &nbsp; ▼
                            </button>
                            {isOpen && (
                                <div className='dropdown-content'>
                                    <a onClick={() => handleLanguageChange("en")}>
                                        English
                                    </a>
                                    <a onClick={() => handleLanguageChange("es")}>
                                        Español
                                    </a>
                                    <a onClick={() => handleLanguageChange("fr")}>
                                        Français
                                    </a>
                                </div>
                            )}
                        </div>
                        <Download />
                    </div>
                </div>
                <div className='container-right-hero'>
                    <h1 className='hero-title'>
                        <RotatingText
                            texts={["Web", "Frontend", "Full-Stack"]}
                            mainClassName='rotating-text'
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName='overflow-hidden pb-0.5 sm:pb-1 md:pb-1'
                            transition={{
                                type: "spring",
                                damping: 30,
                                stiffness: 400,
                            }}
                            rotationInterval={3000}
                        />{" "}
                        Developer
                    </h1>
                    <p className='hero-text'>{t("hero-contain")}</p>
                    <TechHero />
                </div>
                <div className='scroll-container'>
                    <Link
                        to='projects'
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className='main__scroll'
                    >
                        <div className='main__scroll-box'>
                            <svg
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M0 0h24v24H0z' fill='none'></path>
                                <path
                                    d='M11.9997 13.1716L7.04996 8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z'
                                    fill='rgb(255, 255, 255)'
                                ></path>
                            </svg>
                        </div>
                        <span className='main__scroll-text'>Scroll</span>
                    </Link>
                </div>
                <Sky />
            </div>
        </>
    );
}

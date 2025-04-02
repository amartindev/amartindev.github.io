import { Link, animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import "./NavBar.css";
import { useState } from "react";

export default function NavBar() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="navbar">
            <div className="logo" onClick={() => scroll.scrollToTop()}>
                <img src="/assets/rabbitorigami.ico" alt="Logo" className="logo-image" />
                <p>Antonio Martin</p>
            </div>

            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <i className='bi bi-x-lg'></i> : <i className="bi bi-list"></i>}
            </div>

            <ul className={`nav-links ${isOpen ? "active-hamburger" : ""}`}>
                <li>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active"
                        isDynamic={true}
                        offset={-50}
                        onClick={handleLinkClick}
                    >
                        {t("about-title")}
                    </Link>
                </li>
                <li>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active"
                        isDynamic={true}
                        offset={-50}
                        onClick={handleLinkClick}
                    >
                        {t("projects-title")}
                    </Link>
                </li>
                <li>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active"
                        isDynamic={true}
                        offset={-50}
                        onClick={handleLinkClick}
                    >
                        {t("skill-title")}
                    </Link>
                </li>
                <li>
                    <Link
                        to="experience"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active"
                        isDynamic={true}
                        offset={-50}
                        onClick={handleLinkClick}
                    >
                        {t("experience-title")}
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active"
                        isDynamic={true}
                        offset={-50}
                        onClick={handleLinkClick}
                    >
                        {t("contact-title")}
                    </Link>
                </li>
            </ul>
        </div>
    );
}

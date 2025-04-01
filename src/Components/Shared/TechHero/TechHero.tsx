import { useTranslation } from "react-i18next";
import { Tooltip } from "react-tooltip";
import anime from 'animejs/lib/anime.es.js';
import "./TechHero.css";
import { useEffect } from "react";

type Tech = {
    id: string;
    name: string;
    icon: string;
    date: string;
    hero: boolean;
};

export default function TechHero() {
    const { t } = useTranslation();
    const heroTech = t("techs.hero", { returnObjects: true }) as Tech[];
    const activesHeroTech = heroTech.filter((tech) => tech.hero);

    const getYearsDiff = (dateString: string) => {
        const [day, month, year] = dateString.split("/").map(Number);
        const techDate = new Date(year, month - 1, day);
        const currentYear = new Date().getFullYear();
        const techYear = techDate.getFullYear();
        return Math.round(currentYear - techYear);
    };
useEffect(() => {
    anime({
        targets: '.container-tech-hero .tech-item',
        translateX: [1200, 0],
        delay: anime.stagger(500, {start: 500})
      });

}, [])


    return (
        <div className="container-tech-hero">
            {activesHeroTech.length > 0 ? (
                activesHeroTech.map((tech) => (
                    <div 
                        key={tech.id} 
                        className="tech-item"
                        data-tooltip-id={`tooltip-${tech.id}`} 
                        data-tooltip-content={`${getYearsDiff(tech.date)} ${t("years")}`}
                    >
                        <img src={tech.icon} alt={tech.name} />
                        <span className="tech-name">{tech.name}</span>
                    </div>
                ))
            ) : (
                <p>{t("noActiveTech")}</p>
            )}
            
            {activesHeroTech.map((tech) => (
                <Tooltip key={tech.id} id={`tooltip-${tech.id}`} place="bottom" style={{ backgroundColor: "var(--midnight-green)", color: "var(--light-blue-2)" }}/>
            ))}
        </div>
    );
}

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useTranslation } from "react-i18next";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.css";
import { ExperienceItem } from "../../types/types";


export const Experience = () => {
    const { t } = useTranslation();
    const experiences = t("experience", { returnObjects: true }) as ExperienceItem[];
    return (
            <div className='time-line' id="experience">
                <h3 className='title-experience'>{t("experience-title")}</h3>
                <VerticalTimeline
                lineColor={ "var(--rich-black)" }
                className="time-line-experience">
                    {experiences.map((study, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className={study.certification ? "time-line-element-pointer" : ""}
                            date={study.date}
                            onTimelineElementClick={() => {
                                if (study.certification) {
                                    window.open(study.certification, "_blank");
                                }
                            }}
                            iconOnClick={() => {
                                if (study.certification) {
                                    window.open(study.certification, "_blank");
                                }
                            }}
                            contentStyle={{
                                background: "var(--light-blue-2)",
                                color: "var(--midnight-green)",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid  var(--light-blue-2)",
                            }}
                            iconStyle={{
                                background: "var(--light-blue-2)",
                                color: "var(--light-blue)",
                            }}
                            icon={
                                study.type === "Experience" ? (
                                    <img
                                        src='./assets/briefcase.png'
                                        alt='Education Logo'
                                    />
                                ) : study.type === "Education" ? (
                                    <img
                                        src='./assets/graduation-hat.png'
                                        alt='Job Logo'
                                    />
                                ) : (
                                    <img
                                        src='./assets/online-learning.png'
                                        alt='Course Logo'
                                    />
                                )
                            }
                        >
                            <h3 className='vertical-timeline-element-title'>
                                {study.title}
                            </h3>
                            <h4 className='vertical-timeline-element-subtitle'>
                                {study.institution}
                            </h4>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
    );
}

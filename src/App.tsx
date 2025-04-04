import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/Shared/NavBar/NavBar";
import Work from "./Components/Work/Work";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";
import AnimatedCursor from "react-animated-cursor";
import Aurora from "./Components/Shared/Aurora/Aurora";
import Loader from "./Components/Shared/Loader/Loader"; // Importa el Loader

const Home = () => {
    const { i18n } = useTranslation();
    const [cursorEnabled, setCursorEnabled] = useState(true);
    const [isLoading, setIsLoading] = useState(true); // Estado para el Loader

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 480px)");

        const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
            setCursorEnabled(!e.matches);
        };

        handleMediaChange(mediaQuery);
        mediaQuery.addEventListener("change", handleMediaChange);

        return () => mediaQuery.removeEventListener("change", handleMediaChange);
    }, []);


    useEffect(() => {
        const MIN_LOAD_TIME = 1500;
        const startTime = Date.now();
    
        const handleLoad = () => {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(0, MIN_LOAD_TIME - elapsedTime);
    
            setTimeout(() => setIsLoading(false), remainingTime);
        };
    
        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }
    
        return () => window.removeEventListener("load", handleLoad);
    }, []);

    const changeLanguage = (lng: "en" | "es" | "fr") => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {cursorEnabled && (
                        <AnimatedCursor
                            innerSize={8}
                            trailingSpeed={1}
                            outerSize={8}
                            color="192, 215, 213"
                            outerAlpha={0.2}
                            innerScale={0.7}
                            outerScale={5}
                            showSystemCursor={false}
                            outerStyle={{
                                border: "1px solid var(--rich-black)",
                                zIndex: 9999,
                            }}
                            innerStyle={{
                                backgroundColor: "192, 215, 213",
                                zIndex: 9999,
                            }}
                            clickables={[
                                "a",
                                'input[type="text"]',
                                'input[type="email"]',
                                'input[type="number"]',
                                'input[type="submit"]',
                                'input[type="image"]',
                                "input",
                                "label[for]",
                                "select",
                                "textarea",
                                ".contact-item",
                                ".project",
                                ".container-download",
                                ".swiper-button-next",
                                ".swiper-button-prev ",
                                ".hamburger",
                                ".logo",
                                "button",
                                ".link",
                            ]}
                        />
                    )}
                    <NavBar />
                    <Hero changeLanguage={changeLanguage} />
                    <Aurora colorStops={["#c0d7d5", "#418383", "#a6cbca"]} speed={1} />
                    <Work />
                    <Skills />
                    <Experience />
                    <Contact />
                </>
            )}
        </>
    );
};

export default Home;

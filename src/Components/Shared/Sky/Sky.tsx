import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import "./Sky.css";

export default function Sky() {
    useEffect(() => {
        anime({
            targets: ".sun",
            translateY: [-900, 0],
            duration: 1750,
            easing: "easeOutExpo",
            delay: 1000,
        });
        anime({
            targets: ".horizont",
            translateY: [900, 0],
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000,
        });
    }, []);

    return (
        <>
            {/* <div className='sun'></div> */}
            <div className='horizont'></div>
        </>
    );
}

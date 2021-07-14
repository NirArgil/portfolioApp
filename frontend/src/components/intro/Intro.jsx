import { init } from 'ityped'
import { useEffect, useRef } from 'react';

import './intro.scss'

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current,{ 
               showCursor: true,
               typeSpeed:  250,
               backSpeed: 70,
               startDelay: 1600,
               backDelay:  2500,
               disableBackTyping: true,
               strings: ['Developer'], });
    }, [])

    return (
        <div className="intro" id="intro">
            {/* <div className="left">
                <div className="imgContainer">
                    <img src="assets/a.jpg" alt="asd" />
                </div>
            </div> */}
            {/* <div className="right"> */}
                <div className="wrapper">
                    <h1>Nir Argil</h1>
                    <h3>Fullstack Web <span ref={textRef}></span> </h3>
                </div>
                <a href="#projects">
                    <span id="icon"></span>
                </a>
            </div>
        // </div>
    )
}

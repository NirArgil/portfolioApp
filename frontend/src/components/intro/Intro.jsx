import { useEffect, useRef, useState } from 'react';
import { init } from 'ityped'

//icons
import { FiMail } from 'react-icons/fi';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';

import Menu from '../menu/Menu';

import './intro.scss'

export default function Intro() {
    const [menuOpen, setMenuOpen] = useState(false);

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            typeSpeed: 250,
            backSpeed: 70,
            startDelay: 1600,
            backDelay: 2500,
            disableBackTyping: true,
            strings: ['Developer'],
        });
    }, [])

    return (
        <div className="intro" id="intro">

            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <div className={"topbar " + (menuOpen && "active")}>

                <div className="wrapper">
                    <div className="left">
                        <a href="#intro" className="logo" >
                            <img src="/assets/logo5.png" alt="LogoPortfolio" />
                        </a>
                    </div>

                    <div className="right">
                        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                            <span className="line1"></span>
                            <span className="line2"></span>
                            <span className="line3"></span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="socials">
                <ul className="ulSocials">

                    <li>
                        <a href="https://www.linkedin.com/in/nir-argil-158815185/" target="_blank" rel="noopener noreferrer">
                            <RiLinkedinBoxFill className="linkedin" />
                        </a>
                    </li>

                    <li>
                        <a href="https://github.com/NirArgil" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="github" />
                        </a>
                    </li>

                    <li>
                        <a href="mailto:nir.argil@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FiMail className="mail" />
                        </a>
                    </li>

                </ul>
                <span className="lineSocials"></span>
            </div>

            <img className="monitors" src="/assets/m9.png" alt="monitors"></img>    

            <div className="wrapperDetails">
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

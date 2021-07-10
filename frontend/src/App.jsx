import { useState } from 'react';

import Intro from './components/intro/Intro';
// import Topbar from './components/topbar/Topbar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';

import Menu from './components/menu/Menu';

import './app.scss';

//icons
import { FiMail } from 'react-icons/fi';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Intro />
      {/* <Topbar open={menuOpen} setOpen={setMenuOpen}/> */}

      <div className={"topbar " + (menuOpen && "active")}>

        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo" >
              <img src="/assets/logo5.png" alt="Logo123" />
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
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
              <RiLinkedinBoxFill className="linkedin" />
            </a>
                          
          </li>

          <li>
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                <FaGithub className="github"/>
              </a>
          </li>
              
           <li>
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
              <FiMail className="mail" />
            </a>
          </li>

        </ul>
        <span className="lineSocials"></span>
      </div>

      {/* <div className="sections"> */}

      <Projects />
      <Skills />
      <Contact />
      <Footer />
      {/* </div> */}
    </div>
  );
}

export default App;

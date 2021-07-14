import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';

import './app.scss';

function App() {

  return (
    <div className="app">

      <Intro />
      <Projects />
      <Skills />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;

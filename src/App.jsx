import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Tecnologies from './components/services/Tecnologies';
import Project from './components/projects/Project';
import Form from './contact/Form';
import AboutMe from './contact/AboutMe';
import { useScroll } from './hooks/useScroll';

function App() {
  const { scrollY } = useScroll();
  const style = {
    paddingTop: scrollY > 70 && '1rem',
    paddingBottom: scrollY > 70 && '1rem',
  };
  return (
    <>
      <header className="header" style={style}>
        <div className="header__container">
          <img className="header__img" src="/logo-icon.svg" alt="Logo" />
        </div>
        <Nav />

        <div className="nav__item header__item">
          <a
            href="https://api.whatsapp.com/send?phone=573213746925&text=Hi!%20I%27m%20interested%20in%20your%20services%20contact%20me"
            target="__blank"
          >
            <img src="/phone.svg" alt="phone icon" className="header__phone" />
          </a>
        </div>
      </header>
      <main>
        <Home />
        <Tecnologies />
        <Project />
        <section className="contact">
          <Form />
          <AboutMe />
        </section>
      </main>
    </>
  );
}

export default App;

import React from 'react';
import './home.css';
const Home = () => {
  return (
    <section className="home">
      <h2 className="home__title">Hey I’m Frontend Developer</h2>
      <img src="/photo-face.png" alt="my face" className="home__avatar" />
      <ul className="home__list">
        <li className="home__item">
          <a
            target="__blank"
            href="https://www.instagram.com/_neobyte_/"
            className="home__link"
          >
            <img
              src="/instagram.svg"
              alt="instagram icon"
              className="home__icon"
            />
          </a>
        </li>
        <li className="home__item">
          <a
            target="__blank"
            href="https://www.linkedin.com/in/anderson-cifuentes-b380a7231/"
            className="home__link"
          >
            <img
              src="/linkedin.svg"
              alt="linkedin icon"
              className="home__icon"
            />
          </a>
        </li>
        <li className="home__item">
          <a
            target="__blank"
            href="https://github.com/oNEOBYTEo"
            className="home__link"
          >
            <img src="/github.svg" alt="github icon" className="home__icon" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Home;

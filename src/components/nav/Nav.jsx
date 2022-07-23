import React, { useState } from 'react';
import './nav.css';
const Nav = () => {
  const [isSelected, setSelected] = useState(0);

  const classSelected = (n) => {
    setSelected(n);
    setTimeout(() => {
      setSelected(0);
    }, 1000);
  };

  return (
    <nav className="nav">
      <ul className="nav__ul">
        <li className="nav__item" onClick={() => classSelected(1)}>
          <a
            href="#"
            className={`nav__link ${
              isSelected == 1 ? 'nav__link--active' : 'nav__link--disabled'
            }`}
          >
            Home
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#services"
            className={`nav__link ${
              isSelected == 2 ? 'nav__link--active' : 'nav__link--disabled'
            }`}
            onClick={() => classSelected(2)}
          >
            Services
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#projects"
            className={`nav__link ${
              isSelected == 3 ? 'nav__link--active' : 'nav__link--disabled'
            }`}
            onClick={() => classSelected(3)}
          >
            Projects
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#contact"
            className={`nav__link ${
              isSelected == 4 ? 'nav__link--active' : 'nav__link--disabled'
            }`}
            onClick={() => classSelected(4)}
          >
            Contact me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

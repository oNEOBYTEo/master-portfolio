import React from 'react';
import Services from './Services';
import './tecnologies.css';

function Tecnologies() {
  return (
    <section className="tecnologies" id="services">
      <div className="tecnologies__container-left">
        <h2 className="tecnologies__title">Tecnologies</h2>
        <ul className="tecnologies__list">
          <li className="tecnologies__item">
            <img
              src="/java-script.svg"
              alt="JavaScript"
              className="tecnologies__icon"
            />
          </li>
          <li className="tecnologies__item">
            <img src="/html5-2.svg" alt="HTML" className="tecnologies__icon" />
          </li>
          <li className="tecnologies__item">
            <img src="/html3-1.svg" alt="" className="tecnologies__icon" />
          </li>
          <li className="tecnologies__item">
            <img src="/github-1.svg" alt="" className="tecnologies__icon" />
          </li>
          <li className="tecnologies__item">
            <img src="/react.svg" alt="React" className="tecnologies__icon" />
          </li>
        </ul>
        <img
          src="/desktop.png"
          alt="desktop person"
          className="tecnologies__img"
        />
      </div>
      <div className="tecnologies__conatiner-right">
        <Services />
      </div>
    </section>
  );
}

export default Tecnologies;

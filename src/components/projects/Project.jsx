import React, { useState } from 'react';
import './project.css';
const Project = () => {
  const [imgSelected, setImgSelected] = useState(2);

  const nextImg = () => {
    if (imgSelected < 3) {
      setImgSelected((e) => e + 1);
    }
  };

  const prevImg = () => {
    if (imgSelected > 1) {
      setImgSelected((e) => e - 1);
    }
  };

  return (
    <section className="project" id="projects">
      <h2 className="project__title">My Projects</h2>
      <div className="project__carousel">
        <div
          className={`project__semicarousel carouse-movement-${imgSelected}`}
        >
          <img
            src="https://picsum.photos/200"
            alt=""
            className={`project__items ${
              imgSelected === 1 && 'carousel-image-active'
            }`}
          />
          <img
            src="https://picsum.photos/300"
            alt=""
            className={`project__items ${
              imgSelected === 2 && 'carousel-image-active'
            }`}
          />
          <img
            src="https://picsum.photos/400"
            alt=""
            className={`project__items ${
              imgSelected === 3 && 'carousel-image-active'
            }`}
          />
        </div>
      </div>
      <div className="project-btn-container">
        <button className="project__buttons" onClick={prevImg}>
          <img src="arrow-left.svg" alt="left" />
        </button>
        <button
          className="project__buttons projec__buttons--shadow-invert"
          onClick={nextImg}
        >
          <img src="/arrow-right.svg" alt="right" />
        </button>
      </div>
    </section>
  );
};

export default Project;

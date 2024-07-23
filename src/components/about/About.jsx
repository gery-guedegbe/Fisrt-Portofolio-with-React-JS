import React from "react";
import "./about.css";
import about from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";
import cvUrl from "../../assets/CV_Géry_Guedegbe.pdf";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={about} alt="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Bienvenue sur mon Portfolio, je m'appelle Géry GUEDEGBE , et je
              suis un développeur web junior passionné par le développement
              front-end et back-end. Je suis constamment à la recherche de
              nouvelles opportunités pour mettre mes compétences en pratique et
              apprendre de nouvelles technologies. Mon parcours est marqué par
              plusieurs projets significatifs qui démontrent ma capacité à
              concevoir et développer des solutions innovantes et
              fonctionnelles.
            </p>
            <a href={cvUrl} className="btn" download>
              Download CV
            </a>
          </div>
          <div className="about__skills grid">
            {/* <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__numbers development">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>  */}

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML, CSS, JavaScript</h3>
                <span className="skills__numbers">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage html"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 translate="no" className="skills__name">
                  Tailwinds CS
                </h3>
                <span className="skills__numbers ">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage css"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React JS, Astro JS</h3>
                <span className="skills__numbers">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage react"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Node JS, Express JS</h3>
                <span className="skills__numbers">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage node-js"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Flutter, Firebase</h3>
                <span className="skills__numbers">40%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage firebase"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;

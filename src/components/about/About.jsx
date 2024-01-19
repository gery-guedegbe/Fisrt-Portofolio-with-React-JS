import React from "react";
import "./about.css";
import about from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={about} alt="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Géry GUEDEGBE, a technology enthusiast based in Cotonou,
              Benin. As a frontend developer, I specialize in creating engaging
              and intuitive web experiences. My commitment to innovation and
              user-centered design is reflected in every line of code I write.
              My goal is to craft exceptional user interfaces that exceed
              expectations while staying attuned to the latest trends and web
              development technologies.
            </p>
            <a href="" className="btn">
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
                <h3 className="skills__name">HTML</h3>
                <span className="skills__numbers">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage html"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">CSS</h3>
                <span className="skills__numbers">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage css"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__numbers">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage javascript"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React JS</h3>
                <span className="skills__numbers">40%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage react"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name"> Chart JS</h3>
                <span className="skills__numbers">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage chart__js"></span>
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

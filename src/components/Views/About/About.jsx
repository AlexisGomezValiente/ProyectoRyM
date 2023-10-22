import styles from "./About.module.css";
import Alexis from "./img/Alexis-PhotoRoom (3).png";
import html from "./img/html.png";
import css from "./img/css.png";
import react from "./img/react.png";
import bs from "./img/bs.png";
import less from "./img/less.png";
import git from "./img/git.png";
import github from "./img/github.png";
import js from "./img/js.png";
import redux from "./img/redux.png";
import { NavLink } from "react-router-dom";
import { BsLinkedin, BsInstagram, BsWhatsapp, BsGithub } from "react-icons/bs";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInfo}>
        <h1 className={styles.titulo}>Alexis Gomez</h1>

        <div className={styles.containerInfo2}>
          <h2 className={styles.h2}>Pais | Paraguay</h2>
          <h2 className={styles.h2}>Genero | Masculino</h2>
          <h2 className={styles.h2}>Edad | 20 años</h2>
          {/* <h2>ORIGIN | {character.origin.name}</h2> */}
        </div>

        <div className={styles.containerTechs}>
          <h2 className={styles.tituloTechs}>Tecnologias:</h2>
          <div className={styles.Techs}>
            <img src={html} alt="html" className={styles.tech} />
            <img src={css} alt="css" className={styles.tech} />
            <img src={js} alt="js" className={styles.tech} />
            <img src={react} alt="react" className={styles.tech} />
            <img src={redux} alt="bs" className={styles.tech} />
            <img src={less} alt="less" className={styles.tech} />
            <img src={git} alt="git" className={styles.tech} />
            <img src={github} alt="github" className={styles.tech} />
          </div>
        </div>
      </div>
      <div className={styles.containerImg}>
        <div>
          <img src={Alexis} alt="Alexis Gomez" className={styles.img} />
        </div>
        <div className={styles.containerSocials}>
          <NavLink
            to={`https://www.linkedin.com/in/alexis-gomez-040a02236/`}
            className={styles.social}
            target="_blank"
          >
            <a>
              <BsLinkedin />
            </a>
          </NavLink>

          <NavLink
            to={`https://github.com/AlexisGomezValiente`}
            className={styles.social}
            target="_blank"
          >
            <a>
              <BsGithub />
            </a>
          </NavLink>

          <NavLink
            to={`https://www.instagram.com/alexisgomez_dev/`}
            className={styles.social}
            target="_blank"
          >
            <a>
              <BsInstagram />
            </a>
          </NavLink>

          <NavLink
            to={`https://wa.link/udmrem`}
            className={styles.social}
            target="_blank"
          >
            <a>
              <BsWhatsapp />
            </a>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;

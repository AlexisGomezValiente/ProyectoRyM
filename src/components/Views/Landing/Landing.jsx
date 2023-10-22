import styles from "./Landing.module.css";
import logo from "./img/logo.png";
import { FaReact } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Landing = (props) => {
  const navigate = useNavigate();

  useEffect(()=>{
    props.pathErrorFalse();
  }, [])

  const onHome = () => {
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <img className={styles.img} src={logo} alt="Logo Rick and Morty" />
        <div className={styles.containerInfo}>
          <h1 className={styles.titulo}>
            Bienvenido/a a mi APP FrontEnd con React!{" "}
            <FaReact className={styles.icon} />
          </h1>
          <p className={styles.description}>
            En esta aplicacion trabajamos con una <span>API</span> que nos trae
            la informacion en formato <span>JSON</span>, para poder trabajar con
            los datos en forma de <span>objeto</span>.
            <br />
            Entra a explorar la <span>APP</span>, y cuentame que te parecio!
          </p>
          <button className={styles.button} onClick={onHome}>Iniciar Sesion</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;

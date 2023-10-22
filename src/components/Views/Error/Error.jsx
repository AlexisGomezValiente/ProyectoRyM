import styles from "./Error.module.css";
import {useEffect } from "react";
import img from "../../img/rick.png";
import { useLocation } from "react-router-dom";

const Error = (props) => {
  const path = useLocation().pathname;

  useEffect(() => {
    props.pathErrorTrue();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.containerInfo}>
          <h1 className={styles.titulo}>ERROR 404</h1>

          <div className={styles.containerInfo2}>
            <h2 className={styles.error404}>PAGE NOT FOUND</h2>
            <h2>Lastimosamente no encontramos la ruta: <span className={styles.linkError}>{path}</span> </h2>
          </div>
        </div>
        <div className={styles.containerImg}>
          <img src={img} alt="Imagen para error 404" className={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default Error;

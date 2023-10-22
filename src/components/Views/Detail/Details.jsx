import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = () => {
  let id = useParams().id;
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.containerInfo}>
        <h1 className={styles.titulo}>{character.name}</h1>

        <div className={styles.containerInfo2}>
          <h2 className={styles.h2}>STATUS | {character.status}</h2>
          <h2 className={styles.h2}>GENDER | {character.gender}</h2>
          <h2 className={styles.h2}>SPECIE | {character.species}</h2>
          {/* <h2>ORIGIN | {character.origin ? character.origin : ''}</h2> */}
        </div>
      </div>
      <div className={styles.containerImg}>
        <img src={character.image} alt={character.name} className={styles.img} />
      </div>
    </div>
  );
};

export default Detail;

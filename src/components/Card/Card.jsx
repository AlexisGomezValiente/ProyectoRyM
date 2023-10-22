import React from "react";
import styles from "./Card.module.css";
import { NavLink } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { addFav, removeFav } from "../../redux/actions";
import {useState, useEffect} from 'react'
import { useSelector } from "react-redux";

export default function Card(props) {
  const cerrarCard = () => {
    props.onClose(props.id);
  };

  const myFavs = useSelector(state => state.myFavs)

  useEffect(() => {
    myFavs.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [myFavs]);

  const [isFav, setIsFav] = useState(false);

  const dispatch = useDispatch();

  const handleFavorite =()=>{
    if(isFav){
      setIsFav(false);
      dispatch(removeFav(props.id))
    }else{
      setIsFav(true)
      dispatch(addFav(props))
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerBoton}>
        <button className={styles.botonFav} onClick={handleFavorite}>{isFav ? `❤️` : `🤍`}</button>
        <button className={styles.boton} onClick={cerrarCard}>
          X
        </button>
      </div>
      <div className={styles.containerInfo}>
        <img className={styles.image} src={props.image} alt={props.name} />
        <div className={styles.containerDescription}>
          <NavLink to={`/detail/${props.id}`} className={({ isActive }) => (isActive ? styles.active : styles.disable)}>
          <h1 className={styles.titulo}>{props.id} - {props.name}</h1>
          </NavLink>
          <h2 className={styles.h2}>{props.status}</h2>
          <h2 className={styles.h2}>{props.species}</h2>
          <h2 className={styles.h2}>{props.gender}</h2>
          <h2 className={styles.h2}>{props.origin}</h2>
        </div>
      </div>
    </div>
  );
}

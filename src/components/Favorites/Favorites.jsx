import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./Favorites.module.css";
import { ordenCharacters, ordenGender, salir } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Favorites = (props) => {
  const myFavs = useSelector((state) => state.myFavs);
  const dispatch = useDispatch();
  
  const handleChangeFilterID = (event) => {
    const metodo = event.target.value;

    if (metodo) dispatch(ordenCharacters(metodo));
  };

  const handleChangeFilterGender = (event) => {
    const metodo = event.target.value;

    if (metodo) dispatch(ordenGender(metodo));
  }

  useEffect(()=>{
    return function(){
      dispatch(salir())
    }
  },[])

  return (
    <div className={styles.cont}>
      <div className={styles.contSelect}>
        <div className={styles.divSelect}>
          <select
            onChange={handleChangeFilterID}
            name=""
            id=""
            className={styles.select}
          >
            <option value="ascendente">Ascendente</option>
            <option value="descendente">Descendente</option>
          </select>
        </div>

        <div className={styles.divSelect}>
          <select onChange={handleChangeFilterGender} name="" id="" className={styles.select}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>
      
      {/* {Aca solo verifico si tiene algo para asi mostrar las cards, porque si no lo verifico se muestra un pequeno cuadro igual aunque no haya nada en myFavs, por eso lo verifco} */}
      {myFavs[0] ? (
        <div className={styles.container}>
          {myFavs.map((character) => {
            return (
              <Card
                key={character.id}
                id={character.id}
                onClose={props.onClose}
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                origin={character.origin.name}
                image={character.image}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Favorites;

import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const characters = props.characters;
  return (
    <div className={styles.cont}>
      <div className={styles.container}>
        {characters.map((character) => {
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
    </div>
  );
}

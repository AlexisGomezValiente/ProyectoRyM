import React from "react";
import styles from "./SearchBar.module.css";
import logo from "../img/logoRick.png";
import { useState } from "react";
import { BsPersonFillAdd } from "react-icons/bs";
import { BsFillHouseFill, BsFileEarmarkPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ImExit } from "react-icons/im";
import { useLocation } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import { BsBookmarkHeartFill } from "react-icons/bs";

export default function SearchBar(props) {
  const path = useLocation().pathname;
  const pathArr = path.split("/");

  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleAddCharacter = () => {
    props.onSearch(id); // Pasar id como argumento a props.onSearch
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerImg}>
        <img src={logo} />
      </div>
      <div className={styles.containerNav}>
        <div>
          <input
            onChange={handleChange}
            value={id}
            type="search"
            className={styles.search}
            placeholder="Ingrese el ID de un personaje..."
          />
          <button className={styles.boton} onClick={handleAddCharacter}>
            Agregar
          </button>
        </div>
        <div>
          {path != "/favorites" ? (
            <button
              className={styles.aleatorio}
              onClick={props.characterRandom}
            >
              <BsPersonFillAdd />
            </button>
          ) : null}
          <Link to={"/favorites"}>
            <button className={styles.aleatorio}>
              <BsBookmarkHeartFill />
            </button>
          </Link>
          <Link to={"/home"}>
            <button className={styles.aleatorio}>
              <BsFillHouseFill />
            </button>
          </Link>
          <Link to={"/about"}>
            <button className={styles.aleatorio}>
              <BsFileEarmarkPersonFill />
            </button>
          </Link>
          {pathArr.includes("detail") ? (
            <Link to={"/home"}>
              <button className={styles.aleatorio}>
                <AiOutlineRollback />
              </button>
            </Link>
          ) : null}
          <Link to={"/"}>
            <button className={styles.aleatorio}>
              <ImExit />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

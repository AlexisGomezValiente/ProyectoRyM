import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import About from "./components/Views/About/About";
import Detail from "./components/Views/Detail/Details";
import { useLocation, useNavigate } from "react-router-dom";
import Error from "./components/Views/Error/Error";
import Landing from "./components/Views/Landing/Landing";
import Form from "./components/Form/Form";
import { useEffect } from "react";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(false);
  const path = useLocation().pathname;

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => {
        return character.id != Number(id);
      })
    );
  };

  const onSearch = (id) => {
    const personajes = [];
    characters.forEach((character) => {
      personajes.push(Number(character.id));
    });

    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name && !personajes.includes(data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else if (personajes.includes(data.id)) {
          window.alert("¡Este personaje ya existe!");
        }
      })
      .catch((error) => {
        window.alert("¡El personaje que has ingresado no EXISTE!");
        console.error(error);
      });
  };

  const characterRandom = () => {
    const personajes = [];
    characters.forEach((character) => {
      personajes.push(Number(character.id));
    });

    let id = Math.floor(Math.random() * 826);
    while (personajes.includes(id)) {
      id = Math.floor(Math.random() * 826);
    }

    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    );
  };

  const [access, setAccess] = useState(false);
  const EMAIL = "wilaleva2019@gmail.com";
  const PASSWORD = "icia1357";
  const navigate = useNavigate();

  const login = (userData, errors) => {
    let veriError = false;
    for (let error in errors) {
      if (errors[error] != "") {
        veriError = true;
      }
    }

    if (!veriError) {
      if (userData.email == EMAIL && userData.pass == PASSWORD) {
        setAccess(true);
        navigate("/home");
      } else {
        alert("Usuario incorrecto");
      }
    } else {
      alert("Verifica tus datos");
    }
  };

  useEffect(() => {
    if(!access && !error) navigate("/");
  }, [access, error]);

  const pathErrorTrue = () => {
    setError(true);
  };

  const pathErrorFalse = () => {
    setError(false);
  };

  return (
    <div className="App">
      {path !== "/" && !error && path !== "/login" ? (
        <Nav onSearch={onSearch} characterRandom={characterRandom} />
      ) : null}

      <Routes>
        <Route path="/" element={<Landing pathErrorFalse={pathErrorFalse} />} />

        <Route path="/login" element={<Form login={login} />} />

        <Route
          path="/home"
          element={
            characters.length ? (
              <Cards characters={characters} onClose={onClose} />
            ) : null
          }
        />

        <Route path="/favorites" element={<Favorites onClose={onClose} />} />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="*" element={<Error pathErrorTrue={pathErrorTrue} />} />
      </Routes>
    </div>
  );
}

export default App;

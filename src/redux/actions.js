const ADD_FAV = "ADD_FAV";
const REMOVE_FAV = "REMOVE_FAV";
const ORDEN_CHARACTERS = "ORDEN_CHARACTERS";
const ORDEN_GENDER = "ORDEN_GENDER";
const SALIR = "SALIR";

const addFav = (personaje) => {
  return { type: ADD_FAV, payload: personaje };
};

const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
};

const ordenCharacters = (metodo) => {
  return { type: ORDEN_CHARACTERS, payload: metodo };
};

const ordenGender = (metodo) => {
  return { type: ORDEN_GENDER, payload: metodo };
};

const salir = () => {
  return { type: SALIR };
};

export {
  ADD_FAV,
  REMOVE_FAV,
  addFav,
  removeFav,
  ORDEN_CHARACTERS,
  ordenCharacters,
  ORDEN_GENDER,
  ordenGender,
  SALIR,
  salir
};

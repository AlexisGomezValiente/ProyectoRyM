import { ADD_FAV, REMOVE_FAV, ORDEN_CHARACTERS, ORDEN_GENDER, SALIR } from "./actions";

const initialState = {
  myFavs: [],
  myFavsOriginal: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return { ...state, myFavs: [...state.myFavs, action.payload], myFavsOriginal: [...state.myFavs, action.payload] };
    case REMOVE_FAV:
      return {
        ...state,
        myFavs: state.myFavs.filter(
          (personaje) => personaje.id != Number(action.payload)
        ),
        myFavsOriginal: state.myFavs
      };
    case ORDEN_CHARACTERS:
      if (action.payload === "ascendente") {
        return {
          ...state,
          myFavs: [...state.myFavs].sort(function (a, b) {
            return a.id - b.id;
          }),
        };
      }else if(action.payload === "descendente"){
        return{
          ...state,
          myFavs: [...state.myFavs].sort(function (a, b) {
            return b.id - a.id;
          }),
        }
      }
    case ORDEN_GENDER:
      if(action.payload == "Male"){
        const copiaFavs = state.myFavsOriginal.filter(personaje => personaje.gender == action.payload)
        return {
          ...state,
          myFavs: copiaFavs
        }
      } else if(action.payload == "Female"){
        const copiaFavs = state.myFavsOriginal.filter(personaje => personaje.gender == action.payload)
        return {
          ...state,
          myFavs: copiaFavs
        }
      }else if(action.payload == "unknown"){
        const copiaFavs = state.myFavsOriginal.filter(personaje => personaje.gender == action.payload)
        return {
          ...state,
          myFavs: copiaFavs
        }
      }else if(action.payload == "Genderless"){
        const copiaFavs = state.myFavsOriginal.filter(personaje => personaje.gender == action.payload)
        return {
          ...state,
          myFavs: copiaFavs
        }
      }
    case SALIR:
      return{
        ...state,
        myFavs: [...state.myFavsOriginal]
      }
    default:
      return { ...state };
  }
};

export default rootReducer;

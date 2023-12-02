import { createContext, useEffect, useReducer, useState } from "react";

export const ContextGlobal = createContext(undefined);

// Toma los Favs del LocalStorage
const getFavsFromStorage = () => {
  const localData = localStorage.getItem("favs");
  return localData ? JSON.parse(localData) : [];
};

// Guarda Favs en LocalStorage
const saveFavsInStorage = (favs) => {
  localStorage.setItem("favs", JSON.stringify(favs));
};


const initialState = { isDark: false, favs: getFavsFromStorage() };


const reducer = (state, action) => {
  switch (action.type) {
    case "add_fav":

    const isAlreadyFav = state.favs.some((fav) => fav.id === action.payload.id);

    if (isAlreadyFav) {
      alert("Dentist is already in favorites!");
      return state;
    }

      const newState = { ...state, favs: [...state.favs, action.payload] };
      saveFavsInStorage(newState.favs);
      alert("Favorite Added");
      return newState;

    case "remove_fav":
      const filteredFavs = state.filter(
        (item) => item.id !== action.payload.id
      );
      saveFavsInStorage(filteredFavs);
      return filteredFavs;
    case "toggle_theme":
      console.log(state);
      const newThemeState = { ...state, isDark: !state.isDark };
      return newThemeState;
    default:
      return state;
  }
};


const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const [dentists, setDentists] = useState([]);

  const getDentists = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setDentists(data);
  };

  useEffect(() => {
    getDentists();
  }, []);


  return (
    <ContextGlobal.Provider value={{ dentists, dispatch, state }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

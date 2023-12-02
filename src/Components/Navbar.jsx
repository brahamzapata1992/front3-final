import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {
    dispatch,
    state: { isDark },
  } = useContext(ContextGlobal);

  return (
    <nav className={isDark ? "dark" : ""}>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/favs">
        <button>Favs</button>
      </Link>
      <Link to="/contacto">
        <button>Contact</button>
      </Link>
      <button onClick={() => dispatch({ type: "toggle_theme" })}>
        Change theme
      </button>
    </nav>
  );
};

export default Navbar;

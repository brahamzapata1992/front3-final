import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import foto from '../Image/doctor.png'

const Card = ({ name, username, id, addFav }) => {
  const {
    state: { isDark },
  } = useContext(ContextGlobal);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="card">
        <img className="doctor-png" src={foto} alt="doctor" />
        <Link to={`/dentist/${id}`}>
          <p className={isDark ? "dark" : ""}>
            {name} - {username}
          </p>
        </Link>
        <button onClick={addFav} className="favButton">
          Add Fav
        </button>
      </div>
    </div>
  );
};

export default Card;

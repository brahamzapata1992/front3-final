import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {
    dentists,
    dispatch,
    state: { isDark },
  } = useContext(ContextGlobal);

  return (
    <main className={isDark ? "dark" : ""}>
      <h1>Home</h1>
      <div className="card-grid">
        {dentists?.map((dentist) => (
          <Card            
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
            addFav={() => dispatch({ type: "add_fav", payload: dentist })}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;

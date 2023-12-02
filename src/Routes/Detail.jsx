import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState([]);
  const { isDark } = useContext(ContextGlobal);

  const getDentist = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    setDentist(data);
  };

  useEffect(() => {
    getDentist();
  }, []);

  return (
    <div className={isDark ? "dark" : ""}>
      <h1>Detail Dentist {id} </h1>
      <div>Name: {dentist.name}</div>
      <div>Email: {dentist.email}</div>
      <div>Phone: {dentist.phone}</div>
      <div>Website: {dentist.website}</div>
    </div>
  );
};

export default Detail;

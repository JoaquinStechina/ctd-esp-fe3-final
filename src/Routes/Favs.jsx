import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useContextGlobal();

  const favs=()=>{
    return JSON.parse(localStorage.getItem("favs"));
  }

  return (
    <>
      <h1>Dentists Favs</h1>
      <br />
      <div className={"card-grid "+state.theme}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs() != null ? favs().map(e=><Card name={e.name} username={e.username} id={e.id}/>) : null}
      </div>
    </>
  );
};

export default Favs;

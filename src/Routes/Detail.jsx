import React, { useState } from 'react'
import { useEffect } from 'react';
import {useParams} from "react-router-dom";
import { useContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {state} = useContextGlobal();
  const [doctor,setDoctor] = useState({});
  const param = useParams();

  useEffect(()=>{
    function fetchData(){
      fetch("https://jsonplaceholder.typicode.com/users/"+param.id)
      .then(resp=>resp.json())
      .then(data=>setDoctor(data))
      .catch(err=>console.log(err));
    }
    fetchData();
  },[param.id])

  return (
    <>
      <h1 className={state.theme}>Detail Dentist {param.id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table className={state.theme}>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </thead>
        <tbody>
          <td>{doctor.name}</td>
          <td>{doctor.email}</td>
          <td>{doctor.phone}</td>
          <td>{doctor.website}</td>
        </tbody>
      </table>
    </>
  )
}

export default Detail
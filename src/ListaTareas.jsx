import React from "react";
import './ListaTareas.css';
import Formulario from "./Formulario";
import Tarea from "./Tarea";

function ListaTareas({ listaTareas, setTareas, verForm }) {

  return (
    <>
      {verForm && <Formulario listaTareas={listaTareas} setTareas={setTareas} />}

      {listaTareas.length === 0 ? (
        <div className="sin-tareas">
          <p>¡Wow! Ni una sola tarea. ¿Es tu día libre?</p>
        </div>

      ) : (
        <div className="contenedor-tareas">
          {listaTareas.map((tarea, index) => (
            <Tarea key={index} titulo={tarea.titulo} estado={tarea.estado} />
          ))}
        </div>

      )}
    </>
  )
}

export default ListaTareas
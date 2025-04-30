import React from "react";
import './ListaTareas.css';
import Formulario from "./Formulario";
import Tarea from "./Tarea";
import { FaThumbsUp } from 'react-icons/fa';

function ListaTareas({ listaTareas, setTareas, verForm }) {
  console.log(listaTareas);
  const eliminarTarea = (idTarea) => {
    setTareas(antTareas => antTareas.filter(tarea => tarea.id !== idTarea));
  }

  const completarTarea = (idTarea) => {
    setTareas(antTareas =>
      antTareas.map(tarea =>
        tarea.id === idTarea
          ? { ...tarea, estado: tarea.estado === 'Pendiente' ? 'Completada' : 'Pendiente' }
          : tarea
      )
    );
  };

  return (
    <>
      {verForm && <Formulario listaTareas={listaTareas} setTareas={setTareas} />}

      {listaTareas.length === 0 ? (
        <div className="sin-tareas">
          <p><FaThumbsUp /> ¡Impresionante! No tienes tareas.</p>
        </div>

      ) : (
        <div className="contenedor-tareas">
          {listaTareas.map((tarea, index) => (

            <Tarea
              titulo={tarea.titulo}
              estado={tarea.estado}
              key={tarea.id}
              eliminar={() => eliminarTarea(tarea.id)}
              completar={() => completarTarea(tarea.id)} />
          ))}
        </div>

      )}
    </>
  )
}

export default ListaTareas
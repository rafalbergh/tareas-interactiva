import React from "react";
import './ListaTareas.css';
import Formulario from "./Formulario";
import Tarea from "./Tarea";

function ListaTareas ({listaTareas,setTareas,verForm}) {

    return (
        <>
          {verForm && <Formulario />}
          {listaTareas.map((tarea)=>{
            return (
              <Tarea titulo={tarea.titulo} estado={tarea.estado}/>
            )
          })

          }
          
        </>
    )
}

export default ListaTareas
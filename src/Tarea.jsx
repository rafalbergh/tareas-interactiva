import React from "react";
import './Tarea.css'

function Tarea ({titulo, estado}) {

    return (

        <div className="tarea">
            <div className="fila">
               <div className="titulo"><h1>{titulo}</h1></div>
               <div className="estado"><h3>{estado}</h3></div>
            </div>
             <button className="bt-completar">Completar</button>
           
            
        </div>
    )
}

export default Tarea
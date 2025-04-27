import React from "react";
import './Header.css'

function Header ({verForm,setVerForm}) {
    const muestraForm = () => {
        setVerForm(!verForm); 
      };

    return(
        <>
        <div className="header">
            <h1>Mis tareas</h1>
            <button className="boton-agregar" onClick={muestraForm}>{verForm ? 'X' : 'Agregar tarea'}</button>
        </div>
        </>
    )
}

export default Header
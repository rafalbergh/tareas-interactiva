import React from "react";
import './Header.css';


function Header ({verForm,setVerForm}) {
    const muestraForm = () => {
        setVerForm(!verForm); 
      };

    return(
        <>
        <div className="header">
            <h1>Mis tareas</h1>
            <button className={verForm ? 'boton-cerrar' : 'boton-agregar'}  onClick={muestraForm}>{verForm ? 'Cerrar' : 'Agregar'}</button>
        </div>
        </>
    )
}

export default Header
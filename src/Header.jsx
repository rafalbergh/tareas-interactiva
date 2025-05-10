import React from "react";
import './Header.css';


function Header({ muestraBoton, titulo, verForm, setVerForm, resumen}) {
    const muestraForm = () => {
        setVerForm(!verForm);
    };
    

    return (
        <>
            <div className="header">
                <h1>{titulo}</h1>
                {
                    muestraBoton ?
                        <>
                            <p>{resumen}</p>
                            <button className={verForm ? 'boton-cerrar' : 'boton-agregar'} onClick={muestraForm}>{verForm ? 'Cerrar' : 'Agregar'}</button>
                        </>
                        :
                        null
                }
            </div>
        </>
    )
}

export default Header
import React from "react";
import './Formulario.css';

function Formulario() {


    return (
        <div className="content-form">
        
            <form className="formulario">
                <input type="text" placeholder="Escribe la tarea..." />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Formulario
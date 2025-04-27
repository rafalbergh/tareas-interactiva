import React from "react";
import './Formulario.css';

function Formulario() {


    return (
        <>
            <form className="formulario">
                <input type="text" placeholder="Escribe la tarea..." />
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default Formulario
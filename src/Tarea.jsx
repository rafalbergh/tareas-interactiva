import React from "react";
import './Tarea.css';
import { FaCheck, FaTrash,FaClock } from 'react-icons/fa';

function Tarea({ titulo, estado }) {

    return (

        <div className="tarea">
            <div className="estado">
                <h3 className={estado === "Pendiente" ? "pendiente" : "completado"}> {estado === "Pendiente" ? <FaClock/> : <FaCheck/>} {estado}</h3>
            </div>

            <div className="titulo">
                <h2>{titulo}</h2>
            </div>

            <div className="boton">
                <button className="bt-eliminar"><FaTrash/></button>
                <button className="bt-completar"><FaCheck/></button>
            </div>

        </div>
    )
}

export default Tarea
import React from "react";
import './Tarea.css';
import { FaCheck, FaTrash, FaClock, FaUndo } from 'react-icons/fa';

function Tarea({ titulo, estado, eliminar, completar }) {

    return (

        <div className="tarea">
            <div className="estado">
                <h3 className={estado === "Pendiente" ? "pendiente" : "completado"}> {estado === "Pendiente" ? <FaClock /> : <FaCheck />} {estado}</h3>
            </div>

            <div className="titulo">
                <p>{titulo}</p>
            </div>

            <div className="boton">
                <button className="bt-eliminar" onClick={eliminar}><FaTrash /></button>
                <button className="bt-completar" onClick={completar}>{estado === "Pendiente" ? <FaCheck /> : <FaUndo />}</button>
            </div>

        </div>
    )
}

export default Tarea
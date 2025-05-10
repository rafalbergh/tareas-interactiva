import React from "react";
import './Datos.css';
import { FaUser } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";

function Datos({ nombre, apellido, direccion, telefono, fechaNacimiento, edad }) {

    return (
        <>
            <div className="contenedor-datos">
                <ul className="lista-datos">
                    <li><FaUser className="icono-viñeta" /> <strong>Nombre:</strong> {nombre}</li>
                    <li><FaUser className="icono-viñeta" /> <strong>Apellido:</strong> {apellido}</li>
                    <li><MdHome className="icono-viñeta" /> <strong>Dirección:</strong> {direccion}</li>
                    <li><AiOutlinePhone className="icono-viñeta" /> <strong>Teléfono:</strong> {telefono}</li>
                    <li><MdHome className="icono-viñeta" /> <strong>Fecha de Nacimiento:</strong> {fechaNacimiento}</li>
                    <li><FaUser className="icono-viñeta" /> <strong>Edad:</strong> {edad}</li>
                </ul>
            </div>
        </>
    )
}

export default Datos
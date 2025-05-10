import React from "react";
import './Menu.css';
import { Link } from "react-router";

function Menu(){

    return(
        <>
        <div className="menu">
           <Link className="link" to={"/MisTareas"}>Mis Tareas</Link>
           <Link className="link" to={"/Info"}>Mi Información</Link>
        </div>
        </>
    )
}

export default Menu
import React from "react";
import Header from "./Header";
import Datos from "./Datos";

function Info() {

    const nombre = "Rafael Alberto";
    const apellido = "García Hernández";
    const direccion = "Costa Rica, San José, Goicoechea, Guadalupe";
    const telefono = "555-1234";
    const fechaNacimiento = "03/10/1988";
    const edad = 34;

    return (
        <>
            <Header muestraBoton={false} titulo="Mis Información" verForm={false} setVerForm={""} resumen={""} />
            <Datos 
              nombre={nombre} 
              apellido={apellido} 
              direccion={direccion} 
              telefono={telefono} 
              fechaNacimiento={fechaNacimiento} 
              edad={edad} 
            />
        </>
    )
}

export default Info

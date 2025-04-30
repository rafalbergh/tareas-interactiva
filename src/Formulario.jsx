import React, { useState } from "react";
import './Formulario.css';

function Formulario({ listaTareas, setTareas }) {
    const [titulo, setTitulo] = useState("");
    const [estado, setEstado] = useState("Pendiente");
    const [id, setId] = useState(Date.now());
    const [error, setError] = useState("");

    const obtieneDescripTarea = (event) => {
        setTitulo(event.target.value);

        if (event.target.value.trim() !== "") {
            setError("");
        }
    }
    const crearTarea = (event) => {
        event.preventDefault();

        if (titulo.trim() === "") {
            setError("El campo no puede estar vacío.");
            return;
        }

        setId(Date.now());

        let tareaNueva = { id, titulo, estado };

        setTareas([...listaTareas, tareaNueva]);

        setTitulo("");
    }

    return (
        <div className="content-form">

            <form className="formulario" onSubmit={(event) => { crearTarea(event) }}>
                <div className="fila-formulario">
                    <input type="text" placeholder="Escribe la tarea..." value={titulo} onChange={(event) => { obtieneDescripTarea(event) }} />
                    <button type="submit">Crear tarea</button>
                </div>
                {error && <p className="mensaje-error">{error}</p>}
            </form>
        </div>
    )
}

export default Formulario
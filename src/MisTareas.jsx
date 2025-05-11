import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import Header from './Header';
import ListaTareas from './ListaTareas';

function MisTareas() {
  const [verForm, setVerForm] = useState(false);
  const [listaTareas, setTareas] = useState([]);
  const [resumen, setResumen] = useState("");

  useEffect(() => {
    const tareasPendientes = listaTareas.filter(t => t.estado === 'Pendiente').length;
    const tareasCompletadas = listaTareas.filter(t => t.estado === 'Completada').length;

    setResumen("Pendientes (" + tareasPendientes + " / Completadas (" + tareasCompletadas + ")");
  }, [listaTareas]);
  return (
    <>
      <Header muestraBoton={true} titulo="Mis Tareas" verForm={verForm} setVerForm={setVerForm} resumen={resumen} />
      <ListaTareas listaTareas={listaTareas} setTareas={setTareas} verForm={verForm} />
    </>
  )

}

export default MisTareas
import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import Header from './Header';
import ListaTareas from './ListaTareas';

function MisTareas() {
  const [verForm, setVerForm] = useState(false);
  const [listaTareas, setTareas] = useState([]);
  const [pendientes, setPendientes] = useState(0);
  const [completadas, setCompletadas] = useState(0);
  const [resumen, setResumen] = useState("");

  useEffect(() => {
    const tareasPendientes = listaTareas.filter(t => t.estado === 'Pendiente').length;
    const tareasCompletadas = listaTareas.filter(t => t.estado === 'Completada').length;

    setPendientes(tareasPendientes);
    setCompletadas(tareasCompletadas);
    setResumen("Pendientes (" + pendientes + " / Completadas (" + completadas + ")");
  }, [listaTareas]);
  return (
    <>
      <Header muestraBoton={true} titulo="Mis Tareas" verForm={verForm} setVerForm={setVerForm} resumen={resumen} />
      <ListaTareas listaTareas={listaTareas} setTareas={setTareas} verForm={verForm} />
    </>
  )

}

export default MisTareas
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
  
    useEffect(() => {
      const tareasPendientes = listaTareas.filter(t => t.estado === 'Pendiente').length;
      const tareasCompletadas = listaTareas.filter(t => t.estado === 'Completada').length;
    
      setPendientes(tareasPendientes);
      setCompletadas(tareasCompletadas);
    }, [listaTareas]);
    return (
        <>
        <Header verForm={verForm} setVerForm={setVerForm} pendientes={pendientes} completadas={completadas}/>
        <ListaTareas listaTareas={listaTareas} setTareas={setTareas} verForm={verForm} />
        </>
    )

}

export default MisTareas
import { useState } from 'react'
import './App.css'
import Header from './Header'
import ListaTareas from './ListaTareas'

function App() {
  const [verForm, setVerForm] = useState(false)
  const [listaTareas, setTareas] = useState([
    {titulo:"Hacer la tarea", estado:"Pendiente"},
    {titulo:"Comer", estado:"Pendiente"},
    {titulo:"Dormir", estado:"Pendiente"}
  ])

  return (
    <>
      <Header verForm={verForm} setVerForm={setVerForm}/>
      <ListaTareas listaTareas={listaTareas} setTareas={setTareas} verForm={verForm}/>
    </>
  )
}

export default App

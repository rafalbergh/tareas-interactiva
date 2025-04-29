import { useState } from 'react'
import './App.css'
import Header from './Header'
import ListaTareas from './ListaTareas'

function App() {
  const [verForm, setVerForm] = useState(false)
  const [listaTareas, setTareas] = useState([
  ])

  return (
    <>
      <Header verForm={verForm} setVerForm={setVerForm}/>
      <ListaTareas listaTareas={listaTareas} setTareas={setTareas} verForm={verForm}/>
    </>
  )
}

export default App

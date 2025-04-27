import { useState } from 'react'
import './App.css'
import Header from './Header'
import ListaTareas from './ListaTareas'

function App() {
  const [listaTareas, setTareas] = useState([])

  return (
    <>
      <Header/>
      <ListaTareas/>
    </>
  )
}

export default App

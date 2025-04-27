import { useState } from 'react'
import './App.css'
import Header from './Header'
import ListaTareas from './ListaTareas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <ListaTareas/>
    </>
  )
}

export default App

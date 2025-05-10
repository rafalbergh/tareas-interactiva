import './App.css';

import MisTareas from './MisTareas';
import Info from './Info';
import Menu from './Menu';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {


  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/MisTareas' element={<MisTareas />} />
          <Route path='/' element={<MisTareas />} />
          <Route path='/Info' element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

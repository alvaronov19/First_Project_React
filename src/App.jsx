import { useState } from 'react'
import './App.css'


import Header from './components/Header' 
import Home from './pages/Home'
import Alimentos from './pages/Alimentos'
import Otros from './pages/Otros'
import Detalle from './pages/Detalle'

function App() {
  const [vistaActual, setVistaActual] = useState('home');

  return (
    <>
      
      <Header cambiarVista={setVistaActual} />

      <div className="container">
        
        {(vistaActual === 'home' || vistaActual === 'movies') && (
          <Home cambiarVista={setVistaActual} />
        )}

        {vistaActual === 'detalle' && <Detalle />}

        {vistaActual === 'alimentos' && <Alimentos />}

        {vistaActual === 'otros' && <Otros />}

      </div>
    </>
  )
}

export default App
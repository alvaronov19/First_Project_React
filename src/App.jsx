import './App.css'
import { Routes, Route } from 'react-router-dom' // Importamos React Router

import Header from './components/Header' 
import Home from './pages/Home'
import Cartelera from './pages/Cartelera'
import Alimentos from './pages/Alimentos'
import Otros from './pages/Otros'
import Detalle from './pages/Detalle'
import Sucursales from './pages/Sucursales'

function App() {
  return (
    <>
      {/* El Header ya no necesita recibir 'cambiarVista' porque las rutas hacen el trabajo */}
      <Header />

      <div className="container">
        
        {/* Aquí definimos nuestras rutas reales */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartelera" element={<Cartelera />} />
          <Route path="/alimentos" element={<Alimentos />} />
          <Route path="/otros" element={<Otros />} />
          <Route path="/sucursales" element={<Sucursales />} />
          
          {/* Ruta dinámica: el :id atrapará el número de la película */}
          <Route path="/pelicula/:id" element={<Detalle />} />
        </Routes>

      </div>
    </>
  )
}

export default App
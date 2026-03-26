// src/routes/AppRouter.jsx
import { Routes, Route } from 'react-router-dom';

// Importamos todas las páginas aquí
import Home from '../pages/Home';
import Cartelera from '../pages/Cartelera';
import Alimentos from '../pages/Alimentos';
import Otros from '../pages/Otros';
import Detalle from '../pages/Detalle';
import Sucursales from '../pages/Sucursales';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cartelera" element={<Cartelera />} />
      <Route path="/alimentos" element={<Alimentos />} />
      <Route path="/otros" element={<Otros />} />
      <Route path="/sucursales" element={<Sucursales />} />
      <Route path="/pelicula/:id" element={<Detalle />} />
    </Routes>
  );
}

export default AppRouter;
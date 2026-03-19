import { NavLink } from 'react-router-dom'; // Importamos NavLink
import cinepolisLogo from '../assets/logo-cinepolis.png'

function Header() {
  
  // Función para saber si estamos en la página actual y pintarla de amarillo
  const linkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    color: isActive ? 'var(--amarillo-cine)' : 'var(--blanco)',      
    fontWeight: 'bold',          
    fontSize: '16px',
    transition: 'color 0.3s',
    borderBottom: isActive ? '2px solid var(--amarillo-cine)' : 'none'
  });

  return (
    <header
      style={{
        backgroundColor: 'var(--azul-cine)', 
        padding: '16px 32px',
        display: 'flex',
        justifyContent: 'space-between',     
        alignItems: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)', 
        position: 'sticky', 
        top: 0,
        zIndex: 100
      }}>

      {/* ZONA IZQUIERDA: Logo + Título */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <img 
          src={cinepolisLogo} 
          alt="Logo Cinepolis" 
          style={{ height: '40px', width: 'auto' }} 
        />
        <h1 style={{ margin: 0, fontSize: '24px', color: 'var(--amarillo-cine)' }}>
            Cinépolis
        </h1>
      </div>

      {/* ZONA DERECHA: Navegación con NavLink */}
      <nav style={{ display: 'flex', gap: '24px' }}>
        <NavLink to="/" style={linkStyle}>Inicio</NavLink>
        <NavLink to="/cartelera" style={linkStyle}>Cartelera</NavLink>
        <NavLink to="/alimentos" style={linkStyle}>Alimentos</NavLink>
        <NavLink to="/otros" style={linkStyle}>Otros</NavLink>
        <NavLink to="/sucursales" style={linkStyle}>Sucursales</NavLink>
      </nav>

    </header>
  )
}

export default Header
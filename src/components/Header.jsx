
import cinepolisLogo from '../assets/logo-cinepolis.png'

function Header({ cambiarVista }) {
  

  const linkStyle = {
    cursor: 'pointer',
    color: 'var(--blanco)',      
    fontWeight: 'bold',          
    fontSize: '16px',
    transition: 'color 0.3s'
  };

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
        <h1 style={{ 
            margin: 0, 
            fontSize: '24px', 
            color: 'var(--amarillo-cine)' 
          }}>
            Cinépolis
        </h1>
      </div>

      {/* ZONA DERECHA: Navegación */}
      <nav style={{ display: 'flex', gap: '24px' }}>
        <span style={linkStyle} onClick={() => cambiarVista('home')}>
          Cartelera
        </span>
        <span style={linkStyle} onClick={() => cambiarVista('alimentos')}>
          Alimentos
        </span>
        <span style={linkStyle} onClick={() => cambiarVista('otros')}>
          Otros
        </span>
      </nav>

    </header>
  )
}

export default Header
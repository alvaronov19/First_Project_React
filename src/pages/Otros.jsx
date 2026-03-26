import { useState, useEffect } from 'react';

function Otros() {
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      const datos = await obtenerNoticias();
      setNoticias(datos);
      setCargando(false);
    };
    cargarDatos();
  }, []);

  return (
    <main style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      
      <h2 style={{ fontSize: '24px', borderBottom: '4px solid var(--amarillo-cine)', display: 'inline-block' }}>
        Promociones y Más
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '20px', marginBottom: '40px' }}>
        
        {/* Tarjeta de Promoción */}
        <div style={{ backgroundColor: 'var(--azul-cine)', color: 'var(--blanco)', padding: '24px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ color: 'var(--amarillo-cine)', margin: 0 }}>Martes 2x1</h3>
            <p style={{ fontSize: '14px' }}>Presentando tu tarjeta Club Cinépolis en taquilla.</p>
          </div>
          <button style={{ backgroundColor: 'var(--amarillo-cine)', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', color: 'black', fontWeight: 'bold' }}>
            Ver Términos
          </button>
        </div>

        {/* Tarjeta de Membresía */}
        <div style={{ backgroundColor: 'var(--blanco)', border: '1px solid #ddd', padding: '24px', borderRadius: '12px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: 'var(--azul-cine)' }}>Membresía Club Cinépolis</h3>
          <p style={{ color: 'var(--gris)', margin: 0 }}>Acumula puntos y obtén beneficios exclusivos en cada visita.</p>
        </div>

      </div>

      <h2 style={{ fontSize: '24px', borderBottom: '4px solid var(--amarillo-cine)', display: 'inline-block' }}>
        Noticias del Cine
      </h2>

      {cargando ? (
        <p>Cargando noticias desde el servidor...</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
        
          {noticias.map((noticia) => (
            <div key={noticia.id} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', borderLeft: '5px solid var(--azul-cine)', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
              <h3 style={{ textTransform: 'capitalize', margin: '0 0 10px 0', color: 'var(--azul-cine)' }}>
                {noticia.title}
              </h3>
              <p style={{ color: 'var(--gris)', margin: 0 }}>
                {noticia.body}
              </p>
            </div>
          ))}
        </div>
      )}

    </main>
  )
}

export default Otros;
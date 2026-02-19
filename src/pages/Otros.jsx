function Otros() {
  return (
    <main style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '24px', borderBottom: '4px solid var(--amarillo-cine)', display: 'inline-block' }}>
        Promociones y Más
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '20px' }}>
        
        {/* Tarjeta de Promoción (Estilo horizontal) */}
        <div style={{
          backgroundColor: 'var(--azul-cine)',
          color: 'var(--blanco)',
          padding: '24px',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap' 
        }}>
          <div>
            <h3 style={{ color: 'var(--amarillo-cine)', margin: 0 }}>Martes 2x1</h3>
            <p style={{ fontSize: '14px' }}>Presentando tu tarjeta Club Cinépolis en taquilla.</p>
          </div>
          <button style={{
            backgroundColor: 'var(--amarillo-cine)',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            color: 'black' 
          }}>Ver Términos</button>
        </div>

        {/* Tarjeta de Membresía */}
        <div style={{
          backgroundColor: 'var(--blanco)',
          border: '1px solid #ddd',
          padding: '24px',
          borderRadius: '12px',
        }}>
          <h3>Membresía Club Cinépolis</h3>
          <p style={{ color: 'var(--gris)' }}>Acumula puntos y obtén beneficios exclusivos en cada visita.</p>
        </div>

      </div>
    </main>
  )
}

export default Otros
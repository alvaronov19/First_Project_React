function Sucursales() {
  return (
    <main style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ fontSize: '28px', borderBottom: '4px solid var(--amarillo-cine)', display: 'inline-block' }}>
        Nuestras Sucursales
      </h2>
      <p style={{ color: 'var(--gris)', marginTop: '20px' }}>
        Encuentra tu Cinépolis más cercano y disfruta de la magia del cine.
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px', flexWrap: 'wrap' }}>
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', width: '300px', backgroundColor: 'var(--blanco)' }}>
          <h3 style={{ color: 'var(--azul-cine)' }}>Cinépolis Altabrisa</h3>
          <p>Mérida, Yucatán</p>
        </div>
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', width: '300px', backgroundColor: 'var(--blanco)' }}>
          <h3 style={{ color: 'var(--azul-cine)' }}>Cinépolis Las Américas</h3>
          <p>Mérida, Yucatán</p>
        </div>
      </div>
    </main>
  )
}

export default Sucursales;
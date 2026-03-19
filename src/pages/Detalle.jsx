import { useState } from 'react';

function Detalle(){
 
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState(1);
  const [mensajeCompra, setMensajeCompra] = useState('');


  const manejarCompra = (e) => {
    e.preventDefault(); 
    setMensajeCompra(`¡Éxito, ${nombre}! Has comprado ${cantidad} boleto(s). Te enviamos los detalles a tu correo.`);
    setNombre('');
    setCantidad(1);
  };

  return (
    <main style={{ maxWidth: '600px', margin: '40px auto', padding: '24px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h2 style={{ borderBottom: '3px solid var(--amarillo-cine)', paddingBottom: '10px' }}>Comprar Boletos</h2>
      
      {mensajeCompra && (
        <div style={{ backgroundColor: '#d4edda', color: '#155724', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
          {mensajeCompra}
        </div>
      )}

      <form onSubmit={manejarCompra} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
          <label style={{ fontWeight: 'bold', marginBottom: '8px' }}>Nombre completo:</label>
          <input 
            type="text" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)}
            required
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            placeholder="Ej. Juan Pérez"
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
          <label style={{ fontWeight: 'bold', marginBottom: '8px' }}>Cantidad de boletos:</label>
          <input 
            type="number" 
            min="1" 
            max="10"
            value={cantidad} 
            onChange={(e) => setCantidad(e.target.value)} 
            required
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <button type="submit" style={{ backgroundColor: 'var(--azul-cine)', color: 'white', padding: '12px', fontSize: '16px', marginTop: '10px' }}>
          Confirmar Compra
        </button>
      </form>
    </main>
  )
}

export default Detalle;
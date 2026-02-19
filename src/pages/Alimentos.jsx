import Button from '../components/Button'

import iceeImg from '../assets/icee.png'
import hotdogImg from '../assets/hotdog.png'

function Alimentos() {
  const alimentos = [
    // --- CATEGORÍA: SNACKS ---
    { 
      id: 1, 
      nombre: "Palomitas Clásicas", 
      categoria: "Snacks", 
      precio: "$85", 
      img: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=300&q=80" 
    },
    { 
      id: 2, 
      nombre: "Nachos con Queso", 
      categoria: "Snacks", 
      precio: "$75", 
      img: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=300&q=80" 
    },

    // --- CATEGORÍA: BEBIDAS ---
    { 
      id: 3, 
      nombre: "Refresco Grande", 
      categoria: "Bebidas", 
      precio: "$60", 
      img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80" 
    },
    { 
      id: 4, 
      nombre: "ICEE de Cereza", 
      categoria: "Bebidas", 
      precio: "$70", 
      img: iceeImg 
    },

    // --- CATEGORÍA: COMESTIBLES ---
    { 
      id: 5, 
      nombre: "Hot Dog", 
      categoria: "Comestibles", 
      precio: "$55", 
      img: hotdogImg
    },
    { 
      id: 6, 
      nombre: "Pizza Pepperoni", 
      categoria: "Comestibles", 
      precio: "$95", 
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=300&q=80" 
    },
  ];

  return (
    <main style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '24px', borderBottom: '4px solid var(--amarillo-cine)', display: 'inline-block' }}>
        Dulcería y Alimentos
      </h2>

      {/* Grid Responsivo */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '24px',
        marginTop: '24px'
      }}>
        {alimentos.map((item) => (
          <div key={item.id} className="card" style={{
            padding: '16px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: 'var(--blanco)',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <img 
              src={item.img} 
              alt={item.nombre} 
              style={{ 
                width: '100%', 
                height: '160px', 
                objectFit: 'cover', 
                borderRadius: '8px',
                marginBottom: '12px'
              }} 
            />
            
            <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', margin: '8px 0', color: '#333' }}>{item.nombre}</h3>
                <span style={{ 
                    backgroundColor: 'var(--azul-cine)', 
                    color: 'white', 
                    padding: '4px 8px', 
                    borderRadius: '12px', 
                    fontSize: '12px',
                    textTransform: 'uppercase'
                }}>
                    {item.categoria}
                </span>
                <p style={{ fontWeight: 'bold', fontSize: '22px', color: 'var(--azul-cine)', margin: '12px 0' }}>
                    {item.precio}
                </p>
            </div>
            
            <Button text="Agregar" OnClick={() => alert(`Agregaste ${item.nombre}`)} />
          </div>
        ))}
      </div>
    </main>
  )
}

export default Alimentos
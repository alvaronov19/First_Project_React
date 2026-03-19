import { useState } from 'react';
import Button from "./Button";

function MovieCard({title, image, onVerDetalles}){

  const [esFavorito, setEsFavorito] = useState(false);


  const alternarFavorito = () => {
    setEsFavorito(!esFavorito); 
  };

  return (
    <div style={{
        border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: 'var(--blanco)',
        display: 'flex', flexDirection: 'column'
      }}>
      <img src={image} alt={title} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
      
      <div style={{ padding: '16px', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '12px' }}>
        <h3 style={{ fontSize: '18px', margin: 0 }}>{title}</h3>
        
        <button 
          onClick={alternarFavorito}
          style={{
            backgroundColor: 'transparent',
            border: '1px solid var(--azul-cine)',
            color: esFavorito ? 'red' : 'var(--azul-cine)',
            padding: '8px', borderRadius: '4px', cursor: 'pointer',
            fontWeight: 'bold'
          }}>
          {esFavorito ? '❤️ Agregado a Favoritos' : '🤍 Marcar como Favorito'}
        </button>

        <Button text="Comprar Boletos" OnClick={onVerDetalles} />
      </div>
    </div>
  )
}

export default MovieCard;
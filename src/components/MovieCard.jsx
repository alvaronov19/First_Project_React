import Button from "./Button"
  //Tarjeta de pelicula reutilizable
  function MovieCard({title, image, onVerDetalles}){
    return (
      <div
        style={{
          border: '1px solid #ddd',
          padding: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        }}
        >
          
          <img 
            src={image}
            alt={title}
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover', 
            }}
          />
          
         
          <div
            style={{
              padding: '12px',
              textAlign: 'center',
            }}>
        <h3>{title}</h3>
        
        <Button text="Ver horarios" onClick={onVerDetalles} />
      </div>
      </div>
    )
  }
  
  export default MovieCard
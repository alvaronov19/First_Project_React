import MovieCard from '../components/MovieCard'

function Cartelera({cambiarVista}){
    return (
        <main
        style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            padding: '16px',
            gap: '16px',
        }}>
        <MovieCard
            title="Batman: El Caballero de la Noche"
            image="https://via.placeholder.com/300x450"
            onVerDetalles={() => cambiarVista("detalle")}

            />
        <MovieCard
            title="Spiderman: No Way Home"
            image="https://via.placeholder.com/300x450"
            onVerDetalles={() => cambiarVista("detalle")}
        />
    </main>
    )}

    export default Cartelera
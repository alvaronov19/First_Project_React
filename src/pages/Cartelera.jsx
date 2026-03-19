import MovieCard from '../components/MovieCard'
import { useNavigate } from 'react-router-dom'

function Cartelera() {
    const navigate = useNavigate();

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
                onVerDetalles={() => navigate("/pelicula/1")}
            />
            
            <MovieCard
                title="Spiderman: No Way Home"
                image="https://via.placeholder.com/300x450"
                onVerDetalles={() => navigate("/pelicula/2")}
            />
        </main>
    )
}

export default Cartelera
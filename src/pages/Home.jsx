import MovieCard from '../components/MovieCard'

function Home({cambiarVista}){
    return (
        <main
            style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                padding: '24px',
                gap: '24px', 
                marginTop: '20px'
            }}>
            
            {/* Película 1  BATMAN */}
            <MovieCard
                title="Batman: El Caballero de la Noche"
                image="https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
                onVerDetalles={() => cambiarVista("detalle")}
            />
            
            {/* Película 2 SPIDERMAN */}
            <MovieCard
                title="Spiderman: No Way Home"
                image="https://image.tmdb.org/t/p/w500/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg"
                onVerDetalles={() => cambiarVista("detalle")}
            />
            
            {/* Película 3 INTERSTELLAR */}
            <MovieCard
                title="Interstellar"
                image="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
                onVerDetalles={() => cambiarVista("detalle")}
            />

            {/* Película 4  DUNE */}
            <MovieCard
                title="Dune: Parte Dos"
                image="https://image.tmdb.org/t/p/w500/czembW0Rk1Ke7lCJGahbOhdCuhV.jpg"
                onVerDetalles={() => cambiarVista("detalle")}
            />
        </main>
    )
}

export default Home
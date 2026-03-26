
export const obtenerNoticias = async () => {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error("Error al cargar las noticias desde el servidor externo:", error);
        return [];
    }
}
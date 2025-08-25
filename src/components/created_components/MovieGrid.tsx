    import UseMovies from "@/hooks/useMovies"; 
    import { SimpleGrid, Text } from "@chakra-ui/react";
    import MovieCard from "./MovieCard";
    
    const MovieGrid = () => {

        const {movies, error} = UseMovies(); 
        return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={3} gap={3}>
                {movies.map(movie => <MovieCard movie = {movie} key={movie.id} />)}
            </SimpleGrid>
        </>
        )
    }

    


export default MovieGrid; 
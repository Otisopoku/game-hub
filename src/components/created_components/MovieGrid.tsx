    import UseMovies from "@/hooks/useMovies"; 
    import { SimpleGrid, Text } from "@chakra-ui/react";
    import MovieCard from "./MovieCard";
    
    const MovieGrid = () => {

        const {movies, error} = UseMovies(); 
        return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding="10px" gap="10px">
                {movies.map(movie => <MovieCard movie = {movie} key={movie.id} />)}
            </SimpleGrid>
        </>
        )
    }

    


export default MovieGrid; 
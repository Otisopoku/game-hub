import UseMovies, { Movie } from "@/hooks/useMovies";
import { SimpleGrid, Text, Box } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import { Genre } from "@/hooks/useGenres";
import { sortFunctions } from "@/utility/sort";

interface Props {
  selectedGenre: Genre | null;
  sortOption: string | null;
}

const MovieGrid = ({ selectedGenre, sortOption }: Props) => {
  const { movies, error, isLoading } = UseMovies();

  console.log(`Selected Genre ${selectedGenre?.name}`);
  const filteredMovies: Movie[] = selectedGenre
    ? movies.filter((movie) => movie.genre_ids.includes(selectedGenre.id))
    : [...movies]; // creates a copy of the movies
  let sortMovies = [...filteredMovies];

  if (sortOption) {
    sortMovies = sortFunctions[sortOption](sortMovies);
  }
  const skeletons = [1, 2, 3, 4, 5, 6];

  const noMatches =
    selectedGenre && filteredMovies.length === 0 && !isLoading && !error;

  return (
    <>
      {error && <Text color="red.500">{error}</Text>}

      {noMatches && (
        <Box textAlign="center" padding="20px">
          <Text fontSize="xl" fontWeight="semibold">
            No movies found for the genre "{selectedGenre.name}" 😕
          </Text>
          <Text color="gray.500" mt={2}>
            Try selecting a different genre or check back later.
          </Text>
        </Box>
      )}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        gap="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => <MovieCardSkeleton key={skeleton} />)}

        {sortMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;

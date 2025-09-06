import UseMovies from "@/hooks/useMovies";
import { SimpleGrid, Text } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import { useState } from "react";
import MovieCardSkeleton from "./MovieCardSkeleton";

const MovieGrid = () => {
  const { movies, error, isLoading } = UseMovies();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        gap="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => <MovieCardSkeleton key={skeleton} />)}
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;

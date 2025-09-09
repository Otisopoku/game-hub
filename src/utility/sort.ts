import { Movie } from "@/hooks/useMovies";

export const sortByPopularity = (movieList: Movie[]) => {
  return movieList.sort((a, b) => b.popularity - a.popularity);
};

export const sortByVotes = (movieList: Movie[]) => {
  return movieList.sort((a, b) => b.vote_count - a.vote_count);
};

export const sortByAverageVotes = (movieList: Movie[]) => {
  return movieList.sort((a, b) => b.vote_average - a.vote_average);
};

export const sortByReleaseDate = (movieList: Movie[]) => {
  return movieList.sort(
    (a, b) =>
      new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
  );
};

export const defaultSort = (movieList: Movie[]) => {
  return movieList;
};

export const sortFunctions: Record<string, (movies: Movie[]) => Movie[]> = {
  popularity: sortByPopularity,
  votes: sortByVotes,
  averageVotes: sortByAverageVotes,
  releaseDate: sortByReleaseDate,
  sort: defaultSort,
};

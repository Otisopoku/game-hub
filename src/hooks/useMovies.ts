import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
  adult: boolean;
  genre_ids: number[];
  overview: string;
}

export interface FetchPopularMoviesResponse {
  page: number;
  results: Movie[];
}

const UseMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    {
      /** Handles the case when the user cancels the request */
    }
    setLoading(true);
    apiClient
      .get<FetchPopularMoviesResponse>("/movie/popular", {
        signal: controller.signal,
      })
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { movies, error, isLoading };
};

export default UseMovies;

import apiClient from "@/services/api-client";
import { useEffect, useState } from "react"

interface Movie {
    id: number; 
    title: string; 
    release_date: string; 
    vote_average: number;

}

interface FetchPopularMoviesResponse {
    page: number;
    results: Movie[];
}

const MovieGrid = () => {
    const [movies, setMovies] = useState<Movie []>([]); 
    const [error, setError] = useState(''); 

    useEffect(() => {
        apiClient.get<FetchPopularMoviesResponse>('/popular')
        .then(res => setMovies(res.data.results))
        .catch(err => setError(err.message))
    })

    return (
        <ul>
            {movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
        </ul>
    )


}

export default MovieGrid; 
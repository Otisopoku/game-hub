import apiClient from "@/services/api-client";
import { Text } from "@chakra-ui/react";
import { CanceledError } from "axios";
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

const UseMovies = () => {
    const [movies, setMovies] = useState<Movie []>([]); 
    const [error, setError] = useState(''); 

    useEffect(() => {

        const controller = new AbortController(); {/** Handles the case when the user cancels the request */}
        apiClient.get<FetchPopularMoviesResponse>('/popular', {signal: controller.signal })
        .then(res => setMovies(res.data.results))
        .catch(err => {
            if (err instanceof CanceledError) return; 
            setError(err.message)
            
        })

        return () => controller.abort(); 
    }, [])

    return {movies, error}

}

export default UseMovies;
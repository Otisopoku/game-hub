import axios from 'axios';

export default axios.create(
    {
        baseURL: "https://api.themoviedb.org/3/movie",
        params: {
            language: 'en-US', 
            page: '1',
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjk2MTM5NGM3N2UzYjZjZWZjNTA1MDU5MzBlZjEyYSIsIm5iZiI6MTc1NTg5OTE1NS4xMDYsInN1YiI6IjY4YThlNTEzNDZhOWM4OTNlZDZjZGJkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w35tW4YGfhtIL0PUFyJBybDzjE9keNt-1HxIYxO2PNg'
        }
    }
        
)
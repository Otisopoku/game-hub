import { Movie } from "@/hooks/useMovies"
import { Button, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react"

interface Props{
    movie: Movie
}

const imageBaseUrl = "https://image.tmdb.org/t/p/w300";

const getBackdropUrl = (backDropPath: string) => {
    return `${imageBaseUrl}${backDropPath}`
}
const MovieCard = ({movie}: Props) => {
    const image_src = getBackdropUrl(movie.backdrop_path);
    return (
        <Card.Root maxW = "sm" overflow="hidden" borderRadius="10px">
            <Image src={image_src} width="100%"/>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Text>{movie.overview}</Text>
            </Card.Body>
            <Card.Footer>
                <Button>{`Rating: ${movie.vote_average}`}</Button>
                <Button>{movie.adult ? "PG-21": "PG-14"}</Button>

            </Card.Footer>
        </Card.Root>
    )
}

export default MovieCard
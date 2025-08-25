import { Movie } from "@/hooks/useMovies"
import { Card, CardBody, Heading, Image } from "@chakra-ui/react"

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
        <Card.Root>
            <Image src={image_src} boxSize="200px"/>
            <CardBody>
                <Heading>{movie.title}</Heading>
            </CardBody>
        </Card.Root>
    )
}

export default MovieCard
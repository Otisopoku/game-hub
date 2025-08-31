
import {motion} from "motion/react"
import { Movie } from "@/hooks/useMovies"
import { Button, Card, Image, Text } from "@chakra-ui/react"
import { Tooltip } from "@/components/ui/tooltip";
import { SiPrimevideo } from "react-icons/si";

interface Props{
    movie: Movie
}

const descriptionLimit = 200; 

const shortenDescription = (description: string) => {
    if (description.length > descriptionLimit){
        return description.slice(0, descriptionLimit);
    }
    return description;

}

const imageBaseUrl = "https://image.tmdb.org/t/p/w300";

const getBackdropUrl = (backDropPath: string) => {
    return `${imageBaseUrl}${backDropPath}`
}

const MotionCard = motion.create(Card.Root);

const MovieCard = ({movie}: Props) => {
    const image_src = getBackdropUrl(movie.backdrop_path);
    const isLong = movie.overview.length > descriptionLimit;
    return (
        
        <MotionCard
            maxW = "2xl"
            overflow="hidden"
            borderRadius= "4xl"
            boxShadow="md"
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
                zIndex: 1
            }}
            whileTap={{
                scale: 0.8,
            }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
            }}
            >
            <Image src={image_src} width="100%"/>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>

                {
                    isLong ? (
                        <Text>
                            {shortenDescription(movie.overview)}
                            <Tooltip content={movie.overview} positioning = {{placement: "top"}}>
                                <Button size = "xs" variant="ghost" p={1} ><Text fontSize="2xl">💡</Text></Button>
                            </Tooltip>
                        </Text>
                    ): (
                        <Text>{movie.overview}</Text>
                    )
                }
                <SiPrimevideo size="50px"/>
            </Card.Body>
            <Card.Footer>
                <Button>{`Rating: ${movie.vote_average}`}</Button>
                <Button>{movie.adult ? "PG-21": "PG-14"}</Button>

            </Card.Footer>
        </MotionCard>
    )
}

export default MovieCard




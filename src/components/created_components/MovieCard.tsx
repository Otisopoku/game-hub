import { hover, motion } from "motion/react";
import { Movie } from "@/hooks/useMovies";
import {
  Badge,
  Box,
  Button,
  Card,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { SiPrimevideo } from "react-icons/si";
import { useState } from "react";
import axios from "axios";
import { providers } from "@/assets/providers";

interface Props {
  movie: Movie;
}

const descriptionLimit = 200;

const shortenDescription = (description: string) => {
  if (description.length > descriptionLimit) {
    return description.slice(0, descriptionLimit);
  }
  return description;
};

const imageBaseUrl = "https://image.tmdb.org/t/p/w300";

const getBackdropUrl = (backDropPath: string) => {
  return `${imageBaseUrl}${backDropPath}`;
};

const MotionCard = motion.create(Card.Root);

const MovieCard = ({ movie }: Props) => {
  const image_src = getBackdropUrl(movie.backdrop_path);
  const [hovered, setHovered] = useState(false);
  return (
    <MotionCard
      maxW="2xl"
      overflow="hidden"
      borderRadius="4xl"
      boxShadow="md"
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
        zIndex: 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileTap={{
        scale: 0.8,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 20,
      }}
    >
      <Image src={image_src} width="100%" />
      <Card.Body>
        <Card.Title fontFamily="sans-serif" fontSize="2xl">
          {movie.title}
        </Card.Title>
      </Card.Body>
      <Card.Footer>
        <HStack gap="2px" justify="space-between" w="100%">
          <Badge
            fontFamily="sans-serif"
            fontWeight="bold"
            fontSize="12px"
            color={movie.adult ? "red" : "green"}
          >
            {movie.adult ? "PG-21" : "PG-14"}
          </Badge>
          <HStack>
            {providers.map((provider, index) => (
              <Icon as={provider} key={index} maxHeight="40px" />
            ))}
          </HStack>
        </HStack>
      </Card.Footer>

      <Box
        position="absolute"
        inset={0}
        bg="rgba(0, 0, 0, 0, 0.85)"
        color="white"
        opacity={0}
        p={4}
        transition="opacity 0.25s ease"
        _hover={{ opacity: 1 }}
        borderRadius="xl"
        overflow="auto"
      >
        {hovered && (
          <Text mt={2} fontSize="sm" fontFamily="">
            {movie.overview}
          </Text>
        )}
      </Box>
    </MotionCard>
  );
};

export default MovieCard;

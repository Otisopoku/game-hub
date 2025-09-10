import { hover, motion } from "motion/react";
import { Movie } from "@/hooks/useMovies";
import placeholder from "../../assets/no-image-placeholder-6f3882e0.webp";
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
import { useColorModeValue } from "../ui/color-mode";
import { use } from "motion/react-client";

interface Props {
  movie: Movie;
}

const descriptionLimit = 300;

const shortenDescription = (description: string) => {
  if (description.length > descriptionLimit) {
    return description.slice(0, descriptionLimit) + "...";
  }
  return description;
};

const imageBaseUrl = "https://image.tmdb.org/t/p/w300";

const getBackdropUrl = (backDropPath: string) => {
  if (backDropPath) return `${imageBaseUrl}${backDropPath}`;
  else return null;
};

const MotionCard = motion.create(Card.Root);

const MovieCard = ({ movie }: Props) => {
  const image_src = getBackdropUrl(movie.backdrop_path);
  const [hovered, setHovered] = useState(false);
  const overlayBg = useColorModeValue(
    "rgba(222, 215, 215, 0.6)",
    "rgba(0, 0, 0, 0.75)"
  );
  const textShadow = useColorModeValue(
    "0 1px 2px rgba(255,255,255,0.6)",
    "0 1px 2px rgba(0,0,0,0.8)"
  );

  const textColor = useColorModeValue("black", "white");
  const hoverBg = useColorModeValue("gray.100", "gray.700");
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
      <Box position="relative" width="100%">
        <Image src={image_src ? image_src : placeholder} width="100%" />

        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={overlayBg}
          color={textColor}
          backdropFilter="blur(0.5px)"
          opacity={0}
          p={4}
          transition="opacity 0.25s ease"
          _hover={{ opacity: 1 }}
          borderRadius="inherit"
          overflow="hidden"
        >
          {hovered && (
            <Text
              mt={2}
              fontSize="sm"
              fontFamily="sans-serif"
              textShadow={textShadow}
            >
              {shortenDescription(movie.overview)}
            </Text>
          )}
        </Box>
      </Box>

      <Card.Body>
        <Card.Title fontFamily="sans-serif" fontSize="xl">
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
    </MotionCard>
  );
};

export default MovieCard;

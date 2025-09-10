import { Genre } from "@/hooks/useGenres";
import { Heading } from "@chakra-ui/react";

interface Props {
  genre: Genre | null;
}

const MovieHeading = ({ genre }: Props) => {
  const heading = genre ? `${genre.name} Movies` : "";

  return (
    <Heading
      marginBottom="10px"
      marginLeft="10px"
      fontSize="3xl"
      fontWeight="bolder"
      as="h1"
    >
      {heading}
    </Heading>
  );
};

export default MovieHeading;

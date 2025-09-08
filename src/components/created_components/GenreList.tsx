import useGenres, { Genre } from "@/hooks/useGenres";
import GenreButton from "./GenreButton";
import { Spinner, VStack, Text } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { genres, isLoading, error } = useGenres();

  if (error) {
    return <Text>Sorry there was an error fetching genres {error}</Text>;
  } else if (isLoading) {
    return (
      <VStack colorPalette="teal">
        <Spinner color="colorPalette.600" />
        <Text color="colorPalette.600">Loading...</Text>
      </VStack>
    );
  }

  return (
    <ul>
      {genres?.map((genre: Genre) => (
        <li key={genre.id}>
          <GenreButton
            onClickGenre={() => onSelectGenre(genre)}
            genre={genre}
            selectedGenre={selectedGenre}
          />
        </li>
      ))}
    </ul>
  );
};

export default GenreList;

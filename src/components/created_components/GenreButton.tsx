import { Genre } from "@/hooks/useGenres";
import { Button } from "@chakra-ui/react";

interface Props {
  genre: Genre;
  onClickGenre: (genre: Genre) => void;
}

const genreEmojis: Record<string, string> = {
  Action: "🔫",
  Adventure: "🧭",
  Animation: "🐭",
  Comedy: "😂",
  Crime: "🕵️‍♂️",
  Documentary: "🎥",
  Drama: "🎭",
  Family: "👨‍👩‍👧‍👦",
  Fantasy: "🐉",
  History: "📜",
  Horror: "👻",
  Music: "🎵",
  Mystery: "🕵️",
  Romance: "❤️",
  "Science Fiction": "🚀",
  "TV Movie": "📺",
  Thriller: "🔍",
  War: "🪖",
  Western: "🤠",
};

const GenreButton = ({ genre, onClickGenre }: Props) => {
  const emoji = genreEmojis[genre.name] || "";
  return (
    <Button
      colorPalette="green"
      variant="outline"
      border="none"
      width="100%"
      color="white"
      fontFamily="sans-serif"
      _hover={{ color: "green.400", borderRadius: "30px" }}
      onClick={() => onClickGenre(genre)}
    >
      {emoji} {genre.name}
    </Button>
  );
};

export default GenreButton;

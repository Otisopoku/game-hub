import { Button } from "@chakra-ui/react";

interface Props {
  genreName: string;
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

const GenreButton = ({ genreName }: Props) => {
  const emoji = genreEmojis[genreName] || "";
  return (
    <Button
      colorPalette="green"
      variant="outline"
      border="none"
      width="100%"
      color="white"
      fontFamily="sans-serif"
      _hover={{ color: "green.400", borderRadius: "30px" }}
    >
      {emoji} {genreName}
    </Button>
  );
};

export default GenreButton;

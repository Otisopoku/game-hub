import UseMovies, { Movie } from "@/hooks/useMovies";
import { Box, Input, InputGroup, Popover, Portal } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDisclosure } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";

interface Props {
  searchInput: (inputText: string) => void;
}

const SearchComponent = ({ searchInput }: Props) => {
  const [inputText, setInputText] = useState("");
  const { movies, error, isLoading } = UseMovies();
  const { open, onOpen, onClose } = useDisclosure(); // to handle the opening and closing mechanism of the popover
  const hoverBg = useColorModeValue("gray.100", "gray.700"); // gives either color based on dark mode or light mode
  const inputRef = useRef<HTMLInputElement>(null);

  // constantly puts the focus on the search box as long as the user is still typing
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  });

  const movieSuggestions = movies
    .filter(
      (movie) =>
        movie.title.toLowerCase().includes(inputText.toLowerCase()) ||
        inputText.toLowerCase().includes(movie.title.toLowerCase())
    )
    .slice(0, 5);

  return (
    <Popover.Root
      onInteractOutside={() => onClose()}
      open={open}
      positioning={{ placement: "bottom-start" }}
    >
      <Popover.Trigger asChild>
        <InputGroup startElement={<BsSearch />}>
          <Input
            ref={inputRef}
            placeholder="Search movies..."
            variant="subtle"
            fontFamily="sans-serif"
            borderRadius="20px"
            value={inputText}
            onChange={(e) => {
              const value = e.target.value;
              setInputText(value);
              searchInput(value);
              value.trim() ? onOpen() : onClose();
            }}
          />
        </InputGroup>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Body>
              {movieSuggestions.map((movie) => (
                <Box
                  key={movie.id}
                  padding="8px"
                  _hover={{
                    bg: hoverBg,
                    cursor: "pointer",
                    fontWeight: "medium",
                  }}
                  onClick={() => {
                    setInputText(movie.title);
                    searchInput(movie.title);
                    onClose();
                    inputRef.current?.focus();
                  }}
                >
                  {movie.title}
                </Box>
              ))}
              {movieSuggestions.length === 0 && (
                <Box padding="8px" color="gray.500">
                  No matches found
                </Box>
              )}
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
};
export default SearchComponent;

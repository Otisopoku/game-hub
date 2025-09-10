import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "../src/components/created_components/NavBar";
import MovieGrid from "./components/created_components/MovieGrid";
import GenreList from "./components/created_components/GenreList";
import { useEffect, useState } from "react";
import { Genre } from "./hooks/useGenres";
import SortMoviesComponent from "./components/created_components/SortMoviesComponent";
import MovieHeading from "./components/created_components/MovieHeading";

function App() {
  const isLarge = useBreakpointValue({ base: false, lg: true });
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [sortBy, setSortBy] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [debounceSearchInput, setDebounceSearchInput] = useState("");

  useEffect(() => {
    // controls when to search after the user modifies their search query.
    const timeout = setTimeout(() => {
      setDebounceSearchInput(searchInput);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchInput]);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 1024px,
      }}
      templateColumns={{
        base: "1fr",
        lg: "150px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar searchInput={(inputText) => setSearchInput(inputText)} />
      </GridItem>
      {isLarge && (
        <GridItem area="aside" paddingX="15px">
          <GenreList
            onSelectGenre={(genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      )}

      <GridItem area="main">
        <MovieHeading genre={selectedGenre} />
        <SortMoviesComponent sortBy={(option) => setSortBy(option)} />
        <MovieGrid
          searchString={debounceSearchInput}
          selectedGenre={selectedGenre}
          sortOption={sortBy}
        />
      </GridItem>
    </Grid>
  );
}
export default App;

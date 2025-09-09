import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "../src/components/created_components/NavBar";
import MovieGrid from "./components/created_components/MovieGrid";
import GenreList from "./components/created_components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import SortMoviesComponent from "./components/created_components/SortMoviesComponent";

function App() {
  const isLarge = useBreakpointValue({ base: false, lg: true });
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [sortBy, setSortBy] = useState("");

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
        <NavBar />
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
        {isLarge && (
          <SortMoviesComponent sortBy={(option) => setSortBy(option)} />
        )}
        <MovieGrid selectedGenre={selectedGenre} sortOption={sortBy} />
      </GridItem>
    </Grid>
  );
}
export default App;

import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "../src/components/created_components/NavBar";
import MovieGrid from "./components/created_components/MovieGrid";
import GenreList from "./components/created_components/GenreList";

function App() {
  const isLarge = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 1024px,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {isLarge && (
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      )}
      <GridItem area="main">
        <MovieGrid />
      </GridItem>
    </Grid>
  );
}
export default App;

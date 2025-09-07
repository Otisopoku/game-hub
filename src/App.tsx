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

import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import NavBar from '../src/components/created_components/NavBar';



function App() {

  const isLarge = useBreakpointValue({base: false, lg: true})

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`, // 1024px,
    }}>
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      { isLarge && (
        <GridItem area='aside'>Aside</GridItem>)
      }
      <GridItem area='main'>Main</GridItem>
    </Grid>
  )
}
export default App

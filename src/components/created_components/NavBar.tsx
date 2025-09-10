import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/icons8-movies.gif";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchComponent from "./SearchComponent";
import { useColorModeValue } from "../ui/color-mode";

interface Props {
  searchInput: (inputText: string) => void;
}

const NavBar = ({ searchInput }: Props) => {
  return (
    <HStack padding="10px">
      <Box
        bg={useColorModeValue("transparent", "gray.800")}
        borderRadius="xl"
        padding="2"
      >
        <Image src={logo} width="100%" borderRadius="xl" />
      </Box>
      <SearchComponent searchInput={searchInput} />
      <ColorModeSwitch />
    </HStack> // horizontal stack for making the navigation bar
  );
};

export default NavBar;

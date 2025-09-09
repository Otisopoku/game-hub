import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchComponent from "./SearchComponent";
import { Movie } from "@/hooks/useMovies";

interface Props {
  searchInput: (inputText: string) => void;
}

const NavBar = ({ searchInput }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="50px" />
      <SearchComponent searchInput={searchInput} />
      <ColorModeSwitch />
    </HStack> // horizontal stack for making the navigation bar
  );
};

export default NavBar;

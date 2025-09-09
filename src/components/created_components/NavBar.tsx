import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchComponent from "./SearchComponent";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="50px" />
      <SearchComponent />
      <ColorModeSwitch />
    </HStack> // horizontal stack for making the navigation bar
  );
};

export default NavBar;

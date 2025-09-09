import { Input, InputElement, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { HiSearchCircle } from "react-icons/hi";

const SearchComponent = () => {
  return (
    <InputGroup startElement={<BsSearch />}>
      <Input
        placeholder="Search movies..."
        variant="subtle"
        fontFamily="sans-serif"
        borderRadius="20px"
      />
    </InputGroup>
  );
};

export default SearchComponent;

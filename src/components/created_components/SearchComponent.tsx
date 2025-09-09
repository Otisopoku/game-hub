import { Input, InputElement, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
  searchInput: (inputText: string) => void;
}

const SearchComponent = ({ searchInput }: Props) => {
  return (
    <InputGroup startElement={<BsSearch />}>
      <Input
        placeholder="Search movies..."
        variant="subtle"
        fontFamily="sans-serif"
        borderRadius="20px"
        onChange={(e) => {
          console.log("search prop type:", typeof searchInput);
          searchInput(e.target.value);
        }}
      />
    </InputGroup>
  );
};

export default SearchComponent;
